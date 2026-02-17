type DepthStatus = 'live' | 'draft' | 'planned';

type DocsSection = {
  id: string;
  label: string;
  depth: string;
  status: DepthStatus;
};

const sections: DocsSection[] = [
  { id: 'getting-started', label: 'Getting started', depth: 'Depth 4/5', status: 'live' },
  { id: 'rwn', label: 'RWN reference', depth: 'Depth 4/5', status: 'live' },
  { id: 'zones', label: 'Training zones + pacing', depth: 'Depth 3/5', status: 'live' },
  { id: 'training-concepts', label: 'Training concepts + periodization', depth: 'Depth 3/5', status: 'live' },
  { id: 'training-plans', label: 'Training plans', depth: 'Depth 2/5', status: 'draft' },
  { id: 'physiology', label: 'Physiology fundamentals', depth: 'Depth 2/5', status: 'draft' },
  { id: 'technique', label: 'Technique progression', depth: 'Depth 2/5', status: 'draft' },
  { id: 'injury-prevention', label: 'Injury prevention', depth: 'Depth 2/5', status: 'draft' },
  { id: 'coaching-ops', label: 'Coaching + team ops', depth: 'Depth 1/5', status: 'planned' },
  { id: 'erglink-workflows', label: 'ErgLink workflows', depth: 'Depth 1/5', status: 'planned' },
];

const statusClassMap: Record<DepthStatus, string> = {
  live: 'text-emerald-700 dark:text-emerald-400',
  draft: 'text-amber-700 dark:text-amber-400',
  planned: 'text-neutral-600 dark:text-neutral-400',
};

const statusLabelMap: Record<DepthStatus, string> = {
  live: 'Live',
  draft: 'Draft depth',
  planned: 'Planned',
};

export function DocsDepthDashboard({
  title = 'Docs depth dashboard',
  description = 'Track which sections are mature now and where deeper content is planned next.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="tb-soft-card rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 dark:bg-neutral-900/60">
            <tr>
              <th className="px-4 py-3 font-medium">Section</th>
              <th className="px-4 py-3 font-medium">Depth</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <tr key={section.id} className="border-t border-neutral-200 dark:border-neutral-800">
                <td className="px-4 py-3">
                  <a href={`/docs#${section.id}`} className="font-medium hover:underline">
                    {section.label}
                  </a>
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{section.depth}</td>
                <td className={`px-4 py-3 ${statusClassMap[section.status]}`}>{statusLabelMap[section.status]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
