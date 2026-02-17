'use client';

import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type ThemePreference = 'light' | 'dark';

type ProfileRow = {
  user_id: string;
  preferences?: Record<string, unknown> | null;
};

const THEME_STORAGE_KEY = 'readyall_theme_preference';

const getStoredTheme = (): ThemePreference | null => {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === 'light' || value === 'dark' ? value : null;
};

const applyTheme = (theme: ThemePreference) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
};

const getProfileTheme = (profile: ProfileRow | null): ThemePreference | null => {
  const pref = profile?.preferences?.theme;
  return pref === 'light' || pref === 'dark' ? pref : null;
};

const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key);
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>('light');
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

      const nextTheme = profileTheme ?? storedTheme ?? 'light';

      if (!isMounted) return;
      setTheme(nextTheme);
      applyTheme(nextTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      setIsInitialized(true);
    };

    void initialize();

    return () => {
      isMounted = false;
    };
  }, [supabase]);

  const handleChange = async (nextTheme: ThemePreference) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
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

    const { data: updatedRow, error: updateError } = await supabase
      .from('user_profiles')
      .update({ preferences: nextPreferences })
      .eq('user_id', userId)
      .select('user_id')
      .maybeSingle();

    if (updateError) {
      console.error('[ThemeToggle] Failed to update theme preference:', updateError);
      return;
    }

    if (updatedRow) return;

    const { error: insertError } = await supabase
      .from('user_profiles')
      .insert({
        user_id: userId,
        email: authData.user?.email ?? '',
        preferences: nextPreferences,
      });

    if (insertError) {
      console.error('[ThemeToggle] Failed to insert theme preference profile row:', insertError);
    }
  };

  return (
    <label className="inline-flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
      <span>Theme</span>
      <select
        aria-label="Theme preference"
        className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        value={theme}
        disabled={!isInitialized}
        onChange={(event) => {
          const value = event.target.value;
          if (value === 'light' || value === 'dark') {
            void handleChange(value);
          }
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
