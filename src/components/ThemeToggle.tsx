'use client';

import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type ThemePreference = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

type ProfileRow = {
  user_id: string;
  preferences?: Record<string, unknown> | null;
};

const THEME_STORAGE_KEY = 'readyall_theme_preference';

const getStoredTheme = (): ThemePreference | null => {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === 'light' || value === 'dark' || value === 'system' ? value : null;
};

const applyTheme = (theme: ResolvedTheme) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
};

const resolveTheme = (preference: ThemePreference, prefersDark: boolean): ResolvedTheme => {
  if (preference === 'system') {
    return prefersDark ? 'dark' : 'light';
  }

  return preference;
};

const getProfileTheme = (profile: ProfileRow | null): ThemePreference | null => {
  const pref = profile?.preferences?.theme;
  return pref === 'light' || pref === 'dark' || pref === 'system' ? pref : null;
};

const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key);
};

export function ThemeToggle() {
  const [themePreference, setThemePreference] = useState<ThemePreference>('light');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  const supabase = useMemo(() => getSupabaseClient(), []);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      const storedTheme = getStoredTheme();
      let profileTheme: ThemePreference | null = null;

      if (supabase) {
        const { data: authData } = await supabase.auth.getUser();
        const userId = authData.user?.id;

        if (userId) {
          const { data: profileData } = await supabase
            .from('user_profiles')
            .select('user_id, preferences')
            .eq('user_id', userId)
            .maybeSingle();

          profileTheme = getProfileTheme((profileData as ProfileRow | null) ?? null);
        }
      }

      const nextThemePreference = profileTheme ?? storedTheme ?? 'light';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const nextResolvedTheme = resolveTheme(nextThemePreference, prefersDark);

      if (!isMounted) return;
      setThemePreference(nextThemePreference);
      setResolvedTheme(nextResolvedTheme);
      applyTheme(nextResolvedTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, nextThemePreference);
      setIsInitialized(true);
    };

    void initialize();

    return () => {
      isMounted = false;
    };
  }, [supabase]);

  useEffect(() => {
    if (!isInitialized) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolvedTheme = () => {
      const nextResolvedTheme = resolveTheme(themePreference, mediaQuery.matches);
      setResolvedTheme(nextResolvedTheme);
      applyTheme(nextResolvedTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    };

    updateResolvedTheme();

    if (themePreference === 'system') {
      mediaQuery.addEventListener('change', updateResolvedTheme);
      return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
    }
  }, [themePreference, isInitialized]);

  const handleChange = async (nextTheme: ThemePreference) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextResolvedTheme = resolveTheme(nextTheme, prefersDark);

    setThemePreference(nextTheme);
    setResolvedTheme(nextResolvedTheme);
    applyTheme(nextResolvedTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    if (!supabase) return;

    const { data: authData } = await supabase.auth.getUser();
    const userId = authData.user?.id;
    if (!userId) return;

    const { data: profileData } = await supabase
      .from('user_profiles')
      .select('preferences')
      .eq('user_id', userId)
      .maybeSingle();

    const existingPreferences =
      profileData && typeof profileData === 'object' && 'preferences' in profileData
        ? ((profileData as { preferences?: Record<string, unknown> | null }).preferences ?? {})
        : {};

    const nextPreferences = {
      ...existingPreferences,
      theme: nextTheme,
    };

    const { error: upsertError } = await supabase
      .from('user_profiles')
      .upsert(
        {
          user_id: userId,
          email: authData.user?.email ?? '',
          preferences: nextPreferences,
        },
        { onConflict: 'user_id' }
      );

    if (upsertError) {
      console.error('[ThemeToggle] Failed to persist theme preference:', upsertError);
    }
  };

  return (
    <label className="inline-flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
      <span>Theme</span>
      <select
        aria-label="Theme preference"
        className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        value={themePreference}
        disabled={!isInitialized}
        onChange={(event) => {
          const value = event.target.value;
          if (value === 'light' || value === 'dark' || value === 'system') {
            void handleChange(value);
          }
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <span className="text-[10px] text-neutral-500 dark:text-neutral-400">({resolvedTheme})</span>
    </label>
  );
}
