import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import journalRoutes from "./routes/journal.js"

dotenv.config()

const app = express()

app.use(cors({ origin: ["http://localhost:4000","https://aianalzye-virid.vercel.app"], 
  
  credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api", journalRoutes)

const port = process.env.PORT ? Number(process.env.PORT) : 4000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app

