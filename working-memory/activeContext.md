# Active Context — Train Better Hub

> Last updated: 2026-02-15

## Current State: Scaffolded — Ready for Content

The Hub repo is scaffolded with Next.js 16 (App Router), TypeScript strict, TailwindCSS, and page stubs for all IA sections. Build verified clean. Pushed to GitHub.

### What Exists
- Next.js 16 App Router + TypeScript + TailwindCSS
- 10 routes: `/`, `/products`, `/athletes`, `/coaches`, `/community`, `/docs`, `/roadmap`, `/feedback`, `/support`, `/_not-found`
- Shared type convention: `src/lib/types/` (database, shared, supabase, barrel)
- Supabase client wired (needs `.env` with real keys)
- `.env.example` with all expected vars
- `.github/instructions/copilot-instructions.md`
- `working-memory/` docs

### What's Next
- [x] Scaffold Next.js App Router project (TypeScript, TailwindCSS)
- [x] Set up shared type convention (`src/lib/types/`)
- [x] Create page stubs for IA
- [ ] Configure Vercel deployment for `train-better.app`
- [ ] Wire up Supabase Auth (shared project) — add real env vars
- [ ] Flesh out page content (Phase B issues #20-#29)
- [ ] Add `next/link` navigation (replace `<a>` tags for internal links)
- [ ] Mobile-responsive nav (hamburger menu)

### Blockers
- None currently

### References
- Architecture planning: `LogbookCompanion/working-memory/train-better-site-architecture.md`
- Phased roadmap: `LogbookCompanion/working-memory/train-better-change-roadmap-spec.md`
- Domain rollout: `LogbookCompanion/working-memory/domain-rollout-plan.md`
- GitHub issues: Epics #7-#11, Phase A #12-#19, Phase B #20-#29 (in `logbook-companion` repo)
