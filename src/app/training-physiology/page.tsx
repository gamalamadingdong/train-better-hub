import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Physiology — ReadyAll",
  description:
    "Practical training zones, pacing systems, power-duration concepts, and periodization guidance for rowers and coaches.",
};

export default function TrainingPhysiologyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Training & Physiology</h1>
      <p className="mt-4 max-w-4xl text-neutral-600 dark:text-neutral-400">
        This is the active deep-build documentation track. It combines zone logic, pacing calculations,
        power-duration modeling, and periodized planning into practical guidance that can be executed in real training blocks.
      </p>

      <nav className="sticky top-20 z-10 mt-6 rounded-lg border border-neutral-200 bg-white/95 p-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          <a href="#zones" className="rounded-md border border-neutral-300 px-3 py-1.5 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Zones</a>
          <a href="#pacing" className="rounded-md border border-neutral-300 px-3 py-1.5 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Pacing</a>
          <a href="#power-duration" className="rounded-md border border-neutral-300 px-3 py-1.5 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Power-Duration</a>
          <a href="#planning" className="rounded-md border border-neutral-300 px-3 py-1.5 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Planning</a>
        </div>
      </nav>

      <section id="zones" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Training Zones (Power Anchored)</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Zone classification in LC is anchored to 2k baseline watts, then converted into pace targets for session execution.
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900/60">
              <tr>
                <th className="px-3 py-2 font-semibold">Zone</th>
                <th className="px-3 py-2 font-semibold">Approx % 2k Watts</th>
                <th className="px-3 py-2 font-semibold">Primary Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200 dark:border-neutral-800"><td className="px-3 py-2 font-medium">UT2</td><td className="px-3 py-2">55–65%</td><td className="px-3 py-2">Aerobic base, high repeatability volume</td></tr>
              <tr className="border-t border-neutral-200 dark:border-neutral-800"><td className="px-3 py-2 font-medium">UT1</td><td className="px-3 py-2">65–75%</td><td className="px-3 py-2">Hard steady pressure below threshold</td></tr>
              <tr className="border-t border-neutral-200 dark:border-neutral-800"><td className="px-3 py-2 font-medium">AT</td><td className="px-3 py-2">75–85%</td><td className="px-3 py-2">Threshold development and sustainability</td></tr>
              <tr className="border-t border-neutral-200 dark:border-neutral-800"><td className="px-3 py-2 font-medium">TR</td><td className="px-3 py-2">85–95%</td><td className="px-3 py-2">VO2 transport and race-specific intervals</td></tr>
              <tr className="border-t border-neutral-200 dark:border-neutral-800"><td className="px-3 py-2 font-medium">AN</td><td className="px-3 py-2">95–105%+</td><td className="px-3 py-2">Anaerobic/sprint power and finishing work</td></tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Practical weekly default: bias most work to UT2/UT1, layer AT/TR intentionally, and use AN sparingly.
        </p>
      </section>

      <section id="pacing" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Pacing System and Calculation Logic</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          LC pacing tools keep plan targets and execution targets aligned with canonical split/watts conversion math.
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
            <h3 className="text-sm font-semibold">Core Formulas</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
              <li><span className="font-medium">Watts from split:</span> $W = 2.8 / (split/500)^3$</li>
              <li><span className="font-medium">Split from watts:</span> $split = 500 \cdot (2.8/W)^{1/3}$</li>
              <li><span className="font-medium">Relative pacing:</span> <span className="font-mono">2k+10</span>, <span className="font-mono">2k-2</span>, etc.</li>
              <li><span className="font-medium">Range targets:</span> explicit pace/rate ranges reduce execution drift.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
            <h3 className="text-sm font-semibold">Execution Rules</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
              <li>Choose one primary control variable per block (pace or watts).</li>
              <li>Add one guardrail (rate cap/band or split ceiling) to preserve technical quality.</li>
              <li>Use relative 2k pacing for threshold/race work, not for all easy volume.</li>
              <li>Retest baseline periodically so zone and pacing targets remain valid.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="power-duration" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Critical Power / Power-Duration Concepts</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Power-duration analysis connects short, middle, and long tests so training priorities are data-driven rather than guesswork.
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
            <h3 className="text-sm font-semibold">Short Anchors</h3>
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">1:00, 500m, 1k → anaerobic and neuromuscular power profile.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
            <h3 className="text-sm font-semibold">Middle Anchors</h3>
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">2k, 5k, 6k → threshold capacity and race-transfer durability.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
            <h3 className="text-sm font-semibold">Long Anchors</h3>
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">30:00, 10k, HM, FM → aerobic durability and efficiency under load.</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Coaching use: evaluate anchor ratios against 2k watts to identify whether the athlete is sprint-biased, diesel-biased, or showing threshold/mid-distance gaps.
        </p>
      </section>

      <section id="planning" className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Training Planning and Periodization</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Use macro/meso/microcycle planning to make load progression predictable and sustainable.
        </p>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
          <li><span className="font-medium">Macrocycle:</span> base → build → peak → transition.</li>
          <li><span className="font-medium">Mesocycle (3–6 weeks):</span> single adaptation focus, then deload.</li>
          <li><span className="font-medium">Microcycle (week):</span> quality sessions buffered by enough UT2/UT1 and recovery.</li>
          <li><span className="font-medium">Progression gate:</span> if key session quality drops repeatedly, reduce load before continuing progression.</li>
        </ul>

        <div className="mt-5 rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
          <h3 className="text-sm font-semibold">Detailed Training Plan Sources</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <a href="https://thepeteplan.wordpress.com/the-pete-plan/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neutral-300 p-3 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">The Pete Plan (official)</a>
            <a href="https://www.concept2.com/training/plans" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neutral-300 p-3 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Concept2 Training Plans</a>
            <a href="https://www.row2k.com/features/391/mike-caviston-training-with-the-wolverine-plan-and-working-with-navy-seals/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neutral-300 p-3 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Wolverine Methodology Context</a>
            <a href="https://www.scribd.com/document/64124021/Wolverine-Plan" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-neutral-300 p-3 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">Wolverine Plan Reference</a>
          </div>
        </div>
      </section>
    </div>
  );
}
