"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { setToken } from "@/lib/auth"

type SignupFormValues = {
  email: string
  password: string
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>()

  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (data: SignupFormValues) => {
    setServerError(null)
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.message ?? "Sign up failed")

      if (body.token) setToken(body.token)
      window.location.href = "/journal"
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Sign up failed")
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-emerald-500/10">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-2xl bg-emerald-500/90 shadow-lg shadow-emerald-500/40" />
          <h1 className="text-xl font-semibold tracking-tight">Create your space</h1>
          <p className="mt-1 text-xs text-slate-400">
            Sign up to start tracking your emotions and ambiences.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-200">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-200">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-2"
              placeholder="At least 6 characters"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-[11px] text-red-400">{errors.password.message}</p>
            )}
          </div>

          {serverError && (
            <p className="text-[11px] text-red-400 bg-red-950/40 border border-red-900 rounded-lg px-3 py-2">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-emerald-400 hover:underline">
            Log in
          </Link>
        </p>

        <p className="mt-6 text-center text-[10px] text-slate-500">
          We use a simple cookie-based session. Your journal content stays on the backend.
        </p>
      </div>
    </main>
  )
}

