import jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"
import type { User } from "../../generated/prisma/client.js"
import { prisma } from "../../prisma/index.js"

const secret = process.env.JWT_SECRET || "!23"

export interface AuthRequest extends Request {
  user?: User
}

export async function protect(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.jwt

  if (!token) {
    return res.status(400).json({ message: "Invalid credentials" })
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload & { id?: string }

    if (!decoded || !decoded.id) {
      return res.status(400).json({ message: "Not authorized" })
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    })

    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    req.user = user
    return next()
  } catch (error) {
    return res.status(403).json({ message: "Token invalid" })
  }
}