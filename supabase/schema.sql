-- =============================================================================
-- GGClube Ecosystem Database Schema
-- Supabase / PostgreSQL
-- Covers: GGClube Union, GGClube News, GGClube Academy
-- =============================================================================
-- Generated: 2026-03-22
-- Engine:    PostgreSQL 15+ (Supabase)
-- Notes:     All primary keys are UUID v4.
--            Row-Level Security (RLS) policies are NOT defined here but every
--            table is created with RLS-ready structure (ownership columns,
--            site discriminators, role checks).  Enable RLS per table after
--            deploying policies.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 0. Extensions
-- ---------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";      -- uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";        -- gen_random_uuid()

-- ---------------------------------------------------------------------------
-- 1. Enum Types
-- ---------------------------------------------------------------------------

-- User / auth roles across the ecosystem
CREATE TYPE user_role AS ENUM (
  'admin',
  'editor_in_chief',
  'editor',
  'author',
  'moderator',
  'support_agent',
  'academy_manager',
  'marketing_manager',
  'member'
);

CREATE TYPE user_status AS ENUM (
  'active',
  'inactive',
  'suspended',
  'banned'
);

-- Agent (staking-agent) application workflow
CREATE TYPE agent_application_status AS ENUM (
  'pending',
  'in_review',
  'approved',
  'rejected',
  'more_info_needed'
);

-- Player application workflow
CREATE TYPE player_application_status AS ENUM (
  'pending',
  'approved',
  'rejected'
);

-- Editorial pipeline
CREATE TYPE article_category AS ENUM (
  'news',
  'feature',
  'guide',
  'strategy',
  'tournament_coverage',
  'alert',
  'editorial'
);

CREATE TYPE article_status AS ENUM (
  'draft',
  'in_review',
  'approved',
  'published',
  'scheduled',
  'archived',
  'rejected',
  'correction_needed'
);

CREATE TYPE site_name AS ENUM (
  'news',
  'academy_blog'
);

-- Tournaments
CREATE TYPE tournament_status AS ENUM (
  'announced',
  'upcoming',
  'live',
  'completed',
  'cancelled'
);

CREATE TYPE tournament_update_type AS ENUM (
  'schedule',
  'result',
  'highlight',
  'live_update'
);

-- Video & podcast
CREATE TYPE video_category AS ENUM (
  'interview',
  'highlight',
  'recap',
  'tutorial',
  'podcast_video',
  'brand_story'
);

-- Verified profiles (Union directory)
CREATE TYPE verified_profile_status AS ENUM (
  'verified',
  'unverified',
  'under_review',
  'paused',
  'removed_pending_review'
);

CREATE TYPE verification_action AS ENUM (
  'initial_review',
  're_review',
  'status_change',
  'documentation_request',
  'escalation'
);

-- Concern / trust-and-safety
CREATE TYPE concern_type AS ENUM (
  'fraud',
  'misrepresentation',
  'misconduct',
  'safety',
  'other'
);

CREATE TYPE concern_status AS ENUM (
  'submitted',
  'acknowledged',
  'investigating',
  'resolved',
  'dismissed'
);

-- Moderation
CREATE TYPE moderation_action_type AS ENUM (
  'warning',
  'suspension',
  'removal',
  'reinstatement',
  'escalation'
);

-- Academy
CREATE TYPE course_level AS ENUM (
  'beginner',
  'intermediate',
  'advanced',
  'all_levels'
);

CREATE TYPE course_status AS ENUM (
  'draft',
  'published',
  'archived'
);

-- Membership / billing
CREATE TYPE membership_plan AS ENUM (
  'free',
  'premium'
);

CREATE TYPE membership_status AS ENUM (
  'active',
  'cancelled',
  'expired',
  'paused'
);

-- Support
CREATE TYPE ticket_category AS ENUM (
  'general',
  'application',
  'verification',
  'technical',
  'report_concern',
  'partnership',
  'refund',
  'other'
);

CREATE TYPE ticket_status AS ENUM (
  'open',
  'in_progress',
  'waiting_response',
  'resolved',
  'closed'
);

CREATE TYPE ticket_priority AS ENUM (
  'low',
  'medium',
  'high',
  'urgent'
);

