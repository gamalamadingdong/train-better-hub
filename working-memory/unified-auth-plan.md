# Unified Auth Plan (LC + Hub + ErgLink)

> Status: Planning only (not implemented)
> Last updated: 2026-02-15

## Goal
Provide a unified sign-in experience across the Train Better ecosystem while keeping one Supabase project and current app boundaries.

## Scope
- **In scope**: Hub (`train-better.app`), Logbook Companion (`logbook.train-better.app`), ErgLink (`erglink.train-better.app` landing + native app auth strategy)
- **Out of scope (for this phase)**: Full identity provider migration, custom auth server, org-wide RBAC redesign

## Current State
- All apps share one Supabase project/auth backend.
- Web apps run on different subdomains.
- Session behavior is still app-local in practice, which can feel like multiple logins.

## Desired UX
1. User signs in once from Hub or LC.
2. User can open other **web** subdomains without repeated interactive login.
3. ErgLink native app requires first login per device, then persists session normally.

## Constraints and Truths
- Browser session sharing across subdomains requires cookie/session strategy compatible with `.train-better.app`.
- Native mobile storage is separate from browser cookies, so mobile cannot transparently share browser session.
- Keep security posture strong: no public service role keys, strict redirect allowlists.

## Architecture Direction

### 1) Central Auth Entry Point (Web)
- Add a central auth route on Hub (or `auth.train-better.app` later if needed).
- Flow: app without session redirects to central auth with `returnTo` query param.
- After success, redirect back to requested app/page.

### 2) Shared Web Session Strategy
- Move to cookie-aware session handling for web where possible.
- Cookie/session domain intent: `.train-better.app`.
- Cookie settings: `Secure`, `SameSite=Lax`, HTTPS-only.
- Maintain Supabase as source of truth for tokens/session refresh.

### 3) Standardized Redirect Contracts
- All apps adopt the same auth callback contract:
  - `returnTo` validation against allowlist
  - fallback route per app (`/` or dashboard)
- Keep strict allowlists in Supabase redirect URLs.

### 4) Mobile ErgLink Alignment
- Keep native login in ErgLink (first login still required).
- Reuse same Supabase auth backend and user identity.
- Ensure post-login deep-link behavior is predictable and documented.

## Environment and Config Checklist

### Supabase
- Add/confirm site URLs and redirect URLs for:
  - `https://train-better.app`
  - `https://logbook.train-better.app`
  - `https://erglink.train-better.app` (if used for auth landing)

### Hub env
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_LC_URL=https://logbook.train-better.app`
- `NEXT_PUBLIC_EL_URL=https://erglink.train-better.app`
- `NEXT_PUBLIC_HUB_URL=https://train-better.app`

### LC env (existing Vite app)
- Keep current `VITE_SUPABASE_*` values.
- Add/verify centralized auth entry URL if used in redirect flow.

### OAuth providers (if enabled)
- Concept2 callback allowlist includes logbook domain callback URL.
- Any Google/OAuth callback list includes new production hosts.

## Delivery Phases

### Phase 0 — Document + Contract (this doc)
- Define flows and constraints.
- Confirm route contracts and allowlists.

### Phase 1 — Web SSO Foundation (Hub + LC)
- Implement central auth entry route and return flow.
- Implement session presence check + redirect logic in both web apps.
- Verify seamless navigation between Hub and LC after one login.

### Phase 2 — Hardening
- Add return URL validation helper shared pattern.
- Add auth smoke tests and failure-path handling.
- Add observability events (`auth_redirect_start`, `auth_redirect_success`, `auth_redirect_error`).

### Phase 3 — ErgLink UX Alignment
- Document first-login-per-device expectation in UX copy.
- Align deep-link and callback behavior with web identity and account continuity.

## Acceptance Criteria
- Web user signs in once and can open Hub + LC without repeated interactive login.
- Redirect loops do not occur.
- Unauthorized return targets are blocked.
- OAuth callbacks and Supabase redirects are all valid for production domains.
- ErgLink login flow remains stable and mapped to same user identity.

## Risks and Mitigations
- **Risk**: Redirect loop between apps.
  - **Mitigation**: deterministic auth guard order + explicit loop breaker flag.
- **Risk**: Misconfigured allowed redirects causing auth failure.
  - **Mitigation**: single source checklist + pre-launch validation script.
- **Risk**: Attempting true cookie SSO on native mobile.
  - **Mitigation**: explicitly treat native login as separate first-login surface.

## Decision Notes
- Keep one Supabase auth backend.
- Prioritize web SSO consistency first (Hub + LC).
- Accept native mobile first-login constraint as normal.
