// backend/src/lib/otp.ts
import crypto from "crypto";

// In-memory store (production mein Redis use karo)
const otpStore = new Map<string, { otp: string; expiresAt: number }>();

export function generateOtp(): string {
  return crypto.randomInt(100_000, 999_999).toString();
}

export function saveOtp(email: string, otp: string) {
  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 min
  });
}

export function verifyOtp(email: string, otp: string): boolean {
  const record = otpStore.get(email);
  if (!record) return false;
  if (Date.now() > record.expiresAt) {
    otpStore.delete(email);
    return false;
  }
  if (record.otp !== otp) return false;
  otpStore.delete(email); // one-time use
  return true;
}
