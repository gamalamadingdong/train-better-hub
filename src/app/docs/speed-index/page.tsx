import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speed Index - ReadyAll Docs",
  description:
    "How the Speed Index composite metric works, why it exists, and how coaches should interpret it on team leaderboards.",
};

export default function SpeedIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Team Management · Season Leaderboard
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Speed Index
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Speed Index is the leaderboard metric used in Logbook Companion team
        analytics. It blends raw speed and power-to-weight efficiency into a
        single score so coaches can scan a group quickly, then drill into split,
        efficiency, and workload detail before making lineup decisions.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why This Metric Exists</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Rowing evaluation always carries a tension between two useful truths:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Lower split</strong> reflects who is moving the machine or
            boat fastest.
          </li>
          <li>
            <strong>Higher watts per pound</strong> reflects who is producing
            power efficiently relative to body weight.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          In plain coaching terms, efficiency matters because it can explain why
          one athlete may be more boat-relevant than their absolute power alone
          would suggest. But watts per pound is already derived from watts, and
          watts is derived from split. Speed Index is built around that idea:
          once both values are standardized into the same z-score language,
          they can be blended evenly without secretly counting speed twice.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          That is why a blended metric makes sense at all. Coaches already make
          this judgment informally. Speed Index simply makes the tradeoff
          visible in one place so the first pass through a leaderboard is more
          honest than using split alone, without pretending one number should
          replace actual coaching judgment.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why Not Use Raw Split Alone?</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          A pure split ranking is simple, but it tends to over-reward athletes
          whose absolute horsepower is carrying the result while under-rewarding
          athletes who are producing unusually strong output for their size.
          In rowing that matters because body mass is not free. The boat has to
          carry it.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Speed Index keeps that tradeoff visible. It does not say efficiency is
          more important than speed, and it does not add extra explicit weight
          to speed after standardization. It says both signals are worth
          tracking because efficiency can meaningfully change how a coach should
          interpret a raw speed ranking.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why The Z-Score Step Exists</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Split and watts per pound do not live on the same scale. One is a time
          measure. The other is an efficiency measure. If you try to combine the
          raw numbers directly, whichever column happens to have the wider spread
          on that workout can dominate the result for mathematical reasons
          rather than coaching reasons.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The z-score step fixes that by translating both signals into the same
          relative language: how far above or below the group average an athlete
          sat on that workout. Once both inputs are expressed as comparable
          standings inside the same cohort, blending them becomes defensible.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">How It Is Calculated</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Each scored workout is turned into a per-workout Speed Index before it
          is averaged into the leaderboard view. The workflow is:
        </p>

        <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 1 - Standardize speed
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            The system computes a speed z-score from each athlete&apos;s average
            split for that workout.
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`speedZ = -(split - meanSplit) / stdSplit`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            Lower split is better, so the value is negated to make faster
            athletes score higher.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 2 - Standardize efficiency
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            The system computes an efficiency z-score from watts per pound.
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`efficiencyZ = (wplb - meanWplb) / stdWplb`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            Higher watts per pound is better, so no sign flip is needed.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 3 - Apply the equal blend
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            The two standardized values are combined with equal weighting. That
            keeps the formula simple and avoids adding extra explicit speed bias
            after both inputs have already been normalized into the same scale:
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`rawScore = (speedZ * 0.50) + (efficiencyZ * 0.50)`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            This is the current product model. Think of it as a standardized
            average across two related but still useful signals. Coaches cannot
            change the weighting in settings.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 4 - Normalize to a 0-100 score
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            The raw blended values are min-max scaled so each workout yields an
            easy-to-read score.
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`speedIndex = ((rawScore - minRaw) / (maxRaw - minRaw)) * 100`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            The best scored athlete in that workout lands near 100, the lowest
            near 0, and everyone else falls in between.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">How The Leaderboard Uses It</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The leaderboard does not use a hidden rolling workout count anymore.
          It averages per-workout Speed Index values across the assignments that
          match the currently selected page filters.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Control</th>
                <th className="py-2 pr-4">What it changes</th>
                <th className="py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Last week</td>
                <td className="py-2 pr-4">Only workouts from the last 7 days</td>
                <td className="py-2">Useful for short-form form checks</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Last 4 weeks</td>
                <td className="py-2 pr-4">Only workouts from the last 28 days</td>
                <td className="py-2">Default team analytics view</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Season</td>
                <td className="py-2 pr-4">Workouts from August 1 to today</td>
                <td className="py-2">Matches the academic-season model</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">All time</td>
                <td className="py-2 pr-4">All scored workouts in scope</td>
                <td className="py-2">Best for broad historical review</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Team, squad, tier, and Tests Only filters all rerank the visible group.
          That means Speed Index is always relative to the athletes and workouts
          currently on screen.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">How To Read The Score</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Range</th>
                <th className="py-2 pr-4">Interpretation</th>
                <th className="py-2">Coaching read</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">80-100</td>
                <td className="py-2 pr-4">Top end of the visible group</td>
                <td className="py-2">Usually strong speed with enough efficiency to hold position</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">50-80</td>
                <td className="py-2 pr-4">Above group average</td>
                <td className="py-2">Check split and W/lb columns to see which trait is driving the score</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">20-50</td>
                <td className="py-2 pr-4">Below group average</td>
                <td className="py-2">Often points to development opportunity in speed, efficiency, or both</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">0-20</td>
                <td className="py-2 pr-4">Bottom end of the visible group</td>
                <td className="py-2">Interpret relative to squad level and training age, not as an absolute label</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Relationship To Other Columns</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Column</th>
                <th className="py-2 pr-4">Meaning</th>
                <th className="py-2">Best use</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Speed Index</td>
                <td className="py-2 pr-4">Standardized blend of speed and W/lb</td>
                <td className="py-2">Quick first-pass ranking</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Latest Split</td>
                <td className="py-2 pr-4">Most recent scored split</td>
                <td className="py-2">Check near-term trend</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Avg W/lb</td>
                <td className="py-2 pr-4">Mean watts per pound across visible work</td>
                <td className="py-2">Read efficiency directly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Key Limitations</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>It is relative, not universal.</strong> A Speed Index of 80
            in one filtered group is not automatically comparable to an 80 in a
            different group.
          </li>
          <li>
            <strong>Weight is required for the efficiency side.</strong> Missing
            weight data means the athlete cannot receive a Speed Index for that
            workout.
          </li>
          <li>
            <strong>Small groups exaggerate movement.</strong> With only a few
            athletes, z-score based normalization can swing harder than it will
            in a full team cohort.
          </li>
          <li>
            <strong>The metric is a guide, not a final selection rule.</strong>
            Coaches should still read splits, lineup context, technical quality,
            and boat fit alongside the score.
          </li>
        </ul>
      </section>

      <div className="mt-16 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <a
          href="/docs"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          ← Back to Docs
        </a>
      </div>
    </div>
  );
}
