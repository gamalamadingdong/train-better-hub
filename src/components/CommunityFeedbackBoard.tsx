'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/types/supabase';

type CommunityItem = {
  id: string;
  user_id: string;
  product_area: ProductArea;
  item_type: string;
  title: string;
  details: string;
  status: string;
  created_at: string;
};

type VoteRow = {
  community_item_id: string;
  user_id: string;
};

type ProductArea = 'readyall_hub' | 'logbook_companion' | 'erg_link' | 'rwn';

const ITEM_TYPE_OPTIONS = [
  { value: 'feature', label: 'Feature' },
  { value: 'bug', label: 'Bug' },
  { value: 'docs', label: 'Docs Depth' },
  { value: 'roadmap', label: 'Roadmap' },
  { value: 'workflow', label: 'Workflow Report' },
] as const;

const PRODUCT_AREA_OPTIONS: { value: ProductArea; label: string }[] = [
  { value: 'readyall_hub', label: 'ReadyAll Community Hub' },
  { value: 'logbook_companion', label: 'Logbook Companion' },
  { value: 'erg_link', label: 'ErgLink' },
  { value: 'rwn', label: 'RWN' },
];

const AUTH_HINT_STORAGE_KEY = 'readyall_auth_hint';

function readAuthHintFromStorage(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(AUTH_HINT_STORAGE_KEY) === 'true';
}

function consumeAuthHintFromQuery(): boolean {
  if (typeof window === 'undefined') return false;
  const url = new URL(window.location.href);
  const authState = url.searchParams.get('authState');
  if (authState !== 'signedIn') return false;
  url.searchParams.delete('authState');
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  return true;
}

