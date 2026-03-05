'use client';

import { useState } from 'react';
import { RwnPlaygroundPreview } from '@/components/RwnPlaygroundPreview';
import { LcEntryLink } from '@/components/LcEntryLink';

type RwnTab = 'spec' | 'playground';

const BASIC_EXAMPLES = ['4x500m/1:00r', '8x1:00/1:00r', '500m/1:00r', '10000m', '30:00'];

export function RwnIntegratedReference() {
  const [activeTab, setActiveTab] = useState<RwnTab>('spec');

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Rowing Workout Notation (RWN)</h1>
      <p className="mt-4 max-w-4xl text-neutral-600 dark:text-neutral-400">
        This page follows the same flow used in Logbook Companion: learn the specification clearly,
        then move into playground-driven examples and validator usage.
      </p>

      <section className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">RWN Reference</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Version 0.1.0-draft • Request for Comment</p>
          </div>
          <span className="rounded-full border border-emerald-700/40 bg-emerald-800/15 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            RFC Status
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('spec')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'spec'
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900'
            }`}
          >
            Specification Guide
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'playground'
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900'
            }`}
          >
            Interactive Playground
          </button>
        </div>
      </section>

      {activeTab === 'playground' ? (
        <>
          <RwnPlaygroundPreview />
          <section className="tb-soft-card mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">How to use the validator</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Start with an example, adjust notation, then open the full Logbook Companion validator for
              parser diagnostics, canonical naming, and structured output.
            </p>
            <LcEntryLink
              returnTo="/docs?tab=rwn&rwnSubTab=playground"
              className="mt-4 inline-block rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Open full validator in Logbook Companion
            </LcEntryLink>
          </section>
        </>
      ) : (
        <div className="mt-8 space-y-8">
          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">Why RWN</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Rowing already has strong informal workout shorthand, but teams and apps still use slightly
              different syntax. RWN keeps the notation coaches already understand while making it
              predictable enough for software to parse, validate, and execute.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Shared language across teams</h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Use one readable format for athletes, coaches, and planners instead of rewriting
                  workouts per tool or spreadsheet.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Reliable tooling and automation</h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Structured syntax enables parser validation, canonical names, and template workflows in
                  Logbook Companion.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Interoperability as a standard</h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  A lightweight open standard makes it easier to share plans between apps, communities,
                  and future integrations.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
              <h4 className="text-sm font-medium">Quick before/after example</h4>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <p className="rounded-md border border-neutral-200 p-3 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">Informal:</span>{' '}
                  4 by 500, 1 minute rest, 2k pace ish
                </p>
                <p className="rounded-md border border-neutral-200 p-3 font-mono text-xs text-emerald-600 dark:border-neutral-800 dark:text-emerald-400">
                  4x500m/1:00r@2k
                </p>
              </div>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">1. Basic Structure</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Standard Intervals</h4>
                <p className="mt-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">[Repeats] x [Work] / [Rest]r</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                  {BASIC_EXAMPLES.slice(0, 3).map((example) => (
                    <li key={example} className="font-mono text-xs">{example}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Steady State</h4>
                <p className="mt-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">[Duration] or [Distance]</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                  {BASIC_EXAMPLES.slice(3).map((example) => (
                    <li key={example} className="font-mono text-xs">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">2. Components</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
                    <th className="py-2 pr-3">Component</th>
                    <th className="py-2 pr-3">Examples</th>
                    <th className="py-2">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <tr>
                    <td className="py-2 pr-3 font-medium">Work Unit</td>
                    <td className="py-2 pr-3 font-mono text-xs">500m, 1:00, 500cal</td>
                    <td className="py-2 text-neutral-600 dark:text-neutral-400">Distance, time, or calories.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Rest Unit</td>
                    <td className="py-2 pr-3 font-mono text-xs">1:00r, 3:30r</td>
                    <td className="py-2 text-neutral-600 dark:text-neutral-400">Uses trailing rest suffix.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Guidance</td>
                    <td className="py-2 pr-3 font-mono text-xs">@r20, @2:05..2:10, @UT2</td>
                    <td className="py-2 text-neutral-600 dark:text-neutral-400">Execution intent metadata.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">3. Extended Guidance (@)</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <div className="rounded-lg border border-neutral-300 p-3 dark:border-neutral-700">
                <div className="text-xs uppercase tracking-wider text-neutral-500">Stroke Rate</div>
                <div className="mt-1 font-mono text-emerald-600 dark:text-emerald-400">@r20</div>
                <div className="mt-1 text-xs text-neutral-500">or @18..22spm</div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-3 dark:border-neutral-700">
                <div className="text-xs uppercase tracking-wider text-neutral-500">Pace Target</div>
                <div className="mt-1 font-mono text-emerald-600 dark:text-emerald-400">@1:45</div>
                <div className="mt-1 text-xs text-neutral-500">or @2:05..2:10</div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-3 dark:border-neutral-700">
                <div className="text-xs uppercase tracking-wider text-neutral-500">Relative Pace</div>
                <div className="mt-1 font-mono text-emerald-600 dark:text-emerald-400">@2k+10</div>
                <div className="mt-1 text-xs text-neutral-500">PR + offset</div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-3 dark:border-neutral-700">
                <div className="text-xs uppercase tracking-wider text-neutral-500">Zone</div>
                <div className="mt-1 font-mono text-emerald-600 dark:text-emerald-400">@UT2</div>
                <div className="mt-1 text-xs text-neutral-500">Intensity zones</div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
              <h4 className="text-sm font-medium">Block Tags (Semantic Structure)</h4>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex gap-3">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">[w]10:00</span>
                  <span className="text-neutral-600 dark:text-neutral-400">Warmup (10 min)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">[c]5:00</span>
                  <span className="text-neutral-600 dark:text-neutral-400">Cooldown (5 min)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">[t]2000m@2k</span>
                  <span className="text-neutral-600 dark:text-neutral-400">Test segment</span>
                </div>
              </div>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">3b. Advanced Guidance Features</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">@open Keyword</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  For intentionally unrestricted segments — sprints, athlete discretion, or &quot;go as hard as you want.&quot;
                </p>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">0:30@open</p>
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">500m@open</p>
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  Distinct from omitted guidance — <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">@open</code> means intentional freedom, not a missing value.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Chained Guidance</h4>
                <p className="mt-1 text-xs text-neutral-500">Combine multiple guidance modifiers on a single work unit.</p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">30:00@UT2@r20</p>
                <p className="mt-1 text-xs text-neutral-500">Zone + rate applied together.</p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Sub-interval Guidance (+ segments)</h4>
                <p className="mt-1 text-xs text-neutral-500">Split a piece into segments with individual guidance using + inside repeats.</p>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">10x(2:30@r24..26 + 0:30@open)/30sr</p>
                  <p className="text-xs text-neutral-500">First 2:30 controlled, last 30s open sprint.</p>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">3x(4:00@UT2 + 1:00@open)/2:00r</p>
                  <p className="text-xs text-neutral-500">4 min steady + 1 min sprint per rep.</p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Input Tolerance / Shorthand</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Flexible input forms that normalize to standard RWN notation.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[400px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
                        <th className="py-1.5 pr-3">Input</th>
                        <th className="py-1.5 pr-3">Normalized</th>
                        <th className="py-1.5">Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 font-mono dark:divide-neutral-800">
                      <tr>
                        <td className="py-1.5 pr-3">3&apos;</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">3:00</td>
                        <td className="py-1.5 font-sans text-neutral-500">Minute shorthand</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3">30&quot;</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">0:30</td>
                        <td className="py-1.5 font-sans text-neutral-500">Second shorthand</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3">3&apos;30&quot;</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">3:30</td>
                        <td className="py-1.5 font-sans text-neutral-500">Combined</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3">30:00r20</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">30:00@r20</td>
                        <td className="py-1.5 font-sans text-neutral-500">Rate shorthand</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3">4 x 500m</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">4x500m</td>
                        <td className="py-1.5 font-sans text-neutral-500">Whitespace tolerance</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3">@18-22spm</td>
                        <td className="py-1.5 pr-3 text-emerald-600 dark:text-emerald-400">@18..22spm</td>
                        <td className="py-1.5 font-sans text-neutral-500">Dash tolerance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">4. Advanced Syntax</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Segmented Workouts</h4>
                <p className="mt-1 text-xs text-neutral-500">Use + to chain blocks with clear flow.</p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">[w]10:00 + 4x2000m/3:00r + [c]10:00</p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Grouped Repeats</h4>
                <p className="mt-1 text-xs text-neutral-500">Nest interval sets for ladders and compound blocks.</p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">3x(750m/3:00r + 500m/3:00r)</p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">PM5 Splits</h4>
                <p className="mt-1 font-mono text-xs text-neutral-700 dark:text-neutral-300">10000m [2000m]</p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Undefined Rest</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Use <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">/...r</code> for open or coach-defined rest periods.
                </p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">4x2000m/...r</p>
              </div>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">5. Machine Types & Mixed Modalities</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Use modality prefixes for non-rowing activities and mixed circuits.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p className="rounded-lg border border-neutral-300 p-3 font-mono text-xs dark:border-neutral-700">Bike: 15000m</p>
              <p className="rounded-lg border border-neutral-300 p-3 font-mono text-xs dark:border-neutral-700">Ski: 8x500m/3:30r</p>
              <p className="rounded-lg border border-neutral-300 p-3 font-mono text-xs dark:border-neutral-700 md:col-span-2">[w]Row: 5:00 + Row: 2000m + Bike: 5000m + Ski: 2000m + [c]Row: 5:00</p>
            </div>
          </section>

          <section className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-lg font-semibold">
              6. Session Orchestration{' '}
              <span className="ml-2 inline-block rounded-full border border-amber-600/40 bg-amber-500/15 px-2.5 py-0.5 align-middle text-xs font-medium text-amber-700 dark:text-amber-400">
                Draft
              </span>
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Experimental extensions for multi-athlete and non-erg session structures. These are under active design and may change.
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Partner Workouts</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Alternating athlete pairs with <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">partner(on=[core], off=[task])</code>.
                </p>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">partner(on=4x1000m/...r, off=wait)</p>
                  <p className="text-xs text-neutral-500">Passive off-task — partner waits.</p>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">partner(on=4x1000m/...r, off=circuit(...))</p>
                  <p className="text-xs text-neutral-500">Active off-task — partner does a circuit.</p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Relays</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Team relay format with <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">relay(leg=[distance], total=[distance])</code>.
                </p>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">relay(leg=500m, total=6000m)</p>
                  <p className="text-xs text-neutral-500">Basic relay — team size inferred from total ÷ leg.</p>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">relay(leg=500m, total=6000m, team_size=6)</p>
                  <p className="text-xs text-neutral-500">Explicit team sizing.</p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Station Rotation</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Circuit rotation with{' '}
                  <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">rotate(stations=[n], switch=[time], rounds=[n], plan=[...])</code>.
                </p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  rotate(stations=4, switch=5:00, rounds=3, plan=[Row: 5:00, Bike: 5:00, Ski: 5:00, circuit(...)])
                </p>
              </div>
              <div className="rounded-lg border border-neutral-300 p-4 dark:border-neutral-700">
                <h4 className="text-sm font-medium">Off-erg Circuit</h4>
                <p className="mt-1 text-xs text-neutral-500">
                  Non-erg activities with <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">circuit([exercise], [exercise], ...)</code>.
                </p>
                <p className="mt-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  circuit(20 burpees, 20 pushups, 20 situps, 1:00 plank)
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
