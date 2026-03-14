"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

type JournalFormValues = {
  ambience: string
  text: string
}

type JournalEntry = {
  id: string
  userId: string
  ambience: string | null
  text: string
  emotion: string | null
  keywords: string[]
  summary: string | null
  createdAt: string
}

type Insights = {
  totalEntries: number
  topEmotion: string | null
  mostUsedAmbience: string | null
  recentKeywords: string[]
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000"

export default function JournalPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<JournalFormValues>({
    defaultValues: {
      ambience: "forest",
      text: "",
    },
  })

  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [insights, setInsights] = useState<Insights | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [analyzingId, setAnalyzingId] = useState<string | null>(null)
  const [showInsightsDetail, setShowInsightsDetail] = useState(false)

  useEffect(() => {
    void loadEntriesAndInsights(setEntries, setInsights, setError)
  }, [])

  const onSubmit = async (data: JournalFormValues) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/journal`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ambience: data.ambience,
          text: data.text,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message ?? "Failed to create entry")
      }

      reset({ ...data, text: "" })
      void loadEntriesAndInsights(setEntries, setInsights, setError)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create entry")
    }
  }

  const handleAnalyzeEntry = async (id: string) => {
    setError(null)
    try {
      setAnalyzingId(id)
      const res = await fetch(`${API_BASE}/api/journal/${id}/analyze`, {
        method: "POST",
        credentials: "include",
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message ?? "Failed to analyze entry")
      }

      const updated = (await res.json()) as JournalEntry

      setEntries((prev) =>
        prev.map((entry) => (entry.id === updated.id ? updated : entry))
      )

      void loadEntriesAndInsights(setEntries, setInsights, setError)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze entry")
    } finally {
      setAnalyzingId(null)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500/90 shadow-lg shadow-emerald-500/30" />
            <div>
              <p className="text-sm font-semibold">Ary Journal</p>
              <p className="text-[11px] text-slate-400">Today&apos;s reflections</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-6 md:flex-row md:py-10">
        <section className="flex-1 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">New entry</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[160px] space-y-1.5">
                <label className="block text-xs font-medium text-slate-200">
                  Ambience
                </label>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                  {...register("ambience")}
                >
                  <option value="forest">Forest</option>
                  <option value="rain">Rain</option>
                  <option value="cafe">Cafe</option>
                  <option value="lofi">Lofi</option>
                  <option value="ocean">Ocean</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-200">
                How are you feeling?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                placeholder="I felt calm today after listening to the rain..."
                {...register("text", { required: true })}
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-400 bg-red-950/40 border border-red-900 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Saving..." : "Save entry"}
            </button>
          </form>
        </section>

        <section className="flex-1 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">Insights</h2>

          <button
            type="button"
            onClick={() => setShowInsightsDetail(true)}
            className="w-full text-left rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2 text-xs hover:border-emerald-500/60 hover:bg-slate-900 transition"
          >
            <p className="text-[11px] font-medium text-slate-200">Quick glance</p>
            <p className="text-[11px] text-slate-300">
              Top emotion:{" "}
              <span className="font-semibold text-emerald-300">
                {insights?.topEmotion ?? "-"}
              </span>
            </p>
            <p className="text-[11px] text-slate-300">
              Most used ambience:{" "}
              <span className="font-semibold text-emerald-300">
                {insights?.mostUsedAmbience ?? "-"}
              </span>
            </p>
            <p className="text-[11px] text-slate-300">
              Main keywords:{" "}
              <span className="font-semibold text-emerald-300">
                {insights && insights.recentKeywords.length > 0
                  ? insights.recentKeywords.slice(0, 3).join(", ")
                  : "-"}
              </span>
            </p>
            {!insights && (
              <p className="mt-1 text-[10px] text-slate-500">
                Save a few entries, then tap to see full insights.
              </p>
            )}
          </button>

          <h2 className="pt-2 text-sm font-semibold text-slate-100">Recent entries</h2>

          <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
            {entries.length === 0 ? (
              <p className="text-[11px] text-slate-400">
                Your recent reflections will appear here after you save an entry.
              </p>
            ) : (
              entries.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs"
                >
                  <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span>
                      {new Date(entry.createdAt).toLocaleString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                        day: "2-digit",
                        month: "short",
                      })}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {entry.emotion && (
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                          {entry.emotion}
                        </span>
                      )}
                      {entry.ambience && (
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                          {entry.ambience}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-100">{entry.text}</p>
                  {entry.keywords?.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1 text-[10px] text-slate-300">
                      {entry.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-slate-950/80 px-2 py-0.5"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleAnalyzeEntry(entry.id)}
                    disabled={analyzingId === entry.id || !!entry.emotion || !!entry.summary}
                    className="mt-2 rounded-lg border border-emerald-500/60 px-3 py-1 text-[10px] font-medium text-emerald-300 hover:bg-emerald-500/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {entry.emotion || entry.summary
                      ? "Analyzed"
                      : analyzingId === entry.id
                      ? "Analyzing..."
                      : "Analyze with AI"}
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </div>

      {showInsightsDetail && insights && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/95 p-5 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-50">Your insights</h3>
              <button
                type="button"
                onClick={() => setShowInsightsDetail(false)}
                className="text-[11px] text-slate-400 hover:text-slate-200"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-300">Total entries</p>
                <p className="mt-1 text-xl font-semibold text-emerald-400">
                  {insights.totalEntries}
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-300">Top emotion</p>
                <p className="mt-1 text-sm font-medium text-emerald-300">
                  {insights.topEmotion ?? "-"}
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/80 p-3">
                <p className="text-[11px] text-slate-300">Most used ambience</p>
                <p className="mt-1 text-sm font-medium text-emerald-300">
                  {insights.mostUsedAmbience ?? "-"}
                </p>
              </div>
            </div>
            {insights.recentKeywords.length > 0 && (
              <div className="mt-4">
                <p className="mb-1 text-[11px] text-slate-300">Recent keywords</p>
                <div className="flex flex-wrap gap-1.5">
                  {insights.recentKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-slate-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}


async function loadEntriesAndInsights(
  setEntries: (e: JournalEntry[]) => void,
  setInsights: (i: Insights | null) => void,
  setError: (msg: string | null) => void
) {
  setError(null)
  try {
    const [entriesRes, insightsRes] = await Promise.all([
      fetch(`${API_BASE}/api/journal`, {
        credentials: "include",
      }),
      fetch(`${API_BASE}/api/journal/insights`, {
        credentials: "include",
      }),
    ])

    if (entriesRes.ok) {
      const entriesData = (await entriesRes.json()) as JournalEntry[]
      setEntries(entriesData)
    }

    if (insightsRes.ok) {
      const insightsData = (await insightsRes.json()) as Insights
      setInsights(insightsData)
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to load data")
  }
}

