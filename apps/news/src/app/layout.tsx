import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClubGG News — מגזין הפוקר של ישראל",
    template: "%s | ClubGG News",
  },
  description: "מגזין הפוקר המוביל בישראל. חדשות, סיקור טורנירים, דירוגים עולמיים, פרופילי שחקנים, אסטרטגיה וסרטונים.",
};

const NAV_LINKS = [
  { label: "חדשות", href: "/latest" },
  { label: "טורנירים", href: "/tournaments" },
  { label: "סוכנים", href: "/verified-directory" },
  { label: "אסטרטגיה", href: "/strategy" },
  { label: "דירוגים", href: "/rankings" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Hebrew:wght@400;700;900&family=Frank+Ruhl+Libre:wght@400;500;700;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-paper-50 text-ink-800 antialiased">

        {/* ===== CLASSIC NEWSPAPER HEADER ===== */}
        <header className="sticky top-0 z-50 bg-paper-50">
          {/* Thin top line */}
          <div className="h-1 bg-ink-900" />

          {/* Masthead */}
          <div className="border-b border-ink-900/20">
            <div className="mx-auto max-w-6xl px-6 py-5 text-center">
              {/* Date line */}
              <p className="text-[10px] text-ink-400 tracking-[0.3em] uppercase mb-2">
                יום ראשון, 22 מרץ 2026 &nbsp;•&nbsp; גיליון מס׳ 247
              </p>

              {/* Logo */}
              <h1 className="leading-none">
                <a href="/" className="inline-block">
                  <span className="text-5xl sm:text-6xl font-black text-ink-900 tracking-tight" style={{ fontFamily: "'Frank Ruhl Libre', 'Noto Serif Hebrew', Georgia, serif" }}>
                    ClubGG
                  </span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight mr-2" style={{ fontFamily: "'Frank Ruhl Libre', 'Noto Serif Hebrew', Georgia, serif", color: '#b91c1c' }}>
                    {" "}News
                  </span>
                </a>
              </h1>

              {/* Tagline */}
              <p className="text-[11px] text-ink-400 mt-1.5 tracking-wide">
                מגזין הפוקר המוביל בישראל
              </p>
            </div>
          </div>

          {/* Double rule */}
          <div className="h-[1px] bg-ink-900/30" />
          <div className="h-[3px] bg-ink-900" />

          {/* Nav */}
          <div className="bg-paper-50 border-b border-ink-900/15">
            <nav className="mx-auto max-w-6xl px-6 flex items-center justify-center">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 text-sm font-bold text-ink-700 hover:text-accent-500 transition-colors border-l border-ink-900/10 last:border-l-0 first:border-r first:border-ink-900/10"
                  style={{ fontFamily: "'Frank Ruhl Libre', 'Noto Serif Hebrew', Georgia, serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* ===== CLASSIC FOOTER ===== */}
        <footer className="border-t-[3px] border-ink-900 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <span className="text-2xl font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                  ClubGG <span className="text-accent-500">News</span>
                </span>
                <p className="text-xs text-ink-400 leading-relaxed mt-2">מגזין הפוקר המוביל בישראל. חדשות, טורנירים, שחקנים ואסטרטגיה.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-ink-800 mb-3 uppercase tracking-wider">מדורים</h4>
                <ul className="space-y-1.5">
                  {[{ l: "חדשות", h: "/latest" }, { l: "טורנירים", h: "/tournaments" }, { l: "אסטרטגיה", h: "/strategy" }, { l: "דירוגים", h: "/rankings" }].map((x) => (
                    <li key={x.h}><a href={x.h} className="text-sm text-ink-500 hover:text-accent-500 hover:underline transition-colors">{x.l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black text-ink-800 mb-3 uppercase tracking-wider">קהילה</h4>
                <ul className="space-y-1.5">
                  {[{ l: "סוכנים מאומתים", h: "/verified-directory" }, { l: "ניוזלטר", h: "/newsletter" }].map((x) => (
                    <li key={x.h}><a href={x.h} className="text-sm text-ink-500 hover:text-accent-500 hover:underline transition-colors">{x.l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black text-ink-800 mb-3 uppercase tracking-wider">ClubGG</h4>
                <ul className="space-y-1.5">
                  {[{ l: "ClubGG Union", h: "https://ggclube.com" }, { l: "אקדמיה", h: "https://academy.ggclube.com" }].map((x) => (
                    <li key={x.h}><a href={x.h} className="text-sm text-ink-500 hover:text-accent-500 hover:underline transition-colors">{x.l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-ink-900/10">
            <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink-400">
              <div className="flex gap-4">
                <a href="/legal/terms" className="hover:text-ink-700 hover:underline">תנאי שימוש</a>
                <a href="/legal/privacy" className="hover:text-ink-700 hover:underline">פרטיות</a>
              </div>
              <span>© 2026 ClubGG News. כל הזכויות שמורות. 21+ בלבד.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
