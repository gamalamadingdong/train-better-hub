import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — ReadyAll",
  description: "See what's planned, in progress, and shipped.",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Roadmap</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        What we&apos;re building and where we&apos;re headed. This roadmap and backlog
        stay public for full transparency and are shaped by community feedback.
      </p>

      <div className="mt-12">
        <p className="text-neutral-500">
          Public roadmap board with voting is coming next. Signed-in users will
          be able to vote on priorities. In the meantime, check out the{" "}
          <a
            href="https://github.com/gamalamadingdong/logbook-companion/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub issues
          </a>{" "}
          for current work.
        </p>
      </div>

      <section className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">References</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          The roadmap is informed by published training knowledge and practical
          implementation notes from the ReadyAll ecosystem.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
          <li>
            <a
              href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/training-plans/pete-plan.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Pete Plan source notes
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/training-plans/Wolverine%20Plan.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Wolverine Plan source notes
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/physiology/zones-and-pacing.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Training zones and pacing reference
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/technique/tech-overview.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Technique guide
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gamalamadingdong/logbook-companion/blob/main/kb/injury-prevention/injury-prevention.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Injury prevention guidance
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
