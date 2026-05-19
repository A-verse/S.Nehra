// components/stub.tsx
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

interface StubAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface StubProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  eyebrow?: string;
  emptyTitle?: string;
  emptyDesc?: string;
  action?: StubAction;
  state?: "idle" | "loading" | "error";
  errorMessage?: string;
}

export function Stub({
  title,
  desc,
  icon: Icon,
  eyebrow = "Module",
  emptyTitle = "Nothing here yet",
  emptyDesc = "This screen is ready for content. Wire it up to your backend or pass me data and I'll bring it to life.",
  action,
  state = "idle",
  errorMessage = "Something went wrong. Please try again.",
}: StubProps) {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <Reveal>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-3 font-display text-display-md text-ink">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{desc}</p>
      </Reveal>

      {/* Body */}
      <Reveal delay={0.1}>
        <div
          role="status"
          aria-live="polite"
          aria-label={state === "loading" ? "Loading..." : emptyTitle}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-[24px] border border-dashed border-border bg-surface px-8 py-20 text-center"
        >
          {state === "loading" ? (
            <LoadingState />
          ) : state === "error" ? (
            <ErrorState message={errorMessage} action={action} />
          ) : (
            <IdleState Icon={Icon} emptyTitle={emptyTitle} emptyDesc={emptyDesc} action={action} />
          )}
        </div>
      </Reveal>
    </div>
  );
}

// ── Sub-states ───────────────────────────────────────────

function LoadingState() {
  return (
    <>
      <div className="h-14 w-14 animate-pulse rounded-2xl bg-muted" />
      <div className="flex flex-col items-center gap-2">
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
        <div className="h-3 w-64 animate-pulse rounded bg-muted" />
      </div>
    </>
  );
}

function ErrorState({ message, action }: { message: string; action?: StubAction }) {
  return (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        {/* inline SVG — no extra import needed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h2 className="font-display text-2xl text-ink">Something went wrong</h2>
      <p className="max-w-md text-sm text-muted-foreground">{message}</p>
      {action && <StubButton action={action} />}
    </>
  );
}

function IdleState({
  Icon,
  emptyTitle,
  emptyDesc,
  action,
}: {
  Icon: LucideIcon;
  emptyTitle: string;
  emptyDesc: string;
  action?: StubAction;
}) {
  return (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-ink">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="font-display text-2xl text-ink">{emptyTitle}</h2>
      <p className="max-w-md text-sm text-muted-foreground">{emptyDesc}</p>
      {action && <StubButton action={action} />}
    </>
  );
}

function StubButton({ action }: { action: StubAction }) {
  if (action.href) {
    return (
      <a
        href={action.href}
        className="mt-2 rounded-[14px] bg-ink px-6 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
      >
        {action.label}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={action.onClick}
      className="mt-2 rounded-[14px] bg-ink px-6 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
    >
      {action.label}
    </button>
  );
}
