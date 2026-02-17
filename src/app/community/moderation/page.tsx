import type { Metadata } from 'next';
import { ModeratorQueue } from '@/components/ModeratorQueue';

export const metadata: Metadata = {
  title: 'Moderation Queue — ReadyAll',
  description: 'Moderator review queue for ReadyAll community submissions.',
};

export default function CommunityModerationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Moderation Queue</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Review community submissions, set status, and keep contribution quality high.
      </p>
      <ModeratorQueue />
    </div>
  );
}