CREATE TYPE ticket_site AS ENUM (
  'union',
  'news',
  'academy'
);

-- Newsletter
CREATE TYPE newsletter_source AS ENUM (
  'union',
  'news',
  'academy'
);

CREATE TYPE newsletter_status AS ENUM (
  'active',
  'unsubscribed'
);

-- Social / marketing
CREATE TYPE social_platform AS ENUM (
  'twitter',
  'instagram',
  'youtube',
  'telegram',
  'discord'
);

CREATE TYPE social_post_status AS ENUM (
  'draft',
  'scheduled',
  'published',
  'failed'
);

CREATE TYPE social_post_site AS ENUM (
  'union',
  'news',
  'academy'
);


-- ---------------------------------------------------------------------------
-- 2. Tables
-- ---------------------------------------------------------------------------

-- ========================== USERS & PROFILES ===============================

-- 2.1 users
-- Central identity table, linked to Supabase Auth (auth.users.id = users.id).
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT NOT NULL UNIQUE,
  full_name   TEXT,
  avatar_url  TEXT,
  role        user_role NOT NULL DEFAULT 'member',
  status      user_status NOT NULL DEFAULT 'active',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE users IS 'Central user identity for the GGClube ecosystem. Mirrors Supabase Auth uid.';

-- 2.2 profiles
-- Extended public-facing profile data.
CREATE TABLE profiles (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT,
  bio          TEXT,
  region       TEXT,
  country      TEXT,
  languages    TEXT[] DEFAULT '{}',
  social_links JSONB DEFAULT '{}',
  avatar_url   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE profiles IS 'Public-facing profile data for each user.';

-- ========================== APPLICATIONS ===================================

-- 2.3 agent_applications
-- Staking-agent onboarding applications (Union).
CREATE TABLE agent_applications (
  id                            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                       UUID REFERENCES users(id) ON DELETE SET NULL,
  full_name                     TEXT NOT NULL,
  display_name                  TEXT,
  email                         TEXT NOT NULL,
  country                       TEXT,
  region                        TEXT,
  languages                     TEXT[] DEFAULT '{}',
  years_active                  INT,
  poker_formats                 TEXT[] DEFAULT '{}',
  platforms_networks            TEXT,
  social_links                  TEXT,
  reference_1                   TEXT,
  reference_2                   TEXT,
  additional_notes              TEXT,
  age_confirmed                 BOOLEAN NOT NULL DEFAULT FALSE,
  terms_agreed                  BOOLEAN NOT NULL DEFAULT FALSE,
  community_standards_agreed    BOOLEAN NOT NULL DEFAULT FALSE,
  consent_data_processing       BOOLEAN NOT NULL DEFAULT FALSE,
  information_accurate          BOOLEAN NOT NULL DEFAULT FALSE,
  status                        agent_application_status NOT NULL DEFAULT 'pending',
  reviewer_id                   UUID REFERENCES users(id) ON DELETE SET NULL,
  review_notes                  TEXT,
  submitted_at                  TIMESTAMPTZ,
  reviewed_at                   TIMESTAMPTZ,
  created_at                    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at                    TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE agent_applications IS 'Staking-agent onboarding applications submitted via GGClube Union.';

-- 2.4 player_applications
-- Player membership applications.
CREATE TABLE player_applications (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE SET NULL,
  full_name      TEXT NOT NULL,
  email          TEXT NOT NULL,
  country        TEXT,
  region         TEXT,
  skill_level    TEXT,
  interests      TEXT,
  age_confirmed  BOOLEAN NOT NULL DEFAULT FALSE,
  terms_agreed   BOOLEAN NOT NULL DEFAULT FALSE,
  status         player_application_status NOT NULL DEFAULT 'pending',
  submitted_at   TIMESTAMPTZ,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE player_applications IS 'Player membership applications for GGClube Union.';

-- ========================== EDITORIAL / NEWS ===============================

-- 2.5 authors
CREATE TABLE authors (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  bio             TEXT,
  expertise_areas TEXT[] DEFAULT '{}',
  avatar_url      TEXT,
  social_links    JSONB DEFAULT '{}',
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE authors IS 'Author profiles for GGClube News and Academy blog content.';

-- 2.6 articles
CREATE TABLE articles (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id             UUID NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
  title                 TEXT NOT NULL,
  slug                  TEXT NOT NULL UNIQUE,
  excerpt               TEXT,
  content               TEXT,
  featured_image        TEXT,
  category              article_category NOT NULL DEFAULT 'news',
  status                article_status NOT NULL DEFAULT 'draft',
  tags                  TEXT[] DEFAULT '{}',
  reading_time_minutes  INT,
  is_featured           BOOLEAN NOT NULL DEFAULT FALSE,
  published_at          TIMESTAMPTZ,
  scheduled_at          TIMESTAMPTZ,
  correction_note       TEXT,
  source_notes          TEXT,
  site                  site_name NOT NULL DEFAULT 'news',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE articles IS 'News articles, features, guides, and blog posts across GGClube News and Academy.';

-- 2.7 article_categories
-- Hierarchical content categories with optional self-referencing parent.
CREATE TABLE article_categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  slug        TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id   UUID REFERENCES article_categories(id) ON DELETE SET NULL,
  site        TEXT,
  sort_order  INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE article_categories IS 'Hierarchical categories for articles. Self-referencing parent for sub-categories.';

-- ========================== TOURNAMENTS ====================================

-- 2.8 tournaments
CREATE TABLE tournaments (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  description     TEXT,
  venue           TEXT,
  region          TEXT,
  country         TEXT,
  start_date      DATE,
  end_date        DATE,
  status          tournament_status NOT NULL DEFAULT 'announced',
  total_events    INT,
  prize_pool      TEXT,
  featured_image  TEXT,
  is_featured     BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE tournaments IS 'Poker tournament listings and schedules (GGClube News coverage).';

-- 2.9 tournament_updates
CREATE TABLE tournament_updates (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id   UUID NOT NULL REFERENCES tournaments(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  content         TEXT,
  update_type     tournament_update_type NOT NULL DEFAULT 'live_update',
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE tournament_updates IS 'Live updates, results, and highlights attached to a tournament.';

-- ========================== VIDEO & PODCAST =================================

-- 2.10 video_entries
CREATE TABLE video_entries (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  description     TEXT,
  youtube_id      TEXT,
  thumbnail_url   TEXT,
  duration        TEXT,
  category        video_category NOT NULL DEFAULT 'highlight',
  site            TEXT,
  is_featured     BOOLEAN NOT NULL DEFAULT FALSE,
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE video_entries IS 'Video content across all GGClube sites (YouTube embeds).';

-- 2.11 podcast_entries
CREATE TABLE podcast_entries (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  description     TEXT,
  audio_url       TEXT,
  youtube_id      TEXT,
  duration        TEXT,
  show_notes      TEXT,
  transcript      TEXT,
  episode_number  INT,
  season          INT,
  is_featured     BOOLEAN NOT NULL DEFAULT FALSE,
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE podcast_entries IS 'Podcast episodes with optional YouTube video companion.';

-- ========================== VERIFIED PROFILES (UNION) ======================

-- 2.12 verified_profiles
-- Directory of verified staking agents listed on GGClube Union.
CREATE TABLE verified_profiles (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 UUID REFERENCES users(id) ON DELETE SET NULL,
  profile_name            TEXT NOT NULL,
  slug                    TEXT NOT NULL UNIQUE,
  region                  TEXT,
  country                 TEXT,
  languages               TEXT[] DEFAULT '{}',
  status                  verified_profile_status NOT NULL DEFAULT 'unverified',
  verification_date       DATE,
  verification_summary    TEXT,
  availability            TEXT,
  support_contact         TEXT,
  reviewer_id             UUID REFERENCES users(id) ON DELETE SET NULL,
  review_notes            TEXT,
  listed_since            DATE,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE verified_profiles IS 'Verified staking-agent directory profiles on GGClube Union.';

-- 2.13 verification_reviews
-- Immutable audit log for every verification action taken on a profile.
CREATE TABLE verification_reviews (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  verified_profile_id  UUID NOT NULL REFERENCES verified_profiles(id) ON DELETE CASCADE,
  reviewer_id          UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action               verification_action NOT NULL,
  previous_status      TEXT,
  new_status           TEXT,
  notes                TEXT,
  evidence_summary     TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE verification_reviews IS 'Immutable audit trail for every review action on a verified profile.';

-- ========================== TRUST & SAFETY ==================================

-- 2.14 concern_reports
CREATE TABLE concern_reports (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reported_profile_id  UUID REFERENCES verified_profiles(id) ON DELETE SET NULL,
  reporter_email       TEXT,
  reporter_name        TEXT,
  concern_type         concern_type NOT NULL,
  description          TEXT NOT NULL,
  evidence_links       TEXT[] DEFAULT '{}',
  status               concern_status NOT NULL DEFAULT 'submitted',
  assigned_to          UUID REFERENCES users(id) ON DELETE SET NULL,
  resolution_notes     TEXT,
  submitted_at         TIMESTAMPTZ,
  resolved_at          TIMESTAMPTZ,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE concern_reports IS 'Community concern / fraud reports against verified profiles.';

-- 2.15 moderation_actions
CREATE TABLE moderation_actions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type   TEXT NOT NULL,
  target_id     UUID NOT NULL,
  action_type   moderation_action_type NOT NULL,
  moderator_id  UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reason        TEXT,
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE moderation_actions IS 'Log of moderation actions taken across the ecosystem.';

-- ========================== ACADEMY =========================================

-- 2.16 coaches
CREATE TABLE coaches (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES users(id) ON DELETE SET NULL,
  name            TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  bio             TEXT,
  specialty       TEXT,
  credentials     TEXT,
  avatar_url      TEXT,
  courses_count   INT NOT NULL DEFAULT 0,
  social_links    JSONB DEFAULT '{}',
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE coaches IS 'GGClube Academy coaching staff profiles.';

-- 2.17 courses
CREATE TABLE courses (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coach_id          UUID REFERENCES coaches(id) ON DELETE SET NULL,
  title             TEXT NOT NULL,
  slug              TEXT NOT NULL UNIQUE,
  description       TEXT,
  long_description  TEXT,
  level             course_level NOT NULL DEFAULT 'all_levels',
  format            TEXT,
  topics            TEXT[] DEFAULT '{}',
  lesson_count      INT NOT NULL DEFAULT 0,
  featured_image    TEXT,
  is_featured       BOOLEAN NOT NULL DEFAULT FALSE,
  is_free           BOOLEAN NOT NULL DEFAULT FALSE,
  status            course_status NOT NULL DEFAULT 'draft',
  outcomes          TEXT[] DEFAULT '{}',
  requirements      TEXT[] DEFAULT '{}',
  sample_lesson_id  UUID,                         -- FK added after lessons table
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE courses IS 'GGClube Academy courses (collections of lessons).';

-- 2.18 lessons
CREATE TABLE lessons (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id             UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title                 TEXT NOT NULL,
  slug                  TEXT NOT NULL UNIQUE,
  description           TEXT,
  content               TEXT,
  video_url             TEXT,
  video_youtube_id      TEXT,
  duration              TEXT,
  sort_order            INT NOT NULL DEFAULT 0,
  is_free_preview       BOOLEAN NOT NULL DEFAULT FALSE,
  downloadable_assets   JSONB DEFAULT '[]',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE lessons IS 'Individual lessons within an Academy course.';

-- Deferred FK: courses.sample_lesson_id -> lessons.id
ALTER TABLE courses
  ADD CONSTRAINT fk_courses_sample_lesson
  FOREIGN KEY (sample_lesson_id) REFERENCES lessons(id) ON DELETE SET NULL;

-- ========================== MEMBERSHIP & PROGRESS ===========================

-- 2.19 memberships
CREATE TABLE memberships (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan         membership_plan NOT NULL DEFAULT 'free',
  status       membership_status NOT NULL DEFAULT 'active',
  started_at   TIMESTAMPTZ,
  expires_at   TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE memberships IS 'User membership / subscription records (Academy & Union).';

-- 2.20 lesson_progress
CREATE TABLE lesson_progress (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_id    UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  course_id    UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  completed    BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT uq_lesson_progress_user_lesson UNIQUE (user_id, lesson_id)
);
COMMENT ON TABLE lesson_progress IS 'Tracks per-user lesson completion within Academy courses.';

-- ========================== SUPPORT =========================================

-- 2.21 support_tickets
CREATE TABLE support_tickets (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE SET NULL,
  name        TEXT,
  email       TEXT,
  subject     TEXT NOT NULL,
  category    ticket_category NOT NULL DEFAULT 'general',
  message     TEXT NOT NULL,
  status      ticket_status NOT NULL DEFAULT 'open',
  assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
  priority    ticket_priority NOT NULL DEFAULT 'medium',
  site        ticket_site NOT NULL DEFAULT 'union',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE support_tickets IS 'Cross-site support / help-desk tickets.';

-- ========================== MARKETING & COMMUNICATIONS ======================

-- 2.22 newsletter_subscribers
CREATE TABLE newsletter_subscribers (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT NOT NULL UNIQUE,
  name            TEXT,
  source          newsletter_source NOT NULL DEFAULT 'union',
  status          newsletter_status NOT NULL DEFAULT 'active',
  subscribed_at   TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE newsletter_subscribers IS 'Email newsletter subscriber list across all GGClube sites.';

-- 2.23 social_posts
CREATE TABLE social_posts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform     social_platform NOT NULL,
  content      TEXT,
  media_urls   TEXT[] DEFAULT '{}',
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  status       social_post_status NOT NULL DEFAULT 'draft',
  site         social_post_site NOT NULL DEFAULT 'union',
  created_by   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE social_posts IS 'Scheduled and published social-media posts for all GGClube channels.';

-- ========================== SITE CONFIGURATION / SEO ========================

-- 2.24 page_settings
CREATE TABLE page_settings (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site             TEXT NOT NULL,
  page_path        TEXT NOT NULL UNIQUE,
  title            TEXT,
  meta_description TEXT,
  og_image         TEXT,
  custom_data      JSONB DEFAULT '{}',
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
COMMENT ON TABLE page_settings IS 'Per-page CMS overrides (title, OG image, custom JSON) for each site.';

-- 2.25 seo_metadata
CREATE TABLE seo_metadata (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site          TEXT NOT NULL,
  path          TEXT NOT NULL,
  title         TEXT,
  description   TEXT,
  canonical_url TEXT,
  og_image      TEXT,
  schema_type   TEXT,
  schema_data   JSONB DEFAULT '{}',
  no_index      BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT uq_seo_metadata_site_path UNIQUE (site, path)
);
COMMENT ON TABLE seo_metadata IS 'Structured SEO metadata and JSON-LD schema per page across sites.';

-- 2.26 redirects
CREATE TABLE redirects (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site        TEXT NOT NULL,
  from_path   TEXT NOT NULL,
  to_path     TEXT NOT NULL,
  status_code INT NOT NULL DEFAULT 301,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT uq_redirects_site_from UNIQUE (site, from_path)
);
COMMENT ON TABLE redirects IS 'URL redirect rules per site (301/302).';

-- 2.27 policy_documents
CREATE TABLE policy_documents (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site         TEXT NOT NULL,
  slug         TEXT NOT NULL,
  title        TEXT NOT NULL,
  content      TEXT,
  version      INT NOT NULL DEFAULT 1,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT uq_policy_documents_site_slug UNIQUE (site, slug)
);
COMMENT ON TABLE policy_documents IS 'Versioned legal / policy documents (Terms, Privacy, etc.) per site.';


-- ---------------------------------------------------------------------------
-- 3. Indexes
-- ---------------------------------------------------------------------------
-- Naming convention: idx_<table>_<column(s)>

-- users
CREATE INDEX idx_users_email        ON users (email);
CREATE INDEX idx_users_role         ON users (role);
CREATE INDEX idx_users_status       ON users (status);

-- profiles
CREATE INDEX idx_profiles_user_id   ON profiles (user_id);

-- agent_applications
CREATE INDEX idx_agent_applications_user_id      ON agent_applications (user_id);
CREATE INDEX idx_agent_applications_email        ON agent_applications (email);
CREATE INDEX idx_agent_applications_status       ON agent_applications (status);
CREATE INDEX idx_agent_applications_reviewer_id  ON agent_applications (reviewer_id);

-- player_applications
CREATE INDEX idx_player_applications_user_id     ON player_applications (user_id);
CREATE INDEX idx_player_applications_email       ON player_applications (email);
CREATE INDEX idx_player_applications_status      ON player_applications (status);

-- authors
CREATE INDEX idx_authors_user_id    ON authors (user_id);
CREATE INDEX idx_authors_slug       ON authors (slug);

-- articles
CREATE INDEX idx_articles_author_id   ON articles (author_id);
CREATE INDEX idx_articles_slug        ON articles (slug);
CREATE INDEX idx_articles_status      ON articles (status);
CREATE INDEX idx_articles_category    ON articles (category);
CREATE INDEX idx_articles_site        ON articles (site);
CREATE INDEX idx_articles_published   ON articles (published_at DESC NULLS LAST);
CREATE INDEX idx_articles_featured    ON articles (is_featured) WHERE is_featured = TRUE;

-- article_categories
CREATE INDEX idx_article_categories_slug       ON article_categories (slug);
CREATE INDEX idx_article_categories_parent_id  ON article_categories (parent_id);
CREATE INDEX idx_article_categories_site       ON article_categories (site);

-- tournaments
CREATE INDEX idx_tournaments_slug       ON tournaments (slug);
CREATE INDEX idx_tournaments_status     ON tournaments (status);
CREATE INDEX idx_tournaments_start_date ON tournaments (start_date);
CREATE INDEX idx_tournaments_featured   ON tournaments (is_featured) WHERE is_featured = TRUE;

-- tournament_updates
CREATE INDEX idx_tournament_updates_tournament_id  ON tournament_updates (tournament_id);
CREATE INDEX idx_tournament_updates_update_type    ON tournament_updates (update_type);

-- video_entries
CREATE INDEX idx_video_entries_slug       ON video_entries (slug);
CREATE INDEX idx_video_entries_category   ON video_entries (category);
CREATE INDEX idx_video_entries_site       ON video_entries (site);
CREATE INDEX idx_video_entries_published  ON video_entries (published_at DESC NULLS LAST);

-- podcast_entries
CREATE INDEX idx_podcast_entries_slug       ON podcast_entries (slug);
CREATE INDEX idx_podcast_entries_published  ON podcast_entries (published_at DESC NULLS LAST);
CREATE INDEX idx_podcast_entries_episode    ON podcast_entries (season, episode_number);

-- verified_profiles
CREATE INDEX idx_verified_profiles_user_id      ON verified_profiles (user_id);
CREATE INDEX idx_verified_profiles_slug         ON verified_profiles (slug);
CREATE INDEX idx_verified_profiles_status       ON verified_profiles (status);
CREATE INDEX idx_verified_profiles_reviewer_id  ON verified_profiles (reviewer_id);
CREATE INDEX idx_verified_profiles_country      ON verified_profiles (country);

-- verification_reviews
CREATE INDEX idx_verification_reviews_profile_id   ON verification_reviews (verified_profile_id);
CREATE INDEX idx_verification_reviews_reviewer_id  ON verification_reviews (reviewer_id);

-- concern_reports
CREATE INDEX idx_concern_reports_profile_id    ON concern_reports (reported_profile_id);
CREATE INDEX idx_concern_reports_status        ON concern_reports (status);
CREATE INDEX idx_concern_reports_assigned_to   ON concern_reports (assigned_to);

-- moderation_actions
CREATE INDEX idx_moderation_actions_target      ON moderation_actions (target_type, target_id);
CREATE INDEX idx_moderation_actions_moderator   ON moderation_actions (moderator_id);

-- coaches
CREATE INDEX idx_coaches_user_id   ON coaches (user_id);
CREATE INDEX idx_coaches_slug      ON coaches (slug);

-- courses
CREATE INDEX idx_courses_coach_id   ON courses (coach_id);
CREATE INDEX idx_courses_slug       ON courses (slug);
CREATE INDEX idx_courses_status     ON courses (status);
CREATE INDEX idx_courses_level      ON courses (level);

-- lessons
CREATE INDEX idx_lessons_course_id   ON lessons (course_id);
CREATE INDEX idx_lessons_slug        ON lessons (slug);
CREATE INDEX idx_lessons_sort_order  ON lessons (course_id, sort_order);

-- memberships
CREATE INDEX idx_memberships_user_id  ON memberships (user_id);
CREATE INDEX idx_memberships_status   ON memberships (status);
CREATE INDEX idx_memberships_plan     ON memberships (plan);

-- lesson_progress
CREATE INDEX idx_lesson_progress_user_id    ON lesson_progress (user_id);
CREATE INDEX idx_lesson_progress_lesson_id  ON lesson_progress (lesson_id);
CREATE INDEX idx_lesson_progress_course_id  ON lesson_progress (course_id);

-- support_tickets
CREATE INDEX idx_support_tickets_user_id      ON support_tickets (user_id);
CREATE INDEX idx_support_tickets_email        ON support_tickets (email);
CREATE INDEX idx_support_tickets_status       ON support_tickets (status);
CREATE INDEX idx_support_tickets_category     ON support_tickets (category);
CREATE INDEX idx_support_tickets_assigned_to  ON support_tickets (assigned_to);
CREATE INDEX idx_support_tickets_site         ON support_tickets (site);
CREATE INDEX idx_support_tickets_priority     ON support_tickets (priority);

-- newsletter_subscribers
CREATE INDEX idx_newsletter_subscribers_email   ON newsletter_subscribers (email);
CREATE INDEX idx_newsletter_subscribers_source  ON newsletter_subscribers (source);
CREATE INDEX idx_newsletter_subscribers_status  ON newsletter_subscribers (status);

-- social_posts
CREATE INDEX idx_social_posts_status       ON social_posts (status);
CREATE INDEX idx_social_posts_site         ON social_posts (site);
CREATE INDEX idx_social_posts_platform     ON social_posts (platform);
CREATE INDEX idx_social_posts_created_by   ON social_posts (created_by);
CREATE INDEX idx_social_posts_scheduled    ON social_posts (scheduled_at) WHERE status = 'scheduled';

-- page_settings
CREATE INDEX idx_page_settings_site       ON page_settings (site);
CREATE INDEX idx_page_settings_page_path  ON page_settings (page_path);

-- seo_metadata
CREATE INDEX idx_seo_metadata_site  ON seo_metadata (site);
CREATE INDEX idx_seo_metadata_path  ON seo_metadata (path);

-- redirects
CREATE INDEX idx_redirects_site       ON redirects (site);
CREATE INDEX idx_redirects_from_path  ON redirects (from_path);
CREATE INDEX idx_redirects_active     ON redirects (is_active) WHERE is_active = TRUE;

-- policy_documents
CREATE INDEX idx_policy_documents_site  ON policy_documents (site);
CREATE INDEX idx_policy_documents_slug  ON policy_documents (slug);


-- ---------------------------------------------------------------------------
-- 4. Helper function: auto-update updated_at on row modification
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply the trigger to every table that carries an updated_at column.
DO $$
DECLARE
  tbl TEXT;
BEGIN
  FOR tbl IN
    SELECT table_name
    FROM information_schema.columns
    WHERE column_name = 'updated_at'
      AND table_schema = 'public'
  LOOP
    EXECUTE format(
      'CREATE TRIGGER trg_%I_updated_at
         BEFORE UPDATE ON %I
         FOR EACH ROW
         EXECUTE FUNCTION update_updated_at_column();',
      tbl, tbl
    );
  END LOOP;
END;
$$;


-- ---------------------------------------------------------------------------
-- 5. Row-Level Security (enable per table, policies added separately)
-- ---------------------------------------------------------------------------
-- Enabling RLS on all tables so that no data leaks if policies are not yet
-- defined (deny-by-default).  Service-role key bypasses RLS automatically.

ALTER TABLE users                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles               ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_applications     ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_applications    ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors                ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles               ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_categories     ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments            ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_updates     ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_entries          ENABLE ROW LEVEL SECURITY;
ALTER TABLE podcast_entries        ENABLE ROW LEVEL SECURITY;
ALTER TABLE verified_profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_reviews   ENABLE ROW LEVEL SECURITY;
ALTER TABLE concern_reports        ENABLE ROW LEVEL SECURITY;
ALTER TABLE moderation_actions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE coaches                ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses                ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons                ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships            ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress        ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets        ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_posts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_settings          ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_metadata           ENABLE ROW LEVEL SECURITY;
ALTER TABLE redirects              ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_documents       ENABLE ROW LEVEL SECURITY;


-- ---------------------------------------------------------------------------
-- Done.
-- ---------------------------------------------------------------------------
