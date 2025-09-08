import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      adminId: string;
    }
  }
}

/**
 * verifyUserToken - @async Function that verifies the Admin Tokens.
 *
 * @param req Express request
 * @param res Express response
 * @param next Epxress NextFunction - the function that should be called after
 *             successed token verification.
 * @returns void
 */
const verifyAdminToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["admin_auth_token"];

  if (!token) return res.status(401).json({ message: "Unauthorized Access!" });

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_JWT_KEY as string);
    req.adminId = (decoded as JwtPayload).adminId;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized!" });
  }
};

export default verifyAdminToken;
