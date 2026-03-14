import type { Request, Response, NextFunction } from "express";
import type { User } from "../../generated/prisma/client.js";
export interface AuthRequest extends Request {
    user?: User;
}
export declare function protect(req: AuthRequest, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=protect.d.ts.map