import jwt from "jsonwebtoken";
export function generateJWT(id, res) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET missing");
    }
    const token = jwt.sign({ id }, secret, { expiresIn: "7d" });
    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return token;
}
//# sourceMappingURL=jwt.js.map