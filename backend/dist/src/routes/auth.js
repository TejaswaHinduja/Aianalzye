import { Router } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/index.js";
import { generateJWT } from "../middleware/jwt.js";
const router = Router();
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email,
            password: hashed,
        },
    });
    generateJWT(user.id, res);
    return res.status(201).json({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
    });
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    generateJWT(user.id, res);
    return res.json({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        message: "logged in"
    });
});
export default router;
//# sourceMappingURL=auth.js.map