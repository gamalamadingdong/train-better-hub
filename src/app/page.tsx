export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <section className="tb-soft-card rounded-2xl border border-neutral-200 bg-white px-8 py-12 dark:border-neutral-800 dark:bg-neutral-950">
        <p className="tb-accent-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          readyall.org · open training platform hub
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          One hub for tools, knowledge, and community for people who row.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
          ReadyAll brings together Logbook Companion, ErgLink, rowing workout
          notation, workout templates, and coaching + roster management, plus a
          growing knowledge base for training plans, physiology, and technique.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={process.env.NEXT_PUBLIC_LC_URL || "https://logbook.train-better.app"}
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
          >
            Open Logbook Companion
          </a>
          <a
            href="/docs"
            className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Browse Resources
          </a>
          <a
            href="/roadmap"
            className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            View Roadmap
          </a>
        </div>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2">
        <ProductCard
          title="Logbook Companion"
          description="Workout logging, Concept2 sync, analytics, workout templates, and coach workflows in one web app."
          href="/products#logbook-companion"
          cta="View details"
        />
        <ProductCard
          title="ErgLink"
          description="PM5 companion app for live data workflows, interval programming, and on-the-floor session utility."
          href="/products#erglink"
          cta="View details"
        />
      </section>

      <section className="tb-soft-card mt-14 rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-2xl font-semibold">Start here: RWN + documentation essentials</h2>
        <p className="mt-3 max-w-3xl text-neutral-600 dark:text-neutral-400">
          If you&apos;re new to the platform, start with Rowing Workout Notation (RWN)
          and the core docs for templates, training plans, physiology, and
          technique.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/docs#rwn" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            RWN Overview →
          </a>
          <a href="/docs#templates" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Workout Templates →
          </a>
          <a href="/docs#training-plans" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Training Plans →
          </a>
          <a href="/docs#zones" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Training Zones →
          </a>
          <a href="/docs#technique" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Technique →
          </a>
          <a href="/docs" className="rounded-lg border border-neutral-300 p-4 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Full Resources Index →
          </a>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">For Athletes</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Track meters, monitor progress, and keep your training history clean
            and usable.
          </p>
          <a href="/athletes" className="mt-4 inline-block text-sm font-medium text-neutral-800 hover:underline dark:text-neutral-200">
            Explore athlete workflows →
          </a>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">For Coaches</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Manage squads, assignments, scores, notes, and boatings without
            spreadsheet sprawl.
          </p>
          <a href="/coaches" className="mt-4 inline-block text-sm font-medium text-neutral-800 hover:underline dark:text-neutral-200">
            Explore coach workflows →
          </a>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950">
          <h3 className="text-lg font-semibold">Reference Library</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            A knowledge base for training plans, physiology, technique, and
            practical implementation resources.
          </p>
          <a href="/docs" className="mt-4 inline-block text-sm font-medium text-neutral-800 hover:underline dark:text-neutral-200">
            Browse resources →
          </a>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-2xl font-semibold">Built in public, improved by the community</h2>
        <p className="mt-3 max-w-3xl text-neutral-600 dark:text-neutral-400">
          Logged-in members can vote on features and priorities. For everyone
          else, roadmap and backlog visibility stays public for full
          transparency on what is being built and why.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/community" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Community Hub
          </a>
          <a href="/feedback" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            Share Feedback
          </a>
          <a href="/roadmap" className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
            See Roadmap
          </a>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  title,
  description,
  href,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="tb-soft-card rounded-xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      <a href={href} className="tb-accent-text mt-4 inline-block text-sm font-medium hover:underline">
        {cta} →
      </a>
    </div>
  );
}