export function CommunityFeedbackBoard() {
  const [items, setItems] = useState<CommunityItem[]>([]);
  const [votes, setVotes] = useState<VoteRow[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [hasAuthHint, setHasAuthHint] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [itemType, setItemType] = useState<(typeof ITEM_TYPE_OPTIONS)[number]['value']>('feature');
  const [productArea, setProductArea] = useState<ProductArea>('readyall_hub');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const voteCountByItem = useMemo(() => {
    const map = new Map<string, number>();
    for (const vote of votes) {
      map.set(vote.community_item_id, (map.get(vote.community_item_id) ?? 0) + 1);
    }
    return map;
  }, [votes]);

  const myVotes = useMemo(() => {
    if (!userId) return new Set<string>();
    return new Set(votes.filter((vote) => vote.user_id === userId).map((vote) => vote.community_item_id));
  }, [votes, userId]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      setLoading(true);
      const queryHint = consumeAuthHintFromQuery();
      const storedHint = readAuthHintFromStorage();

      const { data: sessionData } = await supabase.auth.getSession();
      const nextUserId = sessionData.session?.user?.id ?? null;

      if (typeof window !== 'undefined') {
        if (nextUserId) {
          window.localStorage.removeItem(AUTH_HINT_STORAGE_KEY);
        } else if (queryHint || storedHint) {
          window.localStorage.setItem(AUTH_HINT_STORAGE_KEY, 'true');
        }
      }

      const [{ data: itemRows, error: itemError }, { data: voteRows, error: voteError }] = await Promise.all([
        supabase
          .from('community_items')
          .select('id, user_id, product_area, item_type, title, details, status, created_at')
          .order('created_at', { ascending: false })
          .limit(50),
        supabase
          .from('community_votes')
          .select('community_item_id, user_id')
          .limit(500),
      ]);

      if (!mounted) return;

      setUserId(nextUserId);
  setHasAuthHint(Boolean(queryHint || storedHint) && !nextUserId);

      if (itemError || voteError) {
        setStatusMessage('Unable to load community items right now.');
        setItems([]);
        setVotes([]);
      } else {
        setItems((itemRows ?? []) as CommunityItem[]);
        setVotes((voteRows ?? []) as VoteRow[]);
      }

      setLoading(false);
    };

    void load();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      void load();
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!userId) {
      setStatusMessage('Sign in to submit community feedback.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const { error } = await supabase.from('community_items').insert({
      user_id: userId,
      product_area: productArea,
      item_type: itemType,
      title: title.trim(),
      details: details.trim(),
    });

    if (error) {
      setStatusMessage('Unable to submit right now. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setTitle('');
    setDetails('');
    setItemType('feature');
    setProductArea('readyall_hub');
    setStatusMessage('Submitted. Your item is now pending moderator review.');

    const { data: itemRows } = await supabase
      .from('community_items')
      .select('id, user_id, product_area, item_type, title, details, status, created_at')
      .order('created_at', { ascending: false })
      .limit(50);

    setItems((itemRows ?? []) as CommunityItem[]);
    setIsSubmitting(false);
  };

  const handleVote = async (itemId: string) => {
    if (!userId) {
      setStatusMessage('Sign in to vote on community priorities.');
      return;
    }

    const alreadyVoted = myVotes.has(itemId);

    if (alreadyVoted) {
      const { error } = await supabase
        .from('community_votes')
        .delete()
        .eq('community_item_id', itemId)
        .eq('user_id', userId);

      if (error) {
        setStatusMessage('Unable to remove vote right now.');
        return;
      }
    } else {
      const { error } = await supabase.from('community_votes').upsert(
        {
          community_item_id: itemId,
          user_id: userId,
          vote: 1,
        },
        { onConflict: 'community_item_id,user_id' },
      );

      if (error) {
        setStatusMessage('Unable to record vote right now.');
        return;
      }
    }

    const { data: voteRows } = await supabase
      .from('community_votes')
      .select('community_item_id, user_id')
      .limit(500);

    setVotes((voteRows ?? []) as VoteRow[]);
  };

  return (
    <div className="mt-8 space-y-8">
      <section className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="text-lg font-semibold">Submit community input</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          New submissions are reviewed before they are published. Sign in is required to submit and vote.
        </p>

        {!userId ? (
          <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            {hasAuthHint
              ? 'You are marked signed-in via app handoff, but this browser does not have an active Hub session yet. Complete sign-in here to enable submit and vote.'
              : 'Read access is open. Sign in to submit or vote on community priorities.'}
            <a href="/auth?returnTo=/feedback" className="ml-2 font-medium hover:underline">
              {hasAuthHint ? 'Complete sign-in →' : 'Sign in →'}
            </a>
          </div>
        ) : null}

        <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Product area</span>
            <select
              value={productArea}
              onChange={(event) => setProductArea(event.target.value as ProductArea)}
              disabled={!userId || isSubmitting}
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              {PRODUCT_AREA_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1 text-sm">
            <span className="font-medium">Type</span>
            <select
              value={itemType}
              onChange={(event) => setItemType(event.target.value as (typeof ITEM_TYPE_OPTIONS)[number]['value'])}
              disabled={!userId || isSubmitting}
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              {ITEM_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1 text-sm">
            <span className="font-medium">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              minLength={3}
              maxLength={140}
              required
              disabled={!userId || isSubmitting}
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>

          <label className="grid gap-1 text-sm">
            <span className="font-medium">Details</span>
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              minLength={10}
              maxLength={5000}
              required
              rows={5}
              disabled={!userId || isSubmitting}
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>

          <button
            type="submit"
            disabled={!userId || isSubmitting}
            className="w-fit rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            {isSubmitting ? 'Submitting…' : 'Submit for review'}
          </button>
        </form>
      </section>

      <section className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="text-lg font-semibold">Published community priorities</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Items shown here passed moderation and are open for community voting.
        </p>

        {loading ? (
          <p className="mt-4 text-sm text-neutral-500">Loading…</p>
        ) : items.length === 0 ? (
          <p className="mt-4 text-sm text-neutral-500">No published items yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {items.map((item) => {
              const votesForItem = voteCountByItem.get(item.id) ?? 0;
              const hasVoted = myVotes.has(item.id);

              return (
                <li key={item.id} className="rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-[10px] uppercase tracking-wide dark:border-neutral-700">
                        {item.product_area.replace('_', ' ')}
                      </span>
                      <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-[10px] uppercase tracking-wide dark:border-neutral-700">
                        {item.item_type}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.details}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => void handleVote(item.id)}
                      disabled={!userId}
                      className="rounded-md border border-neutral-300 px-3 py-1 text-xs font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                    >
                      {hasVoted ? 'Remove vote' : 'Vote'}
                    </button>
                    <span className="text-xs text-neutral-500">{votesForItem} vote{votesForItem === 1 ? '' : 's'}</span>
                    <span className="text-xs text-neutral-500">Status: {item.status}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {statusMessage ? (
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{statusMessage}</p>
        ) : null}
      </section>
    </div>
  );
}
