## Ary Journal – README

### Overview

Ary Journal is a minimal full‑stack journaling app with:
- **Backend**: Node.js, Express, Prisma, PostgreSQL, JWT auth, Gemini‑based LLM analysis.
- **Frontend**: Next.js App Router, React, Tailwind‑style UI, `react-hook-form`.

Core features:
- Cookie‑based signup/login.
- Create journal entries with ambience (forest, rain, etc.).
- Per‑entry **“Analyze with AI”** to derive emotion, keywords, and summary.
- **Insights card** that aggregates:
  - Total entries
  - Top emotion
  - Most used ambience
  - Recent keywords.

### Tech Stack

- **Backend**
  - Node.js + Express
  - Prisma ORM + PostgreSQL (Neon)
  - JWT auth with httpOnly cookie
  - Google Gemini (via `@google/genai`) for analysis
- **Frontend**
  - Next.js 16 (App Router)
  - React 19
  - `react-hook-form` for forms
  - Utility‑first styling (Tailwind‑style classes)

### Local Development

#### Prerequisites

- Node 20+
- PostgreSQL database (or Neon connection string)
- Google Gemini API key

#### 1. Backend setup

```bash
cd backend
npm install
```

Create `.env` in `backend`:

```bash
NODE_ENV=development
JWT_SECRET="your-jwt-secret"
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require"
GEMINI_API_KEY="your-gemini-key"
```

Run Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

Start backend:

```bash
npm run dev
# Express on http://localhost:4000
```

#### 2. Frontend setup

```bash
cd frontend
npm install
```

Create `.env` in `frontend`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

Run Next.js:

```bash
npm run dev
# Frontend on http://localhost:3000
```

### Main Endpoints (Backend)

- `POST /api/auth/signup` – email + password, sets `jwt` cookie.
- `POST /api/auth/login` – email + password, sets `jwt` cookie.
- `POST /api/journal` – protected, create entry (ambience, text).
- `GET /api/journal` – protected, list current user entries.
- `POST /api/journal/:id/analyze` – protected, run LLM on entry text, store emotion/keywords/summary.
- `GET /api/journal/insights` – protected, aggregate insights for current user.

### Frontend Pages

- `/` – Landing page with hero + preview.
- `/auth/signup` – Signup form.
- `/auth/login` – Login form.
- `/journal` – Main journaling UI:
  - Entry composer.
  - Insights card + overlay.
  - Recent entries list + per‑entry “Analyze with AI”.

### Running Tests / Lint

The project currently relies on TypeScript and ESLint configuration from Next.js; there are no custom tests. You can run:

```bash
cd frontend && npm run lint
```

Prisma will validate the schema when you generate the client:

```bash
cd backend && npx prisma generate
```
