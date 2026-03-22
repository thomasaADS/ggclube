export const CONTENT_STATUSES = {
  DRAFT: "draft",
  IN_REVIEW: "in_review",
  APPROVED: "approved",
  PUBLISHED: "published",
  SCHEDULED: "scheduled",
  ARCHIVED: "archived",
  REJECTED: "rejected",
  CORRECTION_NEEDED: "correction_needed",
} as const;

export type ContentStatus = (typeof CONTENT_STATUSES)[keyof typeof CONTENT_STATUSES];

export const ROLES = {
  ADMIN: "admin",
  EDITOR_IN_CHIEF: "editor_in_chief",
  EDITOR: "editor",
  AUTHOR: "author",
  MODERATOR: "moderator",
  SUPPORT_AGENT: "support_agent",
  ACADEMY_MANAGER: "academy_manager",
  MARKETING_MANAGER: "marketing_manager",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const CONTENT_TYPES = {
  NEWS_ARTICLE: "news_article",
  FEATURE_ARTICLE: "feature_article",
  GUIDE: "guide",
  STRATEGY_ARTICLE: "strategy_article",
  TOURNAMENT_PAGE: "tournament_page",
  VIDEO_ENTRY: "video_entry",
  PODCAST_ENTRY: "podcast_entry",
  VERIFIED_PROFILE: "verified_profile",
  UNDER_REVIEW_CASE: "under_review_case",
  COACH_PROFILE: "coach_profile",
  COURSE: "course",
  LESSON: "lesson",
  FAQ_ITEM: "faq_item",
  POLICY_PAGE: "policy_page",
  SOCIAL_POST_DRAFT: "social_post_draft",
} as const;

export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];
