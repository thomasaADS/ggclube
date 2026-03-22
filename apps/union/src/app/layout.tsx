import type { Metadata } from "next";
import { BRAND } from "@ggclube/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.sites.union.name} — ${BRAND.sites.union.tagline}`,
    template: `%s | ${BRAND.sites.union.name}`,
  },
  description: BRAND.sites.union.description,
  metadataBase: new URL(BRAND.sites.union.url),
};

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "For Agents", href: "/for-agents" },
  { label: "For Players", href: "/for-players" },
  { label: "Verification", href: "/how-verification-works" },
  { label: "Our Network", href: "/our-network" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Network", href: "/our-network" },
      { label: "Why GGClube", href: "/why-ggclube" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Join",
    links: [
      { label: "For Agents", href: "/for-agents" },
      { label: "For Players", href: "/for-players" },
      { label: "Apply as Agent", href: "/apply/agent" },
      { label: "Apply as Player", href: "/apply/player" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Verification", href: "/how-verification-works" },
      { label: "Community Standards", href: "/community-standards" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Responsible Play", href: "/legal/responsible-play" },
];

const ECOSYSTEM_LINKS = [
  { label: "GGClube Union", href: BRAND.sites.union.url },
  { label: "GGClube News", href: BRAND.sites.news.url },
  { label: "GGClube Academy", href: BRAND.sites.academy.url },
];

import { Nav, Footer } from "@ggclube/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-obsidian-950 text-ivory-100 antialiased">
        <Nav
          brand="union"
          brandName="GGClube"
          links={NAV_LINKS}
          ctaLabel="Join the Network"
          ctaHref="/apply/agent"
        />
        <main className="pt-16">{children}</main>
        <Footer
          brand="union"
          brandName="GGClube Union"
          columns={FOOTER_COLUMNS}
          legalLinks={LEGAL_LINKS}
          ecosystemLinks={ECOSYSTEM_LINKS}
        />
      </body>
    </html>
  );
}
