## Ary Journal – Architecture & Scaling Notes

### High‑Level Architecture

- **Client (Next.js)**
  - Renders landing, auth, and journal pages.
  - Talks to the backend 
  - Keeps minimal state: current entries and insights

- **API Backend (Express)**
  - Stateless HTTP API behind `/api/...`.
  - JWT auth with httpOnly cookie (`jwt`), validated by `protect` middleware.
  - Routes :
    - `auth` – signup, login.
    - `journal` – create entry, list entries, per‑entry analyze, aggregated insights.

- **Data Layer (PostgreSQL + Prisma)**
  - `User` and `JounrnalEntry` models.
  - Prisma client reused via a singleton to reduce connection overhead.

- **LLM Integration (Gemini)**
  - `analyzeText(text)` service encapsulates LLM calls.
  - Routes call this service only when explicitly requested (per‑entry "Analyze with AI").

---

### How to scale this to 100k users?

- **1. Scale the API horizontally**
  - Run **multiple stateless API instances** (Docker containers or serverless functions) behind a load balancer.
  - JWT cookies are self‑contained; any instance can handle any request.
  - Use a **connection‑pooled Postgres** (e.g. Neon) and ensure Prisma uses a reasonable pool size per instance.

- **2. Optimize database usage**
  - Add the right indexes:
    - `JounrnalEntry.userId` (already implicit via relation).
    - Optional composite index on `(userId, createdAt DESC)` to speed up per‑user feeds and insights.
  - Keep queries per request small:
    - Pagination for `/journal` (e.g. `take`/`skip` or cursor).
    - For insights, if entries grow huge, either:
      - Limit to a **time window** (last 3–6 months), or
      - Maintain a **materialized summary table** per user:
        - Update counts incrementally when a new entry or analysis is added.

- **3. Split concerns into services as traffic grows**
  - Keep a monolith for now; at higher scale:
    - Extract **“insights / analytics”** into a small service that:
      - Consumes events (entry_created, entry_analyzed) from a queue.
      - Updates per‑user aggregates in a dedicated table or Redis.
    - Extract **LLM worker service** that processes analysis jobs asynchronously.

- **4. Async and background work**
  - For 100k users, synchronous LLM calls can become a bottleneck.
  - Move `/journal/:id/analyze` to:
    - **Enqueue a job** (e.g. Redis, SQS) and immediately return `202 Accepted`.
    - A worker pulls jobs, calls Gemini, and updates the entry.
    - The frontend polls entry status or uses a lightweight “refresh” button.

- **5. Observability**
  - Add logging, metrics, and tracing:
    - Per‑route latency, DB query times, LLM latency.
    - Error rate for LLM and DB.
  - This is crucial at 100k users to spot hotspots before they become incidents.

---

### How would you reduce LLM cost?

**Goal:** keep Gemini usage cheap while still giving useful insights.

- **1. Don’t call the LLM on every save**
  - Current design already does this: users **explicitly click “Analyze with AI”** per entry.
  - For cost control:
    - Optionally **limit** free analyses per user per day (rate limiting by user ID).

- **2. Reuse analysis results**
  - Never re‑analyze the same text:
    - Once an entry has `emotion`, `keywords`, and `summary`, keep it and **disable the Analyze button**.
  - If the user edits an entry (future feature), only re‑analyze if the text actually changed.

- **3. Choose models and prompts wisely**
  - Use a **cheaper, fast model** (e.g. Gemini Flash) for journaling.
  - Keep prompts **short and structured**:
    - Prompt enforces a strict JSON shape, which is efficient.
  - Consider setting **max tokens** and temperature to reasonable defaults to avoid long rambling answers.

- **4. Aggregate with code, not the LLM**
  - All “insights” (top emotion, most used ambience, recent keywords) are computed by the backend from stored fields, **not** by the LLM.
  - This means you pay for LLM calls **only once per entry**, not per insights view.

---

### How would you cache repeated analysis?

**Goal:** avoid paying for the same LLM work more than once.

- **1. Persist results in the DB (already done)**
  - `JounrnalEntry` stores:
    - `emotion`
    - `keywords` (string array)
    - `summary`
  - The per‑entry **Analyze** endpoint:
    - Calls Gemini once.
    - Writes these fields back.
  - UI logic:
    - If an entry has `emotion` or `summary`, the Analyze button is disabled and shown as “Analyzed”.
  - This is effectively a **persistent cache** keyed by `entry.id`.

- **2. Optional hash‑based cache**
  - For future editing/duplicate entries:
    - Compute a **hash of the text** (e.g. SHA‑256) and store it on the entry.
    - Maintain a small `analysis_cache` table:
      - `text_hash`, `emotion`, `keywords`, `summary`.
    - On analyze:
      - If hash exists → reuse cached analysis.
      - Else → call LLM, store in both `analysis_cache` and the entry.

- **3. In‑memory / Redis layer (if traffic is high)**
  - For very hot entries or repeated views:
    - Cache `GET /journal/insights` responses in Redis keyed by `userId`, invalidate on:
      - New entry created.
      - Entry analyzed/updated.
  - This caches **aggregates**, not raw LLM responses, which is even more efficient.

---

### How would you protect sensitive journal data?

Journal entries are extremely sensitive. Protections should exist at multiple layers:

- **1. Transport security**
  - All traffic over **HTTPS** only (TLS termination at load balancer or reverse proxy).
  - No plain HTTP access in production.

- **2. Authentication & session**
  - Use **httpOnly, secure cookies** for JWT in production:
    - `httpOnly: true` – protects against XSS stealing tokens.
    - `secure: true` – only over HTTPS.
    - Consider `sameSite=strict` to reduce CSRF risk.
  - Keep JWT payload minimal (e.g. just `userId`), no sensitive data.

- **3. Authorization & isolation**
  - Every journal route filters by `userId` (`where: { userId: req.user.id }`).
  - Ensure no route ever exposes another user’s entries:
    - Double‑check all `:id` and `:userId` routes validate ownership.

- **4. Data at rest**
  - Use a managed Postgres with:
    - **Disk encryption** enabled.
    - Regular backups with secure storage and access controls.
  - Optionally encrypt especially sensitive columns (e.g. `text`, `summary`) at the application level:
    - Encrypt before storing (using per‑environment keys via KMS).
    - Decrypt on read for the authenticated user.

- **5. LLM privacy**
  - Avoid sending unnecessary metadata to the LLM provider:
    - Only send the bare `text` and a minimal prompt.
    - Strip personally identifiable info if possible (e.g. explicit names).
  - Review the Gemini data‑usage policy; ensure “no training on your data” options are enabled where available.

- **6. Access control & ops**
  - Principle of least privilege:
    - Backend has DB credentials with only the permissions it needs.
    - No direct DB access for frontend, ever.
  - Limit who can access production logs and databases.
  - Avoid logging full journal texts:
    - If logging is needed for debugging, truncate or redact.

- **7. Frontend hygiene**
  - Protect against XSS:
    - Never dangerously set inner HTML with entry content.
    - Escape text when rendering entries and summaries.
  - Rate‑limit auth and journaling endpoints to reduce abuse.

Taken together, these steps let you:
- Safely store and serve journal data for 100k+ users.
- Keep LLM costs in check.
- Cache analyses effectively.
- Preserve user privacy and trust.