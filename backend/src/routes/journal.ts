import { Router } from "express"
import { prisma } from "../../prisma/index.js"
import type { JounrnalEntry } from "../../generated/prisma/client.js"
import { protect, type AuthRequest } from "../middleware/protect.js"
import {analyzeText }from "../services/services.js"

const router = Router()

router.post("/journal", protect, async (req: AuthRequest, res) => {
  const { ambience, text } = req.body as {
    ambience?: string
    text?: string
  }

  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" })
  }

  if (!text) {
    return res.status(400).json({ message: "Text is required" })
  }

  const entry = await prisma.jounrnalEntry.create({
    data: {
      userId: req.user.id,
      ambience: ambience ?? null,
      text,
    },
  })

  return res.status(201).json(entry)
})

router.get("/journal", protect, async (req: AuthRequest, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" })
  }

  const entries = await prisma.jounrnalEntry.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: "desc" },
  })

  return res.json(entries)
})

// Optional: keep a userId-based route, but it's not used by the frontend anymore.
router.get("/journal/:userId", protect, async (req: AuthRequest, res) => {
  const { userId } = req.params

  if (!req.user || req.user.id !== userId) {
    return res.status(401).json({ message: "Not authorized" })
  }

  const entries = await prisma.jounrnalEntry.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  })

  return res.json(entries)
})

router.post("/journal/analyze", async (req, res) => {
  const { text } = req.body as { text?: string | string[] }

  const actualText = Array.isArray(text) ? text.join(" ") : text

  if (!actualText) {
    return res.status(400).json({ message: "Text is required" })
  }

  const analysis = await analyzeText(actualText)

  return res.json(analysis)
})

router.post("/journal/:id/analyze", protect, async (req: AuthRequest, res) => {
  const { id } = req.params

  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" })
  }

  const entry = await prisma.jounrnalEntry.findUnique({
    where: { id: id as string },
  })

  if (!entry || entry.userId !== req.user.id) {
    return res.status(404).json({ message: "Entry not found" })
  }

  const analysis = await analyzeText(entry.text)

  const updated = await prisma.jounrnalEntry.update({
    where: { id: id as string },
    data: {
      emotion: analysis.emotion || null,
      keywords: analysis.keywords ?? [],
      summary: analysis.summary || null,
    },
  })

  return res.json(updated)
})

router.get("/journal/insights", protect, async (req: AuthRequest, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized" })
  }

  const entries = await prisma.jounrnalEntry.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: "desc" },
  })

  const insights = buildInsights(entries)

  return res.json(insights)
})


function buildInsights(entries: JounrnalEntry[]) {
  const totalEntries = entries.length

  const emotionCount = new Map<string, number>()
  const ambienceCount = new Map<string, number>()
  const recentKeywords: string[] = []

  for (const entry of entries) {
    if (entry.emotion) {
      emotionCount.set(entry.emotion, (emotionCount.get(entry.emotion) ?? 0) + 1)
    }

    if (entry.ambience) {
      ambienceCount.set(entry.ambience, (ambienceCount.get(entry.ambience) ?? 0) + 1)
    }

    for (const kw of entry.keywords ?? []) {
      if (!recentKeywords.includes(kw)) {
        recentKeywords.push(kw)
      }
    }
  }

  const topEmotion = maxKey(emotionCount)
  const mostUsedAmbience = maxKey(ambienceCount)
  console.log(topEmotion,totalEntries,mostUsedAmbience,recentKeywords)

  return {
    totalEntries,
    topEmotion,
    mostUsedAmbience,
    recentKeywords: recentKeywords.slice(0, 10),
  }
}

function maxKey(map: Map<string, number>): string | null {
  let bestKey: string | null = null
  let bestValue = -1

  for (const [key, value] of map.entries()) {
    if (value > bestValue) {
      bestValue = value
      bestKey = key
    }
  }

  return bestKey
}

export default router

