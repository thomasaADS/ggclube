export const BRAND = {
  name: "GGClube",
  tagline: "The Global Poker Culture Network",
  description: "Premium poker culture ecosystem — editorial authority, verified community, elite education.",

  sites: {
    union: {
      name: "GGClube Union",
      tagline: "Trust. Network. Authority.",
      description: "The official GGClube platform for applications, verification, partnerships, and community trust.",
      url: process.env.NEXT_PUBLIC_UNION_URL || "https://ggclube.com",
    },
    news: {
      name: "GGClube News",
      tagline: "The Pulse of Global Poker",
      description: "Premium poker journalism — tournament coverage, rankings, verified directory, strategy, and community intelligence.",
      url: process.env.NEXT_PUBLIC_NEWS_URL || "https://news.ggclube.com",
    },
    academy: {
      name: "GGClube Academy",
      tagline: "Master the Game",
      description: "Structured poker education — courses, coaching, community, and mastery paths for every level.",
      url: process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.ggclube.com",
    },
  },

  social: {
    youtube: "https://youtube.com/@ggclube",
    twitter: "https://x.com/ggclube",
    instagram: "https://instagram.com/ggclube",
    discord: "https://discord.gg/ggclube",
    telegram: "https://t.me/ggclube",
  },

  legal: {
    companyName: "GGClube",
    ageRequirement: "18+",
    jurisdictionNotice: "Users must comply with the laws and regulations of their jurisdiction.",
    responsiblePlay: "GGClube promotes responsible community engagement. If you or someone you know has a gambling problem, seek help.",
  },
} as const;

export type SiteBrand = keyof typeof BRAND.sites;

export const ECOSYSTEM_LINKS = [
  { label: "GGClube Union", href: BRAND.sites.union.url },
  { label: "GGClube News", href: BRAND.sites.news.url },
  { label: "GGClube Academy", href: BRAND.sites.academy.url },
];
