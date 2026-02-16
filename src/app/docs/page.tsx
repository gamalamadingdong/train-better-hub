import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — ReadyAll",
  description: "Guides, reference notes, and practical resources for athletes and coaches, including RWN and core training documentation.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-400">
        A practical library for athletes and coaches: quickstart guides,
        workflow references, and community notes. The knowledge base focus is
        training plans, physiology, technique, and practical implementation.
        Resources stay publicly readable; account access is only required for
        participation actions like voting and submissions.
      </p>

      <section className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Knowledge Base Highlights</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          These are the most-used foundations pulled from the ReadyAll training
          knowledge base.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a href="#rwn" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            RWN overview
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
          <a href="#technique" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Technique progression
          </a>
          <a href="#injury-prevention" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Injury prevention
          </a>
        </div>
      </section>

      <section id="rwn" className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Rowing Workout Notation (RWN)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          RWN is the shared notation layer for describing workouts clearly and
          consistently across athlete, coach, and template workflows.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Defines a common language for interval structure, rest, and sequencing.</li>
          <li>Supports reusable workout templates across athlete and coach workflows.</li>
          <li>Improves consistency for analytics, assignment, and historical comparisons.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">
          Source: internal RWN and workout-template implementation references in
          Logbook Companion.
        </p>
      </section>

      <section id="training-plans" className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">Training Plans (Pete + Wolverine + Practical Progressions)</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Use this as a planning baseline: combine high-volume aerobic work
            with structured interval sessions and progressive load.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Pete Plan: continuous three-week rotation with speed intervals, endurance intervals, and steady distance.</li>
            <li>Wolverine Plan: level-based structure (L1-L4) balancing intensity and high-volume low-rate work.</li>
            <li>Practical progression: build base, layer threshold/VO2 work, then sharpen for race windows.</li>
          </ul>
          <p className="mt-4 text-xs text-neutral-500">Sources:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
            <li><a className="hover:underline" href="https://thepeteplan.wordpress.com/the-pete-plan/" target="_blank" rel="noopener noreferrer">The Pete Plan (official public plan page)</a></li>
            <li><a className="hover:underline" href="https://www.row2k.com/features/391/mike-caviston-training-with-the-wolverine-plan-and-working-with-navy-seals/" target="_blank" rel="noopener noreferrer">Row2k interview/context on Wolverine methodology</a></li>
            <li><a className="hover:underline" href="https://web.archive.org/web/20240116170746/http://www.concept2.com/forums/wolverine_plan.htm" target="_blank" rel="noopener noreferrer">Archived Wolverine Plan reference document (Concept2 forum mirror)</a></li>
            <li><a className="hover:underline" href="https://www.concept2.com/training/plans" target="_blank" rel="noopener noreferrer">Concept2 training plans index</a></li>
          </ul>
        </div>

        <div id="templates" className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">Workout Templates</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Templates convert proven sessions into repeatable, coach-shareable
            programming with consistent labeling and progression.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Repeatable interval archetypes (e.g., 8x500m, 4x1k, threshold ladders).</li>
            <li>Stable categories for comparison over time and between athletes.</li>
            <li>Direct mapping to RWN for cleaner execution and analytics.</li>
          </ul>
        </div>
      </section>

      <section id="physiology" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Physiology Fundamentals</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Rowing performance depends on a large aerobic base, targeted
          threshold and VO2 work, and controlled anaerobic exposure near racing
          demands.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>2k racing is predominantly aerobic with meaningful anaerobic contribution.</li>
          <li>Threshold development strongly influences sustainable race pace.</li>
          <li>Periodization should progress from base, to build, to peak/taper.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/physiology/rowing-training-physiology.md" target="_blank" rel="noopener noreferrer">Rowing training physiology</a></li>
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/overview.md" target="_blank" rel="noopener noreferrer">Executive summary and synthesis notes</a></li>
        </ul>
      </section>

      <section id="zones" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Training Zones and Pacing (UT2, UT1, AT, TR, AN)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Use zones to align session intent with the right effort. Keep easy
          days easy and quality days precise.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          <MiniZone title="UT2" note="Easy aerobic base, high repeatability." />
          <MiniZone title="UT1" note="Steady aerobic development below threshold." />
          <MiniZone title="AT" note="Threshold work to raise sustainable hard pace." />
          <MiniZone title="TR" note="VO2-focused intervals for transport capacity." />
          <MiniZone title="AN" note="Short maximal work for sprint power." />
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Practical default: bias most weekly volume toward UT2/UT1 and place
          AT/TR/AN intentionally around recovery and testing windows.
        </p>
        <p className="mt-4 text-xs text-neutral-500">Sources:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/physiology/zones-and-pacing.md" target="_blank" rel="noopener noreferrer">Zones and pacing guidance</a></li>
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/physiology/rowing-training-physiology.md" target="_blank" rel="noopener noreferrer">Physiology and zone rationale</a></li>
        </ul>
      </section>

      <section id="technique" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Technique Progression (Erg + On-Water)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Technique remains performance-critical at every level. Prioritize
          clean sequencing and repeatable drills before chasing higher rate.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Sequence priority: legs-body-arms on drive; arms-body-legs on recovery.</li>
          <li>Core drill stack: pick drill, pause drills, feet-out, square blade work.</li>
          <li>Common fixes: avoid early arm pull, rushing slide, and washed-out finishes.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Source:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/technique/tech-overview.md" target="_blank" rel="noopener noreferrer">Comprehensive technique guide</a></li>
        </ul>
      </section>

      <section id="injury-prevention" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Injury Prevention and Recovery Basics</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Keep athletes available through load progression, movement quality,
          and recovery habits.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Primary risk areas: low back and rib stress injuries under high load.</li>
          <li>Preventive pillars: progressive load, trunk/hip strength, and technical consistency.</li>
          <li>Recovery pillars: sleep, fueling, hydration, and planned deloads.</li>
        </ul>
        <p className="mt-4 text-xs text-neutral-500">Source:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-500">
          <li><a className="hover:underline" href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/injury-prevention/injury-prevention.md" target="_blank" rel="noopener noreferrer">Injury prevention and return-to-training guidance</a></li>
        </ul>
      </section>

      <div className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Need something specific?</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          If a guide is missing, request it and we&apos;ll prioritize it on the
          public roadmap.
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

function MiniZone({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{note}</p>
    </div>
  );
}
