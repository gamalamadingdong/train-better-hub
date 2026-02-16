import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Train Better",
  description: "Logbook Companion and ErgLink — tools for rowers and coaches.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Two products, one system: athlete performance tracking plus coach-facing
        team management.
      </p>

      <div className="mt-12 grid gap-12">
        <section id="logbook-companion">
          <h2 className="text-2xl font-semibold">Logbook Companion</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            A web-based workout logger built for rowers. Sync with Concept2,
            analyze your performance over time, use templates to categorize
            workouts, and access a full coaching module for team management.
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>Concept2 workout sync and reconciliation</li>
            <li>Template-based workout categorization</li>
            <li>Athlete + coach workflows in one app</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LC_URL || "https://log.train-better.app"}
            className="mt-4 inline-block rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
          >
            Open Logbook Companion →
          </a>
        </section>

        <section id="erglink">
          <h2 className="text-2xl font-semibold">ErgLink</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            A mobile app that connects to your Concept2 PM5 via Bluetooth. Get
            live data on your phone, race friends in real-time, and program
            intervals straight to the erg.
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>PM5 Bluetooth connection workflows</li>
            <li>Live metrics for training and race sessions</li>
            <li>Interval setup for erg workouts</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_EL_URL || "https://erglink.train-better.app"}
            className="mt-4 inline-block rounded-md border border-neutral-300 dark:border-neutral-700 px-6 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            Open ErgLink →
          </a>
        </section>
      </div>
    </div>
  );
}
