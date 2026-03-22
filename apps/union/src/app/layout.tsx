import type { Metadata } from "next";
import { BRAND } from "@ggclube/brand";
import { Nav, Footer } from "@ggclube/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClubGG Union — הקהילה הרשמית של שחקני הפוקר בישראל",
    template: "%s | ClubGG Union",
  },
  description: "ClubGG Union — הפלטפורמה המובילה בישראל לשחקני פוקר. סוכנים מאומתים, חינוך מקצועי, חדשות וקהילה. הצטרפו עכשיו.",
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
      { label: "שאלות נפוצות", href: "/faq" },
      { label: "תהליך האימות", href: "/how-verification-works" },
    ],
  },
  {
    title: "הצטרפות",
    links: [
      { label: "לסוכנים", href: "/for-agents" },
      { label: "לשחקנים", href: "/for-players" },
      { label: "הגשת מועמדות", href: "/apply/agent" },
    ],
  },
  {
    title: "עזרה",
    links: [
      { label: "שאלות נפוצות", href: "/faq" },
      { label: "צור קשר", href: "/contact" },
      { label: "משחק אחראי", href: "/legal/responsible-play" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "תנאי שימוש", href: "/legal/terms" },
  { label: "פרטיות", href: "/legal/privacy" },
  { label: "נגישות", href: "/legal/accessibility" },
  { label: "משחק אחראי", href: "/legal/responsible-play" },
];

const ECOSYSTEM_LINKS = [
  { label: "ClubGG Union", href: "/" },
  { label: "חדשות", href: BRAND.sites.news.url },
  { label: "אקדמיה", href: BRAND.sites.academy.url },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body className="min-h-screen bg-obsidian-950 text-ivory-100 antialiased">
        <Nav
          brand="union"
          brandName="ClubGG Union"
          links={NAV_LINKS}
          ctaLabel="הצטרפו עכשיו"
          ctaHref="/apply/agent"
          logoSrc="/logo-icon.png"
          rtl={true}
        />
        <main className="pt-16">{children}</main>
        <Footer
          brand="union"
          brandName="ClubGG Union"
          columns={FOOTER_COLUMNS}
          legalLinks={LEGAL_LINKS}
          ecosystemLinks={ECOSYSTEM_LINKS}
          rtl={true}
          logoSrc="/logo-icon.png"
          description="הפלטפורמה המובילה בישראל לשחקני פוקר. סוכנים מאומתים, קהילה אמינה, ותמיכה בעברית."
          copyright={`© ${new Date().getFullYear()} ClubGG Union. כל הזכויות שמורות.`}
          disclaimer="על השחקן להיות בגיל 21+. ClubGG Union היא פלטפורמת קהילה ותוכן. האתר אינו מפעיל שירותי הימורים. השימוש באתר כפוף לתנאי השימוש ומדיניות הפרטיות. אם לכם או למישהו שאתם מכירים יש בעיית הימורים — פנו לשירותי הסיוע המקומיים."
        />
      </body>
    </html>
  );
}
