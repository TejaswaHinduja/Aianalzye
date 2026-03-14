"use client"

import Link from "next/link"

export default function Landing() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex flex-col">
      <header className="w-full border-b border-slate-800/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500/90 shadow-lg shadow-emerald-500/30" />
            <span className="text-lg font-semibold tracking-tight">Ary Journal</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="/auth/login"
              className="rounded-lg border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800/70 transition"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg bg-emerald-500 px-4 py-1.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
          <div className="flex-1 space-y-6">
            <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
              AI-powered journaling for your mood
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Capture your day.
              <br />
              <span className="text-emerald-400">Understand your emotions.</span>
            </h1>
            <p className="max-w-xl text-balance text-sm text-slate-300 md:text-base">
              Write short entries, let the system analyze emotion, extract keywords, and surface insights
              about your most common moods and ambiences over time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/auth/signup"
                className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/30"
              >
                Start journaling
              </Link>
              <Link
                href="/auth/login"
                className="rounded-lg border border-slate-700 px-5 py-2 text-sm text-slate-100 hover:bg-slate-800/70 transition"
              >
                I already have an account
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Simple, minimal UI
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                LLM-backed emotion analysis
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Insightful mood trends
              </span>
            </div>
          </div>

          <div className="mt-10 flex-1 md:mt-0">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-emerald-500/10">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-200">Today&apos;s journal</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                  Preview
                </span>
              </div>
              <div className="space-y-3 rounded-2xl bg-slate-950/60 p-4 text-xs text-slate-200">
                <p className="rounded-xl bg-slate-900/80 p-3 text-[11px] leading-relaxed text-slate-100">
                  I felt calm today after listening to the rain while studying. The ambience helped me
                  stay focused and present.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
                      Emotion: calm
                    </span>
                    <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-200">
                      forest ambience
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[10px] text-slate-300">
                    <span className="rounded-full bg-slate-800/80 px-2 py-0.5">rain</span>
                    <span className="rounded-full bg-slate-800/80 px-2 py-0.5">nature</span>
                    <span className="rounded-full bg-slate-800/80 px-2 py-0.5">focus</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-[10px] text-slate-300">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-3">
                  <p className="text-xs font-semibold text-slate-100">Total entries</p>
                  <p className="mt-1 text-2xl font-semibold text-emerald-400">8</p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-3">
                  <p className="text-xs font-semibold text-slate-100">Top emotion</p>
                  <p className="mt-1 text-sm font-medium text-emerald-300">calm</p>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-3">
                  <p className="text-xs font-semibold text-slate-100">Fav ambience</p>
                  <p className="mt-1 text-sm font-medium text-emerald-300">forest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/60 py-4 text-center text-[11px] text-slate-500">
        Built for mindful journaling — connect, reflect, and grow.
      </footer>
    </main>
  )
}