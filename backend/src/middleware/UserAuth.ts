import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

/**
 * verifyUserToken - @async Function that verifies the User Tokens.
 *
 * @param req Express request
 * @param res Express response
 * @param next Epxress NextFunction - the function that should be called after
 *             successed token verification.
 * @returns void
 */
const verifyUserToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["user_auth_token"];

  if (!token) return res.status(401).json({ message: "Unauthorized!" });

  try {
    const decoded = jwt.verify(token, process.env.USER_JWT_KEY as string);
    req.userId = (decoded as JwtPayload).userId;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized!" });
  }
};

export default verifyUserToken;
