type RoadmapStatus = 'active' | 'next' | 'planned';

type StrategicArea = {
  title: string;
  status: RoadmapStatus;
  summary: string;
  now: string;
  next: string;
};

const areas: StrategicArea[] = [
  {
    title: 'Community Backbone',
    status: 'active',
    summary:
      'Run contribution and prioritization in ReadyAll so participation stays non-technical and accessible.',
    now: 'Native submissions, role-based moderation, and authenticated voting are live foundations.',
    next: 'Add triage filters and moderation workflow refinements for faster review cycles.',
  },
  {
    title: 'Documentation Depth',
    status: 'active',
    summary:
      'Keep docs depth-first by expanding practical guidance where request volume and user need are strongest.',
    now: 'RWN is complete and Training & Physiology is the active deepening track.',
    next: 'Promote high-demand subsections into standalone pages only when depth is demonstrated.',
  },
  {
    title: 'Cross-App Signal Routing',
    status: 'next',
    summary:
      'Route community requests cleanly to ReadyAll Hub, Logbook Companion, ErgLink, or RWN.',
    now: 'Feature requests now include product-area categorization at submit and moderation time.',
    next: 'Introduce per-area queue views and roadmap segmentation for clearer ownership.',
  },
  {
    title: 'Transparent Execution Mirror',
    status: 'planned',
    summary:
      'Keep engineering implementation visible publicly while leaving contribution UX in ReadyAll.',
    now: 'Roadmap and contribution context stay public regardless of login state.',
    next: 'Mirror selected approved items to public issue tracking with traceable status links.',
  },
];

const statusLabel: Record<RoadmapStatus, string> = {
  active: 'Active Build',
  next: 'Next',
  planned: 'Planned',
};

const statusClass: Record<RoadmapStatus, string> = {
  active: 'text-emerald-700 dark:text-emerald-400',
  next: 'text-amber-700 dark:text-amber-400',
  planned: 'text-neutral-600 dark:text-neutral-400',
};

export function StrategicRoadmap() {
  return (
    <section className="tb-soft-card mt-10 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <h2 className="text-xl font-semibold">Strategic Areas</h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Big directional priorities for ReadyAll, with current focus and next movement for each track.
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {areas.map((area) => (
          <article key={area.title} className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold">{area.title}</h3>
              <span className={`text-xs font-semibold uppercase tracking-wide ${statusClass[area.status]}`}>
                {statusLabel[area.status]}
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{area.summary}</p>

            <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                <span className="font-medium text-neutral-900 dark:text-neutral-200">Now:</span> {area.now}
              </p>
              <p>
                <span className="font-medium text-neutral-900 dark:text-neutral-200">Next:</span> {area.next}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
