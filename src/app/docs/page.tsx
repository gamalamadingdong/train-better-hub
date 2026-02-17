import type { Metadata } from "next";
import { DocsDepthDashboard } from "@/components/DocsDepthDashboard";

export const metadata: Metadata = {
  title: "Resources — ReadyAll",
  description: "Guides, reference notes, and practical resources for athletes and coaches, including RWN and core training documentation.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-400">
        This is the primary documentation hub. We&apos;re intentionally consolidating
        into fewer, deeper sections so navigation stays simple while content grows.
        Reading is open to everyone; participation actions are account-based.
      </p>

      <div className="mt-6 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This Resources page is public and shows the same content whether you are
          signed in or not. If you&apos;re seeing a richer in-app view elsewhere,
          that&apos;s part of app workflows—not hidden docs on this Hub page.
        </p>
      </div>

      <section className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Documentation map</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Start from this map and drill down by topic.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a href="#getting-started" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Getting started
          </a>
          <a href="#rwn" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            RWN reference
          </a>
          <a href="#training-plans" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Training plans
          </a>
          <a href="#zones" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Training zones + pacing
          </a>
          <a href="#physiology" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Physiology fundamentals
          </a>
          <a href="#training-concepts" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Training concepts + periodization
          </a>
          <a href="#technique" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Technique progression
          </a>
          <a href="#injury-prevention" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Injury prevention
          </a>
          <a href="#coaching-ops" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Coaching + team ops
          </a>
          <a href="#erglink-workflows" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            ErgLink workflows
          </a>
        </div>
      </section>

      <div className="mt-8">
        <DocsDepthDashboard />
      </div>

      <section id="getting-started" className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Getting Started</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Use this path when onboarding yourself or your team.
        </p>
        <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Understand the platform surface: Logbook Companion, ErgLink, and shared docs.</li>
          <li>Adopt RWN conventions for consistent workout naming and template design.</li>
          <li>Choose training-zone language and periodization model before scaling volume.</li>
          <li>Join community channels to request missing documentation or workflows.</li>
        </ol>
      </section>

      <section id="rwn" className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Rowing Workout Notation (RWN)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          RWN is the canonical workout language across templates, parsing, and
          coach/athlete workflows. Use this as the shared contract for workout intent.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Syntax modes: block tags and legacy inline formats.</li>
          <li>Structures: intervals, variable sets, grouped sessions, and multi-modal forms.</li>
          <li>Guidance fields: pace/power/rate parameters for execution intent.</li>
          <li>Validation behavior: parser normalization and practical error boundaries.</li>
        </ul>
        <div className="mt-4">
          <a href="/rwn" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Open RWN Reference
          </a>
        </div>
      </section>

      <section id="training-plans" className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">Training Plans</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Starter overview of common structures and progression logic.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Current: plan families, pacing intent, progression guardrails.</li>
            <li>Next: ready-to-use week templates and adaptation tracks.</li>
            <li>Contribute: submit plan variants and rationale.</li>
          </ul>
          <p className="mt-4 text-xs text-neutral-500">Sources:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
            <li><a className="hover:underline" href="https://thepeteplan.wordpress.com/the-pete-plan/" target="_blank" rel="noopener noreferrer">The Pete Plan (official public plan page)</a></li>
            <li><a className="hover:underline" href="https://www.row2k.com/features/391/mike-caviston-training-with-the-wolverine-plan-and-working-with-navy-seals/" target="_blank" rel="noopener noreferrer">Row2k interview/context on Wolverine methodology</a></li>
            <li><a className="hover:underline" href="https://www.scribd.com/document/64124021/Wolverine-Plan" target="_blank" rel="noopener noreferrer">Wolverine Plan reference document (Scribd)</a></li>
            <li><a className="hover:underline" href="https://www.concept2.com/training/plans" target="_blank" rel="noopener noreferrer">Concept2 training plans index</a></li>
          </ul>
        </div>

        <div id="templates" className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">Workout Templates</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Reusable session structures designed for coach and athlete workflows.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Current: template intent and where templates fit.</li>
            <li>Next: downloadable starter packs.</li>
            <li>Contribute: request the first packs you want prioritized.</li>
          </ul>
        </div>
      </section>

      <section id="physiology" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Physiology Fundamentals</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Practical physiology baseline for training decisions and session intent.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Aerobic engine first: most rowing volume should support repeatable aerobic adaptation.</li>
          <li>Threshold focus: lactate/anaerobic threshold work is a core lever for sustainable race pace.</li>
          <li>High intensity is targeted: TR/AN sessions should be purposeful and buffered by easier days.</li>
          <li>Adaptation depends on consistency: week-over-week completion quality beats isolated hero sessions.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3438148/" target="_blank" rel="noopener noreferrer">Anaerobic threshold and endurance physiology (peer-reviewed overview)</a></li>
          <li><a className="hover:underline" href="https://www.concept2.com/training/plans" target="_blank" rel="noopener noreferrer">Concept2 training plans and endurance progression references</a></li>
        </ul>
      </section>

      <section id="training-concepts" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Training Concepts and Periodization</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Use periodization to organize load so athletes build fitness without burning out.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Macrocycle (season): base → build → race/peak → transition/recovery.</li>
          <li>Mesocycle (3–6 weeks): emphasize one adaptation (aerobic base, threshold, race specificity).</li>
          <li>Microcycle (week): balance quality sessions with enough low-intensity volume and recovery.</li>
          <li>Progressive overload: increase volume or quality gradually, then deload before the next push.</li>
          <li>Specificity: as events approach, workouts should look more like race demands.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Practical baseline:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li>Base phase: mostly UT2/UT1 with technical reinforcement.</li>
          <li>Build phase: introduce more AT/TR while preserving aerobic volume.</li>
          <li>Peak phase: reduce total volume, sharpen intensity, protect freshness.</li>
        </ul>

        <div className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
          <h3 className="text-sm font-semibold">Concrete Example: 4-Week Build Mesocycle</h3>
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
            Example intent: improve sustainable speed while preserving aerobic consistency.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-neutral-600 dark:text-neutral-300">
            <li>Week 1 (Intro load): 2 quality sessions (AT + TR), remainder UT2/UT1, 1 full rest day.</li>
            <li>Week 2 (Progress): keep 2 quality sessions, add modest volume (+5–10%), maintain technical work.</li>
            <li>Week 3 (Highest load): keep frequency, slightly increase interval density, protect recovery between hard days.</li>
            <li>Week 4 (Deload): reduce volume 25–35%, keep one short quality touch, emphasize freshness and execution quality.</li>
          </ul>
          <p className="mt-3 text-xs text-neutral-500">
            Simple check: if session quality drops for 2–3 key workouts in a row, reduce load before progressing.
          </p>
        </div>
      </section>

      <section id="zones" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Training Zones and Pacing (UT2, UT1, AT, TR, AN)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Zone labels are useful only when each zone has clear intent and discipline.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li><span className="font-medium">UT2:</span> easy aerobic work, high repeatability, conversation pace.</li>
          <li><span className="font-medium">UT1:</span> steady aerobic pressure below threshold.</li>
          <li><span className="font-medium">AT:</span> threshold work to raise sustainable hard pace.</li>
          <li><span className="font-medium">TR:</span> VO2 transport-focused intervals with controlled recoveries.</li>
          <li><span className="font-medium">AN:</span> short, high-intensity efforts for sprint and finishing power.</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Weekly default: bias most volume toward UT2/UT1, layer AT/TR intentionally,
          and use AN sparingly around goals and readiness.
        </p>
        <p className="mt-4 text-xs text-neutral-500">Session quality rules:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li>Easy sessions should stay easy enough to support tomorrow&apos;s quality work.</li>
          <li>Hard sessions should match planned zone, not drift into no-man&apos;s-land pacing.</li>
          <li>Re-test baselines periodically so zone targets stay relevant.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://www.concept2.com/training/pace-calculator" target="_blank" rel="noopener noreferrer">Concept2 pace calculator (split/time/watts conversion)</a></li>
          <li><a className="hover:underline" href="https://www.concept2.com/training/wod" target="_blank" rel="noopener noreferrer">Concept2 Workout of the Day intensity guidance</a></li>
        </ul>
      </section>

      <section id="technique" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Technique Progression (Erg + On-Water)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Foundational sequencing and drill priorities.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Current: movement sequence and drill categories.</li>
          <li>Next: progressive drill pathways by experience level.</li>
          <li>Contribute: suggest technique problems you want covered first.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://www.concept2.com/training/rowing-technique" target="_blank" rel="noopener noreferrer">Concept2 indoor rowing technique fundamentals</a></li>
          <li><a className="hover:underline" href="https://www.concept2.com/training/rowing-drills" target="_blank" rel="noopener noreferrer">Concept2 rowing drills and sequencing work</a></li>
        </ul>
      </section>

      <section id="injury-prevention" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Injury Prevention and Recovery Basics</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Practical availability principles: load, movement quality, recovery.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Current: high-level risk and prevention priorities.</li>
          <li>Next: return-to-training checklists and progression criteria.</li>
          <li>Contribute: submit protocols that have worked for your team.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://www.concept2.com/training/rowing-technique" target="_blank" rel="noopener noreferrer">Concept2 technique fundamentals (movement quality and injury-risk reduction)</a></li>
          <li><a className="hover:underline" href="https://www.concept2.com/training/wod" target="_blank" rel="noopener noreferrer">Concept2 WOD recovery guidance (warm-up, cool-down, intensity scaling)</a></li>
        </ul>
      </section>

      <section id="coaching-ops" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Coaching + Team Operations (Planned Expansion)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          This section will become the practical operating manual for coaches.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Assignment loops: planning, completion checks, and quick score entry.</li>
          <li>Roster hygiene: squads, notes, and communication cadence.</li>
          <li>Boatings operations: lineup setup, swap workflows, and race-week adjustments.</li>
        </ul>
      </section>

      <section id="erglink-workflows" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">ErgLink Workflows (Planned Expansion)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          This section will document PM5-connected session flows and handoff into analysis.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Live session setup and lane readiness checks.</li>
          <li>Interval programming and execution consistency standards.</li>
          <li>Data handoff from floor sessions into Logbook Companion workflows.</li>
        </ul>
      </section>

      <div className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Building this with the community</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Tell us what should be built next. We&apos;ll use requests and voting to
          prioritize deeper documentation passes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/feedback" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Request a resource
          </a>
          <a href="/roadmap" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            View roadmap
          </a>
        </div>
      </div>
    </div>
  );
}
