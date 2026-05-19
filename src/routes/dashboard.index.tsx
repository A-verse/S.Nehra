import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  Bell,
  ChevronRight,
  Play,
  BookOpen,
  Briefcase,
  Award,
  MessageSquare,
  Star,
  BarChart2,
  ArrowUp,
  ArrowDown,
  Flame,
  Coffee,
  Users,
  FileText,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

// ─── Mock Data ────────────────────────────────────────────────────────────────

const stats = [
  {
    label: "Placement Readiness",
    value: "82",
    unit: "/100",
    delta: "+4 this week",
    up: true,
    icon: Target,
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    label: "Modules Done",
    value: "14",
    unit: "/ 22",
    delta: "2 due this week",
    up: true,
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Mock Interviews",
    value: "9",
    unit: "sessions",
    delta: "Avg 8.2 / 10",
    up: true,
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Applications",
    value: "23",
    unit: "sent",
    delta: "5 in pipeline",
    up: true,
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const pipeline = [
  {
    company: "Postman",
    role: "Account Executive",
    stage: "Round 2",
    date: "Thu, 14 Aug",
    hot: true,
    logo: "PO",
  },
  {
    company: "Freshworks",
    role: "SDR",
    stage: "HR Screen",
    date: "Mon, 18 Aug",
    hot: false,
    logo: "FW",
  },
  { company: "Razorpay", role: "BDR", stage: "Applied", date: "Waiting", hot: false, logo: "RZ" },
  {
    company: "Zoho",
    role: "Inside Sales",
    stage: "Assessment",
    date: "Fri, 15 Aug",
    hot: false,
    logo: "ZO",
  },
];

const modules = [
  { title: "Objection Handling Masterclass", duration: "28 min", progress: 0, tag: "Sales" },
  { title: "Cold Email Playbook Vol. 2", duration: "19 min", progress: 60, tag: "Outbound" },
  { title: "Demo & Discovery Framework", duration: "35 min", progress: 100, tag: "Sales" },
];

const activity = [
  {
    icon: MessageSquare,
    text: "Mock interview scored 8.4",
    sub: "Razorpay SDR · Round 1",
    time: "2h ago",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: BookOpen,
    text: "Module completed",
    sub: "Outbound Email Playbook",
    time: "Yesterday",
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: Briefcase,
    text: "Application advanced",
    sub: "Freshworks → Round 2",
    time: "Yesterday",
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    icon: Star,
    text: "Mentor session",
    sub: "Notes from Priya available",
    time: "2d ago",
    color: "text-gold bg-gold/10",
  },
  {
    icon: Award,
    text: "Badge earned",
    sub: "Cold Calling Certified",
    time: "3d ago",
    color: "text-orange-500 bg-orange-500/10",
  },
];

const readinessBars = [
  { label: "Training completion", value: 64, color: "bg-gold" },
  { label: "Interview performance", value: 82, color: "bg-emerald-500" },
  { label: "Resume & portfolio", value: 90, color: "bg-blue-500" },
  { label: "Application activity", value: 75, color: "bg-purple-500" },
];

const tasks = [
  { text: "Submit capstone outline", due: "Tomorrow, 6 PM", urgent: true },
  { text: "Prep for Postman screen", due: "Thu, 11 AM", urgent: true },
  { text: "Complete objection drill", due: "Friday", urgent: false },
  { text: "Review mentor session notes", due: "This week", urgent: false },
];

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const activityGrid = [3, 5, 2, 7, 4, 1, 0]; // mock activity levels

// ─── Component ────────────────────────────────────────────────────────────────

function Overview() {
  const [activeTab, setActiveTab] = useState<"activity" | "pipeline">("activity");

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* ── Hero header ── */}
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-8 text-primary-foreground lg:px-10 lg:py-10">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-1/3 h-48 w-48 rounded-full bg-gold/5 blur-2xl" />

          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  <Flame className="h-3 w-3" /> Week 7 streak
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40">
                  Cohort 14
                </span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-medium text-primary-foreground lg:text-4xl">
                Good morning, <span className="italic text-gold">Jane.</span>
              </h1>
              <p className="mt-2 text-sm text-primary-foreground/60">
                You're on track — 3 deliverables this week and a Round 2 coming up Thursday.
              </p>
            </div>

            {/* Weekly activity strip */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/40">
                This week
              </span>
              <div className="flex items-end gap-1.5">
                {activityGrid.map((level, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-5 rounded-sm bg-gold/20 transition-all"
                      style={{
                        height: `${Math.max(4, level * 6)}px`,
                        opacity: level === 0 ? 0.2 : 0.4 + level * 0.08,
                      }}
                    />
                    <span className="text-[9px] text-primary-foreground/30">{weekDays[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick action pills */}
          <div className="relative mt-8 flex flex-wrap gap-2">
            {[
              { label: "Prep for Postman", icon: Zap, to: "/dashboard/interviews" },
              { label: "Continue module", icon: Play, to: "/dashboard/training" },
              { label: "View applications", icon: Briefcase, to: "/dashboard/jobs" },
            ].map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-primary-foreground/80 transition-all hover:border-gold/30 hover:bg-white/10 hover:text-primary-foreground"
              >
                <action.icon className="h-3.5 w-3.5 text-gold" />
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Stats row ── */}
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <RevealItem
            key={s.label}
            className="group relative overflow-hidden rounded-[22px] border border-[oklch(0_0_0/0.06)] bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <div className="flex items-start justify-between">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.bg}`}>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-500">
                <ArrowUp className="h-3 w-3" />
                {s.up ? "↑" : "↓"}
              </div>
            </div>
            <div className="mt-5 flex items-end gap-1">
              <span className="font-display text-4xl text-ink">{s.value}</span>
              <span className="mb-1 text-sm text-muted-foreground">{s.unit}</span>
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {s.label}
            </div>
            <div className="mt-2 text-[10px] text-muted-foreground/60">{s.delta}</div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* ── Main grid ── */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ── Left 2/3 ── */}
        <div className="space-y-6 lg:col-span-2">
          {/* Readiness card */}
          <Reveal>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface p-8 shadow-soft">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl text-ink">Placement Readiness</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Live composite — training, mocks, pipeline.
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-display text-5xl text-gold">82</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    / 100
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {readinessBars.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{b.label}</span>
                      <span className="font-medium text-ink">{b.value}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${b.color} transition-all duration-700`}
                        style={{ width: `${b.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Score context */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
                <TrendingUp className="h-4 w-4 shrink-0 text-emerald-500" />
                <p className="text-xs text-muted-foreground">
                  You're in the <span className="font-medium text-ink">top 23%</span> of Cohort 14.
                  Complete the objection drill to jump to top 15%.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Activity / Pipeline tabs */}
          <Reveal delay={0.05}>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface shadow-soft">
              {/* Tab header */}
              <div className="flex items-center justify-between border-b border-[oklch(0_0_0/0.06)] px-8 pt-6">
                <div className="flex gap-1">
                  {(["activity", "pipeline"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={[
                        "rounded-[10px] px-4 py-2 text-sm font-medium capitalize transition-colors",
                        activeTab === tab
                          ? "bg-ink text-primary-foreground"
                          : "text-muted-foreground hover:text-ink",
                      ].join(" ")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <Link
                  to={activeTab === "activity" ? "/dashboard/training" : "/dashboard/jobs"}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-ink"
                >
                  View all <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="p-8">
                {activeTab === "activity" ? (
                  <ul className="space-y-1 divide-y divide-[oklch(0_0_0/0.04)]">
                    {activity.map((a, i) => (
                      <li key={i} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${a.color.split(" ")[1]}`}
                        >
                          <a.icon className={`h-4 w-4 ${a.color.split(" ")[0]}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-ink">{a.text}</div>
                          <div className="text-xs text-muted-foreground">{a.sub}</div>
                        </div>
                        <div className="shrink-0 text-xs text-muted-foreground">{a.time}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-3">
                    {pipeline.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 rounded-[14px] border border-[oklch(0_0_0/0.06)] bg-background px-4 py-3.5 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-xs font-semibold text-primary-foreground">
                          {p.logo}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-ink">{p.company}</span>
                            {p.hot && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium text-gold">
                                <Flame className="h-2.5 w-2.5" /> Hot
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{p.role}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-ink">{p.stage}</div>
                          <div className="text-[10px] text-muted-foreground">{p.date}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>

          {/* Continue learning */}
          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface p-8 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl text-ink">Continue Learning</h2>
                <Link
                  to="/dashboard/training"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-ink"
                >
                  All modules <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                {modules.map((m, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 rounded-[14px] border border-[oklch(0_0_0/0.06)] bg-background p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-ink">
                      {m.progress === 100 ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 group-hover:text-emerald-400" />
                      ) : (
                        <Play className="h-4 w-4 text-muted-foreground group-hover:text-gold" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ink">{m.title}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                          {m.tag}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-3">
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-gold transition-all"
                            style={{ width: `${m.progress}%` }}
                          />
                        </div>
                        <span className="shrink-0 text-[10px] text-muted-foreground">
                          {m.duration}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Right 1/3 ── */}
        <div className="space-y-6">
          {/* Next interview */}
          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-[24px] bg-ink text-primary-foreground shadow-soft">
              <div className="p-8">
                <div className="eyebrow text-primary-foreground/50">Next Interview</div>
                <div className="mt-5 flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span className="text-sm text-primary-foreground/80">Thu, 14 Aug · 11:00 AM</span>
                </div>
                <h3 className="mt-3 font-display text-3xl">Postman</h3>
                <p className="mt-1 text-sm text-primary-foreground/50">
                  Account Executive (entry) · Round 2
                </p>

                {/* Prep checklist */}
                <div className="mt-6 space-y-2.5">
                  {[
                    { text: "Research company", done: true },
                    { text: "Practice STAR stories", done: true },
                    { text: "Review product demo", done: false },
                    { text: "Prep questions for interviewer", done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div
                        className={[
                          "flex h-4 w-4 items-center justify-center rounded",
                          item.done ? "bg-gold" : "border border-white/20",
                        ].join(" ")}
                      >
                        {item.done && <CheckCircle2 className="h-3 w-3 text-ink" />}
                      </div>
                      <span
                        className={`text-xs ${item.done ? "text-primary-foreground/40 line-through" : "text-primary-foreground/70"}`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 p-4">
                <button className="w-full rounded-[12px] bg-gold px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold/90">
                  Prepare with mentor
                </button>
              </div>
            </div>
          </Reveal>

          {/* This week tasks */}
          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface p-8 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl text-ink">This Week</h2>
                <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-[10px] font-medium text-destructive">
                  2 urgent
                </span>
              </div>
              <ul className="mt-6 space-y-3.5">
                {tasks.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={[
                        "mt-0.5 h-2 w-2 shrink-0 rounded-full",
                        t.urgent ? "bg-destructive" : "bg-gold/60",
                      ].join(" ")}
                    />
                    <div>
                      <div className="text-sm text-ink">{t.text}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{t.due}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-[12px] border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-ink">
                View all tasks
              </button>
            </div>
          </Reveal>

          {/* Mentor / community */}
          <Reveal delay={0.15}>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface p-8 shadow-soft">
              <h2 className="font-display text-2xl text-ink">Your Mentor</h2>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-gold/10 font-display text-lg font-semibold text-ink">
                  PS
                </div>
                <div>
                  <div className="font-medium text-ink">Priya Sharma</div>
                  <div className="text-xs text-muted-foreground">Ex-Salesforce AE · 6 yrs</div>
                </div>
                <div className="ml-auto flex h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-5 rounded-xl bg-muted/50 px-4 py-3">
                <p className="text-xs italic text-muted-foreground">
                  "Focus on your STAR method before Thursday. We'll do a mock run Wednesday."
                </p>
                <p className="mt-2 text-[10px] text-muted-foreground/60">
                  — from your last session
                </p>
              </div>
              <button className="mt-4 w-full rounded-[12px] bg-ink px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink/90">
                Book next session
              </button>
            </div>
          </Reveal>

          {/* Cohort stats */}
          <Reveal delay={0.2}>
            <div className="rounded-[24px] border border-[oklch(0_0_0/0.06)] bg-surface p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <h2 className="font-display text-lg text-ink">Cohort 14</h2>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "34", l: "Active" },
                  { v: "8", l: "Placed" },
                  { v: "12", l: "Interviewing" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-muted/50 py-3">
                    <div className="font-display text-2xl text-ink">{s.v}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/dashboard/jobs"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-[12px] border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-ink"
              >
                View placement board <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
