# GGClube — The Global Poker Culture Network

A premium 3-site digital ecosystem for poker culture: trust infrastructure, editorial authority, and structured education.

## The Ecosystem

| Site | Purpose | Port |
|------|---------|------|
| **GGClube Union** | Trust layer, verification, applications, partnerships | `3000` |
| **GGClube News** | Editorial engine, tournaments, rankings, directory | `3001` |
| **GGClube Academy** | Education, courses, coaching, membership | `3002` |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Monorepo:** Turborepo + pnpm workspaces
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Design System

**The Obsidian Ledger** — dark luxury with emerald accents, brushed platinum typography, and cinematic editorial layouts.

- Union uses ClubGG-aligned red/gold accents
- News uses emerald editorial accents
- Academy uses emerald education accents

## Getting Started

```bash
# Install dependencies
pnpm install

# Run all sites
pnpm dev

# Run individual sites
pnpm dev:union    # localhost:3000
pnpm dev:news     # localhost:3001
pnpm dev:academy  # localhost:3002

# Build all
pnpm build
```

## Project Structure

```
ggclube/
├── apps/
│   ├── union/          # GGClube Union (trust + applications)
│   ├── news/           # GGClube News (editorial + SEO)
│   └── academy/        # GGClube Academy (education + membership)
├── packages/
│   ├── ui/             # Shared design system (The Obsidian Ledger)
│   ├── brand/          # Brand constants and configuration
│   ├── seo/            # SEO utilities and schema generators
│   ├── analytics/      # Event tracking and analytics
│   └── content/        # Content models and constants
├── supabase/
│   └── schema.sql      # Complete database schema (27 tables)
├── ARCHITECTURE.md     # Full architecture documentation
└── turbo.json          # Turborepo configuration
```

## Deployment

Each app deploys independently to Vercel:
- `ggclube.com` → Union
- `news.ggclube.com` → News
- `academy.ggclube.com` → Academy

## Legal Notice

GGClube is a media, education, and community platform. It does not operate as a gambling service or wagering platform. Content is provided for informational and educational purposes only. 18+ only.
