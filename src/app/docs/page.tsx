import type { Metadata } from "next";
import { DocsDepthDashboard } from "@/components/DocsDepthDashboard";

export const metadata: Metadata = {
  title: "Resources — ReadyAll",
  description:
    "ReadyAll documentation index focused on two deep sections: RWN (complete) and Training & Physiology (active expansion).",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-4xl text-neutral-600 dark:text-neutral-400">
        This index intentionally stays small. We are building one deep section at a time rather than shipping many shallow pages.
      </p>

      <div className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Public reading is open. RWN is complete; Training & Physiology is the active build track.
        </p>
      </div>

      <div className="mt-8">
        <DocsDepthDashboard />
      </div>

      <section className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Documentation Sections</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <a href="/rwn" className="rounded-lg border border-neutral-300 p-5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            <p className="text-sm font-semibold">RWN Reference</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Complete syntax, parser behavior, canonical naming, and playground-style examples.</p>
          </a>
          <a href="/training-physiology" className="rounded-lg border border-neutral-300 p-5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            <p className="text-sm font-semibold">Training & Physiology</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Zones, pacing calculations, power-duration concepts, and periodization planning guidance.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
