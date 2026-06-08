import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Sparkles, BookOpen, PlayCircle, ChevronRight } from "lucide-react";
import { AccountMenu } from "@/components/account-menu";
import {
  HARRY_JAVA_LECTURES, HARRY_CPP_LECTURES, HARRY_DSA_LECTURES,
  HARRY_JAVA_PROGRESS_KEY, HARRY_CPP_PROGRESS_KEY, HARRY_DSA_PROGRESS_KEY,
} from "@/lib/harry-content";

export const Route = createFileRoute("/harry")({
  head: () => ({
    meta: [
      { title: "CodeWithHarry · DSA Focus" },
      { name: "description", content: "CodeWithHarry's Java, C++ and DSA tracks — all in one place." },
    ],
  }),
  component: HarryHome,
});

function readCount(key: string): number {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]).length : 0;
  } catch { return 0; }
}

function HarryHome() {
  const [javaDone, setJavaDone] = useState(0);
  const [cppDone, setCppDone] = useState(0);
  const [dsaDone, setDsaDone] = useState(0);

  useEffect(() => {
    setJavaDone(readCount(HARRY_JAVA_PROGRESS_KEY));
    setCppDone(readCount(HARRY_CPP_PROGRESS_KEY));
    setDsaDone(readCount(HARRY_DSA_PROGRESS_KEY));
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-zinc-950">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/8 bg-zinc-950/95 px-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Home</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber-500/20 ring-1 ring-amber-500/30">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </div>
            <span className="text-sm font-semibold">CodeWithHarry</span>
          </div>
        </div>
        <AccountMenu />
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-4 pb-16 pt-8">
        {/* ── Choose Track ───────────────────────────────────────── */}
        <section>
          <h1 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
            Choose Your Track
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Pick a language to start your journey with CodeWithHarry.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TrackCard
              href="/harry/java"
              theme="amber"
              language="Java + DSA"
              description="Complete Java tutorial — variables, OOP, collections and more."
              total={HARRY_JAVA_LECTURES.length}
              done={javaDone}
            />
            <TrackCard
              href="/harry/cpp"
              theme="orange"
              language="C++ + DSA"
              description="Master C++ from basics through OOP, STL and pointers."
              total={HARRY_CPP_LECTURES.length}
              done={cppDone}
            />
          </div>
        </section>

        {/* ── Shared DSA ─────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Shared DSA Course
          </h2>
          <div className="mt-3">
            <TrackCard
              href="/harry/dsa"
              theme="emerald"
              language="DSA Course"
              description="Data Structures & Algorithms — sorting, trees, graphs, DP."
              total={HARRY_DSA_LECTURES.length}
              done={dsaDone}
              wide
            />
          </div>
        </section>

        {/* ── Notes & Assignments ────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Notes & Assignments
          </h2>
          <div className="mt-3 rounded-2xl border border-white/8 bg-zinc-900/60 p-5 text-sm text-zinc-400">
            Notes and assignments for CodeWithHarry are coming soon.
          </div>
        </section>
      </main>
    </div>
  );
}

const TRACK_THEME = {
  amber: {
    grad: "from-amber-950 via-zinc-900 to-orange-950",
    badge: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
    bar: "from-amber-400 to-orange-400",
    glow: "bg-amber-500/20",
  },
  orange: {
    grad: "from-orange-950 via-zinc-900 to-red-950",
    badge: "bg-orange-500/15 text-orange-300 ring-orange-500/30",
    bar: "from-orange-400 to-red-400",
    glow: "bg-orange-500/20",
  },
  emerald: {
    grad: "from-emerald-950 via-zinc-900 to-teal-950",
    badge: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
    bar: "from-emerald-400 to-teal-400",
    glow: "bg-emerald-500/20",
  },
} as const;

function TrackCard({
  href, theme, language, description, total, done, wide = false,
}: {
  href: string;
  theme: keyof typeof TRACK_THEME;
  language: string;
  description: string;
  total: number;
  done: number;
  wide?: boolean;
}) {
  const t = TRACK_THEME[theme];
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <Link
      to={href}
      className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${t.grad} p-5 shadow-lg transition hover:border-white/15 hover:shadow-xl`}
    >
      <div className={`pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-2xl ${t.glow}`} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${t.badge}`}>
            {language}
          </span>
          <ChevronRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-300" />
        </div>
        <p className={`mt-3 text-sm text-zinc-400 ${wide ? "" : "min-h-[40px]"}`}>{description}</p>
        <div className="mt-4 flex items-center gap-3 text-[11px] text-zinc-500">
          <div className="flex items-center gap-1">
            <PlayCircle className="h-3 w-3" />
            {total} {total === 1 ? "lecture" : "lectures"}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {done} completed
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${t.bar} transition-all`}
            style={{ width: `${Math.max(pct, pct > 0 ? 2 : 0)}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
