import type { Metadata } from "next";
import { BRAND } from "@ggclube/brand";
import { Nav, Footer } from "@ggclube/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.sites.academy.name} — ${BRAND.sites.academy.tagline}`,
    template: `%s | ${BRAND.sites.academy.name}`,
  },
  description: BRAND.sites.academy.description,
  metadataBase: new URL(BRAND.sites.academy.url),
};

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Learning Paths", href: "/learning-paths" },
  { label: "Coaches", href: "/coaches" },
  { label: "Community", href: "/community" },
  { label: "Free Resources", href: "/free-resources" },
  { label: "Pricing", href: "/pricing" },
];

const FOOTER_COLUMNS = [
  {
    title: "Learn",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Learning Paths", href: "/learning-paths" },
      { label: "Free Resources", href: "/free-resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Community", href: "/community" },
      { label: "Coaches", href: "/coaches" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Pricing", href: "/pricing" },
      { label: "Login", href: "/login" },
      { label: "Support", href: "/support" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Refund Policy", href: "/legal/refund-policy" },
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
          brand="academy"
          brandName="GGClube Academy"
          links={NAV_LINKS}
          ctaLabel="Join Free"
          ctaHref="/join"
        />
        <main className="pt-16">{children}</main>
        <Footer
          brand="academy"
          brandName="GGClube Academy"
          columns={FOOTER_COLUMNS}
          legalLinks={LEGAL_LINKS}
          ecosystemLinks={ECOSYSTEM_LINKS}
        />
      </body>
    </html>
  );
}
