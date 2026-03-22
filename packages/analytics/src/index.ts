export { trackEvent, trackPageView, type AnalyticsEvent } from "./tracker";

export const EVENTS = {
  // Union
  AGENT_APPLICATION_START: "agent_application_start",
  AGENT_APPLICATION_COMPLETE: "agent_application_complete",
  PLAYER_APPLICATION_START: "player_application_start",
  PLAYER_APPLICATION_COMPLETE: "player_application_complete",
  CONTACT_SUBMIT: "contact_submit",
  SUPPORT_SUBMIT: "support_submit",
  REPORT_CONCERN_SUBMIT: "report_concern_submit",

  // News
  NEWSLETTER_SIGNUP: "newsletter_signup",
  ARTICLE_SHARE: "article_share",
  ARTICLE_READ: "article_read",
  VIDEO_PLAY: "video_play",
  DIRECTORY_CLICK: "directory_click",
  TIP_SUBMIT: "tip_submit",

  // Academy
  COURSE_VIEW: "course_view",
  COURSE_ENROLL_CLICK: "course_enroll_click",
  JOIN_CLICK: "join_click",
  MEMBERSHIP_INTEREST: "membership_interest",
  COMMUNITY_SIGNUP: "community_signup",
  LESSON_COMPLETE: "lesson_complete",

  // Cross-site
  CTA_CLICK: "cta_click",
  OUTBOUND_CLICK: "outbound_click",
  ECOSYSTEM_NAV: "ecosystem_nav",
} as const;
