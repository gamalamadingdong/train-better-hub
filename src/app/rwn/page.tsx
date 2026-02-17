import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RWN — ReadyAll",
  description:
    "Rowing Workout Notation reference for syntax, parser capabilities, and practical examples from Logbook Companion.",
};

type ExampleCategory = "Basic" | "Pace" | "Advanced" | "Multi-Modal";

const EXAMPLES: Array<{ label: string; value: string; desc: string; category: ExampleCategory }> = [
  { label: "Intervals", value: "4x500m/1:00r", desc: "Distance Sprints", category: "Basic" },
  { label: "Time Intervals", value: "8x1:00/1:00r", desc: "Time-based", category: "Basic" },
  { label: "Steady State", value: "10000m", desc: "Distance SS", category: "Basic" },
  { label: "Training Zone", value: "20:00@UT1", desc: "Zone pace", category: "Pace" },
  { label: "Relative Pace", value: "5000m@2k+10", desc: "PR + offset", category: "Pace" },
  { label: "Rate Range", value: "30:00@18..22spm", desc: "Rate band", category: "Pace" },
  { label: "Pace Range", value: "60:00@2:05..2:10", desc: "Split band", category: "Pace" },
  { label: "With W/U & C/D", value: "[w]10:00 + 5x500m/1:00r + [c]5:00", desc: "Full session", category: "Advanced" },
  { label: "Rate Pyramid", value: "[w]5:00 + 5:00@r20 + 5:00@r22 + 5:00@r24 + 5:00@r22 + [c]5:00", desc: "Rate steps", category: "Advanced" },
  { label: "Rate Shorthand", value: "30:00r20", desc: "30 min @ r20", category: "Advanced" },
  { label: "Variable", value: "(2000m+1000m+500m)/3:00r", desc: "Ladder/Pyramid", category: "Advanced" },
  { label: "Grouped", value: "3x(750m/3:00r + 500m/3:00r)", desc: "Nested blocks", category: "Advanced" },
  { label: "BikeErg", value: "Bike: 15000m", desc: "Single modality", category: "Multi-Modal" },
  { label: "SkiErg", value: "Ski: 8x500m/3:30r", desc: "Ski intervals", category: "Multi-Modal" },
  { label: "Circuit", value: "[w]Row: 5:00 + Row: 2000m + Bike: 5000m + Ski: 2000m + [c]Row: 5:00", desc: "Cross-training", category: "Multi-Modal" },
  { label: "Team Circuit", value: "[w]Row: 10:00 + 3x(Row: 2000m/2:00r + Bike: 5000m/2:00r + Run: 800m/2:00r) + [c]Row: 5:00", desc: "Full circuit", category: "Multi-Modal" },
];

const EXAMPLE_CATEGORIES: ExampleCategory[] = ["Basic", "Pace", "Advanced", "Multi-Modal"];

export default function RwnPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Rowing Workout Notation (RWN)</h1>
      <p className="mt-4 max-w-4xl text-neutral-600 dark:text-neutral-400">
        This page documents the actual notation features currently implemented in Logbook Companion
        parsing and validation logic. It is the working reference for how workouts are authored,
        interpreted, and normalized across athlete, coach, and team workflows.
      </p>

      <section className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Syntax Modes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Preferred block tags: <span className="font-mono">[w]</span> warmup, <span className="font-mono">[c]</span> cooldown, <span className="font-mono">[t]</span> test.</li>
          <li>Legacy inline tags still supported: <span className="font-mono">#warmup</span>, <span className="font-mono">#cooldown</span>, <span className="font-mono">#test</span>.</li>
          <li>Standard separators: <span className="font-mono">+</span> for chained segments, <span className="font-mono">/</span> for rest pairing, and <span className="font-mono">x</span> for repeats.</li>
        </ul>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Core Structures</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Steady state components: distance, time, calories.</li>
            <li>Intervals: repeated work/rest structures.</li>
            <li>Variable sessions: mixed segment chains and ladders.</li>
            <li>Grouped repeats: nested block structures with optional group rest.</li>
            <li>Modality prefixes: Row, Bike, Ski, Run, Other.</li>
          </ul>
        </div>

        <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Guidance Parameters</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Stroke rate targets and ranges (e.g. <span className="font-mono">@r20</span>, <span className="font-mono">@18..22spm</span>).</li>
            <li>Absolute split targets and ranges (e.g. <span className="font-mono">@2:05</span>, <span className="font-mono">@2:05..2:10</span>).</li>
            <li>Relative pacing (e.g. <span className="font-mono">@2k+10</span>, <span className="font-mono">@5k-2</span>).</li>
            <li>Training zone abbreviations (UT2, UT1, AT, TR, AN).</li>
            <li>Rate shorthand support (e.g. <span className="font-mono">30:00r20</span>).</li>
          </ul>
        </div>
      </section>

      <section className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Validation and Normalization</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Parser-backed syntax validation with structured error feedback.</li>
          <li>Canonical workout naming from parsed interval structures.</li>
          <li>Duration and work estimation for supported component types.</li>
          <li>Legacy compatibility where possible while standardizing forward syntax.</li>
        </ul>
      </section>

      <section className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Reference Examples</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Practical examples aligned with the current playground/validator set.
        </p>
        <div className="mt-4 space-y-4">
          {EXAMPLE_CATEGORIES.map((category) => (
            <div key={category}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {category}
              </p>
              <div className="mt-2 grid gap-3 md:grid-cols-2">
                {EXAMPLES.filter((example) => example.category === category).map((example) => (
                  <div key={example.label} className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                    <p className="text-sm font-medium">{example.label}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{example.desc}</p>
                    <p className="mt-2 text-xs font-mono text-neutral-600 dark:text-neutral-300">{example.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Build with us</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Help prioritize the next RWN improvements: extended examples, edge-case clarifications,
          and richer modality-specific guidance.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/feedback" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Request RWN coverage
          </a>
          <a href="/roadmap" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            View roadmap
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LC_URL || "https://logbook.train-better.app"}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Open Logbook Companion
          </a>
        </div>
      </div>
    </div>
  );
}
