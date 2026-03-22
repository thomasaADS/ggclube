import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ClubGG Academy — בית הספר לפוקר", template: "%s | ClubGG Academy" },
  description: "בית הספר לפוקר של ClubGG. קורסים מובנים, מאמנים מקצועיים, מסלולי למידה וקהילה.",
};

const NAV = [
  { label: "קורסים", href: "/courses" },
  { label: "מאמנים", href: "/coaches" },
  { label: "מבחן התאמה", href: "/quiz" },
  { label: "קהילה", href: "/community" },
  { label: "מחירים", href: "/pricing" },
  { label: "שאלות נפוצות", href: "/faq" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-bg text-t-200 antialiased">
        {/* === HEADER === */}
        <header className="sticky top-0 z-50">
          {/* Top accent line */}
          <div className="h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-gold-500" />

          <div className="bg-bg/95 backdrop-blur-xl border-b border-line">
            <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <img src="/logo-icon.png" alt="ClubGG" className="h-9 w-9 rounded-xl shadow-lg shadow-red-500/10 group-hover:shadow-red-500/20 transition-shadow" />
                <div className="leading-none">
                  <span className="text-t-50 font-black text-lg tracking-tight">Club</span>
                  <span className="text-red-400 font-black text-lg tracking-tight">GG</span>
                  <span className="block text-[9px] text-gold-500 font-bold tracking-[0.15em] uppercase -mt-0.5">Academy</span>
                </div>
              </a>

              {/* Nav */}
              <nav className="hidden lg:flex items-center gap-0.5">
                {NAV.map(l => (
                  <a key={l.href} href={l.href} className="px-3.5 py-2 text-[13px] text-t-300 hover:text-t-50 transition-colors rounded-lg hover:bg-white/5 font-medium">{l.label}</a>
                ))}
              </nav>

              {/* CTA */}
              <a href="/join">
                <button className="h-10 px-6 rounded-xl bg-gradient-to-l from-red-600 to-red-500 text-white text-sm font-bold hover:from-red-500 hover:to-red-400 transition-all cursor-pointer shadow-lg shadow-red-500/20">
                  הצטרפו חינם
                </button>
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* === FOOTER === */}
        <footer className="mt-16">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
          <div className="bg-bg-card">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <img src="/logo-icon.png" alt="ClubGG" className="h-8 w-8 rounded-xl" />
                    <div className="leading-none">
                      <span className="text-t-50 font-black text-base">Club<span className="text-red-400">GG</span></span>
                      <span className="block text-[8px] text-gold-500 font-bold tracking-[0.12em] uppercase">Academy</span>
                    </div>
                  </div>
                  <p className="text-xs text-t-500 leading-relaxed">בית הספר לפוקר. קורסים, מאמנים, קהילה — לכל הרמות.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-t-100 mb-3 tracking-wider">למידה</h4>
                  <ul className="space-y-2">
                    {[{l:"קורסים",h:"/courses"},{l:"מאמנים",h:"/coaches"},{l:"מבחן התאמה",h:"/quiz"},{l:"מחירים",h:"/pricing"}].map(x=>(
                      <li key={x.h}><a href={x.h} className="text-sm text-t-400 hover:text-t-50 hover:underline transition-colors">{x.l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-t-100 mb-3 tracking-wider">קהילה</h4>
                  <ul className="space-y-2">
                    {[{l:"הצטרפות",h:"/join"},{l:"קהילה",h:"/community"},{l:"שאלות נפוצות",h:"/faq"}].map(x=>(
                      <li key={x.h}><a href={x.h} className="text-sm text-t-400 hover:text-t-50 hover:underline transition-colors">{x.l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-t-100 mb-3 tracking-wider">ClubGG</h4>
                  <ul className="space-y-2">
                    {[{l:"ClubGG Union",h:"https://ggclube.vercel.app"},{l:"חדשות",h:"https://ggclube-news.vercel.app"}].map(x=>(
                      <li key={x.h}><a href={x.h} className="text-sm text-t-400 hover:text-t-50 hover:underline transition-colors">{x.l}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-line">
              <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-t-500">
                <div className="flex gap-4">
                  <a href="/legal/terms" className="hover:text-t-200 hover:underline">תנאי שימוש</a>
                  <a href="/legal/privacy" className="hover:text-t-200 hover:underline">פרטיות</a>
                  <a href="/legal/refund-policy" className="hover:text-t-200 hover:underline">מדיניות החזרים</a>
                </div>
                <span>© 2026 ClubGG Academy. כל הזכויות שמורות. 21+</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
