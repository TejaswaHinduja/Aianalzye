import jwt from "jsonwebtoken";
import { prisma } from "../../prisma/index.js";
const secret = process.env.JWT_SECRET || "!23";
export async function protect(req, res, next) {
    const token = req.cookies?.jwt;
    if (!token) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    try {
        const decoded = jwt.verify(token, secret);
        if (!decoded || !decoded.id) {
            return res.status(400).json({ message: "Not authorized" });
        }
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(403).json({ message: "Token invalid" });
    }
}
//# sourceMappingURL=protect.js.map