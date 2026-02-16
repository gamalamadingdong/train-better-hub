import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — ReadyAll",
  description: "Roadmap, feature requests, and community resources.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Community</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        ReadyAll is built in public. Reading roadmap, backlog, and resources is
        open to everyone; logged-in users can vote and participate in feature
        prioritization.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <a
          href="/roadmap"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Public Roadmap</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            See what&apos;s planned, in progress, and shipped with full transparency.
          </p>
        </a>
        <a
          href="/feedback"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Feature Requests</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Submit ideas and, when signed in, vote on what matters most.
          </p>
        </a>
        <a
          href="/docs"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Knowledge Base</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Use the public training docs for plans, zones, technique, and injury prevention.
          </p>
        </a>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-lg font-semibold">Useful ways to contribute</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
            <li>Vote on backlog items that affect your day-to-day coaching or training.</li>
            <li>Submit reproducible workflow feedback with context and expected behavior.</li>
            <li>Request missing docs topics (plans, zones, physiology, technique).</li>
            <li>Share practical examples from your own sessions for validation.</li>
          </ul>
        </section>

        <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-lg font-semibold">Transparency commitments</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
            <li>Roadmap and backlog stay public, regardless of login status.</li>
            <li>Feature voting is available to signed-in users as prioritization signal.</li>
            <li>Resources evolve from community requests and published implementation progress.</li>
            <li>Open-source development remains visible through public issue tracking.</li>
          </ul>
        </section>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <a
          href="https://github.com/sponsors/gamalamadingdong"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Support Development</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            GitHub Sponsors keeps this project going.
          </p>
        </a>

        <a
          href="https://github.com/gamalamadingdong/logbook-companion/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Issue Tracker</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Review active work, labels, and implementation status in public.
          </p>
        </a>

        <a
          href="/auth?returnTo=/community"
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 hover:border-indigo-500 transition-colors"
        >
          <h3 className="text-lg font-semibold">Sign In to Participate</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to vote on features and help prioritize upcoming releases.
          </p>
        </a>
      </div>
    </div>
  );
}
