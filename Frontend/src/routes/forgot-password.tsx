import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell, AuthField } from "@/components/auth/auth-shell";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — S.Nehra" }] }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Reset your password."
      subtitle="Enter your email and we'll send a secure recovery link."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-ink hover:text-gold">
            Back to sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-[14px] bg-muted p-6 text-center">
          <p className="text-sm text-ink">
            Check your inbox — we've sent a reset link to{" "}
            <strong>{email}</strong> if that account exists.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Didn't receive it? Email us at info@snehrasolutions.com
          </p>
          <Link
            to="/login"
            className="mt-4 inline-block text-sm font-medium text-ink hover:text-gold"
          >
            Back to sign in
          </Link>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <AuthField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[14px] bg-ink px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-ink/90 hover:shadow-gold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send recovery link"}
          </button>
        </form>
      )}
    </AuthShell>
  );
}