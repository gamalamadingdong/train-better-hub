import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Train Better",
  description: "Guides, reference notes, and practical resources for athletes and coaches.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-400">
        A practical library for athletes and coaches: quickstart guides,
        workflow references, and community notes. This is built to be useful,
        not noisy.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ResourceCard
          title="Getting Started"
          description="Account setup, Concept2 connection, and your first logged session."
          links={[
            "Create account + profile",
            "Connect Concept2",
            "Log first workout",
          ]}
        />
        <ResourceCard
          title="Coach Operations"
          description="Daily team workflows for roster, assignments, scores, and boatings."
          links={[
            "Team setup checklist",
            "Assignment workflow",
            "Boatings workflow",
          ]}
        />
        <ResourceCard
          title="Training Reference"
          description="Reference notes, templates, and training-support resources."
          links={[
            "Template usage reference",
            "Workout categorization notes",
            "Known limitations + edge cases",
          ]}
        />
      </div>

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

function ResourceCard({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: string[];
}) {
  return (
    <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
        {links.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
