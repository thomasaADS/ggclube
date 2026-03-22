# GGClube Ecosystem — Architecture & Implementation Guide

> **Version:** 1.0.0
> **Last Updated:** 2026-03-22
> **Status:** Implementation-Ready
> **Maintainers:** GGClube Engineering & Product Team

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Brand Architecture](#2-brand-architecture)
3. [Product Architecture](#3-product-architecture)
4. [Technical Architecture](#4-technical-architecture)
5. [Monorepo Structure](#5-monorepo-structure)
6. [Shared Design System — The Obsidian Ledger](#6-shared-design-system--the-obsidian-ledger)
7. [Site-by-Site Sitemap](#7-site-by-site-sitemap)
8. [Page-by-Page Breakdown](#8-page-by-page-breakdown)
9. [SEO Architecture](#9-seo-architecture)
10. [CMS & Admin Architecture](#10-cms--admin-architecture)
11. [Legal / Support / Compliance Architecture](#11-legal--support--compliance-architecture)
12. [Data Models](#12-data-models)
13. [Analytics / CRO Plan](#13-analytics--cro-plan)
14. [Content Engine](#14-content-engine)
15. [7-Day Social Content Plan](#15-7-day-social-content-plan)
16. [YouTube / Video Integration](#16-youtube--video-integration)
17. [Internal Linking Strategy](#17-internal-linking-strategy)
18. [Art Direction — The Obsidian Ledger](#18-art-direction--the-obsidian-ledger)
19. [Reusable Components List](#19-reusable-components-list)
20. [Implementation Roadmap](#20-implementation-roadmap)
21. [QA Checklist](#21-qa-checklist)
22. [Brand/Compliance Risks](#22-brandcompliance-risks)
23. [Launch-Readiness Assessment](#23-launch-readiness-assessment)

---

## 1. Executive Summary

### Overview

GGClube is a three-site ecosystem serving the poker community through trust, education, and journalism. The platform is built around three distinct but interconnected brands:

| Brand | Domain | Purpose |
|-------|--------|---------|
| **GGClube Union** | `ggclube.com` | Community hub, verification directory, trust layer |
| **GGClube News** | `news.ggclube.com` | Editorial platform for poker news, tournaments, and investigative reporting |
| **GGClube Academy** | `academy.ggclube.com` | Learning platform for poker strategy, courses, and coaching |

### Mission

To build the most trusted independent poker community ecosystem — one that verifies agents, educates players, and reports on the industry with editorial independence and integrity.

### Technical Stack Summary

- **Framework:** Next.js 15 (App Router) with TypeScript (strict mode)
- **Monorepo:** Turborepo with shared packages
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Backend:** Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions)
- **Deployment:** Vercel (multi-domain configuration)
- **Design System:** "The Obsidian Ledger" — a dark, editorial, trust-forward visual identity

### Positioning

GGClube references ClubGG as contextual background — many community members come from ClubGG or interact with ClubGG agents. **GGClube is NOT a clone, affiliate, or official extension of ClubGG.** It is an independent community platform. All public-facing copy must make this distinction clear.

### Key Metrics

- **Union:** Agent applications, player sign-ups, verification completions, directory views
- **News:** Pageviews, newsletter subscribers, time on page, return visitors
- **Academy:** Course enrollments, lesson completions, membership conversions, coaching bookings

---

## 2. Brand Architecture

### 2.1 Brand Hierarchy

```
GGClube (Umbrella Brand)
├── GGClube Union     — "The Trust Layer"
├── GGClube News      — "The Editorial Voice"
└── GGClube Academy   — "The Learning Engine"
```

### 2.2 Umbrella Brand: GGClube

- **Tagline:** "Where Poker Meets Trust"
- **Brand Promise:** Independent community infrastructure for the poker world
- **Voice:** Authoritative, transparent, community-first, professional yet approachable
- **Tone:** Confident but never arrogant. Informative but never condescending. Trust-forward but never preachy.

### 2.3 Sub-Brand Positioning

#### GGClube Union

- **Role:** Community trust hub and verified directory
- **Voice:** Formal, trustworthy, institutional
- **Tagline:** "Verified Community. Real Trust."
- **Audience:** Poker players seeking verified agents; agents seeking credibility
- **Key Emotion:** Safety, confidence, belonging

#### GGClube News

- **Role:** Independent poker journalism platform
- **Voice:** Editorial, sharp, investigative, timely
- **Tagline:** "Poker's Independent Voice"
- **Audience:** Poker enthusiasts, tournament followers, industry insiders
- **Key Emotion:** Informed, engaged, ahead of the curve

#### GGClube Academy

- **Role:** Poker education and skill development platform
- **Voice:** Encouraging, expert, structured, results-oriented
- **Tagline:** "Level Up Your Game"
- **Audience:** Beginner to intermediate poker players, aspiring pros
- **Key Emotion:** Growth, competence, achievement

### 2.4 Design System Name: "The Obsidian Ledger"

The visual identity is named **The Obsidian Ledger** — evoking the weight of a record book, the darkness of obsidian stone, and the precision of a financial ledger. This name governs all visual decisions across the ecosystem.

### 2.5 Color System

#### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `obsidian-950` | `#0A0A0B` | Primary background, deep sections |
| `obsidian-900` | `#111113` | Card backgrounds, elevated surfaces |
| `obsidian-800` | `#1A1A1E` | Secondary surfaces, sidebar |
| `obsidian-700` | `#252529` | Tertiary surfaces, hover states |
| `graphite-700` | `#3A3A42` | Borders, dividers |
| `graphite-600` | `#4A4A54` | Subtle borders, disabled states |
| `graphite-500` | `#5C5C68` | Placeholder text |
| `graphite-400` | `#7A7A88` | Secondary text |
| `graphite-300` | `#9A9AAA` | Tertiary text |

#### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `emerald-500` | `#10B981` | Primary accent, CTAs, verified status |
| `emerald-400` | `#34D399` | Hover state for emerald |
| `emerald-600` | `#059669` | Active state for emerald |
| `emerald-900` | `#064E3B` | Emerald background tint |
| `platinum-400` | `#E2E8F0` | Premium accent, headings |
| `platinum-300` | `#CBD5E1` | Secondary premium accent |
| `platinum-200` | `#F1F5F9` | Light text on dark backgrounds |
| `ivory-100` | `#F8FAFC` | Body text on dark backgrounds |
| `ivory-50` | `#FFFFFF` | Pure white, sparingly used |

#### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `alert-red-500` | `#EF4444` | Errors, alerts, concern status |
| `alert-red-400` | `#F87171` | Hover state for alert |
| `gold-500` | `#F59E0B` | Under-review status, warnings |
| `gold-400` | `#FBBF24` | Hover state for gold |
| `blue-500` | `#3B82F6` | Informational, links in content |
| `blue-400` | `#60A5FA` | Hover state for blue |

### 2.6 Typography

#### Primary Typeface: Inter

- **Why:** Excellent readability at all sizes, variable font support, extensive weight range, well-suited for data-dense interfaces and editorial content.
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Fallback Stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

#### Monospace (Code/Data)

- **Typeface:** JetBrains Mono
- **Usage:** Statistics, rankings, code snippets, timestamps
- **Fallback:** `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

### 2.7 ClubGG Reference Alignment

- GGClube exists within the cultural context of ClubGG — many users and agents are affiliated with ClubGG.
- All content must include a clear disclaimer: **"GGClube is an independent community platform and is not affiliated with, endorsed by, or officially connected to ClubGG or GGPoker."**
- The GGClube name intentionally nods to the culture but builds its own identity.
- Never use ClubGG logos, official imagery, or trademarked assets.
- When discussing ClubGG agents or topics, use factual, neutral language.
- The relationship is **contextual reference**, never implied partnership.

---

## 3. Product Architecture

### 3.1 GGClube Union — `ggclube.com`

#### Purpose
The trust and community layer of the ecosystem. Union verifies poker agents, provides a public directory, and connects players with trustworthy agents.

#### Primary Goals
1. Build the largest verified agent directory in the poker community
2. Provide players with a trust-based system for finding agents
3. Create community standards and moderation infrastructure
4. Serve as the central landing point for the GGClube brand

#### Target Audience
- **Primary:** Poker players looking for verified agents
- **Secondary:** Poker agents seeking verification and visibility
- **Tertiary:** Industry partners and organizations

#### Conversion Targets
- Agent application submissions
- Player registrations
- Directory engagement (profile views, contact clicks)
- Partner inquiries
- Newsletter sign-ups

#### Key Features
- Agent verification system (multi-step review process)
- Public directory with search and filter
- Community standards documentation
- Agent and player application forms
- Trust-forward landing pages
- FAQ and support infrastructure

---

### 3.2 GGClube News — `news.ggclube.com`

#### Purpose
Independent editorial platform covering poker news, tournaments, strategy insights, and industry investigations. Establishes GGClube as a credible media voice.

#### Primary Goals
1. Publish timely, trustworthy poker journalism
2. Build an audience of engaged poker readers
3. Maintain a verified directory cross-linked with Union
4. Drive traffic and authority across the ecosystem via content

#### Target Audience
- **Primary:** Active poker players following the scene
- **Secondary:** Tournament watchers and fans
- **Tertiary:** Industry professionals and operators

#### Conversion Targets
- Newsletter subscribers
- Return visitor rate
- Article shares and engagement
- Cross-site traffic to Union and Academy
- Tip submissions

#### Key Features
- Article publishing with rich media support
- Tournament coverage and results
- Verified directory (syndicated from Union)
- Under-review and alert sections for industry accountability
- Author profiles
- Video and podcast integration
- Newsletter system

---

### 3.3 GGClube Academy — `academy.ggclube.com`

#### Purpose
Poker education platform offering structured courses, individual lessons, learning paths, and coaching services. Monetization layer of the ecosystem.

#### Primary Goals
1. Deliver high-quality poker education content
2. Build a membership/subscription revenue stream
3. Connect students with verified coaches
4. Create a learning community

#### Target Audience
- **Primary:** Beginner to intermediate poker players
- **Secondary:** Serious recreational players looking to improve
- **Tertiary:** Players interested in coaching

#### Conversion Targets
- Free course enrollments (lead generation)
- Paid membership conversions
- Coaching session bookings
- Course completion rates
- Community participation

#### Key Features
- Structured course system with lessons and progress tracking
- Learning paths (curated sequences of courses)
- Coach directory and booking
- Membership tiers (Free, Premium, Pro)
- Community forums/discussion
- Blog for strategy content
- Free resources section (lead magnets)

---

## 4. Technical Architecture

### 4.1 Core Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js | 15.x | App Router, Server Components |
| Language | TypeScript | 5.x | Strict mode enabled |
| Styling | Tailwind CSS | 4.x | JIT, custom design tokens |
| Animation | Framer Motion | 11.x | Page transitions, micro-interactions |
| Database | Supabase (PostgreSQL) | Latest | Row-Level Security enabled |
| Auth | Supabase Auth | Latest | Email/password, magic link, OAuth |
| Storage | Supabase Storage | Latest | Images, PDFs, video thumbnails |
| Edge Functions | Supabase Edge Functions | Deno runtime | Webhooks, cron tasks |
| Monorepo | Turborepo | Latest | Parallel builds, caching |
| Package Manager | pnpm | 9.x | Workspace protocol |
| Deployment | Vercel | N/A | Preview + Production |
| Email | Resend | Latest | Transactional emails |
| Search | Meilisearch | Latest | Full-text search for articles/directory |
| Analytics | PostHog | Latest | Event tracking, funnels, feature flags |
| Error Tracking | Sentry | Latest | Error monitoring, performance |

### 4.2 Multi-Domain Configuration

```
ggclube.com           → apps/union       (Vercel project: ggclube-union)
news.ggclube.com      → apps/news        (Vercel project: ggclube-news)
academy.ggclube.com   → apps/academy     (Vercel project: ggclube-academy)
admin.ggclube.com     → apps/admin       (Vercel project: ggclube-admin) [internal]
```

Each app is a separate Vercel project within the same Turborepo, sharing packages.

### 4.3 Rendering Strategy

| Page Type | Strategy | Revalidation | Examples |
|-----------|----------|-------------|----------|
| Marketing/Static | SSG | On deploy | `/about`, `/legal/*`, `/faq` |
| Articles/Courses | ISR | 60 seconds | `/news/[slug]`, `/courses/[slug]` |
| Dynamic/Personalized | SSR | Real-time | `/apply/*`, `/dashboard`, `/membership` |
| Directory | ISR | 300 seconds | `/verified-directory`, `/coaches` |
| Listings | ISR | 120 seconds | `/latest`, `/courses`, `/tournaments` |
| Search Results | SSR | Real-time | `/search?q=...` |

### 4.4 Supabase Configuration

#### Database

- **Region:** US East (or closest to primary audience)
- **Connection Pooling:** PgBouncer enabled (transaction mode)
- **Row Level Security:** Enabled on ALL tables
- **Realtime:** Enabled for `notifications`, `support_tickets`, `moderation_queue`

#### Auth

- **Providers:** Email/Password, Magic Link, Google OAuth
- **Session Duration:** 7 days
- **Refresh Token Rotation:** Enabled
- **MFA:** Optional for admin roles, recommended for agents
- **Roles:** Managed via `profiles.role` column with RLS policies

#### Storage Buckets

| Bucket | Access | Max File Size | Allowed Types |
|--------|--------|--------------|---------------|
| `avatars` | Public | 2MB | jpg, png, webp |
| `article-images` | Public | 5MB | jpg, png, webp, gif |
| `course-assets` | Authenticated | 50MB | jpg, png, webp, mp4, pdf |
| `documents` | Private | 10MB | pdf, jpg, png |
| `logos` | Public | 1MB | svg, png |

### 4.5 Caching Strategy

```
Browser Cache:
  - Static assets: 1 year (immutable)
  - HTML: no-cache (stale-while-revalidate via ISR)
  - API responses: varies by endpoint

CDN (Vercel Edge):
  - ISR pages: cached until revalidated
  - Static pages: cached until next deploy
  - API routes: no-cache by default

Application Cache:
  - Supabase query results: React Query with staleTime per query
  - Search index: Meilisearch (auto-synced via webhooks)
  - Session data: Supabase Auth cookies
```

### 4.6 Environment Variables

```bash
# Shared across all apps
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
SENTRY_DSN=
RESEND_API_KEY=
MEILISEARCH_HOST=
MEILISEARCH_API_KEY=

# Per-app
NEXT_PUBLIC_SITE_URL=           # ggclube.com | news.ggclube.com | academy.ggclube.com
NEXT_PUBLIC_SITE_NAME=          # Union | News | Academy
NEXT_PUBLIC_SITE_BRAND=         # union | news | academy
VERCEL_PROJECT_ID=
```

### 4.7 API Architecture

All data access goes through Supabase. No custom REST API server.

- **Client-side reads:** Supabase JS client with RLS
- **Server-side reads:** Supabase service role in Server Components
- **Mutations:** Supabase JS client (with RLS) or Server Actions (Next.js)
- **Webhooks:** Supabase Edge Functions for external integrations
- **Search:** Meilisearch API (proxied through Next.js API routes to protect keys)

---

## 5. Monorepo Structure

```
ggclube/
├── apps/
│   ├── union/                          # ggclube.com
│   │   ├── app/
│   │   │   ├── (marketing)/
│   │   │   │   ├── page.tsx            # Homepage
│   │   │   │   ├── about/
│   │   │   │   ├── our-network/
│   │   │   │   ├── for-agents/
│   │   │   │   ├── for-players/
│   │   │   │   ├── how-verification-works/
│   │   │   │   ├── community-standards/
│   │   │   │   ├── why-ggclube/
│   │   │   │   ├── partners/
│   │   │   │   └── faq/
│   │   │   ├── (applications)/
│   │   │   │   ├── apply/
│   │   │   │   │   ├── agent/
│   │   │   │   │   └── player/
│   │   │   ├── (support)/
│   │   │   │   ├── contact/
│   │   │   │   ├── support/
│   │   │   │   └── report-concern/
│   │   │   ├── (legal)/
│   │   │   │   └── legal/
│   │   │   │       ├── terms/
│   │   │   │       ├── privacy/
│   │   │   │       ├── disclaimer/
│   │   │   │       ├── cookie-policy/
│   │   │   │       └── community-guidelines/
│   │   │   ├── layout.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── globals.css
│   │   ├── components/                  # Union-specific components
│   │   ├── lib/                         # Union-specific utilities
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── news/                            # news.ggclube.com
│   │   ├── app/
│   │   │   ├── (editorial)/
│   │   │   │   ├── page.tsx             # Homepage
│   │   │   │   ├── latest/
│   │   │   │   ├── tournaments/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── news/
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── features/
│   │   │   │   ├── guides/
│   │   │   │   ├── strategy/
│   │   │   │   └── rankings/
│   │   │   ├── (directory)/
│   │   │   │   ├── verified-directory/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── under-review/
│   │   │   │   └── alerts/
│   │   │   ├── (media)/
│   │   │   │   ├── video/
│   │   │   │   └── podcast/
│   │   │   ├── (authors)/
│   │   │   │   └── authors/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [slug]/
│   │   │   ├── (engage)/
│   │   │   │   ├── newsletter/
│   │   │   │   ├── about-editorial/
│   │   │   │   └── submit-a-tip/
│   │   │   ├── (legal)/
│   │   │   │   └── legal/
│   │   │   │       ├── terms/
│   │   │   │       ├── privacy/
│   │   │   │       ├── editorial-policy/
│   │   │   │       ├── corrections/
│   │   │   │       └── disclaimer/
│   │   │   ├── layout.tsx
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── academy/                         # academy.ggclube.com
│   │   ├── app/
│   │   │   ├── (learning)/
│   │   │   │   ├── page.tsx             # Homepage
│   │   │   │   ├── courses/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── lessons/
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── learning-paths/
│   │   │   │   └── free-resources/
│   │   │   ├── (coaching)/
│   │   │   │   └── coaches/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [slug]/
│   │   │   ├── (community)/
│   │   │   │   ├── community/
│   │   │   │   ├── testimonials/
│   │   │   │   └── blog/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [slug]/
│   │   │   ├── (membership)/
│   │   │   │   ├── membership/
│   │   │   │   └── pricing/
│   │   │   ├── (auth)/
│   │   │   │   ├── join/
│   │   │   │   └── login/
│   │   │   ├── (support)/
│   │   │   │   └── faq/
│   │   │   ├── (legal)/
│   │   │   │   └── legal/
│   │   │   │       ├── terms/
│   │   │   │       ├── privacy/
│   │   │   │       ├── refund-policy/
│   │   │   │       └── disclaimer/
│   │   │   ├── layout.tsx
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── admin/                           # admin.ggclube.com (internal)
│       ├── app/
│       │   ├── dashboard/
│       │   ├── content/
│       │   ├── users/
│       │   ├── moderation/
│       │   ├── directory/
│       │   ├── analytics/
│       │   └── settings/
│       └── package.json
│
├── packages/
│   ├── ui/                              # @ggclube/ui — Shared component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   ├── Card/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Navbar/
│   │   │   │   ├── Footer/
│   │   │   │   ├── Hero/
│   │   │   │   ├── Section/
│   │   │   │   ├── Breadcrumb/
│   │   │   │   ├── Skeleton/
│   │   │   │   ├── Toast/
│   │   │   │   ├── Tooltip/
│   │   │   │   ├── Avatar/
│   │   │   │   ├── Dropdown/
│   │   │   │   ├── Tabs/
│   │   │   │   ├── Accordion/
│   │   │   │   ├── DataTable/
│   │   │   │   ├── Pagination/
│   │   │   │   ├── SearchBar/
│   │   │   │   ├── FilterPanel/
│   │   │   │   ├── StatusBadge/
│   │   │   │   ├── ProgressBar/
│   │   │   │   ├── Ticker/
│   │   │   │   ├── DataRibbon/
│   │   │   │   └── index.ts
│   │   │   ├── layouts/
│   │   │   │   ├── MarketingLayout/
│   │   │   │   ├── EditorialLayout/
│   │   │   │   ├── LearningLayout/
│   │   │   │   └── AuthLayout/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── brand/                           # @ggclube/brand — Design tokens & theme
│   │   ├── src/
│   │   │   ├── tokens/
│   │   │   │   ├── colors.ts
│   │   │   │   ├── typography.ts
│   │   │   │   ├── spacing.ts
│   │   │   │   ├── shadows.ts
│   │   │   │   ├── borders.ts
│   │   │   │   ├── radii.ts
│   │   │   │   ├── animation.ts
│   │   │   │   └── index.ts
│   │   │   ├── themes/
│   │   │   │   ├── union.ts
│   │   │   │   ├── news.ts
│   │   │   │   ├── academy.ts
│   │   │   │   └── index.ts
│   │   │   ├── tailwind-preset.ts       # Shared Tailwind preset
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── seo/                             # @ggclube/seo — SEO utilities
│   │   ├── src/
│   │   │   ├── metadata.ts              # Metadata generators
│   │   │   ├── schema.ts               # JSON-LD schema generators
│   │   │   ├── sitemap.ts              # Sitemap generation helpers
│   │   │   ├── breadcrumbs.ts          # Breadcrumb utilities
│   │   │   ├── canonical.ts            # Canonical URL helpers
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── analytics/                       # @ggclube/analytics — Event tracking
│   │   ├── src/
│   │   │   ├── provider.tsx             # PostHog provider
│   │   │   ├── events.ts               # Event definitions
│   │   │   ├── track.ts                # Track function
│   │   │   ├── identify.ts             # User identification
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── content/                         # @ggclube/content — Content utilities
│   │   ├── src/
│   │   │   ├── types.ts                # Content type definitions
│   │   │   ├── queries.ts              # Supabase query builders
│   │   │   ├── transforms.ts           # Data transformation utilities
│   │   │   ├── validation.ts           # Content validation schemas (Zod)
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── supabase/                        # @ggclube/supabase — Database client & types
│   │   ├── src/
│   │   │   ├── client.ts               # Browser client
│   │   │   ├── server.ts               # Server client
│   │   │   ├── admin.ts                # Service role client
│   │   │   ├── types.ts                # Generated database types
│   │   │   └── index.ts
│   │   ├── migrations/
│   │   ├── seed/
│   │   ├── schema.sql
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── email/                           # @ggclube/email — Email templates
│       ├── src/
│       │   ├── templates/
│       │   │   ├── welcome.tsx
│       │   │   ├── verification-status.tsx
│       │   │   ├── newsletter.tsx
│       │   │   ├── course-enrollment.tsx
│       │   │   ├── support-ticket.tsx
│       │   │   └── password-reset.tsx
│       │   ├── send.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── tooling/
│   ├── eslint/                          # Shared ESLint config
│   │   └── index.js
│   ├── typescript/                      # Shared tsconfig
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   └── library.json
│   └── prettier/                        # Shared Prettier config
│       └── index.js
│
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── .env.example
├── .gitignore
├── ARCHITECTURE.md                      # This document
└── README.md
```

---

## 6. Shared Design System — The Obsidian Ledger

### 6.1 Typography Scale

All sizes use `rem` units with Inter as the base typeface.

#### Display Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display-7xl` | `4.5rem` (72px) | `1.1` | 800 | Hero headlines (homepage only) |
| `display-6xl` | `3.75rem` (60px) | `1.1` | 800 | Section heroes |
| `display-5xl` | `3rem` (48px) | `1.15` | 700 | Page titles |
| `display-4xl` | `2.25rem` (36px) | `1.2` | 700 | Major section headers |
| `display-3xl` | `1.875rem` (30px) | `1.25` | 700 | Sub-section headers |
| `display-2xl` | `1.5rem` (24px) | `1.3` | 600 | Card titles, H3 |
| `display-xl` | `1.25rem` (20px) | `1.35` | 600 | Small headers, H4 |

#### Body Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `body-lg` | `1.125rem` (18px) | `1.7` | 400 | Article body, long-form |
| `body-base` | `1rem` (16px) | `1.6` | 400 | Default body text |
| `body-sm` | `0.875rem` (14px) | `1.55` | 400 | Supporting text, captions |

#### Label Scale

| Token | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `label-sm` | `0.875rem` (14px) | `1.4` | 500 | `0.01em` | Form labels, nav items |
| `label-xs` | `0.75rem` (12px) | `1.4` | 600 | `0.04em` | Badges, status text, overlines |

### 6.2 Spacing System

Base unit: **8px grid**

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | `0` | Reset |
| `space-0.5` | `2px` | Hairline gaps |
| `space-1` | `4px` | Tight padding |
| `space-2` | `8px` | Icon gaps, tight margins |
| `space-3` | `12px` | Small padding |
| `space-4` | `16px` | Default padding, card inner |
| `space-5` | `20px` | Medium gaps |
| `space-6` | `24px` | Section padding (mobile) |
| `space-8` | `32px` | Section gaps |
| `space-10` | `40px` | Large section padding |
| `space-12` | `48px` | Section padding (tablet) |
| `space-16` | `64px` | Section padding (desktop) |
| `space-20` | `80px` | Page section vertical spacing |
| `space-24` | `96px` | Hero vertical padding |
| `space-32` | `128px` | Maximum section spacing |

### 6.3 Corner Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `4px` | Badges, small tags |
| `radius-md` | `6px` | Buttons, inputs |
| `radius-lg` | `8px` | Cards, modals |
| `radius-xl` | `12px` | Large cards, hero elements |
| `radius-2xl` | `16px` | Feature cards, image containers |
| `radius-full` | `9999px` | Avatars, pills |

### 6.4 Shadow System

```css
/* Subtle — for nested elements, slight lift */
--shadow-subtle: 0 1px 2px 0 rgba(0, 0, 0, 0.3);

/* Card — default card elevation */
--shadow-card: 0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 1px 3px -1px rgba(0, 0, 0, 0.3);

/* Elevated — modals, dropdowns, popovers */
--shadow-elevated: 0 8px 24px -4px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

/* Glow Emerald — primary CTA hover, verified status emphasis */
--shadow-glow-emerald: 0 0 20px -4px rgba(16, 185, 129, 0.3), 0 0 8px -2px rgba(16, 185, 129, 0.2);

/* Glow Platinum — premium/featured elements */
--shadow-glow-platinum: 0 0 20px -4px rgba(226, 232, 240, 0.15), 0 0 8px -2px rgba(226, 232, 240, 0.1);
```

### 6.5 Border System

```css
/* Default border */
--border-default: 1px solid var(--graphite-700);

/* Subtle border */
--border-subtle: 1px solid var(--graphite-600);

/* Accent border */
--border-accent: 1px solid var(--emerald-500);

/* Focus ring */
--border-focus: 2px solid var(--emerald-500);
```

### 6.6 Animation Tokens

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `duration-fast` | `150ms` | `ease-out` | Button hover, toggle, micro-interactions |
| `duration-base` | `250ms` | `ease-in-out` | Card hover, accordion expand, fade-in |
| `duration-slow` | `400ms` | `ease-in-out` | Modal open/close, drawer, page section reveal |
| `duration-cinematic` | `700ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero entrance, page transitions, scroll reveals |

#### Framer Motion Presets

```typescript
// Fade up — default entrance animation
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

// Stagger children — for lists and grids
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

// Scale in — for modals and popovers
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
};

// Slide in from right — for drawers and panels
export const slideInRight = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};
```

### 6.7 Status Badge System

| Status | Background | Text | Border | Icon | Usage |
|--------|-----------|------|--------|------|-------|
| `verified` | `emerald-900/40` | `emerald-400` | `emerald-500/30` | Checkmark circle | Verified agents in directory |
| `unverified` | `graphite-700/40` | `graphite-300` | `graphite-600/30` | Circle outline | Unverified/new entries |
| `under-review` | `gold-900/40` | `gold-400` | `gold-500/30` | Clock | Under investigation |
| `concern` | `alert-red-900/40` | `alert-red-400` | `alert-red-500/30` | Alert triangle | Flagged concerns |
| `paused` | `graphite-800/40` | `graphite-400` | `graphite-700/30` | Pause circle | Temporarily paused |

```tsx
// Usage
<StatusBadge status="verified" />
<StatusBadge status="under-review" size="sm" />
<StatusBadge status="concern" showIcon />
```

### 6.8 Card Families

#### Content Card
- **Use:** Articles, news items, guides
- **Structure:** Image (16:9) + Category badge + Title + Excerpt + Author + Date
- **Background:** `obsidian-900`
- **Border:** `graphite-700`
- **Hover:** Subtle lift + `shadow-card` + border transitions to `graphite-600`
- **Radius:** `radius-lg`

#### Profile Card
- **Use:** Agent profiles, author profiles, coach profiles
- **Structure:** Avatar + Name + Title/Role + Status badge + Stats row + Action button
- **Background:** `obsidian-900`
- **Border:** `graphite-700` (verified: `emerald-500/20`)
- **Hover:** Glow effect based on status
- **Radius:** `radius-xl`

#### Course Card
- **Use:** Course listings, learning path items
- **Structure:** Thumbnail + Level badge + Title + Description + Duration + Progress bar + Enroll CTA
- **Background:** `obsidian-900`
- **Border:** `graphite-700`
- **Hover:** Subtle lift + emerald glow
- **Radius:** `radius-xl`

#### Stat Card
- **Use:** Metrics, KPIs, dashboard numbers
- **Structure:** Icon + Label + Value (display font) + Trend indicator
- **Background:** `obsidian-800`
- **Border:** `graphite-700`
- **Radius:** `radius-lg`

#### CTA Card
- **Use:** Conversion blocks, sign-up prompts, upsells
- **Structure:** Headline + Description + Primary CTA + Optional secondary link
- **Background:** Gradient from `obsidian-900` to `obsidian-800` with emerald accent line
- **Border:** `emerald-500/20`
- **Radius:** `radius-2xl`

### 6.9 CTA Button Families

| Variant | Background | Text | Border | Hover | Usage |
|---------|-----------|------|--------|-------|-------|
| `primary` | `emerald-500` | `obsidian-950` | none | `emerald-400` + glow | Main actions: Apply, Enroll, Subscribe |
| `secondary` | `graphite-700` | `ivory-100` | none | `graphite-600` | Secondary actions: Learn More, View |
| `ghost` | transparent | `ivory-100` | none | `obsidian-800` bg | Tertiary actions, navigation |
| `outline` | transparent | `emerald-400` | `emerald-500` | `emerald-900/30` bg | Alternative primary, less emphasis |
| `platinum` | `platinum-400` | `obsidian-950` | none | `platinum-300` + glow | Premium CTAs, membership upgrades |

#### Button Sizes

| Size | Padding | Font Size | Height |
|------|---------|-----------|--------|
| `sm` | `8px 16px` | `14px` | `36px` |
| `md` | `10px 20px` | `16px` | `44px` |
| `lg` | `14px 28px` | `18px` | `52px` |
| `xl` | `16px 32px` | `18px` | `56px` |

### 6.10 Section Transitions

Sections are separated by:

```css
/* Standard divider */
.section-divider {
  border-top: 1px solid var(--graphite-700);
}

/* Gradient divider — for major section breaks */
.section-divider-gradient {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--graphite-600) 20%,
    var(--emerald-500) 50%,
    var(--graphite-600) 80%,
    transparent 100%
  );
}

/* Accent divider — before CTA sections */
.section-divider-accent {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--emerald-500) 50%,
    transparent 100%
  );
}
```

---

## 7. Site-by-Site Sitemap

### 7.1 GGClube Union — `ggclube.com`

```
/                                   Homepage
/about                              About GGClube
/our-network                        Network overview
/for-agents                         Agent landing page
/for-players                        Player landing page
/how-verification-works             Verification process explainer
/community-standards                Community standards & rules
/why-ggclube                        Value proposition page
/partners                           Partners & organizations
/faq                                Frequently asked questions
/apply/agent                        Agent application form
/apply/player                       Player registration form
/contact                            Contact page
/support                            Support center
/report-concern                     Report a concern form
/legal/terms                        Terms of Service
/legal/privacy                      Privacy Policy
/legal/disclaimer                   Disclaimer (ClubGG affiliation)
/legal/cookie-policy                Cookie Policy
/legal/community-guidelines         Community Guidelines
```

### 7.2 GGClube News — `news.ggclube.com`

```
/                                   Homepage (editorial front page)
/latest                             Latest articles feed
/tournaments                        Tournament hub
/tournaments/[slug]                 Individual tournament page
/news/[slug]                        Individual article page
/features                           Featured long-form articles
/guides                             Poker guides hub
/strategy                           Strategy articles hub
/rankings                           Rankings & leaderboards
/verified-directory                 Verified agent/entity directory
/verified-directory/[slug]          Individual directory profile
/under-review                       Entities under review
/alerts                             Community alerts & notices
/video                              Video content hub
/podcast                            Podcast hub
/authors                            Authors index
/authors/[slug]                     Author profile page
/newsletter                         Newsletter sign-up
/about-editorial                    About our editorial team
/submit-a-tip                       Anonymous tip submission
/legal/terms                        Terms of Service
/legal/privacy                      Privacy Policy
/legal/editorial-policy             Editorial Policy
/legal/corrections                  Corrections & Retractions
/legal/disclaimer                   Disclaimer
```

### 7.3 GGClube Academy — `academy.ggclube.com`

```
/                                   Homepage
/courses                            Course catalog
/courses/[slug]                     Individual course page
/lessons/[slug]                     Individual lesson page
/learning-paths                     Curated learning paths
/coaches                            Coach directory
/coaches/[slug]                     Individual coach profile
/community                          Community hub
/membership                         Membership overview
/pricing                            Pricing page
/free-resources                     Free resources & downloads
/blog                               Academy blog
/blog/[slug]                        Individual blog post
/faq                                Frequently asked questions
/testimonials                       Student testimonials
/join                               Registration page
/login                              Login page
/legal/terms                        Terms of Service
/legal/privacy                      Privacy Policy
/legal/refund-policy                Refund Policy
/legal/disclaimer                   Disclaimer
```

---

## 8. Page-by-Page Breakdown

### 8.1 GGClube Union Pages

---

#### Page: Union Homepage

- **URL:** `ggclube.com/`
- **Page Goal:** Introduce GGClube, establish trust, drive agent applications and player registrations
- **Primary Audience:** New visitors — both agents and players
- **Search Intent:** Navigational (brand search), informational (what is GGClube)
- **H1:** "Where Poker Meets Trust"
- **Metadata:**
  - Title: "GGClube — Verified Poker Community & Agent Directory"
  - Description: "GGClube is the independent poker community platform connecting verified agents with players. Join the most trusted network in poker."
- **Main Sections:**
  1. Hero — brand statement, dual CTA (For Agents / For Players)
  2. Trust Pillars — 3 cards: Verification, Community Standards, Transparency
  3. How It Works — 3-step visual flow
  4. Network Stats — data ribbon (agents verified, players connected, etc.)
  5. Featured Directory Profiles — carousel of verified agents
  6. Ecosystem Introduction — Union, News, Academy cards
  7. Testimonials — community voices
  8. Final CTA — apply or explore
- **Supporting Modules:** Ticker (latest verified agents), trust badges, FAQ accordion
- **CTA:** Primary: "Apply as an Agent" / "Join as a Player" | Secondary: "Explore the Directory"
- **Trust Blocks:** Verification badge explanation, community standards link, disclaimer footer
- **Internal Links:** /for-agents, /for-players, /how-verification-works, /community-standards, news.ggclube.com, academy.ggclube.com
- **Schema Type:** `Organization`, `WebSite`, `FAQPage`
- **Content Notes:** Hero must include the independence disclaimer. Stats should be real or use "launching soon" placeholders. Never claim official ClubGG affiliation.
- **Visual Direction:** Full-width obsidian hero with cinematic fade-in. Emerald accent line below hero. Glass-matte card treatment for trust pillars. Data ribbon with monospace numerals.

---

#### Page: About

- **URL:** `ggclube.com/about`
- **Page Goal:** Tell the GGClube story, build brand credibility, humanize the team
- **Primary Audience:** Visitors seeking to understand the organization
- **Search Intent:** Informational
- **H1:** "About GGClube"
- **Metadata:**
  - Title: "About GGClube — Our Mission, Team & Story"
  - Description: "Learn about GGClube's mission to build the most trusted independent poker community. Meet the team behind the verification network."
- **Main Sections:**
  1. Mission statement with visual narrative
  2. Origin story — why GGClube was created
  3. Core values — trust, transparency, independence, community
  4. The ecosystem explained (Union, News, Academy)
  5. Team section (if applicable)
  6. Independence declaration
- **Supporting Modules:** Timeline, value cards, team grid
- **CTA:** "Join Our Community" / "Read Our Standards"
- **Trust Blocks:** Independence disclaimer, community standards link
- **Internal Links:** /community-standards, /how-verification-works, /our-network
- **Schema Type:** `Organization`, `AboutPage`
- **Content Notes:** Must clearly state independence from ClubGG. Tone should be professional but human.
- **Visual Direction:** Clean editorial layout. Pull quotes in platinum accent. Generous whitespace.

---

#### Page: Our Network

- **URL:** `ggclube.com/our-network`
- **Page Goal:** Showcase the breadth and quality of the GGClube network
- **Primary Audience:** Potential agents and players evaluating the platform
- **Search Intent:** Informational
- **H1:** "The GGClube Network"
- **Metadata:**
  - Title: "Our Network — GGClube Verified Poker Community"
  - Description: "Explore the GGClube network of verified agents, trusted players, and community partners across the poker world."
- **Main Sections:**
  1. Network overview with map/visual
  2. By the numbers — stat cards
  3. Verification tiers explained
  4. Featured agents grid
  5. Partner organizations
  6. Growth timeline
- **Supporting Modules:** Data ribbon, stat cards, geographic visualization
- **CTA:** "Apply to Join" / "View Directory"
- **Trust Blocks:** Verification standards summary, link to full process
- **Internal Links:** /how-verification-works, /partners, /for-agents, news.ggclube.com/verified-directory
- **Schema Type:** `CollectionPage`
- **Content Notes:** Use real metrics when available. Geographic data if agents span regions.
- **Visual Direction:** Data-forward layout. Monospace numbers. Map or globe visualization for geographic reach.

---

#### Page: For Agents

- **URL:** `ggclube.com/for-agents`
- **Page Goal:** Convert agents to submit verification applications
- **Primary Audience:** Poker agents seeking verification
- **Search Intent:** Transactional / Informational
- **H1:** "Built for Agents Who Value Trust"
- **Metadata:**
  - Title: "For Agents — Get Verified with GGClube"
  - Description: "Join GGClube's verified agent network. Build credibility, connect with players, and stand out as a trusted agent in the poker community."
- **Main Sections:**
  1. Hero — agent value proposition
  2. Benefits grid (visibility, credibility, player connections, community)
  3. How verification works (simplified flow)
  4. What's included in verification
  5. Agent testimonials
  6. FAQ specific to agents
  7. Application CTA block
- **Supporting Modules:** Benefit icons, process steps, FAQ accordion
- **CTA:** "Apply for Verification" (primary), "Learn How It Works" (secondary)
- **Trust Blocks:** "Your data is secure", verification standards link
- **Internal Links:** /apply/agent, /how-verification-works, /community-standards, /faq
- **Schema Type:** `WebPage`, `FAQPage`
- **Content Notes:** Focus on the value agents receive. Address common objections (cost, time, privacy). Must not promise guaranteed results.
- **Visual Direction:** Emerald accent for CTAs. Agent-focused imagery. Glass cards for benefits.

---

#### Page: For Players

- **URL:** `ggclube.com/for-players`
- **Page Goal:** Convert players to register and use the directory
- **Primary Audience:** Poker players seeking trustworthy agents
- **Search Intent:** Transactional / Informational
- **H1:** "Find Verified Agents You Can Trust"
- **Metadata:**
  - Title: "For Players — Find Trusted Poker Agents | GGClube"
  - Description: "Connect with verified poker agents through GGClube. Browse our trusted directory, read reviews, and play with confidence."
- **Main Sections:**
  1. Hero — player value proposition
  2. The problem (unverified agents, scams, uncertainty)
  3. The solution (GGClube verification)
  4. Directory preview with search
  5. Safety features explained
  6. Player testimonials
  7. Registration CTA
- **Supporting Modules:** Directory search preview, trust indicators, testimonials
- **CTA:** "Browse Verified Agents" (primary), "Create Your Account" (secondary)
- **Trust Blocks:** How verification protects you, report concern link
- **Internal Links:** /apply/player, news.ggclube.com/verified-directory, /how-verification-works, /report-concern
- **Schema Type:** `WebPage`, `FAQPage`
- **Content Notes:** Empathize with player concerns. Use trust-forward language without fear-mongering.
- **Visual Direction:** Clean, reassuring design. Emerald verified badges prominent. Directory cards as social proof.

---

#### Page: How Verification Works

- **URL:** `ggclube.com/how-verification-works`
- **Page Goal:** Explain the verification process transparently to build trust
- **Primary Audience:** Agents considering applying, players evaluating trustworthiness
- **Search Intent:** Informational
- **H1:** "How Verification Works"
- **Metadata:**
  - Title: "How Agent Verification Works — GGClube Process Explained"
  - Description: "Understand GGClube's agent verification process. Learn what we review, how long it takes, and what verification means for the community."
- **Main Sections:**
  1. Process overview (visual timeline)
  2. Step 1: Application submission
  3. Step 2: Document review
  4. Step 3: Community standing check
  5. Step 4: Verification decision
  6. Step 5: Ongoing monitoring
  7. Verification tiers and statuses explained
  8. What verification does NOT mean (clear disclaimers)
  9. Appeals and reconsideration
- **Supporting Modules:** Step cards, status badge examples, FAQ
- **CTA:** "Start Your Application"
- **Trust Blocks:** Transparency commitment, what we check vs. don't check
- **Internal Links:** /apply/agent, /community-standards, /faq, /legal/disclaimer
- **Schema Type:** `WebPage`, `HowTo`
- **Content Notes:** CRITICAL — must clearly state that verification does not guarantee behavior, financial solvency, or future conduct. Use hedging language. Legal review required.
- **Visual Direction:** Clean step-by-step layout. Status badge examples shown in context. Obsidian background with emerald accent timeline.

---

#### Page: Community Standards

- **URL:** `ggclube.com/community-standards`
- **Page Goal:** Document the rules and expectations for all GGClube community members
- **Primary Audience:** All community members (agents and players)
- **Search Intent:** Informational / Navigational
- **H1:** "Community Standards"
- **Metadata:**
  - Title: "Community Standards — GGClube Code of Conduct"
  - Description: "Read GGClube's community standards. Our code of conduct ensures a safe, trusted, and respectful environment for all members."
- **Main Sections:**
  1. Preamble — our commitment to community
  2. Core principles
  3. Expected behavior for agents
  4. Expected behavior for players
  5. Prohibited conduct
  6. Reporting violations
  7. Enforcement actions (warning, suspension, removal)
  8. Appeals process
- **Supporting Modules:** Principle cards, violation examples, enforcement table
- **CTA:** "Report a Concern" / "Apply with Confidence"
- **Trust Blocks:** Enforcement transparency, update log
- **Internal Links:** /report-concern, /how-verification-works, /legal/community-guidelines, /support
- **Schema Type:** `WebPage`
- **Content Notes:** Legal review required. Must balance firmness with fairness. Include real examples of acceptable and unacceptable behavior.
- **Visual Direction:** Long-form editorial layout. Numbered sections. Pull-quote emphasis blocks.

---

#### Page: Why GGClube

- **URL:** `ggclube.com/why-ggclube`
- **Page Goal:** Persuade undecided visitors to join or engage with the ecosystem
- **Primary Audience:** Visitors comparing options or skeptical about the platform
- **Search Intent:** Informational / Commercial investigation
- **H1:** "Why GGClube?"
- **Metadata:**
  - Title: "Why Choose GGClube — The Trusted Poker Community"
  - Description: "Discover why GGClube is the poker community platform built on trust, verification, and editorial independence."
- **Main Sections:**
  1. The problem in the poker community (trust gap)
  2. How GGClube addresses it
  3. Comparison/differentiators (without naming competitors)
  4. The three pillars: Union, News, Academy
  5. Community voices
  6. The independence advantage
- **Supporting Modules:** Comparison table (unnamed), testimonial carousel, ecosystem map
- **CTA:** "Get Started" / "Explore the Ecosystem"
- **Trust Blocks:** Independence disclaimer, verification explanation
- **Internal Links:** /about, /for-agents, /for-players, news.ggclube.com, academy.ggclube.com
- **Schema Type:** `WebPage`
- **Content Notes:** Persuasive but honest. Never disparage competitors by name.
- **Visual Direction:** Storytelling layout with alternating sections. Visual contrast between "before/after" GGClube.

---

#### Page: Partners

- **URL:** `ggclube.com/partners`
- **Page Goal:** Showcase partnerships and invite new partners
- **Primary Audience:** Organizations, poker rooms, tournament organizers
- **Search Intent:** Informational / Transactional
- **H1:** "Our Partners"
- **Metadata:**
  - Title: "Partners — GGClube Network Partnerships"
  - Description: "Explore GGClube's partnerships with poker organizations and communities. Learn how to partner with us."
- **Main Sections:**
  1. Partnership philosophy
  2. Current partners grid
  3. Partnership tiers/types
  4. Benefits of partnering
  5. Partner application/inquiry
- **Supporting Modules:** Logo grid, partnership tier cards
- **CTA:** "Become a Partner" / "Contact Us"
- **Trust Blocks:** Independence maintained in all partnerships
- **Internal Links:** /contact, /about, /our-network
- **Schema Type:** `CollectionPage`
- **Content Notes:** Partners must not compromise editorial independence on News. State this clearly.
- **Visual Direction:** Logo grid on obsidian background. Professional, institutional feel.

---

#### Page: FAQ

- **URL:** `ggclube.com/faq`
- **Page Goal:** Answer common questions, reduce support burden, build trust
- **Primary Audience:** All visitors with questions
- **Search Intent:** Informational
- **H1:** "Frequently Asked Questions"
- **Metadata:**
  - Title: "FAQ — GGClube Questions Answered"
  - Description: "Find answers to common questions about GGClube's verification process, community standards, and how to get started."
- **Main Sections:**
  1. General questions about GGClube
  2. Verification questions
  3. For agents
  4. For players
  5. Account and support
  6. Legal and privacy
- **Supporting Modules:** Categorized accordion, search within FAQ
- **CTA:** "Still have questions? Contact us"
- **Trust Blocks:** Links to legal pages, support
- **Internal Links:** /contact, /support, /how-verification-works, /legal/terms, /legal/privacy
- **Schema Type:** `FAQPage`
- **Content Notes:** Questions must be real (not fabricated marketing). Update regularly based on actual support tickets.
- **Visual Direction:** Clean accordion layout. Category tabs or sidebar navigation.

---

#### Page: Apply as Agent

- **URL:** `ggclube.com/apply/agent`
- **Page Goal:** Collect agent verification applications
- **Primary Audience:** Poker agents seeking verification
- **Search Intent:** Transactional
- **H1:** "Apply for Agent Verification"
- **Metadata:**
  - Title: "Apply for Agent Verification — GGClube"
  - Description: "Submit your application to become a verified agent on GGClube. Start building trust in the poker community."
- **Main Sections:**
  1. What to expect (process overview)
  2. Requirements checklist
  3. Multi-step application form
  4. Document upload section
  5. Terms acceptance
  6. Submission confirmation
- **Supporting Modules:** Progress stepper, requirement checklist, file upload
- **CTA:** "Submit Application"
- **Trust Blocks:** Data security notice, what happens next, privacy link
- **Internal Links:** /how-verification-works, /legal/terms, /legal/privacy, /faq
- **Schema Type:** `WebPage`
- **Content Notes:** Form should be multi-step to avoid overwhelming. Clear progress indicator. Validate in real-time.
- **Visual Direction:** Clean form design. Progress stepper at top. Dark card backgrounds for form sections. Emerald progress indicator.

---

#### Page: Apply as Player

- **URL:** `ggclube.com/apply/player`
- **Page Goal:** Register new players into the community
- **Primary Audience:** Poker players
- **Search Intent:** Transactional
- **H1:** "Join GGClube as a Player"
- **Metadata:**
  - Title: "Join GGClube — Player Registration"
  - Description: "Create your GGClube account and connect with verified poker agents. Join the trusted poker community."
- **Main Sections:**
  1. Benefits of joining
  2. Registration form (simpler than agent)
  3. Account preferences
  4. Terms acceptance
- **Supporting Modules:** Benefit sidebar, form validation
- **CTA:** "Create Account"
- **Trust Blocks:** Privacy notice, what data is collected and why
- **Internal Links:** /for-players, /legal/terms, /legal/privacy, /faq
- **Schema Type:** `WebPage`
- **Content Notes:** Keep registration friction low. Only collect essential information upfront.
- **Visual Direction:** Minimal, clean form. Split layout — benefits left, form right.

---

#### Page: Contact

- **URL:** `ggclube.com/contact`
- **Page Goal:** Provide multiple contact channels
- **Primary Audience:** Anyone needing to reach the team
- **Search Intent:** Navigational / Transactional
- **H1:** "Contact Us"
- **Metadata:**
  - Title: "Contact GGClube — Get in Touch"
  - Description: "Contact the GGClube team for questions, support, partnerships, or press inquiries."
- **Main Sections:**
  1. Contact form (categorized: general, support, partnership, press, legal)
  2. Email addresses by department
  3. Expected response times
  4. FAQ quick links
- **Supporting Modules:** Category selector, form, response time badges
- **CTA:** "Send Message"
- **Trust Blocks:** Response time commitment, privacy notice
- **Internal Links:** /support, /faq, /partners
- **Schema Type:** `ContactPage`
- **Content Notes:** Set realistic response time expectations.
- **Visual Direction:** Simple, accessible form. Category cards at top.

---

#### Page: Support

- **URL:** `ggclube.com/support`
- **Page Goal:** Self-service support center, reducing direct support volume
- **Primary Audience:** Existing community members needing help
- **Search Intent:** Navigational
- **H1:** "Support Center"
- **Metadata:**
  - Title: "Support Center — GGClube Help & Resources"
  - Description: "Find help articles, submit support tickets, and get assistance from the GGClube team."
- **Main Sections:**
  1. Search support articles
  2. Category cards (account, verification, technical, billing, reporting)
  3. Popular help articles
  4. Submit a ticket option
  5. Emergency contact for urgent issues
- **Supporting Modules:** Search bar, category grid, article list
- **CTA:** "Submit a Support Ticket" / "Search Help Articles"
- **Trust Blocks:** Response time commitment
- **Internal Links:** /faq, /contact, /report-concern, /legal/terms
- **Schema Type:** `WebPage`
- **Content Notes:** Help articles should be continuously updated based on real support data.
- **Visual Direction:** Support-portal aesthetic. Search-first design. Category cards with icons.

---

#### Page: Legal — Terms of Service

- **URL:** `ggclube.com/legal/terms`
- **Page Goal:** Define the legal terms governing use of GGClube Union
- **Primary Audience:** Users, agents, legal reviewers
- **Search Intent:** Informational / Navigational
- **H1:** "Terms of Service"
- **Metadata:**
  - Title: "Terms of Service — GGClube"
  - Description: "Read GGClube's Terms of Service governing the use of our platform, community, and services."
- **Main Sections:** Standard ToS sections (acceptance, eligibility, accounts, conduct, IP, disclaimers, limitation of liability, governing law, changes)
- **Supporting Modules:** Table of contents, last updated date, version history link
- **CTA:** None (legal page)
- **Trust Blocks:** Last updated date, attorney review notice
- **Internal Links:** /legal/privacy, /legal/disclaimer, /legal/community-guidelines
- **Schema Type:** `WebPage`
- **Content Notes:** Must be reviewed by attorney before publication. Include effective date and version number.
- **Visual Direction:** Long-form legal document. Clean typography. ToC sidebar on desktop.

---

#### Page: Legal — Privacy Policy

- **URL:** `ggclube.com/legal/privacy`
- **Page Goal:** Document data collection, usage, and rights
- **Primary Audience:** Users, regulators
- **Search Intent:** Informational / Navigational
- **H1:** "Privacy Policy"
- **Metadata:**
  - Title: "Privacy Policy — GGClube"
  - Description: "Learn how GGClube collects, uses, and protects your personal data. Read our full privacy policy."
- **Main Sections:** Standard privacy sections (data collected, how it's used, sharing, retention, rights, cookies, children's privacy, changes)
- **Supporting Modules:** ToC, last updated, data summary table
- **CTA:** None
- **Trust Blocks:** GDPR/CCPA compliance notes, data retention table
- **Internal Links:** /legal/terms, /legal/cookie-policy, /contact
- **Schema Type:** `WebPage`
- **Content Notes:** Attorney review required. Must comply with applicable regulations (GDPR, CCPA, LGPD as relevant).
- **Visual Direction:** Same as Terms of Service. Clean legal document layout.

---

#### Page: Legal — Disclaimer

- **URL:** `ggclube.com/legal/disclaimer`
- **Page Goal:** Clearly disclaim ClubGG affiliation and limit liability
- **Primary Audience:** All visitors, legal reviewers
- **Search Intent:** Informational
- **H1:** "Disclaimer"
- **Metadata:**
  - Title: "Disclaimer — GGClube Independence Statement"
  - Description: "GGClube is an independent community platform. Read our full disclaimer regarding affiliations, verification, and liability."
- **Main Sections:**
  1. Independence declaration (NOT affiliated with ClubGG/GGPoker)
  2. Verification disclaimer (does not guarantee agent behavior)
  3. Content disclaimer (editorial opinions)
  4. Financial disclaimer (not financial advice)
  5. Third-party links disclaimer
  6. Limitation of liability
- **Supporting Modules:** Highlighted disclaimer boxes
- **CTA:** None
- **Trust Blocks:** This IS the trust block. Bold, clear, unambiguous.
- **Internal Links:** /legal/terms, /about, /how-verification-works
- **Schema Type:** `WebPage`
- **Content Notes:** CRITICAL PAGE. Attorney review mandatory. Must unambiguously state no ClubGG affiliation. Must state verification limitations clearly.
- **Visual Direction:** Highlighted boxes for key disclaimers. Serious, institutional tone reflected in design.

---

#### Page: Legal — Cookie Policy

- **URL:** `ggclube.com/legal/cookie-policy`
- **Page Goal:** Document cookie usage and consent
- **Primary Audience:** Users, regulators
- **Search Intent:** Informational
- **H1:** "Cookie Policy"
- **Metadata:**
  - Title: "Cookie Policy — GGClube"
  - Description: "Understand how GGClube uses cookies and similar technologies. Manage your cookie preferences."
- **Main Sections:** What cookies are, what we use, categories (essential, analytics, functional), how to manage, third-party cookies
- **Supporting Modules:** Cookie table, preference manager link
- **CTA:** "Manage Cookie Preferences"
- **Trust Blocks:** Consent mechanism reference
- **Internal Links:** /legal/privacy, /legal/terms
- **Schema Type:** `WebPage`
- **Content Notes:** Implement actual cookie consent banner that links here.
- **Visual Direction:** Standard legal page layout.

---

#### Page: Legal — Community Guidelines

- **URL:** `ggclube.com/legal/community-guidelines`
- **Page Goal:** Formal legal version of community standards
- **Primary Audience:** Community members, moderators
- **Search Intent:** Informational
- **H1:** "Community Guidelines"
- **Metadata:**
  - Title: "Community Guidelines — GGClube"
  - Description: "Read GGClube's official community guidelines governing behavior and participation in our platform."
- **Main Sections:** Expanded legal version of community standards with enforcement details
- **Supporting Modules:** Offense severity table, enforcement timeline
- **CTA:** "Report a Violation"
- **Trust Blocks:** Enforcement transparency
- **Internal Links:** /community-standards, /report-concern, /legal/terms
- **Schema Type:** `WebPage`
- **Content Notes:** More formal/legal than /community-standards. Attorney review recommended.
- **Visual Direction:** Long-form legal document layout.

---

### 8.2 GGClube News Pages

---

#### Page: News Homepage

- **URL:** `news.ggclube.com/`
- **Page Goal:** Present the editorial front page, drive article reads and newsletter sign-ups
- **Primary Audience:** Poker news consumers
- **Search Intent:** Navigational
- **H1:** "GGClube News — Poker's Independent Voice"
- **Metadata:**
  - Title: "GGClube News — Independent Poker News, Tournaments & Analysis"
  - Description: "The latest poker news, tournament coverage, strategy guides, and investigative reporting. Independent journalism for the poker community."
- **Main Sections:**
  1. Hero — featured article (large editorial card)
  2. Top stories grid (4-6 articles)
  3. Tournament ticker / upcoming events ribbon
  4. Category navigation (News, Tournaments, Strategy, Guides, Features)
  5. Latest articles feed
  6. Verified directory spotlight (cross-link to Union)
  7. Video/podcast latest
  8. Newsletter CTA block
- **Supporting Modules:** Ticker bar, category pills, newsletter form, "More from GGClube" ecosystem links
- **CTA:** "Subscribe to Newsletter" / "Read More"
- **Trust Blocks:** "Independent editorial" badge, editorial policy link
- **Internal Links:** /latest, /tournaments, /strategy, /features, /guides, /verified-directory, /newsletter, ggclube.com
- **Schema Type:** `WebSite`, `Organization`, `CollectionPage`
- **Content Notes:** Front page must feel alive with fresh content. Use ISR for real-time-ish updates. Categories must be clearly navigable.
- **Visual Direction:** Newspaper-inspired grid. Large hero article. Dense but organized. Ticker bar across full width. Obsidian background, emerald category accents.

---

#### Page: Latest

- **URL:** `news.ggclube.com/latest`
- **Page Goal:** Reverse-chronological feed of all published content
- **Primary Audience:** Returning readers checking for new content
- **Search Intent:** Informational
- **H1:** "Latest"
- **Metadata:**
  - Title: "Latest Poker News & Articles — GGClube News"
  - Description: "Browse the latest poker news, tournament reports, strategy articles, and community updates from GGClube News."
- **Main Sections:**
  1. Filter bar (category, date range, author)
  2. Article list (content cards, paginated)
  3. Sidebar: trending articles, newsletter CTA
- **Supporting Modules:** Infinite scroll or pagination, filter/sort controls
- **CTA:** "Subscribe for Updates"
- **Trust Blocks:** Article date stamps, author attribution
- **Internal Links:** Individual article pages, category pages, /newsletter
- **Schema Type:** `CollectionPage`
- **Content Notes:** Must load fast. Use ISR with short revalidation. Show publish date prominently.
- **Visual Direction:** Clean list/grid layout. Content cards with consistent sizing. Load more or pagination.

---

#### Page: Tournaments Hub

- **URL:** `news.ggclube.com/tournaments`
- **Page Goal:** Central hub for all tournament coverage
- **Primary Audience:** Tournament followers
- **Search Intent:** Informational / Navigational
- **H1:** "Tournament Coverage"
- **Metadata:**
  - Title: "Poker Tournament Coverage — Results, Schedules & News | GGClube"
  - Description: "Complete poker tournament coverage including schedules, results, reports, and analysis from GGClube News."
- **Main Sections:**
  1. Featured tournament (current/upcoming)
  2. Upcoming tournaments calendar
  3. Recent results
  4. Tournament articles feed
  5. Historical tournament archive
- **Supporting Modules:** Calendar widget, results table, filter by tour/series
- **CTA:** "Follow Tournament Updates"
- **Trust Blocks:** Source attribution for results
- **Internal Links:** /tournaments/[slug], /rankings, /newsletter
- **Schema Type:** `CollectionPage`
- **Content Notes:** Programmatic SEO opportunity — generate pages for each tournament automatically. Keep results data structured.
- **Visual Direction:** Data-rich layout. Calendar and table components. Monospace for results/numbers.

---

#### Page: Tournament Detail

- **URL:** `news.ggclube.com/tournaments/[slug]`
- **Page Goal:** Comprehensive coverage of a specific tournament
- **Primary Audience:** Players and fans of that tournament
- **Search Intent:** Informational (tournament-specific)
- **H1:** "[Tournament Name] — Coverage & Results"
- **Metadata:**
  - Title: "[Tournament Name] — Results, Coverage & Analysis | GGClube News"
  - Description: "Full coverage of [Tournament Name] including results, key hands, player interviews, and analysis from GGClube News."
- **Main Sections:**
  1. Tournament header (name, dates, location, buy-in, prize pool)
  2. Results table (if concluded)
  3. Related articles
  4. Key highlights
  5. Player profiles mentioned
- **Supporting Modules:** Results table, article carousel, stat cards
- **CTA:** "Follow This Tournament" / "Read More Coverage"
- **Trust Blocks:** Data source attribution, last updated timestamp
- **Internal Links:** /tournaments, /rankings, related articles, player/author profiles
- **Schema Type:** `SportsEvent`, `Article`
- **Content Notes:** Programmatic template that pulls from structured data. Articles are linked relationally.
- **Visual Direction:** Tournament branding-aware header. Results table with ranking numbers in monospace. Article cards below.

---

#### Page: Article Detail

- **URL:** `news.ggclube.com/news/[slug]`
- **Page Goal:** Deliver a single article with maximum readability and engagement
- **Primary Audience:** Readers interested in the topic
- **Search Intent:** Informational
- **H1:** "[Article Title]"
- **Metadata:**
  - Title: "[Article Title] | GGClube News"
  - Description: "[Article excerpt or custom meta description]"
- **Main Sections:**
  1. Article header (title, author, date, category, read time)
  2. Featured image
  3. Article body (rich text with embedded media)
  4. Author bio card
  5. Related articles
  6. Newsletter CTA
  7. Comments/reactions (if enabled)
- **Supporting Modules:** Share buttons, bookmark, reading progress bar, table of contents (long articles)
- **CTA:** "Subscribe to Newsletter" / "Read Related"
- **Trust Blocks:** Author byline with profile link, correction notice (if applicable), editorial policy link
- **Internal Links:** Author page, related articles, category page, Union/Academy cross-links where relevant
- **Schema Type:** `NewsArticle`, `BreadcrumbList`
- **Content Notes:** Reading experience is paramount. Clean typography, generous line height, no distracting ads. Correction/update notices at top if applicable.
- **Visual Direction:** Editorial reading experience. Max-width prose column (65ch). Large featured image. Author avatar inline. Platinum accents for pull quotes.

---

#### Page: Features

- **URL:** `news.ggclube.com/features`
- **Page Goal:** Showcase long-form, investigative, and feature journalism
- **Primary Audience:** Deep readers, industry professionals
- **Search Intent:** Informational
- **H1:** "Features"
- **Metadata:**
  - Title: "Featured Articles — Long-form Poker Journalism | GGClube News"
  - Description: "In-depth features, investigative reports, and long-form journalism from GGClube News. Deep dives into the poker world."
- **Main Sections:**
  1. Featured feature (hero card)
  2. Feature articles grid
  3. "Series" collections (multi-part features)
- **Supporting Modules:** Large content cards, series badge
- **CTA:** "Read the Latest Feature"
- **Trust Blocks:** Editorial independence statement
- **Internal Links:** Individual articles, /about-editorial
- **Schema Type:** `CollectionPage`
- **Content Notes:** Elevated presentation for premium content.
- **Visual Direction:** Magazine-style layout. Larger images, more whitespace. Premium feel.

---

#### Page: Guides

- **URL:** `news.ggclube.com/guides`
- **Page Goal:** Hub for educational/how-to poker guides
- **Primary Audience:** Players seeking guidance
- **Search Intent:** Informational
- **H1:** "Poker Guides"
- **Metadata:**
  - Title: "Poker Guides — How-To Articles & Resources | GGClube News"
  - Description: "Browse comprehensive poker guides covering game types, strategies, bankroll management, and more from GGClube News."
- **Main Sections:**
  1. Guide categories (beginner, intermediate, advanced, bankroll, mental game)
  2. Popular guides
  3. Latest guides
  4. Academy cross-promo (for deeper learning)
- **Supporting Modules:** Category filter, difficulty badges, reading time
- **CTA:** "Explore Guides" / "Take a Course on Academy"
- **Trust Blocks:** Author expertise displayed
- **Internal Links:** Individual guides, /strategy, academy.ggclube.com/courses
- **Schema Type:** `CollectionPage`
- **Content Notes:** Great cross-sell opportunity to Academy. Guides should be comprehensive but point to courses for deep dives.
- **Visual Direction:** Organized grid with difficulty-level color coding. Guide cards with progress/level indicators.

---

#### Page: Strategy

- **URL:** `news.ggclube.com/strategy`
- **Page Goal:** Strategy-focused content hub
- **Primary Audience:** Players looking to improve
- **Search Intent:** Informational
- **H1:** "Poker Strategy"
- **Metadata:**
  - Title: "Poker Strategy Articles — Tips & Analysis | GGClube News"
  - Description: "Expert poker strategy articles covering hand analysis, tournament strategy, cash game tactics, and mental game tips."
- **Main Sections:**
  1. Strategy by game type (Hold'em, PLO, tournaments, cash, MTT, SNG)
  2. Latest strategy articles
  3. Most popular strategy content
  4. Coach/expert contributions (cross-link Academy coaches)
- **Supporting Modules:** Game type filter, difficulty level, expert author badges
- **CTA:** "Read Strategy" / "Learn with Academy"
- **Trust Blocks:** Expert author credentials
- **Internal Links:** Individual articles, /guides, academy.ggclube.com/coaches
- **Schema Type:** `CollectionPage`
- **Content Notes:** Strategy content is key SEO asset. Focus on long-tail keywords.
- **Visual Direction:** Grid layout with game-type icons. Expert badges on cards.

---

#### Page: Rankings

- **URL:** `news.ggclube.com/rankings`
- **Page Goal:** Display rankings and leaderboard data
- **Primary Audience:** Competitive players, fans
- **Search Intent:** Informational
- **H1:** "Rankings & Leaderboards"
- **Metadata:**
  - Title: "Poker Rankings & Leaderboards — GGClube News"
  - Description: "Track poker rankings, tournament leaderboards, and player performance data curated by GGClube News."
- **Main Sections:**
  1. Current rankings table
  2. Category filters (by tour, game type, time period)
  3. Player spotlight
  4. Methodology explanation
- **Supporting Modules:** Data tables, sort/filter, player cards
- **CTA:** "Follow Rankings Updates"
- **Trust Blocks:** Methodology link, data source attribution, last updated
- **Internal Links:** /tournaments, author profiles, tournament detail pages
- **Schema Type:** `WebPage`
- **Content Notes:** Rankings methodology must be transparent. Source data clearly.
- **Visual Direction:** Data-forward. Monospace numbers. Table-heavy with good contrast and readability.

---

#### Page: Verified Directory

- **URL:** `news.ggclube.com/verified-directory`
- **Page Goal:** Public-facing verified agent directory (syndicated from Union)
- **Primary Audience:** Players looking for trusted agents
- **Search Intent:** Transactional / Informational
- **H1:** "Verified Agent Directory"
- **Metadata:**
  - Title: "Verified Poker Agent Directory — GGClube"
  - Description: "Browse GGClube's verified agent directory. Find trusted, vetted poker agents with transparent verification status."
- **Main Sections:**
  1. Search and filter bar
  2. Directory grid (profile cards with status badges)
  3. How verification works summary
  4. Report concern link
- **Supporting Modules:** Search, filter panel, profile cards, pagination
- **CTA:** "View Profile" per card / "Get Verified" (for agents)
- **Trust Blocks:** Verification explanation, disclaimer, report concern
- **Internal Links:** /verified-directory/[slug], ggclube.com/how-verification-works, ggclube.com/apply/agent, /under-review, /alerts
- **Schema Type:** `CollectionPage`
- **Content Notes:** MUST include disclaimer that verification has limitations. Each card shows status clearly. Under-review and flagged entities are in separate sections, not mixed with verified.
- **Visual Direction:** Clean directory grid. Status badges prominent. Search-first UX. Emerald for verified, gold for under-review, red for concern.

---

#### Page: Verified Directory Profile

- **URL:** `news.ggclube.com/verified-directory/[slug]`
- **Page Goal:** Individual agent/entity profile page
- **Primary Audience:** Players researching a specific agent
- **Search Intent:** Navigational / Informational
- **H1:** "[Agent/Entity Name]"
- **Metadata:**
  - Title: "[Agent Name] — Verified Profile | GGClube Directory"
  - Description: "[Agent Name] is a [status] agent on GGClube. View their verification status, community standing, and profile details."
- **Main Sections:**
  1. Profile header (name, avatar, status badge, verification date)
  2. About section
  3. Verification details (what was verified, when)
  4. Community standing
  5. Related news articles (if any)
  6. Report concern button
- **Supporting Modules:** Status badge, verification timeline, related articles
- **CTA:** "Report a Concern" / "Back to Directory"
- **Trust Blocks:** Verification disclaimer, what verification means/doesn't mean, last reviewed date
- **Internal Links:** /verified-directory, /under-review, ggclube.com/how-verification-works, related articles
- **Schema Type:** `Person` or `Organization`, `BreadcrumbList`
- **Content Notes:** CRITICAL — must include verification disclaimer on every profile. Never imply guaranteed trustworthiness.
- **Visual Direction:** Profile card at top. Clean info layout. Status badge very prominent.

---

#### Page: Under Review

- **URL:** `news.ggclube.com/under-review`
- **Page Goal:** Transparently list entities currently under review
- **Primary Audience:** Community members checking on flagged entities
- **Search Intent:** Informational
- **H1:** "Under Review"
- **Metadata:**
  - Title: "Under Review — Entities Being Investigated | GGClube News"
  - Description: "View poker agents and entities currently under review by GGClube. Transparency in our verification process."
- **Main Sections:**
  1. What "under review" means (explanation)
  2. Currently under review list
  3. Process explanation
  4. How to submit information
- **Supporting Modules:** Status cards, process timeline
- **CTA:** "Submit Information" / "Learn About Verification"
- **Trust Blocks:** Due process explanation, presumption of innocence language, legal disclaimer
- **Internal Links:** /verified-directory, ggclube.com/how-verification-works, /submit-a-tip, /alerts
- **Schema Type:** `CollectionPage`
- **Content Notes:** EXTREMELY SENSITIVE PAGE. Language must be careful and legally reviewed. "Under review" does not mean guilty. Avoid defamation risk. Use neutral, factual language only.
- **Visual Direction:** Serious tone. Gold accent color for under-review status. Clean, institutional layout.

---

#### Page: Alerts

- **URL:** `news.ggclube.com/alerts`
- **Page Goal:** Community safety alerts and notices
- **Primary Audience:** Community members checking for warnings
- **Search Intent:** Informational
- **H1:** "Community Alerts"
- **Metadata:**
  - Title: "Community Alerts & Safety Notices — GGClube News"
  - Description: "Stay informed with GGClube community alerts, safety notices, and important updates for the poker community."
- **Main Sections:**
  1. Active alerts (if any)
  2. Recent alerts archive
  3. What constitutes an alert
  4. How to report a concern
- **Supporting Modules:** Alert cards with severity levels, date stamps
- **CTA:** "Report a Concern" / "Subscribe to Alerts"
- **Trust Blocks:** Alert methodology, legal disclaimer, evidence standards
- **Internal Links:** /under-review, /verified-directory, ggclube.com/report-concern, /submit-a-tip
- **Schema Type:** `CollectionPage`
- **Content Notes:** Another legally sensitive page. Alerts must be based on verified information. Include "alleged" and other hedging language. Attorney review required.
- **Visual Direction:** Alert-red accent for active alerts. Serious, warning-forward design without being alarmist.

---

#### Page: Video

- **URL:** `news.ggclube.com/video`
- **Page Goal:** Video content hub
- **Primary Audience:** Visual content consumers
- **Search Intent:** Informational
- **H1:** "Video"
- **Metadata:**
  - Title: "Poker Videos — Analysis, Interviews & Coverage | GGClube News"
  - Description: "Watch poker videos including tournament coverage, player interviews, hand analysis, and community features from GGClube News."
- **Main Sections:**
  1. Featured video (hero embed)
  2. Latest videos grid
  3. Video playlists/series
  4. Category filter
- **Supporting Modules:** Video cards with thumbnails, duration badges, lazy-loaded embeds
- **CTA:** "Watch More" / "Subscribe on YouTube"
- **Trust Blocks:** Content attribution
- **Internal Links:** Related articles, /podcast, YouTube channel
- **Schema Type:** `CollectionPage`, `VideoObject` per video
- **Content Notes:** YouTube embeds with lazy loading. Facade pattern for performance.
- **Visual Direction:** Video-first grid. 16:9 thumbnails. Play button overlays. Dark, cinematic feel.

---

#### Page: Podcast

- **URL:** `news.ggclube.com/podcast`
- **Page Goal:** Podcast hub and episode directory
- **Primary Audience:** Audio content consumers
- **Search Intent:** Informational / Navigational
- **H1:** "GGClube Podcast"
- **Metadata:**
  - Title: "GGClube Podcast — Poker Talk & Industry Insights"
  - Description: "Listen to the GGClube podcast for poker news discussion, player interviews, strategy talk, and industry commentary."
- **Main Sections:**
  1. Latest episode (hero with player)
  2. Episode list
  3. Subscribe links (Spotify, Apple, etc.)
  4. Guest archive
- **Supporting Modules:** Audio player embed, episode cards, subscribe buttons
- **CTA:** "Listen Now" / "Subscribe"
- **Trust Blocks:** Guest disclaimers where needed
- **Internal Links:** Related articles, /video, guest profiles
- **Schema Type:** `PodcastSeries`, `PodcastEpisode`
- **Content Notes:** Embed players from hosting platform. Include show notes with links.
- **Visual Direction:** Audio-wave design accents. Episode cards with guest photos. Dark, intimate feel.

---

#### Page: Authors Index

- **URL:** `news.ggclube.com/authors`
- **Page Goal:** Showcase the editorial team and contributors
- **Primary Audience:** Readers wanting to know who writes
- **Search Intent:** Informational
- **H1:** "Our Authors"
- **Metadata:**
  - Title: "Authors & Contributors — GGClube News"
  - Description: "Meet the writers, analysts, and contributors behind GGClube News. Independent poker journalism by experienced professionals."
- **Main Sections:**
  1. Staff writers
  2. Contributing writers
  3. Guest columnists
- **Supporting Modules:** Author profile cards with photo, bio snippet, article count
- **CTA:** "Read Their Work"
- **Trust Blocks:** Editorial independence statement
- **Internal Links:** /authors/[slug], /about-editorial
- **Schema Type:** `CollectionPage`
- **Content Notes:** Establishes E-E-A-T for Google. Real names, real credentials.
- **Visual Direction:** Profile card grid. Professional headshots. Clean, institutional.

---

#### Page: Author Profile

- **URL:** `news.ggclube.com/authors/[slug]`
- **Page Goal:** Author credibility page with their body of work
- **Primary Audience:** Readers seeking author background
- **Search Intent:** Informational / Navigational
- **H1:** "[Author Name]"
- **Metadata:**
  - Title: "[Author Name] — GGClube News Author"
  - Description: "[Author Name] is a [role] at GGClube News. Read their latest articles on poker news, strategy, and tournaments."
- **Main Sections:**
  1. Author header (photo, name, title, bio)
  2. Social/professional links
  3. Article feed by this author
  4. Areas of expertise
- **Supporting Modules:** Author card, article list, expertise tags
- **CTA:** "Read Latest Article"
- **Trust Blocks:** Author credentials, experience summary
- **Internal Links:** Individual articles, /authors, /about-editorial
- **Schema Type:** `Person`, `ProfilePage`, `BreadcrumbList`
- **Content Notes:** Programmatic SEO page. Important for E-E-A-T.
- **Visual Direction:** Editorial profile page. Large photo. Article grid below.

---

#### Page: Newsletter

- **URL:** `news.ggclube.com/newsletter`
- **Page Goal:** Newsletter subscription landing page
- **Primary Audience:** Readers who want regular updates
- **Search Intent:** Transactional
- **H1:** "Subscribe to GGClube News"
- **Metadata:**
  - Title: "Subscribe to the GGClube Newsletter — Poker News in Your Inbox"
  - Description: "Get the latest poker news, tournament updates, and community alerts delivered to your inbox. Subscribe to the GGClube newsletter."
- **Main Sections:**
  1. Value proposition (what you'll get)
  2. Subscription form (email + preferences)
  3. Frequency options (daily digest, weekly roundup, alerts only)
  4. Sample newsletter preview
  5. Privacy assurance
- **Supporting Modules:** Email input, preference checkboxes, sample screenshots
- **CTA:** "Subscribe Now"
- **Trust Blocks:** Unsubscribe anytime, privacy policy link, no spam commitment
- **Internal Links:** /legal/privacy, /latest
- **Schema Type:** `WebPage`
- **Content Notes:** Clear value proposition. Show exactly what they'll receive.
- **Visual Direction:** Focused conversion page. Centered form. Newsletter preview mockup.

---

#### Page: About Editorial

- **URL:** `news.ggclube.com/about-editorial`
- **Page Goal:** Establish editorial credibility and independence
- **Primary Audience:** Readers, industry professionals, potential contributors
- **Search Intent:** Informational
- **H1:** "About Our Editorial Team"
- **Metadata:**
  - Title: "About GGClube News — Editorial Mission & Standards"
  - Description: "Learn about GGClube News' editorial mission, independence standards, and commitment to honest poker journalism."
- **Main Sections:**
  1. Editorial mission statement
  2. Independence policy
  3. Corrections and accuracy commitment
  4. How we fund our journalism
  5. Editorial team overview
  6. Contributor guidelines
  7. Contact the editorial team
- **Supporting Modules:** Mission statement callout, team grid, principle cards
- **CTA:** "Contact the Editor" / "Submit a Tip"
- **Trust Blocks:** Independence declaration, corrections policy, funding transparency
- **Internal Links:** /authors, /legal/editorial-policy, /legal/corrections, /submit-a-tip
- **Schema Type:** `AboutPage`
- **Content Notes:** Critical for E-E-A-T. Must be honest and transparent about funding, independence, and editorial standards.
- **Visual Direction:** Institutional, serious tone. Clean editorial layout.

---

#### Page: Submit a Tip

- **URL:** `news.ggclube.com/submit-a-tip`
- **Page Goal:** Allow anonymous or attributed tip submissions
- **Primary Audience:** Community members with information to share
- **Search Intent:** Transactional
- **H1:** "Submit a Tip"
- **Metadata:**
  - Title: "Submit a Tip — GGClube News"
  - Description: "Have information about poker industry issues? Submit a tip to GGClube News. Anonymous submissions accepted."
- **Main Sections:**
  1. What we investigate
  2. Tip submission form (anonymous option)
  3. Evidence upload capability
  4. Confidentiality promise
  5. What happens after you submit
- **Supporting Modules:** Form with category selection, file upload, anonymous toggle
- **CTA:** "Submit Tip"
- **Trust Blocks:** Confidentiality statement, source protection policy
- **Internal Links:** /about-editorial, /legal/editorial-policy, /alerts, /under-review
- **Schema Type:** `WebPage`
- **Content Notes:** Must have clear confidentiality language. Do not store IP addresses for anonymous tips.
- **Visual Direction:** Secure, private-feeling design. Muted tones. Minimal UI.

---

#### Page: News Legal — Editorial Policy

- **URL:** `news.ggclube.com/legal/editorial-policy`
- **Page Goal:** Document editorial standards, fact-checking process, source policies
- **Primary Audience:** Readers, subjects of coverage, legal reviewers
- **Search Intent:** Informational
- **H1:** "Editorial Policy"
- **Metadata:**
  - Title: "Editorial Policy — GGClube News"
  - Description: "Read GGClube News' editorial policy covering accuracy, fairness, source protection, and corrections."
- **Main Sections:** Accuracy standards, source policies, fairness doctrine, correction/retraction process, conflict of interest, sponsored content policy
- **Supporting Modules:** Policy sections, process diagrams
- **CTA:** None
- **Trust Blocks:** This IS the trust block
- **Internal Links:** /legal/corrections, /about-editorial, /submit-a-tip
- **Schema Type:** `WebPage`
- **Content Notes:** Essential for credibility. Attorney review recommended.
- **Visual Direction:** Long-form legal document.

---

#### Page: News Legal — Corrections

- **URL:** `news.ggclube.com/legal/corrections`
- **Page Goal:** Transparent corrections and retractions log
- **Primary Audience:** Readers, subjects of coverage
- **Search Intent:** Informational
- **H1:** "Corrections & Retractions"
- **Metadata:**
  - Title: "Corrections & Retractions — GGClube News"
  - Description: "View corrections and retractions issued by GGClube News. Our commitment to accuracy and accountability."
- **Main Sections:**
  1. Corrections policy summary
  2. Chronological corrections list
  3. How to request a correction
- **Supporting Modules:** Correction entries with date, article link, nature of correction
- **CTA:** "Request a Correction"
- **Trust Blocks:** Commitment to accuracy statement
- **Internal Links:** /legal/editorial-policy, /about-editorial, /contact
- **Schema Type:** `WebPage`
- **Content Notes:** Critical for credibility. Even if empty at launch, the page should exist.
- **Visual Direction:** Simple chronological log. Transparent and straightforward.

---

### 8.3 GGClube Academy Pages

---

#### Page: Academy Homepage

- **URL:** `academy.ggclube.com/`
- **Page Goal:** Introduce the Academy, drive course enrollments and memberships
- **Primary Audience:** Players wanting to improve
- **Search Intent:** Navigational / Informational
- **H1:** "Level Up Your Poker Game"
- **Metadata:**
  - Title: "GGClube Academy — Poker Courses, Coaching & Strategy"
  - Description: "Master poker with GGClube Academy. Expert courses, verified coaches, and structured learning paths for every skill level."
- **Main Sections:**
  1. Hero — value proposition with course preview
  2. Featured courses carousel
  3. Learning paths overview
  4. Stats ribbon (students, courses, coaches, completion rate)
  5. How it works (browse, enroll, learn, improve)
  6. Coach spotlight
  7. Testimonials
  8. Membership tiers preview
  9. Free resources teaser
  10. Final CTA
- **Supporting Modules:** Course cards, coach cards, stat cards, testimonial carousel
- **CTA:** "Browse Courses" (primary) / "Start Free" (secondary) / "View Pricing"
- **Trust Blocks:** Coach verification (cross-link Union), student testimonials, satisfaction guarantee
- **Internal Links:** /courses, /learning-paths, /coaches, /pricing, /free-resources, /testimonials, ggclube.com
- **Schema Type:** `WebSite`, `Organization`, `Course` (aggregate)
- **Content Notes:** Must convey quality and structure. Show course content previews.
- **Visual Direction:** Learning-forward design. Course card carousel. Emerald progress accents. Clean, motivating layout.

---

#### Page: Courses Catalog

- **URL:** `academy.ggclube.com/courses`
- **Page Goal:** Browse and filter all available courses
- **Primary Audience:** Students looking for courses
- **Search Intent:** Informational / Commercial
- **H1:** "Poker Courses"
- **Metadata:**
  - Title: "Poker Courses — All Skill Levels | GGClube Academy"
  - Description: "Browse poker courses for beginners to advanced players. Texas Hold'em, PLO, tournament strategy, cash games, and mental game."
- **Main Sections:**
  1. Search and filter bar (level, game type, duration, price, instructor)
  2. Course grid (course cards)
  3. Featured/recommended courses
  4. Learning paths promo
- **Supporting Modules:** Filter panel, course cards, sort controls, pagination
- **CTA:** "Enroll Now" per card / "View Course"
- **Trust Blocks:** Instructor credentials, student ratings, completion rates
- **Internal Links:** /courses/[slug], /learning-paths, /coaches, /pricing
- **Schema Type:** `CollectionPage`
- **Content Notes:** Course cards must show: title, instructor, level, duration, price (or "Free"), rating.
- **Visual Direction:** Clean catalog grid. Filter sidebar on desktop, dropdown on mobile. Course cards with level badges.

---

#### Page: Course Detail

- **URL:** `academy.ggclube.com/courses/[slug]`
- **Page Goal:** Convince visitors to enroll in this specific course
- **Primary Audience:** Prospective students evaluating the course
- **Search Intent:** Commercial / Transactional
- **H1:** "[Course Title]"
- **Metadata:**
  - Title: "[Course Title] — Poker Course | GGClube Academy"
  - Description: "[Course description excerpt]. Learn [topic] with [instructor] at GGClube Academy."
- **Main Sections:**
  1. Course header (title, instructor, level, duration, rating, price)
  2. Course description (what you'll learn)
  3. Curriculum (expandable lesson list)
  4. Instructor bio card
  5. Student reviews
  6. Prerequisites
  7. What's included
  8. Related courses
  9. Enrollment CTA block
- **Supporting Modules:** Curriculum accordion, instructor card, review stars, price card
- **CTA:** "Enroll Now" (sticky on scroll) / "Start Free Trial"
- **Trust Blocks:** Instructor credentials, student reviews, satisfaction guarantee, refund policy link
- **Internal Links:** /lessons/[slug], /coaches/[slug], /pricing, /courses, related courses
- **Schema Type:** `Course`, `BreadcrumbList`, `AggregateRating`
- **Content Notes:** This is a key conversion page. Must be thorough and persuasive. Curriculum should be visible but not give away content.
- **Visual Direction:** Landing page feel. Sticky enrollment sidebar on desktop. Clean curriculum list. Instructor card prominent.

---

#### Page: Lesson Detail

- **URL:** `academy.ggclube.com/lessons/[slug]`
- **Page Goal:** Deliver the actual lesson content (for enrolled students)
- **Primary Audience:** Enrolled students
- **Search Intent:** N/A (authenticated access)
- **H1:** "[Lesson Title]"
- **Metadata:**
  - Title: "[Lesson Title] — [Course Name] | GGClube Academy"
  - Description: "[Lesson description]. Part of [Course Name] at GGClube Academy."
- **Main Sections:**
  1. Lesson header (title, course context, progress indicator)
  2. Video player (if video lesson)
  3. Lesson content (rich text, diagrams, hand examples)
  4. Practice exercises
  5. Quiz/assessment (if applicable)
  6. Discussion thread
  7. Next/previous lesson navigation
  8. Course progress sidebar
- **Supporting Modules:** Video player, progress bar, quiz component, discussion thread
- **CTA:** "Complete & Continue" / "Take Quiz"
- **Trust Blocks:** Course progress tracking, completion certificate preview
- **Internal Links:** Next/previous lessons, course page, related resources
- **Schema Type:** `LearningResource`
- **Content Notes:** Focus on learning UX. Video + text hybrid lessons. Progress must save automatically.
- **Visual Direction:** Learning interface. Clean prose, embedded video, side navigation for course structure. Progress bar in emerald.

---

#### Page: Learning Paths

- **URL:** `academy.ggclube.com/learning-paths`
- **Page Goal:** Present curated multi-course learning journeys
- **Primary Audience:** Students who want structured guidance
- **Search Intent:** Informational / Commercial
- **H1:** "Learning Paths"
- **Metadata:**
  - Title: "Poker Learning Paths — Structured Study Plans | GGClube Academy"
  - Description: "Follow curated learning paths to master poker systematically. From beginner basics to advanced strategy at GGClube Academy."
- **Main Sections:**
  1. What are learning paths (explanation)
  2. Available paths (beginner, intermediate, advanced, tournament specialist, cash game specialist)
  3. Path detail for each (courses included, duration, outcomes)
- **Supporting Modules:** Path cards, course lists per path, difficulty progression visual
- **CTA:** "Start This Path" / "View Courses"
- **Trust Blocks:** Student outcomes, completion rates
- **Internal Links:** /courses, /courses/[slug], /pricing
- **Schema Type:** `CollectionPage`, `ItemList`
- **Content Notes:** Learning paths are curated playlists of courses in a recommended order.
- **Visual Direction:** Path visualization (roadmap/timeline). Course cards nested within paths. Progressive difficulty indicators.

---

#### Page: Coaches Directory

- **URL:** `academy.ggclube.com/coaches`
- **Page Goal:** Browse available coaches and book sessions
- **Primary Audience:** Students seeking personal coaching
- **Search Intent:** Commercial / Transactional
- **H1:** "Poker Coaches"
- **Metadata:**
  - Title: "Poker Coaches — Expert 1-on-1 Coaching | GGClube Academy"
  - Description: "Find verified poker coaches for 1-on-1 sessions. Browse expert coaches by specialty, rating, and availability at GGClube Academy."
- **Main Sections:**
  1. Search and filter (specialty, game type, price range, availability, rating)
  2. Coach grid (profile cards)
  3. How coaching works
  4. Coaching FAQ
- **Supporting Modules:** Filter panel, coach profile cards, availability indicators
- **CTA:** "View Profile" / "Book Session"
- **Trust Blocks:** Coach verification (cross-link Union), student reviews, session guarantee
- **Internal Links:** /coaches/[slug], /courses, ggclube.com/how-verification-works
- **Schema Type:** `CollectionPage`
- **Content Notes:** Programmatic SEO opportunity. Coach profiles should be rich with credentials.
- **Visual Direction:** Directory grid. Profile cards with availability badges. Emerald for verified coaches.

---

#### Page: Coach Profile

- **URL:** `academy.ggclube.com/coaches/[slug]`
- **Page Goal:** Coach credibility page and booking conversion
- **Primary Audience:** Students evaluating a specific coach
- **Search Intent:** Commercial / Transactional
- **H1:** "[Coach Name]"
- **Metadata:**
  - Title: "[Coach Name] — Poker Coach | GGClube Academy"
  - Description: "[Coach Name] is a verified poker coach specializing in [specialty]. Book 1-on-1 coaching sessions at GGClube Academy."
- **Main Sections:**
  1. Coach header (photo, name, specialty, rating, verification badge)
  2. About and credentials
  3. Teaching philosophy
  4. Specialties and game types
  5. Session options and pricing
  6. Student reviews
  7. Courses by this coach (if any)
  8. Availability calendar
  9. Booking CTA
- **Supporting Modules:** Coach card, review carousel, booking calendar, course cards
- **CTA:** "Book a Session" (sticky)
- **Trust Blocks:** Verification badge, student reviews, credentials, satisfaction guarantee
- **Internal Links:** /coaches, related courses, ggclube.com/verified-directory/[slug]
- **Schema Type:** `Person`, `ProfilePage`, `BreadcrumbList`
- **Content Notes:** Programmatic SEO page. Rich credentials are essential.
- **Visual Direction:** Profile page with booking sidebar. Calendar widget. Clean, professional.

---

#### Page: Community

- **URL:** `academy.ggclube.com/community`
- **Page Goal:** Community engagement hub for students
- **Primary Audience:** Academy members
- **Search Intent:** Navigational
- **H1:** "Academy Community"
- **Metadata:**
  - Title: "Poker Community — Discuss & Learn Together | GGClube Academy"
  - Description: "Join the GGClube Academy community. Discuss hands, share strategies, and connect with fellow poker students and coaches."
- **Main Sections:**
  1. Community overview
  2. Discussion categories
  3. Latest discussions
  4. Active members spotlight
  5. Community guidelines
- **Supporting Modules:** Discussion list, member avatars, category cards
- **CTA:** "Join the Discussion" / "Create Account"
- **Trust Blocks:** Community guidelines, moderation statement
- **Internal Links:** /courses, /coaches, ggclube.com/community-standards
- **Schema Type:** `WebPage`
- **Content Notes:** Can start simple (forum-style) and evolve. Must be moderated.
- **Visual Direction:** Discussion-focused layout. Thread previews with author avatars.

---

#### Page: Membership

- **URL:** `academy.ggclube.com/membership`
- **Page Goal:** Explain membership value and convert to paid members
- **Primary Audience:** Free users considering upgrade
- **Search Intent:** Commercial
- **H1:** "Academy Membership"
- **Metadata:**
  - Title: "Academy Membership — Unlock Full Access | GGClube Academy"
  - Description: "Unlock all courses, coaching discounts, and community features with a GGClube Academy membership. Choose your plan."
- **Main Sections:**
  1. Membership value proposition
  2. What's included at each tier
  3. Pricing comparison table
  4. Testimonials from members
  5. FAQ
  6. Sign-up CTA
- **Supporting Modules:** Pricing cards, comparison table, testimonials, FAQ accordion
- **CTA:** "Choose Your Plan" / "Start Free Trial"
- **Trust Blocks:** Money-back guarantee, cancel anytime, testimonials
- **Internal Links:** /pricing, /courses, /coaches, /testimonials, /legal/refund-policy
- **Schema Type:** `WebPage`, `Product`
- **Content Notes:** Focus on value, not just features. Show ROI for students.
- **Visual Direction:** Premium conversion page. Pricing cards with emerald highlight on recommended tier.

---

#### Page: Pricing

- **URL:** `academy.ggclube.com/pricing`
- **Page Goal:** Clear pricing comparison to convert
- **Primary Audience:** Users comparing plans
- **Search Intent:** Commercial / Transactional
- **H1:** "Pricing"
- **Metadata:**
  - Title: "Pricing — GGClube Academy Plans & Membership"
  - Description: "Compare GGClube Academy pricing plans. Free, Premium, and Pro tiers with courses, coaching, and community access."
- **Main Sections:**
  1. Pricing cards (Free, Premium, Pro)
  2. Feature comparison table
  3. FAQ about pricing
  4. Enterprise/team inquiry
- **Supporting Modules:** Pricing cards, comparison table, FAQ accordion
- **CTA:** "Get Started" per tier
- **Trust Blocks:** Cancel anytime, refund policy, billing transparency
- **Internal Links:** /membership, /legal/refund-policy, /courses, /coaches
- **Schema Type:** `WebPage`
- **Content Notes:** Transparent pricing. No hidden fees. Annual vs. monthly toggle.
- **Visual Direction:** Three-column pricing layout. Recommended tier highlighted with emerald border and glow.

#### Pricing Tiers

| Feature | Free | Premium ($29/mo) | Pro ($79/mo) |
|---------|------|-------------------|--------------|
| Free courses | Yes | Yes | Yes |
| Premium courses | No | Yes | Yes |
| Learning paths | Limited | Full | Full |
| Community access | Read only | Full | Full |
| Coaching discount | No | 10% | 25% |
| Coaching sessions/mo | No | 1 included | 4 included |
| Certificate of completion | No | Yes | Yes |
| Priority support | No | No | Yes |

---

#### Page: Free Resources

- **URL:** `academy.ggclube.com/free-resources`
- **Page Goal:** Lead magnet page — provide value to capture emails
- **Primary Audience:** New visitors who haven't committed yet
- **Search Intent:** Informational / Transactional
- **H1:** "Free Poker Resources"
- **Metadata:**
  - Title: "Free Poker Resources — Guides, Charts & Tools | GGClube Academy"
  - Description: "Download free poker resources including strategy guides, hand charts, bankroll calculators, and more from GGClube Academy."
- **Main Sections:**
  1. Resource categories (guides, charts, calculators, checklists)
  2. Resource cards with download CTAs
  3. Email gate for premium resources
  4. Course upsell for related content
- **Supporting Modules:** Resource cards, download buttons, email capture form
- **CTA:** "Download Free" / "Get Full Access"
- **Trust Blocks:** No spam commitment, privacy note
- **Internal Links:** /courses, /pricing, /join
- **Schema Type:** `CollectionPage`
- **Content Notes:** Mix of ungated and email-gated resources. Great for list building.
- **Visual Direction:** Resource grid. Download icons. Clean cards with file-type indicators.

---

#### Page: Blog

- **URL:** `academy.ggclube.com/blog`
- **Page Goal:** SEO-driven content hub for poker strategy and education topics
- **Primary Audience:** Organic search visitors
- **Search Intent:** Informational
- **H1:** "Academy Blog"
- **Metadata:**
  - Title: "Poker Strategy Blog — Tips & Education | GGClube Academy"
  - Description: "Read poker strategy articles, study tips, and educational content on the GGClube Academy blog."
- **Main Sections:**
  1. Featured post
  2. Latest posts
  3. Category filter (strategy, study tips, mental game, bankroll, news)
  4. Course upsell sidebar
- **Supporting Modules:** Content cards, category filter, sidebar CTAs
- **CTA:** "Read More" / "Take the Course"
- **Trust Blocks:** Author credentials
- **Internal Links:** /blog/[slug], /courses, /coaches, news.ggclube.com/strategy
- **Schema Type:** `CollectionPage`
- **Content Notes:** Blog content should funnel to courses. Every blog post should link to a relevant course.
- **Visual Direction:** Editorial blog layout. Content cards with author attribution.

---

#### Page: Blog Post

- **URL:** `academy.ggclube.com/blog/[slug]`
- **Page Goal:** Individual blog post for SEO and course funnel
- **Primary Audience:** Organic search visitors
- **Search Intent:** Informational
- **H1:** "[Blog Post Title]"
- **Metadata:**
  - Title: "[Blog Post Title] | GGClube Academy Blog"
  - Description: "[Post excerpt]"
- **Main Sections:**
  1. Post header (title, author, date, read time)
  2. Post body (rich text)
  3. Related course CTA (inline and end-of-post)
  4. Author bio
  5. Related posts
- **Supporting Modules:** Share buttons, reading progress bar, course CTA card
- **CTA:** "Take the Full Course" / "Subscribe"
- **Trust Blocks:** Author credentials
- **Internal Links:** Related courses, related posts, /courses, /coaches
- **Schema Type:** `Article`, `BreadcrumbList`
- **Content Notes:** Every blog post is a top-of-funnel entry that should lead to a course.
- **Visual Direction:** Clean reading experience. Inline course CTA cards that feel native.

---

#### Page: FAQ (Academy)

- **URL:** `academy.ggclube.com/faq`
- **Page Goal:** Answer Academy-specific questions
- **Primary Audience:** Prospective and current students
- **Search Intent:** Informational
- **H1:** "Frequently Asked Questions"
- **Metadata:**
  - Title: "FAQ — GGClube Academy Questions Answered"
  - Description: "Find answers about GGClube Academy courses, membership, coaching, pricing, and refunds."
- **Main Sections:**
  1. Courses and content
  2. Membership and pricing
  3. Coaching
  4. Technical/account
  5. Refunds and cancellation
- **Supporting Modules:** Categorized accordion
- **CTA:** "Contact Support"
- **Trust Blocks:** Refund policy link, support contact
- **Internal Links:** /pricing, /membership, /legal/refund-policy, /coaches
- **Schema Type:** `FAQPage`
- **Content Notes:** Address billing, access, and refund questions clearly.
- **Visual Direction:** Clean FAQ layout with category tabs.

---

#### Page: Testimonials

- **URL:** `academy.ggclube.com/testimonials`
- **Page Goal:** Social proof for conversions
- **Primary Audience:** Prospective students evaluating the Academy
- **Search Intent:** Informational
- **H1:** "Student Testimonials"
- **Metadata:**
  - Title: "Student Testimonials — GGClube Academy Reviews"
  - Description: "Read what students say about GGClube Academy courses and coaching. Real reviews from real poker learners."
- **Main Sections:**
  1. Featured testimonials (video if available)
  2. Written testimonials grid
  3. Stats (satisfaction rate, completion rate, improvement metrics)
  4. Submit your testimonial
- **Supporting Modules:** Testimonial cards, video embeds, stat cards
- **CTA:** "Start Learning" / "Share Your Story"
- **Trust Blocks:** Real names (with permission), course attribution
- **Internal Links:** /courses, /pricing, /join
- **Schema Type:** `WebPage`, `Review`
- **Content Notes:** Only use real testimonials with permission. Include course/coaching context.
- **Visual Direction:** Quote cards with student photos. Video testimonials if available.

---

#### Page: Join

- **URL:** `academy.ggclube.com/join`
- **Page Goal:** New user registration
- **Primary Audience:** New visitors ready to create an account
- **Search Intent:** Transactional
- **H1:** "Create Your Account"
- **Metadata:**
  - Title: "Join GGClube Academy — Create Your Account"
  - Description: "Create your free GGClube Academy account and start learning poker today."
- **Main Sections:**
  1. Registration form (name, email, password)
  2. Social sign-up (Google)
  3. Benefits reminder
  4. Terms acceptance
- **Supporting Modules:** Registration form, social auth buttons, benefit sidebar
- **CTA:** "Create Account"
- **Trust Blocks:** Privacy note, terms link, free tier explanation
- **Internal Links:** /login, /legal/terms, /legal/privacy, /pricing
- **Schema Type:** `WebPage`
- **Content Notes:** Minimal friction. Social sign-up prominent.
- **Visual Direction:** Split layout — form right, benefits/branding left. Clean and inviting.

---

#### Page: Login

- **URL:** `academy.ggclube.com/login`
- **Page Goal:** Authenticate returning users
- **Primary Audience:** Existing students
- **Search Intent:** Navigational
- **H1:** "Welcome Back"
- **Metadata:**
  - Title: "Login — GGClube Academy"
  - Description: "Log in to your GGClube Academy account to access courses, coaching, and your learning progress."
- **Main Sections:**
  1. Login form (email, password)
  2. Social login (Google)
  3. Magic link option
  4. Forgot password link
  5. Don't have an account? Join link
- **Supporting Modules:** Login form, social auth, magic link
- **CTA:** "Log In"
- **Trust Blocks:** Secure login indicator
- **Internal Links:** /join, /support
- **Schema Type:** `WebPage`
- **Content Notes:** Minimal page. Fast loading.
- **Visual Direction:** Centered form. Obsidian background. Minimal distractions.

---

#### Page: Academy Legal — Refund Policy

- **URL:** `academy.ggclube.com/legal/refund-policy`
- **Page Goal:** Document refund terms clearly
- **Primary Audience:** Students evaluating purchase, students requesting refunds
- **Search Intent:** Informational
- **H1:** "Refund Policy"
- **Metadata:**
  - Title: "Refund Policy — GGClube Academy"
  - Description: "Read GGClube Academy's refund policy for courses, memberships, and coaching sessions."
- **Main Sections:**
  1. Refund eligibility (within X days, completion threshold)
  2. Process for requesting a refund
  3. Membership cancellation terms
  4. Coaching session cancellation
  5. Exceptions
- **Supporting Modules:** Process steps, eligibility table
- **CTA:** "Contact Support for Refund"
- **Trust Blocks:** Clear timelines, fair terms
- **Internal Links:** /legal/terms, /support
- **Schema Type:** `WebPage`
- **Content Notes:** Fair but clear. Prevent abuse while being customer-friendly.
- **Visual Direction:** Standard legal page.

---

## 9. SEO Architecture

### 9.1 Semantic HTML Strategy

Every page across the ecosystem follows strict semantic HTML:

```html
<body>
  <header>           <!-- Site navigation, branding -->
    <nav>            <!-- Primary navigation -->
  </header>
  <main>             <!-- Primary content (one per page) -->
    <article>        <!-- For article/post content -->
    <section>        <!-- For distinct content sections -->
    <aside>          <!-- Sidebar, related content -->
  </main>
  <footer>           <!-- Site footer, legal links, ecosystem links -->
</footer>
</body>
```

#### Heading Hierarchy Rules:
- One `<h1>` per page (always the primary page title)
- `<h2>` for major sections
- `<h3>` for sub-sections within `<h2>`
- Never skip levels (no `<h1>` then `<h3>`)
- Use `<p>`, `<ul>`, `<ol>`, `<blockquote>`, `<figure>`, `<figcaption>` appropriately
- Data tables use `<table>`, `<thead>`, `<tbody>`, `<th>` with `scope` attributes
- Forms use `<label>` with `for` attribute, `<fieldset>`, `<legend>`

### 9.2 Metadata Framework

Every page receives programmatic metadata via the `@ggclube/seo` package:

```typescript
// packages/seo/src/metadata.ts
export function generateMetadata({
  title,
  description,
  path,
  site,           // 'union' | 'news' | 'academy'
  image,          // OG image URL
  type,           // 'website' | 'article' | 'profile'
  publishedTime,  // For articles
  modifiedTime,   // For articles
  authors,        // For articles
  section,        // Article section/category
  tags,           // Keywords
  noIndex,        // For noindex pages
}: MetadataParams): Metadata {
  const siteConfig = getSiteConfig(site);
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [image || siteConfig.defaultOgImage],
      type,
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || siteConfig.defaultOgImage],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
```

### 9.3 Canonical Handling

| Scenario | Canonical URL |
|----------|--------------|
| Normal page | Self-referencing (`<link rel="canonical" href="[current URL]" />`) |
| Paginated pages | Page 1 canonical to base URL, page 2+ canonical to self |
| Syndicated content (directory on News from Union) | Canonical points to Union as source of truth |
| AMP/mobile variants | Not applicable (responsive design only) |
| Query parameters (filters, sort) | Canonical to base URL without query params |
| Trailing slashes | Redirect to non-trailing-slash version |

### 9.4 XML Sitemaps

Each site generates its own sitemap, auto-generated on build/ISR:

#### Union Sitemap — `ggclube.com/sitemap.xml`
```xml
<sitemapindex>
  <sitemap><loc>ggclube.com/sitemap-static.xml</loc></sitemap>
  <sitemap><loc>ggclube.com/sitemap-legal.xml</loc></sitemap>
</sitemapindex>
```

#### News Sitemap — `news.ggclube.com/sitemap.xml`
```xml
<sitemapindex>
  <sitemap><loc>news.ggclube.com/sitemap-static.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-articles.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-tournaments.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-authors.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-directory.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-legal.xml</loc></sitemap>
  <sitemap><loc>news.ggclube.com/sitemap-news.xml</loc></sitemap>  <!-- Google News sitemap -->
</sitemapindex>
```

#### Academy Sitemap — `academy.ggclube.com/sitemap.xml`
```xml
<sitemapindex>
  <sitemap><loc>academy.ggclube.com/sitemap-static.xml</loc></sitemap>
  <sitemap><loc>academy.ggclube.com/sitemap-courses.xml</loc></sitemap>
  <sitemap><loc>academy.ggclube.com/sitemap-coaches.xml</loc></sitemap>
  <sitemap><loc>academy.ggclube.com/sitemap-blog.xml</loc></sitemap>
  <sitemap><loc>academy.ggclube.com/sitemap-legal.xml</loc></sitemap>
</sitemapindex>
```

### 9.5 Robots.txt Strategy

#### Union — `ggclube.com/robots.txt`
```
User-agent: *
Allow: /
Disallow: /apply/*/confirmation
Disallow: /api/
Sitemap: https://ggclube.com/sitemap.xml
```

#### News — `news.ggclube.com/robots.txt`
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /preview/
Sitemap: https://news.ggclube.com/sitemap.xml
```

#### Academy — `academy.ggclube.com/robots.txt`
```
User-agent: *
Allow: /
Disallow: /lessons/
Disallow: /api/
Disallow: /dashboard/
Sitemap: https://academy.ggclube.com/sitemap.xml
```

Note: `/lessons/` is disallowed because lesson content is behind authentication. Course landing pages (`/courses/[slug]`) remain indexed.

### 9.6 Breadcrumb Architecture

Every page (except homepages) has breadcrumbs:

```
Union:    Home > [Section] > [Page]
News:     Home > [Category] > [Article]
Academy:  Home > [Section] > [Page]
```

Examples:
```
GGClube > How Verification Works
GGClube News > Tournaments > WSOP 2026 Main Event Coverage
GGClube Academy > Courses > Texas Hold'em Fundamentals
GGClube Academy > Coaches > John Smith
```

Breadcrumbs are rendered as both visible UI and JSON-LD `BreadcrumbList` schema.

### 9.7 Internal Link Graph

See [Section 17: Internal Linking Strategy](#17-internal-linking-strategy) for the complete cross-site linking map.

Key principles:
- Every article links to at least 2 internal pages
- Every course page links to related blog posts and News articles
- Directory profiles link between Union and News
- Footer on all sites links to all three sites
- Contextual cross-linking in content bodies

### 9.8 Topic Clusters

#### News Topic Clusters

| Pillar Page | Cluster Content |
|-------------|----------------|
| `/tournaments` | Individual tournament pages, tournament strategy articles, results, previews |
| `/strategy` | Game-type strategy articles, hand analysis, position play, bet sizing |
| `/guides` | Beginner guides, bankroll guides, mental game, game selection |
| `/verified-directory` | Individual profiles, verification articles, trust-related content |
| `/rankings` | Leaderboard pages, player profiles, historical data |

#### Academy Topic Clusters

| Pillar Page | Cluster Content |
|-------------|----------------|
| `/courses` | Individual course pages, related blog posts |
| `/learning-paths` | Path pages linking to courses and blog content |
| `/coaches` | Individual coach profiles, coaching-related blog posts |
| `/blog` | Strategy posts linking to courses, free resources |
| `/free-resources` | Resource pages linking to related courses |

### 9.9 Schema Automation

The `@ggclube/seo` package generates JSON-LD for every page type:

| Schema Type | Applied To | Key Properties |
|-------------|-----------|----------------|
| `Organization` | All site homepages | name, url, logo, sameAs, contactPoint |
| `WebSite` | All site homepages | name, url, potentialAction (SearchAction) |
| `BreadcrumbList` | All pages except homepages | itemListElement (path hierarchy) |
| `Article` | Blog posts, guides | headline, author, datePublished, dateModified, image |
| `NewsArticle` | News articles | Same as Article + publisher, isAccessibleForFree |
| `Course` | Course detail pages | name, description, provider, hasCourseInstance |
| `FAQPage` | FAQ pages | mainEntity (Question + Answer pairs) |
| `Person` | Author/coach profiles | name, url, image, jobTitle, worksFor |
| `VideoObject` | Video pages, embedded videos | name, description, thumbnailUrl, uploadDate, duration |
| `CollectionPage` | Index/listing pages | name, description |
| `ContactPage` | Contact page | N/A (inherits from WebPage) |
| `HowTo` | Process explainer pages | step, totalTime |
| `AggregateRating` | Course pages with reviews | ratingValue, reviewCount, bestRating |
| `Review` | Individual reviews | author, reviewRating, datePublished |
| `PodcastSeries` | Podcast hub | name, description, url |
| `PodcastEpisode` | Podcast episodes | name, datePublished, duration, url |
| `SportsEvent` | Tournament pages | name, startDate, location, competitor |

### 9.10 Keyword Universe

#### Brand Queries
- ggclube, gg clube, ggclube union, ggclube news, ggclube academy
- ggclube verified, ggclube agent verification
- ggclube poker, ggclube community

#### Poker News Queries
- poker news, poker news today, latest poker news
- poker tournament results, poker tournament schedule
- wsop results, wpt results, poker rankings
- poker industry news, online poker news

#### Tournament Queries
- [tournament name] results, [tournament name] schedule
- [tournament name] [year], poker tournament live updates
- biggest poker tournaments, upcoming poker tournaments

#### Strategy Queries
- poker strategy, texas holdem strategy, poker tips
- poker hand rankings, poker position strategy
- bankroll management poker, poker mental game
- [game type] strategy (PLO strategy, tournament strategy, cash game strategy)

#### Course Queries
- poker course, learn poker online, poker training
- poker coaching, poker coach online
- beginner poker course, advanced poker strategy course
- poker masterclass, poker academy

#### Community/Trust Queries
- poker agent verified, trusted poker agent
- poker agent review, poker agent directory
- is [agent name] legit, poker agent scam
- poker community, poker player community

#### Verification Queries
- poker agent verification, how to verify poker agent
- trusted poker agents, verified poker community
- poker agent complaints, report poker agent

### 9.11 Programmatic SEO

| Template | Count (estimated) | Source | URL Pattern |
|----------|-------------------|--------|-------------|
| Tournament pages | 50-200 | CMS | `/tournaments/[slug]` |
| Author pages | 10-50 | CMS | `/authors/[slug]` |
| Coach pages | 10-50 | CMS | `/coaches/[slug]` |
| Directory profiles | 50-500 | CMS | `/verified-directory/[slug]` |
| Course pages | 20-100 | CMS | `/courses/[slug]` |
| Blog posts | Ongoing | CMS | `/blog/[slug]` |
| News articles | Ongoing | CMS | `/news/[slug]` |

Each template is ISR-generated with structured data, breadcrumbs, and internal links.

### 9.12 Core Web Vitals Plan

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 2.5s | Image optimization (next/image), font preloading, ISR pre-rendering, critical CSS inlining |
| **INP** | < 200ms | Minimal client-side JS, React Server Components, lazy hydration, event handler optimization |
| **CLS** | < 0.1 | Explicit image dimensions, font-display: swap with size-adjust, skeleton loaders, no layout-shifting ads |

#### Performance Budget

| Resource | Budget |
|----------|--------|
| Total page weight (initial) | < 500KB |
| JavaScript (initial) | < 150KB |
| CSS (initial) | < 50KB |
| Largest image (hero) | < 200KB (WebP/AVIF) |
| Font files | < 100KB (subset Inter) |
| Time to Interactive | < 3.5s on 4G |

#### Optimization Techniques
- Next.js Image component with responsive sizes and AVIF/WebP
- Font subsetting (Latin characters only for Inter)
- Dynamic imports for below-the-fold components
- React Server Components for zero-JS sections
- Streaming SSR for fast TTFB
- Edge rendering via Vercel
- Resource hints: `preconnect` to Supabase, `preload` for critical fonts
- YouTube embed facade pattern (click-to-load)

### 9.13 Content Freshness Strategy

| Content Type | Freshness Requirement | Strategy |
|--------------|-----------------------|----------|
| News articles | Minutes-to-hours | ISR with 60s revalidation, on-demand revalidation via webhook |
| Tournament pages | Hours | ISR with 300s revalidation |
| Directory profiles | Daily | ISR with 300s revalidation, webhook on status change |
| Course pages | Weekly | ISR with 3600s revalidation |
| Blog posts | Weekly | ISR with 3600s revalidation |
| Static/legal pages | On deploy | SSG |
| Rankings | Daily | ISR with 600s revalidation |

---

## 10. CMS & Admin Architecture

### 10.1 Content Types

| Content Type | Site | Fields Summary |
|-------------|------|----------------|
| `article` | News | title, slug, body, excerpt, category, tags, author, featured_image, status, published_at, seo_title, seo_description |
| `tournament` | News | name, slug, start_date, end_date, location, buy_in, prize_pool, results, status, related_articles |
| `author` | News | name, slug, bio, avatar, role, social_links, expertise_tags |
| `directory_profile` | Union/News | name, slug, type, status, verification_date, bio, avatar, documents, review_notes |
| `course` | Academy | title, slug, description, instructor, level, duration, price, curriculum, prerequisites, status |
| `lesson` | Academy | title, slug, course_id, order, content, video_url, duration, quiz_data |
| `coach` | Academy | name, slug, bio, avatar, specialties, game_types, hourly_rate, availability, verification_status |
| `learning_path` | Academy | name, slug, description, courses (ordered), difficulty_progression |
| `blog_post` | Academy | title, slug, body, excerpt, author, category, tags, featured_image, related_courses |
| `testimonial` | Academy | student_name, content, course_id, rating, avatar, approved |
| `faq_item` | All | question, answer, category, site, order |
| `legal_page` | All | title, slug, body, effective_date, version, site |
| `alert` | News | title, body, severity, entity_id, status, published_at |
| `page` | All | title, slug, body, seo_title, seo_description, site (for custom pages) |

### 10.2 Roles and Permissions Matrix

| Role | Content CRUD | Publish | Moderate | Directory | Users | Settings |
|------|-------------|---------|----------|-----------|-------|----------|
| **Super Admin** | Full | Yes | Yes | Full | Full | Full |
| **Editor-in-Chief** | Full | Yes | Yes | Read | Read | Read |
| **Senior Editor** | Full | Yes | Own section | Read | No | No |
| **Writer** | Own content | No (submit) | No | No | No | No |
| **Directory Moderator** | No | No | No | Full | No | No |
| **Support Agent** | No | No | Tickets only | Read | Limited | No |
| **Coach** | Own courses | No (submit) | No | No | No | No |
| **Contributor** | Own content | No (submit) | No | No | No | No |

### 10.3 Editorial Workflow

```
DRAFT
  ↓ Author submits
IN_REVIEW
  ↓ Editor reviews
  ├── APPROVED → Ready to schedule/publish
  │     ↓ Publish action (manual or scheduled)
  │   PUBLISHED
  │     ↓ If correction needed
  │   CORRECTION_PENDING
  │     ↓ Fix applied
  │   PUBLISHED (with correction notice)
  └── REJECTED → Back to author with notes
      ↓ Author revises
    DRAFT (revision)
```

#### Status Definitions

| Status | Description | Who Can Set |
|--------|-------------|-------------|
| `draft` | Work in progress | Author |
| `in_review` | Submitted for editorial review | Author (submit action) |
| `approved` | Approved, ready to publish | Editor+ |
| `published` | Live on site | Editor+ |
| `scheduled` | Approved, set for future publish | Editor+ |
| `rejected` | Returned to author with notes | Editor+ |
| `archived` | Removed from site, retained in DB | Editor+ |
| `correction_pending` | Published but needs correction | Editor+ |

### 10.4 Moderation Workflow

```
REPORT_RECEIVED
  ↓ Auto-categorize + assign
IN_MODERATION
  ↓ Moderator reviews
  ├── RESOLVED_NO_ACTION → Close with reason
  ├── WARNING_ISSUED → Notify user, log warning
  ├── CONTENT_REMOVED → Remove content, notify user
  ├── ACCOUNT_SUSPENDED → Temp suspension, notify user
  └── ESCALATED → Send to senior moderator/legal
      ↓ Escalated review
    ESCALATION_RESOLVED
```

### 10.5 Directory Review Workflow

```
APPLICATION_RECEIVED
  ↓ Auto-screening (duplicate check, completeness)
PENDING_REVIEW
  ↓ Moderator assigned
IN_REVIEW
  ↓ Document verification + community check
  ├── VERIFIED → Profile published as "Verified"
  ├── ADDITIONAL_INFO_NEEDED → Request from applicant
  │     ↓ Info provided
  │   IN_REVIEW (continue)
  ├── DENIED → Notify with reason, appeal option
  └── FLAGGED → Move to Under Review
      ↓ Investigation
    UNDER_REVIEW (public status)
      ↓ Resolution
      ├── VERIFIED (cleared)
      ├── CONCERN (public alert)
      └── REMOVED (from directory)
```

### 10.6 Support Ticket Workflow

```
TICKET_CREATED
  ↓ Auto-categorize + priority assign
OPEN
  ↓ Agent picks up
IN_PROGRESS
  ↓ Agent works ticket
  ├── WAITING_ON_USER → Need more info from user
  │     ↓ User responds
  │   IN_PROGRESS (continue)
  ├── RESOLVED → Mark resolved, send satisfaction survey
  └── ESCALATED → Send to supervisor
      ↓ Supervisor review
    ESCALATION_IN_PROGRESS
      ↓
    RESOLVED
```

#### Priority Levels

| Priority | Response SLA | Resolution SLA | Examples |
|----------|-------------|----------------|----------|
| Critical | 1 hour | 4 hours | Security issue, data breach, legal threat |
| High | 4 hours | 24 hours | Account access, verification error, payment issue |
| Medium | 24 hours | 72 hours | Content issue, feature request, general question |
| Low | 48 hours | 1 week | Feedback, non-urgent suggestions |

### 10.7 Scheduled Publishing

- Articles, courses, and blog posts support scheduled publishing via `scheduled_at` timestamp
- A Supabase Edge Function runs on a cron schedule (every minute) checking for content where `scheduled_at <= NOW()` and `status = 'scheduled'`
- On trigger, status is updated to `published` and ISR revalidation is triggered via Vercel webhook
- Timezone: All timestamps stored in UTC, displayed in user's local timezone in admin

### 10.8 Correction Workflow

1. Editor identifies error in published article
2. Article status set to `correction_pending`
3. Author or editor makes correction
4. Correction note added to article metadata: `{ date, original_text, corrected_text, reason }`
5. Article re-published with visible correction notice at top
6. Correction logged in `/legal/corrections` page
7. Original version retained in version history

---

## 11. Legal / Support / Compliance Architecture

### 11.1 All Policy Pages

| Page | Site | URL |
|------|------|-----|
| Terms of Service | Union | `ggclube.com/legal/terms` |
| Privacy Policy | Union | `ggclube.com/legal/privacy` |
| Disclaimer | Union | `ggclube.com/legal/disclaimer` |
| Cookie Policy | Union | `ggclube.com/legal/cookie-policy` |
| Community Guidelines | Union | `ggclube.com/legal/community-guidelines` |
| Terms of Service | News | `news.ggclube.com/legal/terms` |
| Privacy Policy | News | `news.ggclube.com/legal/privacy` |
| Editorial Policy | News | `news.ggclube.com/legal/editorial-policy` |
| Corrections & Retractions | News | `news.ggclube.com/legal/corrections` |
| Disclaimer | News | `news.ggclube.com/legal/disclaimer` |
| Terms of Service | Academy | `academy.ggclube.com/legal/terms` |
| Privacy Policy | Academy | `academy.ggclube.com/legal/privacy` |
| Refund Policy | Academy | `academy.ggclube.com/legal/refund-policy` |
| Disclaimer | Academy | `academy.ggclube.com/legal/disclaimer` |

### 11.2 Trust Language Standards

The following language patterns MUST be used across all sites:

#### Verification Language

DO use:
- "Verified by GGClube" — means they have passed our review process
- "Verification indicates that [entity] has met GGClube's review criteria at the time of verification"
- "Verification status is current as of [date]"
- "Under review" — means we are currently examining this entity

DO NOT use:
- "Guaranteed" or "100% safe"
- "Endorsed by GGClube" (verification is not endorsement)
- "Officially certified" (we are not a regulatory body)
- "Trusted" as an absolute (use "reviewed" or "verified through our process")
- "Blacklisted" (use "flagged" or "under review" or "concern raised")

#### Directory Language

- Verified profiles: "This agent has been verified through GGClube's review process. Verification does not constitute a guarantee of future conduct."
- Under-review profiles: "This entity is currently under review. An under-review status does not imply wrongdoing."
- Concern profiles: "Community concerns have been raised regarding this entity. GGClube is monitoring the situation."

### 11.3 Moderation Rules

1. **Presumption of Innocence:** No entity is publicly labeled as "scam" or "fraud" without legal basis
2. **Evidence Standard:** Under-review status requires at least 2 independent reports or 1 verified report with evidence
3. **Concern Status:** Requires moderator review and documentation before public display
4. **Right of Response:** Entities flagged must be given opportunity to respond before public status change
5. **Time Limits:** Under-review status reviewed every 14 days; cannot persist indefinitely without action
6. **Escalation:** Legal-adjacent decisions (removing verified status, publishing concerns) require senior moderator approval

### 11.4 Evidence and Escalation Rules

#### Evidence Categories

| Category | Examples | Weight |
|----------|----------|--------|
| **Documentary** | Screenshots, transaction records, communications | High |
| **Testimonial** | User reports, witness accounts | Medium |
| **Circumstantial** | Behavioral patterns, consistency of complaints | Supporting |
| **Public Record** | Court records, regulatory actions | Highest |

#### Escalation Triggers
- Legal threat received from subject of coverage or review
- Request from law enforcement
- 5+ independent reports about same entity within 30 days
- Evidence of financial fraud or criminal activity
- Potential defamation risk in published content
- DMCA takedown notice

#### Escalation Path
1. Support/Moderator → Senior Moderator
2. Senior Moderator → Editor-in-Chief (for content) or Directory Lead (for verification)
3. Director-level → External legal counsel (when legal risk identified)

### 11.5 Report Concern Workflow

```
User submits report via /report-concern form
  ↓ Fields: entity name, category, description, evidence (upload), contact (optional)
  ↓
Auto-categorize + de-duplicate check
  ↓
Assign to moderation queue
  ↓ Priority based on severity + frequency
Moderator reviews within SLA
  ↓
Decision: dismiss / investigate / escalate
  ↓ If investigate:
Contact subject for response (if identifiable)
  ↓ Allow 7 days for response
Review evidence + response
  ↓
Decision: no action / warning / status change / removal
  ↓
Notify reporter (if contact provided) with outcome summary
Document in moderation log
```

### 11.6 Age Gate Strategy

- GGClube content involves poker (gambling-adjacent) topics
- **Soft age gate:** Cookie-based acknowledgment on first visit: "This site contains content related to poker. You must be 18+ (or legal age in your jurisdiction) to use this site."
- Not a hard verification (no ID check) — this is a content/community site, not a gambling site
- Age gate sets a cookie; returning users are not re-prompted
- Legal pages accessible without age gate

### 11.7 Jurisdiction Notice

Footer on all sites must include:

> "GGClube operates as an informational and community platform. GGClube does not facilitate, host, or promote gambling. Users are responsible for compliance with the laws of their jurisdiction regarding poker and online gaming."

### 11.8 Responsible Play Language

Where poker strategy or game-related content appears:

> "Poker involves risk. Only play with funds you can afford to lose. If you or someone you know has a gambling problem, please contact [local helpline link]."

This notice appears:
- In the footer of Academy (where strategy/play content is taught)
- On News strategy/guide articles
- On Union's for-players page

---

## 12. Data Models

### 12.1 Database Overview

The complete schema is defined in `packages/supabase/schema.sql`. Below is a summary of the 27 core tables:

### 12.2 Table Summary

| # | Table | Purpose | Key Relations |
|---|-------|---------|---------------|
| 1 | `profiles` | User profiles (extends Supabase Auth) | auth.users |
| 2 | `roles` | Role definitions | profiles |
| 3 | `agent_applications` | Agent verification applications | profiles |
| 4 | `player_registrations` | Player account registrations | profiles |
| 5 | `directory_profiles` | Verified/reviewed entity profiles | profiles, verification_reviews |
| 6 | `verification_reviews` | Review history for directory profiles | directory_profiles, profiles (reviewer) |
| 7 | `articles` | News articles and blog posts | authors, categories, tags |
| 8 | `authors` | Writer/contributor profiles | profiles |
| 9 | `categories` | Content categories | articles, blog_posts |
| 10 | `tags` | Content tags (many-to-many) | articles, blog_posts, courses |
| 11 | `article_tags` | Junction: articles ↔ tags | articles, tags |
| 12 | `tournaments` | Tournament records | articles (related) |
| 13 | `tournament_results` | Tournament placement data | tournaments |
| 14 | `courses` | Academy courses | coaches, categories |
| 15 | `lessons` | Individual lessons within courses | courses |
| 16 | `learning_paths` | Curated course sequences | courses (ordered) |
| 17 | `learning_path_courses` | Junction: learning_paths ↔ courses | learning_paths, courses |
| 18 | `coaches` | Coach profiles | profiles, directory_profiles |
| 19 | `enrollments` | Student course enrollments | profiles, courses |
| 20 | `lesson_progress` | Per-lesson completion tracking | profiles, lessons |
| 21 | `memberships` | Membership subscriptions | profiles |
| 22 | `coaching_sessions` | Booked coaching sessions | profiles (student), coaches |
| 23 | `reviews` | Student reviews of courses/coaches | profiles, courses, coaches |
| 24 | `testimonials` | Curated testimonials | profiles, courses |
| 25 | `support_tickets` | Support/help tickets | profiles |
| 26 | `moderation_reports` | Community moderation reports | profiles (reporter), directory_profiles |
| 27 | `notifications` | System notifications | profiles |

### 12.3 Key Schema Details

#### `profiles` Table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'player',  -- player, agent, writer, editor, moderator, admin, coach
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  metadata JSONB DEFAULT '{}'::JSONB
);
```

#### `directory_profiles` Table
```sql
CREATE TABLE directory_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,  -- agent, organization, room
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, verified, under_review, concern, paused, removed
  bio TEXT,
  avatar_url TEXT,
  verification_date TIMESTAMPTZ,
  last_reviewed TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `articles` Table
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  body TEXT NOT NULL,
  excerpt TEXT,
  author_id UUID REFERENCES authors(id),
  category_id UUID REFERENCES categories(id),
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft',  -- draft, in_review, approved, published, scheduled, rejected, archived
  published_at TIMESTAMPTZ,
  scheduled_at TIMESTAMPTZ,
  seo_title TEXT,
  seo_description TEXT,
  reading_time INTEGER,
  site TEXT NOT NULL,  -- news, academy
  correction_notes JSONB DEFAULT '[]'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `courses` Table
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  instructor_id UUID REFERENCES coaches(id),
  category_id UUID REFERENCES categories(id),
  level TEXT NOT NULL,  -- beginner, intermediate, advanced
  duration_minutes INTEGER,
  price_cents INTEGER DEFAULT 0,  -- 0 = free
  currency TEXT DEFAULT 'USD',
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  prerequisites TEXT[],
  learning_outcomes TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Row-Level Security (RLS) Patterns

```sql
-- Example: Articles are readable by everyone when published
CREATE POLICY "Published articles are public"
  ON articles FOR SELECT
  USING (status = 'published');

-- Example: Authors can edit their own drafts
CREATE POLICY "Authors can update own drafts"
  ON articles FOR UPDATE
  USING (author_id IN (
    SELECT id FROM authors WHERE profile_id = auth.uid()
  ) AND status = 'draft');

-- Example: Directory profiles are public when verified
CREATE POLICY "Verified profiles are public"
  ON directory_profiles FOR SELECT
  USING (status IN ('verified', 'under_review', 'concern'));
```

---

## 13. Analytics / CRO Plan

### 13.1 Event Tracking Plan

All events are tracked via PostHog through the `@ggclube/analytics` package.

#### Global Events (All Sites)

| Event Name | Properties | Trigger |
|-----------|-----------|---------|
| `page_view` | `path, site, referrer, utm_*` | Every page load |
| `cta_click` | `cta_id, cta_text, location, variant` | Any CTA button click |
| `external_link_click` | `url, context` | External link click |
| `search` | `query, results_count, site` | Search action |
| `newsletter_subscribe` | `email_domain, source, site` | Newsletter form submit |
| `age_gate_accept` | `site` | Age gate acceptance |
| `footer_link_click` | `link_text, destination` | Footer link click |
| `error_page_view` | `path, error_type (404/500)` | Error page rendered |

#### Union Events

| Event Name | Properties | Trigger |
|-----------|-----------|---------|
| `agent_application_start` | `step_number` | Application form opened |
| `agent_application_step` | `step_number, fields_completed` | Application step completed |
| `agent_application_submit` | `application_id` | Application submitted |
| `player_registration_start` | - | Registration form opened |
| `player_registration_submit` | - | Registration submitted |
| `directory_view` | `filters_applied` | Directory page viewed |
| `directory_profile_view` | `profile_slug, status` | Individual profile viewed |
| `directory_search` | `query, results_count, filters` | Directory search |
| `report_concern_start` | - | Report form opened |
| `report_concern_submit` | `category` | Report submitted |
| `verification_page_view` | - | How verification works viewed |
| `contact_form_submit` | `category` | Contact form submitted |

#### News Events

| Event Name | Properties | Trigger |
|-----------|-----------|---------|
| `article_view` | `slug, category, author, word_count` | Article page viewed |
| `article_read_progress` | `slug, percent (25/50/75/100)` | Scroll depth milestones |
| `article_share` | `slug, platform` | Share button clicked |
| `article_bookmark` | `slug` | Bookmark/save action |
| `tournament_view` | `tournament_slug` | Tournament page viewed |
| `directory_profile_view` | `profile_slug, status` | Directory profile viewed |
| `video_play` | `video_id, source` | Video playback started |
| `video_progress` | `video_id, percent` | Video watch milestones |
| `podcast_play` | `episode_id` | Podcast playback started |
| `tip_submit` | `category, anonymous` | Tip form submitted |
| `author_page_view` | `author_slug` | Author profile viewed |

#### Academy Events

| Event Name | Properties | Trigger |
|-----------|-----------|---------|
| `course_view` | `course_slug, level, price` | Course page viewed |
| `course_enroll` | `course_slug, price, is_free` | Course enrollment |
| `lesson_start` | `lesson_slug, course_slug` | Lesson opened |
| `lesson_complete` | `lesson_slug, course_slug, time_spent` | Lesson marked complete |
| `course_complete` | `course_slug, total_time` | All lessons in course completed |
| `quiz_attempt` | `lesson_slug, score, passed` | Quiz submitted |
| `coach_view` | `coach_slug` | Coach profile viewed |
| `coaching_session_book` | `coach_slug, session_type` | Coaching session booked |
| `learning_path_view` | `path_slug` | Learning path viewed |
| `learning_path_start` | `path_slug` | First course in path enrolled |
| `membership_view_pricing` | - | Pricing page viewed |
| `membership_start_checkout` | `tier` | Checkout initiated |
| `membership_complete` | `tier, price` | Membership purchased |
| `free_resource_download` | `resource_slug, email_gated` | Resource downloaded |
| `blog_post_view` | `slug, category` | Blog post viewed |
| `testimonial_view` | - | Testimonials page viewed |
| `registration_start` | `source` | Join form opened |
| `registration_complete` | `source, method (email/google)` | Account created |
| `login` | `method` | User logged in |

### 13.2 Conversion Goals Per Site

#### Union Conversion Goals

| Goal | Type | Target | Funnel |
|------|------|--------|--------|
| Agent application submitted | Primary | 50/month | Homepage → For Agents → How It Works → Apply |
| Player registration | Primary | 200/month | Homepage → For Players → Register |
| Directory profile view | Engagement | 1000/month | Homepage → Directory → Profile |
| Contact form submission | Secondary | 30/month | Any page → Contact |
| Newsletter subscription | Secondary | 100/month | Any page → Newsletter |

#### News Conversion Goals

| Goal | Type | Target | Funnel |
|------|------|--------|--------|
| Newsletter subscription | Primary | 500/month | Article → Newsletter CTA → Subscribe |
| Article read (75%+) | Engagement | 40% of views | Article page → scroll |
| Return visitor (7-day) | Engagement | 30% of visitors | Any page → return |
| Cross-site click to Academy | Secondary | 200/month | Strategy/Guide → Academy CTA |
| Tip submission | Secondary | 10/month | Alert/Review page → Submit Tip |

#### Academy Conversion Goals

| Goal | Type | Target | Funnel |
|------|------|--------|--------|
| Course enrollment (free) | Primary | 300/month | Course catalog → Course page → Enroll |
| Membership purchase | Primary | 50/month | Pricing → Checkout → Purchase |
| Coaching session booked | Primary | 30/month | Coaches → Profile → Book |
| Course completion | Engagement | 40% of enrollments | Lesson → Lesson → ... → Complete |
| Free resource download | Secondary | 200/month | Free Resources → Download |

### 13.3 CTA Framework

Every page follows a CTA hierarchy:

1. **Primary CTA:** The main desired action (one per page, visually dominant)
2. **Secondary CTA:** An alternative action for users not ready for primary
3. **Tertiary CTA:** Passive engagement (newsletter, follow, bookmark)

#### CTA Placement Rules

| Location | CTA Type | Example |
|----------|----------|---------|
| Hero section | Primary + Secondary | "Apply Now" + "Learn More" |
| After 2nd section | Secondary | "See How It Works" |
| Mid-page | Primary (reinforcement) | "Start Your Application" |
| End of content | Primary + Tertiary | "Enroll Now" + "Subscribe" |
| Floating/sticky (mobile) | Primary | "Apply" (bottom bar) |
| Sidebar (desktop) | Primary + Secondary | "Enroll" + "View Pricing" |
| Exit intent (modal) | Tertiary | "Subscribe before you go" |

---

## 14. Content Engine

### 14.1 Content Operating System

The GGClube content engine is a systematic approach to producing, distributing, and optimizing content across all three sites.

#### Content Pillars

| Pillar | Sites | Description |
|--------|-------|-------------|
| **Trust & Verification** | Union, News | Content about the verification process, directory updates, trust in poker |
| **Tournament Coverage** | News | Live coverage, results, previews, analysis |
| **Strategy & Education** | News, Academy | Poker strategy articles, guides, courses |
| **Community Stories** | Union, News | Player/agent spotlights, interviews, success stories |
| **Industry Analysis** | News | Market trends, regulatory updates, industry opinion |
| **Learning & Growth** | Academy | Course content, blog posts, study guides, coaching insights |

### 14.2 Editorial Calendar Concept

#### Monthly Cadence

| Week | Focus | Content Types |
|------|-------|---------------|
| Week 1 | Tournament preview + strategy tie-in | News: preview article, Academy: related strategy blog post |
| Week 2 | Community spotlight + directory update | Union: new verified agents, News: agent spotlight, Academy: coach feature |
| Week 3 | Deep dive / investigative / feature | News: long-form feature, Academy: comprehensive guide |
| Week 4 | Roundup + upcoming look | News: monthly roundup, Academy: course launch, Union: metrics update |

#### Publishing Frequency Targets

| Site | Content Type | Frequency |
|------|-------------|-----------|
| News | News articles | 3-5 per week |
| News | Tournament coverage | As events occur |
| News | Features/long-form | 1-2 per month |
| News | Strategy articles | 2-3 per week |
| News | Guides | 1-2 per month |
| News | Video | 1-2 per week |
| News | Podcast | 1 per week |
| Academy | Blog posts | 2-3 per week |
| Academy | New courses | 1-2 per month |
| Academy | Free resources | 1-2 per month |
| Union | Community updates | 1 per week |
| Union | Directory updates | Ongoing |

### 14.3 Content Types and Their Lifecycle

| Content Type | Creation | Review | Publish | Promotion | Refresh |
|-------------|----------|--------|---------|-----------|---------|
| News Article | Writer drafts | Editor review (same day) | Within hours | Social, newsletter | Update if new info |
| Feature | Writer drafts (3-5 days) | Senior editor (1-2 days) | Scheduled | Social, newsletter, homepage feature | Annually or as needed |
| Strategy Guide | Expert writer (2-3 days) | Editor + fact check (1-2 days) | Scheduled | Social, Academy cross-link, newsletter | Quarterly |
| Course | Instructor creates (2-4 weeks) | Content review (1 week) | Launch event | Social, blog, newsletter, email | Annually |
| Blog Post | Writer drafts (1-2 days) | Editor review (1 day) | Scheduled | Social, course cross-link | As strategy evolves |
| Directory Profile | Application submitted | Moderator review (3-5 days) | On approval | Directory update post | Ongoing monitoring |

### 14.4 Social Content Strategy

#### Platform Presence

| Platform | Primary Brand | Content Focus | Posting Frequency |
|----------|--------------|---------------|-------------------|
| Twitter/X | News | Breaking news, tournament updates, hot takes | 5-10 per day |
| Instagram | Academy | Visual strategy tips, course promos, community | 1-2 per day |
| YouTube | News + Academy | Video content, tutorials, interviews | 2-3 per week |
| TikTok | Academy | Short strategy tips, poker moments | 3-5 per week |
| LinkedIn | Union | Industry updates, trust/verification thought leadership | 2-3 per week |
| Discord/Telegram | Union | Community engagement, real-time discussion | Continuous |

#### Content Repurposing Flow

```
Long-form Article (News)
  → Twitter thread (key points)
  → Instagram carousel (visual summary)
  → YouTube video discussion
  → Newsletter excerpt
  → Academy blog post (if strategy-related)

Course Launch (Academy)
  → Blog post (preview + free sample)
  → YouTube trailer
  → Instagram Reel (30-sec tip from course)
  → Twitter announcement
  → News article (if newsworthy)
  → Email to existing students
```

### 14.5 Video Integration Model

See [Section 16: YouTube / Video Integration](#16-youtube--video-integration) for full details.

---

## 15. 7-Day Social Content Plan

### 15.1 GGClube Union — Weekly Plan

| Day | Platform | Post Angle | Hook | Caption Concept | Creative Direction | CTA | Asset Type | Destination URL |
|-----|----------|-----------|------|-----------------|-------------------|-----|-----------|----------------|
| Mon | LinkedIn | Trust thought leadership | "In poker, trust is the ultimate currency." | Post about why verified communities matter in the poker ecosystem. Reference a real industry trust issue without naming names. | Dark graphic with platinum text overlay. Quote-style. GGClube logo watermark. | "Learn about our verification process" | Static image | ggclube.com/how-verification-works |
| Tue | Twitter/X | New verified agent spotlight | "Welcome to the verified network:" | Announce a newly verified agent (with their permission). Brief bio and what makes them stand out. | Profile card mockup with verified badge. Emerald accent. Agent photo. | "View their profile" | Static image | ggclube.com (directory link) |
| Wed | Instagram | Community value proposition | "3 reasons players choose GGClube" | Carousel post: 1) Verified agents 2) Community standards 3) Transparency. Each slide one reason with visual. | 5-slide carousel. Obsidian background, emerald numbers, platinum text. Clean design system aesthetic. | "Link in bio to join" | Carousel | ggclube.com/for-players |
| Thu | Twitter/X | Industry observation | "What if every poker agent was verified?" | Thought-provoking post about the state of agent verification in poker. Conversational tone, invite discussion. | Text-only tweet with follow-up thread explaining GGClube's approach. | "Join the conversation" | Text thread | ggclube.com/why-ggclube |
| Fri | LinkedIn | For agents | "Agents: your reputation is your business." | Post addressing agents directly about the value of third-party verification. How it differentiates them from unverified competitors. | Split graphic: "Without verification" (gray, uncertain) vs. "With GGClube" (emerald, clear). | "Apply for verification" | Static image | ggclube.com/apply/agent |
| Sat | Instagram | Behind the scenes | "Inside our verification process" | Story/Reel showing a simplified, visual walk-through of the verification steps. Approachable, transparent tone. | Short Reel (30-45s) with animated steps. Screen recording style of the process flow. Obsidian + emerald palette. | "Swipe up to learn more" | Reel/Story | ggclube.com/how-verification-works |
| Sun | Twitter/X | Community engagement | "What's the #1 quality you look for in a poker agent?" | Poll or engagement post. Interactive, community-building. Reference that GGClube verifies these qualities. | Poll tweet with 4 options. Follow-up with GGClube perspective. | "Tell us in the replies" | Poll | ggclube.com |

### 15.2 GGClube News — Weekly Plan

| Day | Platform | Post Angle | Hook | Caption Concept | Creative Direction | CTA | Asset Type | Destination URL |
|-----|----------|-----------|------|-----------------|-------------------|-----|-----------|----------------|
| Mon | Twitter/X | Breaking news / weekly preview | "This week in poker:" | Monday morning roundup of what to watch this week. Tournaments, expected announcements, key dates. | Thread format. Clean text with emoji bullet points. GGClube News branding in profile. | "Follow for updates all week" | Text thread | news.ggclube.com/latest |
| Tue | YouTube | Hand analysis / strategy video | "This hand changed the tournament..." | Video analyzing a notable recent hand from a major tournament. Expert commentary, replays, alternative lines. | Talking head + hand replay graphics. Professional editing. GGClube News lower third. 8-12 min. | "Subscribe for more analysis" | Video | news.ggclube.com/video |
| Wed | Twitter/X | Tournament update | "Results are in: [Tournament] Day 2" | Real-time tournament coverage thread. Key results, chip counts, notable bustouts, drama. | Live-thread format during tournament. Results graphic at end. Monospace for numbers. | "Full coverage on GGClube News" | Text + image | news.ggclube.com/tournaments/[slug] |
| Thu | Instagram | Feature article promo | "We investigated. Here's what we found." | Promote a feature or investigative piece with a compelling visual and hook from the article. | Article headline graphic with compelling pull quote. Magazine cover aesthetic. Dark, serious tone. | "Read the full story — link in bio" | Static image | news.ggclube.com/features |
| Fri | Twitter/X | Rankings / stats | "This week's top movers in the rankings:" | Share ranking updates with key stats. Who moved up, who fell, notable changes. | Graphic with ranking table. Monospace numbers. Arrow indicators for movement. Clean data visualization. | "Full rankings on GGClube News" | Static image | news.ggclube.com/rankings |
| Sat | YouTube | Podcast episode | "This week on the GGClube Podcast:" | Full podcast episode or highlight clip. Guest interview, news discussion, or strategy talk. | Video podcast format or audio + static image. Professional audio quality. 30-60 min full ep, 5-10 min clip. | "Listen to the full episode" | Video | news.ggclube.com/podcast |
| Sun | Instagram | Weekend reads | "Your Sunday poker reading list" | Carousel of the week's best articles. One slide per article with headline, image, and why to read. | 5-7 slide carousel. Editorial design. Each slide: article image + headline + one-line hook. | "Tap the link in bio to read" | Carousel | news.ggclube.com/latest |

### 15.3 GGClube Academy — Weekly Plan

| Day | Platform | Post Angle | Hook | Caption Concept | Creative Direction | CTA | Asset Type | Destination URL |
|-----|----------|-----------|------|-----------------|-------------------|-----|-----------|----------------|
| Mon | Instagram | Strategy tip | "Monday study session: Position play" | Quick strategy tip in carousel format. 5 slides breaking down a key concept. Visual, easy to digest. | Carousel: slide 1 hook, slides 2-4 content, slide 5 CTA. Obsidian bg, emerald highlights, diagram/table on each slide. | "Want the full course? Link in bio" | Carousel | academy.ggclube.com/courses |
| Tue | TikTok | Quick tip video | "Most beginners make this mistake at the table..." | 30-60 second video with a single, punchy strategy tip. Screen share or whiteboard style. | Vertical video. Coach or instructor on camera. Text overlays for key points. Energetic, clear delivery. | "Follow for daily tips" | Short video | academy.ggclube.com |
| Wed | YouTube | Full lesson preview | "Free lesson: Understanding pot odds" | Release a full lesson from a course as a YouTube video. Demonstrates course quality. | Full lesson video (10-20 min). Course-quality production. GGClube Academy branding. End screen with enroll CTA. | "Enroll in the full course — link below" | Video | academy.ggclube.com/courses/[slug] |
| Thu | Twitter/X | Student win / testimonial | "From beginner to final table:" | Share a student success story or testimonial. Celebrate progress. Build social proof. | Quote graphic with student photo (with permission) and their result/achievement. Emerald accent. | "Start your journey" | Static image | academy.ggclube.com/testimonials |
| Fri | Instagram | Coach spotlight | "Meet Coach [Name] — specialist in tournament poker" | Introduce a coach with their background, teaching style, and what students say about them. | Reel or carousel. Coach photo/video, key stats (experience, students coached, rating), student quote. | "Book a session — link in bio" | Reel or carousel | academy.ggclube.com/coaches/[slug] |
| Sat | TikTok | Quiz / interactive | "Can you spot the correct play?" | Present a poker hand scenario and ask viewers what they'd do. Reveal the optimal play. | Vertical video with hand scenario graphic. Pause/think moment. Reveal with explanation. | "Learn why in our free course" | Short video | academy.ggclube.com/free-resources |
| Sun | Twitter/X | Weekly study plan | "Your poker study plan for the week:" | Thread with a structured 7-day study plan. Mix of free content and course references. Day-by-day breakdown. | Thread format with clean text and occasional graphic. Study plan template. | "Start day 1 of your study plan" | Text thread | academy.ggclube.com/learning-paths |

---

## 16. YouTube / Video Integration

### 16.1 Where Video Lives

| Site | Video Locations | Content Type |
|------|----------------|-------------|
| **News** | `/video` (hub), inline in articles, `/podcast` (video podcast) | Tournament recaps, hand analysis, interviews, podcast, explainers |
| **Academy** | `/lessons/[slug]` (lesson video), `/courses/[slug]` (preview), `/coaches/[slug]` (intro video), `/blog/[slug]` (embedded) | Course lessons, course previews, coach intros, tutorial videos |
| **Union** | `/how-verification-works` (explainer), homepage (brand video) | Explainer videos, brand storytelling |

### 16.2 Embed Strategy

#### YouTube Facade Pattern

To maintain Core Web Vitals, all YouTube embeds use a facade (click-to-load) pattern:

```tsx
// packages/ui/src/components/YouTubeEmbed/YouTubeEmbed.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export function YouTubeEmbed({ videoId, title, thumbnail }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-lg"
      />
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-lg"
      aria-label={`Play video: ${title}`}
    >
      <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-obsidian-950/40 transition group-hover:bg-obsidian-950/30">
        <PlayIcon className="h-16 w-16 text-ivory-50 transition group-hover:scale-110" />
      </div>
    </button>
  );
}
```

### 16.3 Video Schema

Every video embed outputs JSON-LD `VideoObject` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Video Title",
  "description": "Video description",
  "thumbnailUrl": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  "uploadDate": "2026-03-15",
  "duration": "PT12M30S",
  "contentUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "publisher": {
    "@type": "Organization",
    "name": "GGClube News",
    "logo": { "@type": "ImageObject", "url": "..." }
  }
}
```

### 16.4 Lazy Loading

- All video embeds below the fold use the facade pattern (no iframe until click)
- Video thumbnails use `next/image` with `loading="lazy"` (default for images below fold)
- Video player scripts are dynamically imported only when facade is clicked
- No third-party video scripts in the initial bundle

### 16.5 Video Content Types

| Type | Duration | Platform | Usage |
|------|----------|----------|-------|
| Course lesson | 10-30 min | Self-hosted or YouTube (unlisted) | Academy lessons |
| Course preview | 1-3 min | YouTube (public) | Course marketing |
| Hand analysis | 5-15 min | YouTube (public) | News strategy content |
| Tournament recap | 10-20 min | YouTube (public) | News tournament coverage |
| Interview | 15-45 min | YouTube (public) | News features |
| Podcast (video) | 30-90 min | YouTube (public) | News podcast |
| Quick tip | 30-90 sec | YouTube Shorts / TikTok | Social + embedded in blog |
| Explainer | 2-5 min | YouTube (public) | Union process explainers |

---

## 17. Internal Linking Strategy

### 17.1 Cross-Site Linking Map

```
UNION (ggclube.com) ←→ NEWS (news.ggclube.com) ←→ ACADEMY (academy.ggclube.com)
         ↑                        ↑                            ↑
         └────────────────────────┼────────────────────────────┘
                                  │
                          (all sites interlinked)
```

### 17.2 Link Directions and Contexts

#### Union → News

| From (Union) | To (News) | Context |
|-------------|----------|---------|
| Homepage | News homepage | "Read the latest from GGClube News" ecosystem section |
| `/our-network` | `/verified-directory` | "Browse our public directory on GGClube News" |
| `/for-agents` | `/verified-directory` | "See verified agents in our public directory" |
| `/for-players` | `/verified-directory` | "Browse verified agents" |
| `/how-verification-works` | `/about-editorial` | "Our editorial team covers verification stories" |
| Footer | News homepage | Ecosystem footer links |
| Community updates | Related news articles | Contextual links when relevant |

#### Union → Academy

| From (Union) | To (Academy) | Context |
|-------------|-------------|---------|
| Homepage | Academy homepage | "Level up with GGClube Academy" ecosystem section |
| `/for-players` | `/courses` | "Improve your game at GGClube Academy" |
| `/for-players` | `/free-resources` | "Free resources for players" |
| Footer | Academy homepage | Ecosystem footer links |

#### News → Union

| From (News) | To (Union) | Context |
|------------|----------|---------|
| Homepage | Union homepage | Ecosystem links, "Join the Community" |
| `/verified-directory` | Union verification pages | "How verification works", "Apply for verification" |
| `/verified-directory/[slug]` | Union verification process | "Learn about our verification process" |
| `/under-review` | Union community standards | "Read our community standards" |
| `/alerts` | Union report concern | "Report a concern" |
| Article body | Union pages | Contextual links in relevant articles |
| Footer | Union homepage | Ecosystem footer links |

#### News → Academy

| From (News) | To (Academy) | Context |
|------------|-------------|---------|
| `/strategy` articles | Related courses | "Take the full course on this topic at GGClube Academy" |
| `/guides` | Related courses | "Dive deeper with a structured course" |
| Author profiles | Coach profiles (if same person) | "Also available for coaching at GGClube Academy" |
| Homepage | Academy homepage | Ecosystem links |
| Footer | Academy homepage | Ecosystem footer links |

#### Academy → Union

| From (Academy) | To (Union) | Context |
|---------------|----------|---------|
| Homepage | Union homepage | "Join the GGClube Community" ecosystem section |
| `/coaches` | Union verification | "All coaches verified through GGClube Union" |
| `/coaches/[slug]` | Union directory profile | "View verification status" |
| Footer | Union homepage | Ecosystem footer links |

#### Academy → News

| From (Academy) | To (News) | Context |
|---------------|----------|---------|
| Homepage | News homepage | "Stay informed with GGClube News" |
| `/blog/[slug]` | Related news articles | "Related coverage on GGClube News" |
| `/courses/[slug]` | Related strategy articles | "Read related strategy articles" |
| Footer | News homepage | Ecosystem footer links |

### 17.3 Shared Footer Ecosystem Block

Every page on all three sites includes a footer section:

```
─── The GGClube Ecosystem ───

GGClube Union        GGClube News          GGClube Academy
Verified Community   Independent Voice     Level Up Your Game

[Visit Union]        [Visit News]          [Visit Academy]
```

### 17.4 Contextual In-Content Linking Rules

1. Every news article links to at least 1 Union page and 1 Academy page where relevant
2. Every Academy blog post links to at least 1 related course and 1 News article
3. Directory profiles on News link to the verification process on Union
4. Strategy content on News links to related Academy courses
5. Coach profiles link between Academy and News (author pages if applicable)
6. All legal pages cross-link between sites where policies overlap

---

## 18. Art Direction — The Obsidian Ledger

### 18.1 Design Identity

**The Obsidian Ledger** is the named design identity governing all visual decisions across the GGClube ecosystem. It draws from:

- **Obsidian:** The deep, dark, volcanic glass — representing depth, seriousness, and permanence
- **Ledger:** The record book — representing transparency, accountability, and meticulous record-keeping
- **Together:** A design language that feels weighty, trustworthy, and precise

### 18.2 Hero System

#### Homepage Heroes (Full-Bleed)

- Full viewport width, 80-100vh height on desktop
- Obsidian-950 background with subtle gradient overlay
- Headline in `display-7xl` (72px) with `platinum-400` color
- Subheadline in `body-lg` (18px) with `graphite-300` color
- Subtle emerald accent line (2px) below headline
- Cinematic entrance animation: text fades up over 700ms with staggered children
- Optional: subtle particle or grid-line animation in background
- Dual CTA buttons: primary (emerald) + secondary (outline)

#### Section Heroes (Interior Pages)

- Full width, 40-60vh height
- Obsidian-900 background
- Headline in `display-5xl` (48px) with `platinum-400` color
- Breadcrumb above headline in `label-xs`
- Fade-up entrance, 400ms
- Single or dual CTA below

#### Article Heroes

- Featured image (full-width, 16:9)
- Title overlaid on semi-transparent obsidian gradient
- Category badge (emerald pill) + Author avatar + Date
- `display-4xl` (36px) for title

### 18.3 Editorial Grid

#### Desktop (1280px+)

```
12-column grid, 80px max column width, 24px gutters
Content area: max-width 1280px, centered
Prose column: max-width 65ch (~720px), centered within content
Sidebar: 280-320px when present
```

#### Tablet (768px - 1279px)

```
8-column grid, 24px gutters
Content area: full width with 32px padding
Prose column: max-width 65ch
Sidebar collapses to below content or hidden
```

#### Mobile (< 768px)

```
4-column grid, 16px gutters
Content area: full width with 16px padding
Single column layout
Hamburger navigation
```

### 18.4 Section Transitions

Sections are visually separated with intentional transitions:

1. **Standard:** `border-t border-graphite-700` — simple line between sections
2. **Gradient Divider:** Thin line that glows emerald at center, fading to transparent at edges
3. **Accent Break:** 2px emerald line, used before CTA sections
4. **Space Break:** No visible divider, just generous vertical spacing (96-128px)
5. **Background Shift:** Section background changes from `obsidian-950` to `obsidian-900` (or vice versa)

### 18.5 Data Ribbons

Data ribbons are horizontal strips displaying key metrics, used on homepages and network pages:

```
┌─────────────────────────────────────────────────────────────────┐
│  500+ Agents Verified   │  10K+ Players   │  98% Satisfaction  │
└─────────────────────────────────────────────────────────────────┘
```

- Background: `obsidian-800` with top/bottom `border-graphite-700`
- Numbers in `display-3xl` (30px), `platinum-400`, monospace weight
- Labels in `label-xs` (12px), `graphite-400`, uppercase tracking
- Horizontal scroll on mobile, flex on desktop
- Subtle count-up animation on scroll-into-view

### 18.6 Ticker System

A horizontal scrolling ticker for real-time or near-real-time information:

```
◆ WSOP 2026 Day 3 Live ◆ Agent "PokerPro_Mike" Verified ◆ New Strategy Course Launched ◆
```

- Used on News homepage (tournament updates)
- Used on Union homepage (verification updates)
- Background: `obsidian-800`
- Text: `label-sm` (14px), `emerald-400` for highlights, `ivory-100` for body
- Smooth infinite scroll animation (CSS `marquee` alternative via `translateX`)
- Pausable on hover
- Diamond (◆) separators in `emerald-500`

### 18.7 Glass/Matte Cards

Two card surface treatments:

#### Glass Card
- Background: `rgba(26, 26, 30, 0.7)` with `backdrop-blur-xl`
- Border: `1px solid rgba(58, 58, 66, 0.4)`
- Usage: Overlay cards on hero sections, floating CTAs, feature highlights
- Hover: Slight brightness increase, border brightens

#### Matte Card
- Background: `obsidian-900` solid
- Border: `1px solid graphite-700`
- Usage: Content cards, profile cards, list items, most standard cards
- Hover: Background shifts to `obsidian-800`, shadow appears

### 18.8 Status Badges (Visual)

```
 ✓ Verified          — emerald bg tint, emerald text, checkmark icon
 ○ Unverified        — gray bg, gray text, empty circle icon
 ◷ Under Review      — gold bg tint, gold text, clock icon
 ⚠ Concern           — red bg tint, red text, alert icon
 ⏸ Paused            — dark gray bg, gray text, pause icon
```

Each badge:
- Height: 24px (sm) or 28px (md)
- Padding: 4px 10px
- Radius: `radius-full` (pill shape)
- Font: `label-xs` (12px), weight 600, uppercase tracking
- Icon: 14px, positioned left of text

### 18.9 CTA Treatment

#### Primary CTA (Emerald)
- Background: `emerald-500`
- Text: `obsidian-950` (dark on light for contrast)
- Border-radius: `radius-md` (6px)
- Hover: `emerald-400` background + `shadow-glow-emerald`
- Active: `emerald-600` background
- Transition: `duration-fast` (150ms)
- Font: `label-sm` (14px), weight 600

#### Platinum CTA (Premium)
- Background: `platinum-400`
- Text: `obsidian-950`
- Hover: `platinum-300` + `shadow-glow-platinum`
- Usage: Membership upgrades, premium features

#### CTA Blocks (Section-Level)
- Full-width section with `obsidian-800` background
- Top border: gradient emerald divider
- Headline in `display-3xl` (30px)
- Supporting text in `body-base` (16px), `graphite-300`
- Button centered below text
- Generous vertical padding (80-96px)

### 18.10 Typography Rhythm

The vertical rhythm follows an 8px baseline grid:

```
Section title (display-4xl):     margin-bottom: 16px
Section subtitle:                margin-bottom: 32px
Paragraph:                       margin-bottom: 24px
List item:                       margin-bottom: 8px
Card title:                      margin-bottom: 8px
Card description:                margin-bottom: 16px
Section gap:                     80-128px
```

Line heights are tuned for the 8px grid:
- `display-7xl` (72px) → line-height: 80px (1.11)
- `display-5xl` (48px) → line-height: 56px (1.167)
- `body-base` (16px) → line-height: 26px (1.625) — closest to 24px grid
- `body-lg` (18px) → line-height: 30px (1.667) — closest to 32px grid

### 18.11 Motion Storytelling

Motion is used purposefully, never gratuitously:

| Pattern | Animation | When | Purpose |
|---------|-----------|------|---------|
| **Page entrance** | Fade-up, cinematic (700ms) | First load | Set the tone, signal premium quality |
| **Section reveal** | Fade-up, slow (400ms) | Scroll into view | Guide attention through the page |
| **Stagger** | Children stagger at 60ms intervals | Grid/list entrance | Create flow and rhythm |
| **Card hover** | Scale 1.02 + shadow, fast (150ms) | Mouse enter | Indicate interactivity |
| **Button hover** | Background shift + glow, fast (150ms) | Mouse enter | Invite action |
| **Modal/drawer** | Scale-in or slide-in, base (250ms) | Open/close | Spatial orientation |
| **Status change** | Color transition, base (250ms) | Status update | Draw attention to change |
| **Data update** | Number count-up, slow (400ms) | Scroll into view | Dramatize data, create interest |
| **Page transition** | Cross-fade, base (250ms) | Navigation | Smooth continuity |

#### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:
- Durations set to 0ms
- Transforms disabled
- Opacity transitions retained but shortened to 100ms
- Count-up animations show final value immediately

---

## 19. Reusable Components List

All shared components live in `@ggclube/ui` (`packages/ui/src/components/`).

### 19.1 Core Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `Button` | `primary`, `secondary`, `ghost`, `outline`, `platinum`, `destructive` | `variant, size (sm/md/lg/xl), disabled, loading, icon, iconPosition, fullWidth, as (button/a)` | All CTAs and actions |
| `Badge` | `default`, `emerald`, `gold`, `red`, `blue`, `gray`, `outline` | `variant, size (sm/md), dot, removable` | Tags, categories, labels |
| `StatusBadge` | `verified`, `unverified`, `under-review`, `concern`, `paused` | `status, size (sm/md), showIcon, showLabel` | Directory, profiles |
| `Card` | `matte`, `glass`, `elevated` | `variant, padding, hover, as (div/article/a)` | Container for all card types |
| `Input` | `text`, `email`, `password`, `search`, `textarea`, `select` | `type, label, error, hint, required, disabled, icon` | All form fields |
| `Modal` | `default`, `compact`, `fullscreen` | `variant, open, onClose, title, description, footer` | Dialogs, confirmations |
| `Toast` | `success`, `error`, `warning`, `info` | `variant, title, description, duration, action` | Notifications |
| `Tooltip` | `top`, `right`, `bottom`, `left` | `content, side, delay` | Help text, explanations |
| `Avatar` | `sm` (32px), `md` (40px), `lg` (56px), `xl` (80px) | `src, alt, size, fallback, status` | User/author/coach photos |
| `Skeleton` | `text`, `circle`, `card`, `image` | `variant, width, height, lines (for text)` | Loading states |

### 19.2 Navigation Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `Navbar` | `union`, `news`, `academy` | `brand, links, cta, transparent` | Site header navigation |
| `MobileMenu` | N/A | `open, onClose, links, cta` | Mobile hamburger menu |
| `Footer` | `union`, `news`, `academy` | `brand, columns, ecosystem, legal` | Site footer |
| `Breadcrumb` | N/A | `items: { label, href }[]` | Page breadcrumbs |
| `Tabs` | `default`, `pills`, `underline` | `items, activeTab, onChange, variant` | Tab navigation |
| `Pagination` | `default`, `compact` | `total, current, perPage, onChange` | List pagination |

### 19.3 Content Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `ContentCard` | `default`, `featured`, `compact`, `horizontal` | `title, excerpt, image, category, author, date, href, variant` | Articles, blog posts |
| `ProfileCard` | `default`, `compact`, `featured` | `name, role, avatar, status, stats, href, variant` | Agents, authors, coaches |
| `CourseCard` | `default`, `compact`, `enrolled` | `title, instructor, level, duration, price, progress, href` | Course listings |
| `StatCard` | `default`, `compact` | `label, value, trend, icon` | Metrics, KPIs |
| `CTACard` | `default`, `featured` | `headline, description, primaryCta, secondaryCta` | Conversion blocks |
| `TestimonialCard` | `default`, `featured` | `quote, author, role, avatar, rating` | Social proof |
| `PricingCard` | `default`, `featured` (recommended) | `name, price, period, features, cta, featured` | Pricing plans |

### 19.4 Data Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `DataTable` | `default`, `compact`, `striped` | `columns, data, sortable, filterable, pagination` | Rankings, results |
| `DataRibbon` | N/A | `items: { label, value }[]` | Stats strip |
| `Ticker` | N/A | `items: { text, href?, highlight? }[], speed` | Scrolling news ticker |
| `ProgressBar` | `default`, `labeled` | `value, max, label, showPercent, color` | Course/lesson progress |
| `SearchBar` | `default`, `expanded` | `placeholder, onSearch, suggestions, variant` | Site search, directory search |
| `FilterPanel` | `sidebar`, `horizontal`, `dropdown` | `filters, values, onChange, variant` | Directory, course catalog |

### 19.5 Layout Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `Section` | `default`, `alternate`, `hero`, `cta` | `variant, padding, divider, background, id` | Page sections |
| `Container` | `default`, `narrow`, `wide`, `full` | `variant, as (div/section/main)` | Content width constraint |
| `Hero` | `homepage`, `page`, `article` | `variant, title, subtitle, breadcrumb, image, cta` | Page heroes |
| `SectionDivider` | `line`, `gradient`, `accent`, `space` | `variant` | Between sections |
| `Grid` | `2-col`, `3-col`, `4-col`, `auto` | `columns, gap, responsive` | Responsive grids |
| `Prose` | N/A | `children` | Rich text content with typography styles |
| `Sidebar` | `left`, `right` | `side, sticky, children` | Page sidebar layout |

### 19.6 Media Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `YouTubeEmbed` | N/A | `videoId, title, thumbnail` | YouTube videos (facade) |
| `ImageWithCaption` | N/A | `src, alt, caption, credit, priority` | Article images |
| `Gallery` | `grid`, `carousel` | `images, variant, columns` | Image galleries |
| `AudioPlayer` | N/A | `src, title, duration` | Podcast episodes |

### 19.7 Form Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `Form` | N/A | `onSubmit, children, loading` | Form wrapper |
| `FormField` | N/A | `label, error, hint, required, children` | Field wrapper |
| `Checkbox` | N/A | `label, checked, onChange, disabled` | Form checkboxes |
| `RadioGroup` | N/A | `options, value, onChange, name` | Radio selections |
| `Switch` | N/A | `label, checked, onChange, disabled` | Toggle switches |
| `FileUpload` | `single`, `multi` | `accept, maxSize, onChange, variant` | Document/image upload |
| `StepForm` | N/A | `steps, currentStep, onNext, onBack, onSubmit` | Multi-step forms |

### 19.8 Feedback Components

| Component | Variants | Props | Usage |
|-----------|----------|-------|-------|
| `Alert` | `info`, `success`, `warning`, `error` | `variant, title, description, action, dismissible` | Page-level alerts |
| `EmptyState` | N/A | `icon, title, description, action` | Empty data states |
| `ErrorBoundary` | N/A | `fallback, children` | Error recovery |
| `LoadingSpinner` | `sm`, `md`, `lg` | `size, color` | Loading states |
| `Accordion` | `default`, `bordered` | `items: { title, content }[], variant, multiple` | FAQ, expandable content |

---

## 20. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

#### Week 1: Infrastructure

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Initialize Turborepo with pnpm workspaces | P0 | Engineering | Working monorepo with build pipeline |
| Set up `@ggclube/brand` package with all tokens | P0 | Engineering | Tailwind preset, color/type/spacing tokens |
| Set up `@ggclube/ui` package with core components | P0 | Engineering | Button, Card, Badge, Input, Modal, Toast |
| Configure Supabase project | P0 | Engineering | Database, Auth, Storage buckets created |
| Run initial database migration (schema.sql) | P0 | Engineering | All 27 tables created with RLS |
| Set up Vercel projects for Union, News, Academy | P0 | Engineering | Deployment pipelines, preview URLs |
| Configure ESLint, Prettier, TypeScript | P1 | Engineering | Consistent code quality |
| Set up `@ggclube/seo` package | P1 | Engineering | Metadata generators, schema functions |

#### Week 2: Union MVP

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Union homepage | P0 | Engineering + Design | Live homepage with hero, trust pillars, CTAs |
| Union layout (Navbar + Footer) | P0 | Engineering | Shared navigation with ecosystem links |
| `/about` page | P1 | Engineering + Content | About page live |
| `/for-agents` page | P0 | Engineering + Content | Agent landing page |
| `/for-players` page | P0 | Engineering + Content | Player landing page |
| `/how-verification-works` page | P0 | Engineering + Content | Verification explainer |
| `/community-standards` page | P1 | Engineering + Legal | Community standards published |
| `/apply/agent` form | P0 | Engineering | Working application form with Supabase |
| `/apply/player` form | P0 | Engineering | Working registration form |
| Legal pages (terms, privacy, disclaimer) | P0 | Legal + Engineering | All legal pages live (draft content OK) |

### Phase 2: News MVP (Week 3-4)

#### Week 3: News Foundation

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| News homepage | P0 | Engineering + Design | Editorial front page |
| News layout (Navbar + Footer + Ticker) | P0 | Engineering | News-specific navigation |
| Article detail page (`/news/[slug]`) | P0 | Engineering | Full article rendering with ISR |
| `/latest` feed page | P0 | Engineering | Paginated article list |
| Author system (`/authors`, `/authors/[slug]`) | P1 | Engineering | Author index and profiles |
| Category pages (`/features`, `/guides`, `/strategy`) | P1 | Engineering | Filtered article lists |
| Supabase content queries | P0 | Engineering | Article CRUD, author relations |
| `@ggclube/content` package | P0 | Engineering | Content types, queries, validation |

#### Week 4: News Directory + Features

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| `/verified-directory` | P0 | Engineering | Directory page with search/filter |
| `/verified-directory/[slug]` | P0 | Engineering | Individual profile pages |
| `/under-review` | P1 | Engineering + Legal | Under review listing |
| `/alerts` | P1 | Engineering + Legal | Community alerts page |
| `/tournaments` hub | P1 | Engineering | Tournament coverage hub |
| `/tournaments/[slug]` | P1 | Engineering | Individual tournament pages |
| `/newsletter` | P1 | Engineering | Newsletter subscription page |
| `/about-editorial` | P1 | Content + Engineering | Editorial standards page |
| `/submit-a-tip` | P2 | Engineering | Tip submission form |
| News legal pages | P0 | Legal + Engineering | Editorial policy, corrections, terms |

### Phase 3: Academy MVP (Week 5-6)

#### Week 5: Academy Foundation

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Academy homepage | P0 | Engineering + Design | Academy front page |
| Academy layout (Navbar + Footer) | P0 | Engineering | Academy-specific navigation |
| `/courses` catalog | P0 | Engineering | Course listing with filters |
| `/courses/[slug]` detail | P0 | Engineering | Course landing pages |
| `/lessons/[slug]` | P0 | Engineering | Lesson content delivery (authenticated) |
| Course enrollment system | P0 | Engineering | Enrollment + progress tracking |
| Auth system (`/join`, `/login`) | P0 | Engineering | Registration and login |
| `@ggclube/supabase` auth helpers | P0 | Engineering | Auth utilities for all apps |

#### Week 6: Academy Features

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| `/coaches` directory | P1 | Engineering | Coach listing with filters |
| `/coaches/[slug]` profiles | P1 | Engineering | Individual coach pages |
| `/learning-paths` | P1 | Engineering | Curated learning paths |
| `/pricing` page | P0 | Engineering + Design | Pricing comparison |
| `/membership` page | P0 | Engineering + Content | Membership overview |
| `/blog` and `/blog/[slug]` | P1 | Engineering | Academy blog system |
| `/free-resources` | P1 | Engineering | Resource download page |
| `/testimonials` | P2 | Engineering | Testimonials page |
| `/faq` | P2 | Engineering | FAQ page |
| Academy legal pages | P0 | Legal + Engineering | Terms, privacy, refund policy |

### Phase 4: Integration (Week 7-8)

#### Week 7: Cross-Linking + Analytics

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Set up `@ggclube/analytics` package | P0 | Engineering | PostHog integration across all sites |
| Implement all event tracking | P0 | Engineering | Events firing correctly |
| Cross-site internal linking | P0 | Engineering + Content | All cross-links implemented |
| Ecosystem footer on all sites | P0 | Engineering | Consistent footer with cross-links |
| Shared cookie consent banner | P1 | Engineering | GDPR-compliant consent |
| Email system (`@ggclube/email`) | P1 | Engineering | Transactional email templates |

#### Week 8: SEO + CMS

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| XML sitemaps for all sites | P0 | Engineering | Auto-generated sitemaps |
| robots.txt for all sites | P0 | Engineering | Configured per spec |
| JSON-LD schema on all pages | P0 | Engineering | Schema markup live |
| Breadcrumbs on all pages | P1 | Engineering | UI + schema breadcrumbs |
| Canonical tags verified | P0 | Engineering | Correct canonicals everywhere |
| Admin CMS foundation | P1 | Engineering | Basic content management |
| Moderation queue | P1 | Engineering | Report handling system |
| Support ticket system | P2 | Engineering | Ticket creation and tracking |

### Phase 5: Polish (Week 9-10)

#### Week 9: QA + Performance

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Core Web Vitals audit | P0 | Engineering | All pages meet targets |
| Image optimization audit | P0 | Engineering | All images optimized |
| Mobile responsive audit | P0 | QA | All pages mobile-friendly |
| Accessibility audit (WCAG 2.1 AA) | P0 | QA | Major issues resolved |
| Cross-browser testing | P1 | QA | Chrome, Firefox, Safari, Edge verified |
| Content QA | P0 | Content + Legal | All copy reviewed and approved |
| Legal review | P0 | Legal | All legal pages attorney-reviewed |
| Security audit | P1 | Engineering | RLS verified, auth tested |

#### Week 10: Content + Launch Prep

| Task | Priority | Owner | Deliverable |
|------|----------|-------|-------------|
| Seed content (articles, courses) | P0 | Content | Launch content ready |
| Social media profiles setup | P1 | Marketing | All profiles created |
| Newsletter system tested | P1 | Engineering + Marketing | Welcome + first issue ready |
| Monitoring and alerting (Sentry) | P0 | Engineering | Error tracking live |
| Load testing | P1 | Engineering | Verified under expected load |
| DNS and domain configuration | P0 | Engineering | All domains resolving correctly |
| SSL certificates verified | P0 | Engineering | HTTPS on all domains |
| Launch checklist completion | P0 | All | All items checked |
| Soft launch (beta users) | P0 | Product | Limited access for testing |
| Public launch | P0 | All | Sites live and announced |

---

## 21. QA Checklist

### 21.1 Content QA

- [ ] All headlines are accurate, clear, and follow H1-H6 hierarchy
- [ ] No placeholder text ("Lorem ipsum", "TBD", "TODO") on any live page
- [ ] All CTAs have clear, action-oriented text
- [ ] All images have meaningful alt text
- [ ] No broken internal links
- [ ] No broken external links
- [ ] All dates are formatted consistently
- [ ] Author names and bios are correct
- [ ] Course descriptions are complete and accurate
- [ ] FAQ answers are factually correct and complete
- [ ] No typos or grammatical errors in primary content
- [ ] Consistent brand voice across all pages

### 21.2 Factual QA

- [ ] ClubGG independence disclaimer present on all sites
- [ ] Verification language reviewed for accuracy and legal safety
- [ ] "Under review" pages use presumption-of-innocence language
- [ ] Alert pages have evidence-based, hedged language
- [ ] No unverified claims about entities or individuals
- [ ] Rankings data sourced and attributed correctly
- [ ] Tournament data verified against official sources
- [ ] Coach credentials verified before publication
- [ ] Testimonials are real and permission-granted
- [ ] Pricing information is current and accurate

### 21.3 UX QA

- [ ] All pages load within performance budget
- [ ] Navigation is consistent and functional across all sites
- [ ] Mobile navigation (hamburger menu) works correctly
- [ ] All forms validate correctly and show clear error messages
- [ ] Form submissions save data correctly to Supabase
- [ ] Authentication flow works (register, login, logout, password reset)
- [ ] Course enrollment flow works end-to-end
- [ ] Lesson progress tracking saves correctly
- [ ] Search functionality returns relevant results
- [ ] Filter/sort controls work correctly on directory, courses, articles
- [ ] Pagination works correctly
- [ ] 404 pages are styled and helpful
- [ ] Toast notifications appear and dismiss correctly
- [ ] Modals open, close, and handle keyboard (Escape) correctly
- [ ] Focus management is correct (trap in modals, return on close)
- [ ] Skip-to-content link exists and works
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Scroll behavior is smooth and predictable
- [ ] No horizontal overflow on any viewport

### 21.4 SEO QA

- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a unique `<meta name="description">`
- [ ] Every page has `<link rel="canonical">`
- [ ] Open Graph tags present on all pages (title, description, image, url)
- [ ] Twitter Card tags present on all pages
- [ ] JSON-LD schema validated (Google Rich Results Test)
- [ ] Breadcrumbs render correctly (UI and schema)
- [ ] XML sitemaps are valid and include all public pages
- [ ] robots.txt is correctly configured per site
- [ ] No pages blocked that should be indexed
- [ ] No pages indexed that should be blocked (e.g., /lessons/)
- [ ] Trailing slash behavior consistent (redirect to non-trailing)
- [ ] hreflang not needed (single language, but verify)
- [ ] Heading hierarchy correct on every page
- [ ] Image files are optimized (WebP/AVIF, appropriate dimensions)
- [ ] Core Web Vitals pass on all template types

### 21.5 Performance QA

- [ ] LCP < 2.5s on all pages (3G throttled)
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Total page weight < 500KB (initial load)
- [ ] JavaScript bundle < 150KB (initial)
- [ ] No render-blocking resources
- [ ] Fonts preloaded with `font-display: swap`
- [ ] Images lazy-loaded below the fold
- [ ] YouTube embeds use facade pattern
- [ ] No memory leaks in client-side components
- [ ] Service Worker or caching strategy in place (optional)
- [ ] CDN edge caching verified (Vercel)

### 21.6 Trust/Compliance QA

- [ ] ClubGG independence disclaimer on all site footers
- [ ] Disclaimer page (`/legal/disclaimer`) live and reviewed
- [ ] Verification language reviewed by legal counsel
- [ ] Under-review and alert pages reviewed by legal counsel
- [ ] Age gate functioning correctly
- [ ] Cookie consent banner functioning (set/respect preferences)
- [ ] Privacy policy accurately reflects data collection
- [ ] Terms of service cover all site functionality
- [ ] Refund policy (Academy) is clear and fair
- [ ] Editorial policy (News) is published
- [ ] Corrections page exists (even if empty)
- [ ] Responsible gambling language present where required
- [ ] Jurisdiction notice in footer
- [ ] No unauthorized use of ClubGG marks or assets
- [ ] Report concern form works and routes correctly

### 21.7 Final Review

- [ ] All environments (dev, preview, production) tested
- [ ] Database migrations applied to production Supabase
- [ ] Environment variables set correctly for production
- [ ] DNS records configured and propagated
- [ ] SSL certificates valid and auto-renewing
- [ ] Error monitoring (Sentry) connected and alerting
- [ ] Analytics (PostHog) collecting data in production
- [ ] Backup strategy in place for database
- [ ] Incident response plan documented
- [ ] Launch announcement content prepared
- [ ] Social media posts scheduled
- [ ] Newsletter announcement drafted
- [ ] Team access and roles configured
- [ ] Runbook for common operations documented

---

## 22. Brand/Compliance Risks

### 22.1 ClubGG Affiliation Disclaimer

**Risk Level: HIGH**

GGClube's name bears similarity to ClubGG. Without clear disclaimers, users or ClubGG's parent company (GGPoker/NSUS Group) may assume affiliation.

**Mitigation:**
- Footer disclaimer on ALL pages: "GGClube is an independent community platform and is not affiliated with, endorsed by, or officially connected to ClubGG or GGPoker."
- Dedicated `/legal/disclaimer` page with expanded language
- Brand guidelines document prohibiting any implied affiliation in marketing materials
- Legal counsel review of all public-facing copy at launch
- Monitoring for cease-and-desist risk; response plan prepared

### 22.2 No Unauthorized Use of ClubGG Marks

**Risk Level: HIGH**

Using ClubGG logos, screenshots of their platform, or trademarked phrases could invite legal action.

**Mitigation:**
- No ClubGG logos or official imagery anywhere on the sites
- When referencing ClubGG in articles, use factual, fair-use-compliant language
- No screenshots of ClubGG platform without permission
- Use generic poker imagery instead of platform-specific visuals
- Content guidelines for writers clearly state these restrictions

### 22.3 Verification Language Must Not Imply Official Endorsement

**Risk Level: MEDIUM-HIGH**

"Verified" could be misinterpreted as official endorsement, licensed status, or guarantee.

**Mitigation:**
- Every directory profile includes: "Verification through GGClube indicates this entity has met our review criteria. It does not constitute an endorsement, guarantee of conduct, or warranty of any kind."
- The `/how-verification-works` page explicitly lists what verification does and does NOT mean
- Status badges use neutral terminology (verified = passed our review process)
- Legal review of all verification-related language before launch
- Agent communication guidelines for how verified agents may describe their status

### 22.4 Trust Directory Must Use Cautious Language

**Risk Level: MEDIUM-HIGH**

Publishing "under review" or "concern" statuses about real people/entities carries defamation risk.

**Mitigation:**
- All under-review profiles include: "An under-review status does not imply wrongdoing. GGClube is gathering information."
- All concern notices include hedging language: "Community concerns have been raised..." (not "This agent is a scam")
- Right of response: entities must be notified and given opportunity to respond before public status changes
- Evidence standards documented and followed (see Section 11.4)
- Legal counsel reviews any concern-level public statements before publication
- Defamation insurance considered for editorial operations
- Takedown process documented for legal demands

### 22.5 Legal Pages Need Attorney Review Before Launch

**Risk Level: HIGH**

Publishing legal pages (Terms of Service, Privacy Policy, Disclaimer, Refund Policy, Editorial Policy) without attorney review exposes the company to legal liability.

**Mitigation:**
- All legal pages marked as "Draft" until attorney review complete
- Attorney review engaged before Phase 5 (Week 9)
- Specific attention to: jurisdiction, limitation of liability, data protection (GDPR/CCPA), consumer protection (refunds), editorial liability
- Version control on all legal documents
- Change log maintained for future updates
- Annual legal review scheduled

### 22.6 Additional Risks

| Risk | Level | Mitigation |
|------|-------|------------|
| **Data breach / privacy incident** | Medium | RLS on all tables, audit logging, incident response plan, encryption at rest |
| **Content moderation failures** | Medium | Clear moderation policies, escalation paths, response SLAs |
| **Payment processing (Academy)** | Medium | Use Stripe for PCI compliance, clear refund terms, billing transparency |
| **Age-restricted content concerns** | Low-Medium | Age gate, responsible gambling language, jurisdiction notice |
| **Copyright infringement (user content)** | Low-Medium | DMCA takedown process, content guidelines, terms of service |
| **SEO penalties (thin/duplicate content)** | Low | Canonical handling, unique content per page, no content scraping |
| **Third-party service outage (Supabase/Vercel)** | Low | Error boundaries, graceful degradation, status monitoring |

---

## 23. Launch-Readiness Assessment

### 23.1 GGClube Union — `ggclube.com`

| Category | Status | Notes |
|----------|--------|-------|
| **Infrastructure** | Not Started | Monorepo, Supabase, Vercel setup pending |
| **Design System** | Not Started | Tokens defined in this doc, implementation pending |
| **Homepage** | Not Started | Copy and design direction defined |
| **Marketing Pages** | Not Started | 8 marketing pages specced |
| **Application Forms** | Not Started | Agent + Player forms specced |
| **Legal Pages** | Not Started | 5 legal pages specced; attorney review needed |
| **SEO** | Not Started | Full strategy defined; implementation pending |
| **Analytics** | Not Started | Event plan defined; integration pending |
| **Content** | Not Started | Content pillars defined; writing pending |
| **Trust/Compliance** | Not Started | Language standards defined; legal review needed |

**Overall Union Readiness:** Architecture Complete, Implementation Pending

---

### 23.2 GGClube News — `news.ggclube.com`

| Category | Status | Notes |
|----------|--------|-------|
| **Infrastructure** | Not Started | Shares monorepo with Union |
| **Homepage** | Not Started | Editorial layout specced |
| **Article System** | Not Started | CMS content types defined |
| **Directory** | Not Started | Synced from Union, display layer specced |
| **Author System** | Not Started | Author profiles and article attribution specced |
| **Tournament System** | Not Started | Tournament pages and data model specced |
| **Video/Podcast** | Not Started | Integration strategy defined |
| **Newsletter** | Not Started | Subscription system specced |
| **Legal Pages** | Not Started | 5 legal pages specced; attorney review needed |
| **SEO** | Not Started | Topic clusters, schema, sitemaps all specced |
| **Editorial Workflow** | Not Started | Full workflow defined; implementation pending |
| **Content** | Not Started | Content calendar concept defined; editorial team needed |

**Overall News Readiness:** Architecture Complete, Implementation Pending

---

### 23.3 GGClube Academy — `academy.ggclube.com`

| Category | Status | Notes |
|----------|--------|-------|
| **Infrastructure** | Not Started | Shares monorepo with Union/News |
| **Homepage** | Not Started | Layout and sections specced |
| **Course System** | Not Started | Course, lesson, enrollment models defined |
| **Learning Paths** | Not Started | Path model defined |
| **Coach System** | Not Started | Coach profiles and booking specced |
| **Membership/Pricing** | Not Started | Tiers and pricing defined |
| **Auth System** | Not Started | Registration/login specced |
| **Blog** | Not Started | Blog system specced |
| **Legal Pages** | Not Started | 4 legal pages specced; attorney review needed |
| **SEO** | Not Started | Full strategy defined |
| **Payment Integration** | Not Started | Stripe integration needed |
| **Content** | Not Started | Course content creation pending; instructors needed |

**Overall Academy Readiness:** Architecture Complete, Implementation Pending

---

### 23.4 Ecosystem Readiness Summary

```
Architecture & Planning:    ████████████████████ 100%
Design System Definition:   ████████████████████ 100%
SEO Strategy:               ████████████████████ 100%
Content Strategy:           ████████████████████ 100%
Implementation:             ░░░░░░░░░░░░░░░░░░░   0%
Content Creation:           ░░░░░░░░░░░░░░░░░░░   0%
Legal Review:               ░░░░░░░░░░░░░░░░░░░   0%
QA/Testing:                 ░░░░░░░░░░░░░░░░░░░   0%
Launch:                     ░░░░░░░░░░░░░░░░░░░   0%
```

**Next Immediate Steps:**
1. Initialize the Turborepo monorepo with all packages
2. Implement `@ggclube/brand` design tokens and Tailwind preset
3. Build core `@ggclube/ui` components (Button, Card, Badge, Input, Layout)
4. Set up Supabase project and run initial migration
5. Configure Vercel projects and domain routing
6. Begin Union homepage development
7. Engage legal counsel for policy page review
8. Begin content creation for launch

---

> **End of Document**
>
> This architecture document is the single source of truth for the GGClube ecosystem. All implementation decisions should reference this document. Updates should be made through pull requests with team review.
>
> **Document Version History:**
> | Version | Date | Author | Changes |
> |---------|------|--------|---------|
> | 1.0.0 | 2026-03-22 | GGClube Team | Initial comprehensive architecture document |
