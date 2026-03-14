import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titan Index — ReadyAll Docs",
  description:
    "How the Titan Index composite metric works, why it exists, and how coaches should interpret it for team leaderboards.",
};

export default function TitanIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Team Management · Season Leaderboard
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Titan Index
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        A composite performance metric that balances raw speed and
        power-to-weight efficiency into a single score, designed to capture the
        fundamental tradeoff in erg-based athlete evaluation.
      </p>

      {/* ── Why it exists ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why a Composite Metric?</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Coaches face a recurring tradeoff when ranking athletes on the erg:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Raw speed</strong> (split time per 500&thinsp;m) favors
            heavier, more powerful athletes who move the flywheel fastest in
            absolute terms.
          </li>
          <li>
            <strong>Efficiency</strong> (watts per pound) favors lighter athletes
            who produce more power relative to their body weight — critical for
            on-water performance where the boat carries every kilogram.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Neither dimension alone tells the full story. A pure speed ranking
          under-values technical lightweights; a pure efficiency ranking
          under-values the raw horsepower needed for competitive boat speed. The
          Titan Index combines both into a single leaderboard score so coaches
          can quickly identify athletes who excel across both dimensions.
        </p>
      </section>

      {/* ── How it's calculated ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">How It&rsquo;s Calculated</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The Titan Index uses{" "}
          <strong>z-score standardization</strong> — the same technique used in
          sports analytics metrics like baseball&rsquo;s OPS+ and
          basketball&rsquo;s PER — to put speed and efficiency on a common scale
          before combining them.
        </p>

        <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 1 — Standardize Speed
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            For each athlete, compute a <em>speed z-score</em> from the
            assignment&rsquo;s average split:
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`speedZ = -(split - meanSplit) / stdSplit`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            Negated because lower split = faster = better. An athlete 1σ faster
            than average gets a speedZ of +1.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 2 — Standardize Efficiency
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Compute an <em>efficiency z-score</em> from watts per pound (wplb):
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`effZ = (wplb - meanWplb) / stdWplb`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            Higher wplb = better, so no negation needed. An athlete 1σ more
            efficient than average gets an effZ of +1.
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Step 3 — Combine &amp; Normalize
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Average the two z-scores with equal weight, then rescale to the
            output range:
          </p>
          <pre className="mt-2 overflow-x-auto rounded bg-neutral-900 p-3 text-xs text-neutral-200 dark:bg-neutral-950">
            {`raw = (speedZ + effZ) / 2
titanIndex = ((raw - min) / (max - min)) × 100`}
          </pre>
          <p className="mt-2 text-xs text-neutral-500">
            The best athlete in the visible group scores 100, the lowest scores
            near 0. Everyone else is distributed proportionally between them
            based on their combined z-score.
          </p>
        </div>
      </section>

      {/* ── Per-workout vs season ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">
          Per-Workout vs. Season Titan Index
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The Titan Index is computed at two levels:
        </p>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Per-workout Titan Index
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              Calculated for each scored assignment relative to the athletes who
              completed that specific workout. Stored as part of the workout
              result. This is a snapshot of where an athlete stood in a single
              session.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Season Titan Index (rolling window)
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              The value shown on the Season Leaderboard. Computed as a
              recency-weighted average of per-workout Titan Indexes over a
              rolling window of recent assignments. This smooths out single-day
              variance and reflects an athlete&rsquo;s <em>trend</em> rather
              than a single performance.
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The rolling window approach means an athlete who has a bad day won&rsquo;t
          see their season score crater, and an athlete who peaked once won&rsquo;t
          ride that score all season. More recent workouts carry more weight than
          older ones.
        </p>
      </section>

      {/* ── Interpreting the score ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Interpreting the Score</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Range</th>
                <th className="py-2 pr-4">Interpretation</th>
                <th className="py-2">Coaching Signal</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">80–100</td>
                <td className="py-2 pr-4">Elite within the group</td>
                <td className="py-2">
                  Strong on both dimensions. Top candidates for racing lineups.
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">50–80</td>
                <td className="py-2 pr-4">Above average</td>
                <td className="py-2">
                  Solid performers. Drill into Speed vs. Efficiency columns to
                  see which dimension is driving the score.
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-mono">20–50</td>
                <td className="py-2 pr-4">Below average</td>
                <td className="py-2">
                  May be developing in one dimension. Compare the individual
                  Speed and Efficiency rank columns to identify focus areas.
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">0–20</td>
                <td className="py-2 pr-4">Lowest in the group</td>
                <td className="py-2">
                  Not necessarily &ldquo;bad&rdquo; — could be a novice in a
                  group of varsity rowers. The index is always relative.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          The season-level rolling average naturally compresses scores toward the
          middle — an athlete who scores 0 in one workout but 40 in others will
          have a season Titan that is much more reasonable than the single-workout
          floor.
        </p>
      </section>

      {/* ── Key properties ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Key Properties</h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Relative, not absolute
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              The Titan Index is calculated within the currently visible athlete
              group. Changing filters (team, squad, tier) recalculates the index
              against only the visible athletes. A score of 75 means &ldquo;75th
              percentile of <em>this</em> group&rdquo; — not a fixed benchmark
              across all teams.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Equal weighting (50/50)
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              Speed and efficiency contribute equally. This is a deliberate
              design choice: in rowing, both absolute boat-moving power and
              power-to-weight ratio matter for on-water performance. Neither is
              inherently more important for general team assessment.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Requires weight data
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              The efficiency component (watts per pound) requires athlete body
              weight. Athletes missing weight data will not have a Titan Index
              calculated. The leaderboard shows &ldquo;—&rdquo; for these
              athletes.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
              Minimum 2 athletes required
            </dt>
            <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
              Z-scores require variance to be meaningful. When fewer than 2
              athletes have both speed and efficiency data, the system falls
              back to composite rank as an approximation.
            </dd>
          </div>
        </dl>
      </section>

      {/* ── Statistical foundation ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Statistical Foundation</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The approach — standardize heterogeneous metrics via z-scores, combine
          with a weighted average, then normalize to a readable scale — is a
          standard technique in sports analytics and composite index
          construction:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Z-score normalization</strong> removes unit dependence
            (seconds vs. watts/lb) and naturally accounts for the spread of each
            metric within the cohort.
          </li>
          <li>
            <strong>Equal-weight averaging</strong> is the simplest defensible
            combination when neither input is demonstrably more predictive. This
            mirrors approaches used in metrics like the NBA&rsquo;s Player
            Efficiency Rating and baseball&rsquo;s OPS+.
          </li>
          <li>
            <strong>Min-max rescaling</strong> to 0–100 produces an intuitive
            &ldquo;how good within this group&rdquo; score without requiring
            external reference distributions.
          </li>
        </ul>
      </section>

      {/* ── Relationship to other columns ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">
          Relationship to Other Leaderboard Columns
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Column</th>
                <th className="py-2 pr-4">What It Measures</th>
                <th className="py-2">Time Window</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Titan Index</td>
                <td className="py-2 pr-4">
                  Z-score composite of speed + efficiency, 0–100 scale
                </td>
                <td className="py-2">Rolling window (recent workouts)</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Composite</td>
                <td className="py-2 pr-4">
                  Average of ordinal speed rank + ordinal efficiency rank
                </td>
                <td className="py-2">Season average</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">Speed</td>
                <td className="py-2 pr-4">
                  Average ordinal rank by split time (lower = faster)
                </td>
                <td className="py-2">Season average</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Efficiency</td>
                <td className="py-2 pr-4">
                  Average ordinal rank by watts per pound (lower rank = more
                  efficient)
                </td>
                <td className="py-2">Season average</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Use the <strong>Titan Index</strong> for a recency-weighted view of
          overall performance. Use <strong>Composite</strong> for a full-season
          ordinal view. Compare individual <strong>Speed</strong> and{" "}
          <strong>Efficiency</strong> columns to understand what&rsquo;s driving
          an athlete&rsquo;s position.
        </p>
      </section>

      {/* ── Scale alternatives ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">
          Scale Design: Why 0–100 (and Alternatives)
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The current implementation uses min-max normalization to a 0–100
          scale. This is the most intuitive for coaches but has a known
          drawback: someone is always 0 and someone is always 100 within a
          per-workout snapshot.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          The season-level rolling average naturally softens this — averaging
          across multiple workouts means nobody stays pinned at 0 unless they
          are consistently the lowest on every dimension in every workout.
        </p>
        <h3 className="mt-6 text-base font-semibold">
          Alternative Scales Considered
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-xs text-neutral-500 dark:border-neutral-800">
                <th className="py-2 pr-4">Approach</th>
                <th className="py-2 pr-4">Formula</th>
                <th className="py-2 pr-4">Range</th>
                <th className="py-2">Trade-off</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-300">
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">
                  Min-max 0–100 (current)
                </td>
                <td className="py-2 pr-4 font-mono text-xs">
                  (raw−min)/(max−min) × 100
                </td>
                <td className="py-2 pr-4">0–100</td>
                <td className="py-2">
                  Simple, intuitive. But bottom athlete is always 0.
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">
                  Compressed floor (20–100)
                </td>
                <td className="py-2 pr-4 font-mono text-xs">
                  20 + (raw−min)/(max−min) × 80
                </td>
                <td className="py-2 pr-4">20–100</td>
                <td className="py-2">
                  Nobody sees &ldquo;0.&rdquo; Still a relative scale but less
                  demoralizing.
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                <td className="py-2 pr-4 font-semibold">T-score</td>
                <td className="py-2 pr-4 font-mono text-xs">
                  50 + 10 × rawZ
                </td>
                <td className="py-2 pr-4">~20–80</td>
                <td className="py-2">
                  Classic psychometrics. Average is always 50, most athletes
                  fall 30–70. Nobody near 0.
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Percentile rank</td>
                <td className="py-2 pr-4 font-mono text-xs">
                  ordinal position / N × 100
                </td>
                <td className="py-2 pr-4">0–100</td>
                <td className="py-2">
                  Even distribution (every athlete has a unique percentile).
                  Loses magnitude information — barely-different athletes can
                  have very different percentiles.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Limitations ── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Limitations</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Not cross-team comparable.</strong> Because the index is
            normalized within the visible group, a Titan Index of 80 on one team
            is not equivalent to 80 on another. It measures relative standing,
            not absolute performance.
          </li>
          <li>
            <strong>Equal weighting may not fit every selection context.</strong>{" "}
            When selecting for a specific boat class (e.g., lightweight 4×),
            efficiency may matter more. When selecting for an open 8+, raw speed
            may dominate. Coaches should use the individual Speed and Efficiency
            columns alongside the Titan Index.
          </li>
          <li>
            <strong>Small cohorts amplify extremes.</strong> With only 3–4
            athletes, top and bottom scores are more volatile. The metric
            becomes more informative with larger groups (8+ athletes).
          </li>
          <li>
            <strong>Requires weight data for efficiency component.</strong>{" "}
            Athletes without body weight recorded cannot receive a Titan Index.
          </li>
        </ul>
      </section>

      {/* ── Back link ── */}
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
