// backend/src/lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "S.Nehra <noreply@yourdomain.com>"; // apna domain daalo

// ── OTP Email ─────────────────────────────────────────
export async function sendOtpEmail(to: string, otp: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Verify your email — S.Nehra",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px">
        <h2 style="margin:0 0 8px">Verify your email</h2>
        <p style="color:#666;margin:0 0 24px">Use the code below to complete your sign up.</p>
        <div style="background:#f4f4f5;border-radius:12px;padding:24px;text-align:center">
          <span style="font-size:36px;font-weight:700;letter-spacing:8px;color:#09090b">${otp}</span>
        </div>
        <p style="color:#999;font-size:13px;margin:16px 0 0">
          This code expires in 10 minutes. Do not share it with anyone.
        </p>
      </div>
    `,
  });
}

// ── Welcome Email ──────────────────────────────────────
export async function sendWelcomeEmail(to: string, name: string) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: "Welcome to S.Nehra 🎉",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px">
        <h2 style="margin:0 0 8px">Welcome, ${name}!</h2>
        <p style="color:#666;margin:0 0 24px">
          Your account is all set. Start exploring your dashboard.
        </p>
        <a href="https://yourdomain.com/dashboard"
           style="display:inline-block;background:#09090b;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-size:14px">
          Go to Dashboard
        </a>
        <p style="color:#999;font-size:13px;margin:24px 0 0">
          If you didn't create this account, ignore this email.
        </p>
      </div>
    `,
  });
}
