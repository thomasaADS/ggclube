import type { Metadata } from "next";
import { BRAND } from "@ggclube/brand";
import { Nav, Footer } from "@ggclube/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.sites.news.name} — ${BRAND.sites.news.tagline}`,
    template: `%s | ${BRAND.sites.news.name}`,
  },
  description: BRAND.sites.news.description,
  metadataBase: new URL(BRAND.sites.news.url),
};

const NAV_LINKS = [
  { label: "Latest", href: "/latest" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Strategy", href: "/strategy" },
  { label: "Rankings", href: "/rankings" },
  { label: "Directory", href: "/verified-directory" },
  { label: "Video", href: "/video" },
  { label: "Podcast", href: "/podcast" },
];

const FOOTER_COLUMNS = [
  {
    title: "Content",
    links: [
      { label: "Latest News", href: "/latest" },
      { label: "Tournaments", href: "/tournaments" },
      { label: "Features", href: "/features" },
      { label: "Strategy", href: "/strategy" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Rankings", href: "/rankings" },
      { label: "Verified Directory", href: "/verified-directory" },
      { label: "Alerts", href: "/alerts" },
      { label: "Authors", href: "/authors" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Video", href: "/video" },
      { label: "Podcast", href: "/podcast" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Submit a Tip", href: "/submit-a-tip" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Editorial Standards", href: "/about-editorial" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/support" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Editorial Policy", href: "/legal/editorial-policy" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
];

const ECOSYSTEM_LINKS = [
  { label: "GGClube Union", href: BRAND.sites.union.url },
  { label: "GGClube News", href: BRAND.sites.news.url },
  { label: "GGClube Academy", href: BRAND.sites.academy.url },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-obsidian-950 text-ivory-100 antialiased">
        <Nav
          brand="news"
          brandName="GGClube News"
          links={NAV_LINKS}
          ctaLabel="Subscribe"
          ctaHref="/newsletter"
        />
        <main className="pt-16">{children}</main>
        <Footer
          brand="news"
          brandName="GGClube News"
          columns={FOOTER_COLUMNS}
          legalLinks={LEGAL_LINKS}
          ecosystemLinks={ECOSYSTEM_LINKS}
        />
      </body>
    </html>
  );
}
