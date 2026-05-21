import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import prisma from "../config/prisma";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  // Cookie se token lo, ya Authorization header se
  const token = req.cookies.accessToken || 
    req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const decoded = verifyAccessToken(token) as any;
  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { id: true, email: true, role: true, name: true },
  });

  if (!user) {
    return res.status(401).json({ message: "User no longer exists" });
  }

  req.user = user;
  next();
};

export const authorize = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};