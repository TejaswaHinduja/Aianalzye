import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import journalRoutes from "./routes/journal.js"

dotenv.config()

const app = express()

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:4000",
  "http://127.0.0.1:3000",
  "https://aianalzye.vercel.app",
  "https://aianalzye-virid.vercel.app",
  process.env.FRONTEND_ORIGIN,
].filter(Boolean) as string[]

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      cb(null, false)
    },
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api", journalRoutes)

const port = process.env.PORT ? Number(process.env.PORT) : 4000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app

