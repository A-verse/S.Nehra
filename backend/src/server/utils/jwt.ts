import jwt from "jsonwebtoken";
import ms from "ms";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "access_secret_fallback";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refresh_secret_fallback";

export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, ACCESS_SECRET);
  } catch (err) {
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, REFRESH_SECRET);
  } catch (err) {
    return null;
  }
};

export const getCookieOptions = (type: "access" | "refresh") => {
  const expiresIn = type === "access" ? "15m" : "7d";
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: ms(expiresIn),
    path: "/",
  };
};
// backend/src/server/utils/jwt.ts — getCookieOptions check karo
export function getCookieOptions(type: "access" | "refresh") {
  return {
    httpOnly: true, // JS se accessible nahi
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "strict" as const, // CSRF protection
    maxAge:
      type === "access"
        ? 15 * 60 * 1000 // 15 min
        : 7 * 24 * 60 * 60 * 1000, // 7 days
  };
}
