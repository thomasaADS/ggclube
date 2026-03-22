import type { Metadata } from "next";
import { BRAND } from "@ggclube/brand";
import { Nav, Footer } from "@ggclube/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClubGG האיחוד — הקהילה הרשמית של שחקני הפוקר בישראל",
    template: "%s | ClubGG האיחוד",
  },
  description: "ClubGG האיחוד — הפלטפורמה המובילה בישראל לשחקני פוקר. סוכנים מאומתים, חינוך מקצועי, חדשות וקהילה. הצטרפו עכשיו.",
  metadataBase: new URL(BRAND.sites.union.url),
};

const NAV_LINKS = [
  { label: "אודות", href: "/about" },
  { label: "לסוכנים", href: "/for-agents" },
  { label: "לשחקנים", href: "/for-players" },
  { label: "אימות", href: "/how-verification-works" },
  { label: "שאלות נפוצות", href: "/faq" },
  { label: "צור קשר", href: "/contact" },
];

const FOOTER_COLUMNS = [
  {
    title: "הפלטפורמה",
    links: [
      { label: "אודות", href: "/about" },
      { label: "למה ClubGG האיחוד", href: "/why-ggclube" },
      { label: "שותפים", href: "/partners" },
    ],
  },
  {
    title: "הצטרפות",
    links: [
      { label: "לסוכנים", href: "/for-agents" },
      { label: "לשחקנים", href: "/for-players" },
      { label: "הגשת מועמדות — סוכן", href: "/apply/agent" },
      { label: "הרשמה — שחקן", href: "/apply/player" },
    ],
  },
  {
    title: "אמון ואבטחה",
    links: [
      { label: "תהליך האימות", href: "/how-verification-works" },
      { label: "כללי הקהילה", href: "/community-standards" },
      { label: "תמיכה", href: "/support" },
      { label: "שאלות נפוצות", href: "/faq" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "תנאי שימוש", href: "/legal/terms" },
  { label: "פרטיות", href: "/legal/privacy" },
  { label: "עוגיות", href: "/legal/cookies" },
  { label: "נגישות", href: "/legal/accessibility" },
  { label: "הצהרה משפטית", href: "/legal/disclaimer" },
  { label: "משחק אחראי", href: "/legal/responsible-play" },
];

const ECOSYSTEM_LINKS = [
  { label: "ClubGG האיחוד", href: BRAND.sites.union.url },
  { label: "GGClube News", href: BRAND.sites.news.url },
  { label: "GGClube Academy", href: BRAND.sites.academy.url },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body className="min-h-screen bg-obsidian-950 text-ivory-100 antialiased">
        <Nav
          brand="union"
          brandName="ClubGG האיחוד"
          links={NAV_LINKS}
          ctaLabel="הצטרפו עכשיו"
          ctaHref="/apply/agent"
          logoSrc="/ggclub-logo.png"
          rtl={true}
        />
        <main className="pt-16">{children}</main>
        <Footer
          brand="union"
          brandName="ClubGG האיחוד"
          columns={FOOTER_COLUMNS}
          legalLinks={LEGAL_LINKS}
          ecosystemLinks={ECOSYSTEM_LINKS}
          rtl={true}
        />
      </body>
    </html>
  );
}
