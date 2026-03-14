import jwt from "jsonwebtoken"
import type { Response } from "express"

export function generateJWT(id: string, res: Response) {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error("JWT_SECRET missing")

  const token = jwt.sign({ id }, secret, { expiresIn: "7d" })

  const isProd =
    process.env.NODE_ENV === "production" || process.env.VERCEL === "1"

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  })

  return token
}