import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חדשות אחרונות — עדכוני פוקר",
  description: "החדשות האחרונות מעולם הפוקר — טורנירים, שחקנים, תעשייה ועוד.",
};

const ARTICLES = [
  { title: "מייקל מיזרצ׳י זוכה באליפות העולם 2025 ורושם את עצמו בהיסטוריה", category: "WSOP", author: "מערכת", time: "לפני 2 שעות", excerpt: "The Grinder ירד ל-3BB ביום 8, חזר בסערה וזכה ב-$10M ובצמיד השמיני שלו." },
  { title: "לאו מרגטס — האישה הראשונה בשולחן הגמר מאז 1995", category: "WSOP", author: "מערכת", time: "לפני 5 שעות", excerpt: "השחקנית הספרדייה הגיעה למקום ה-7 ב-Main Event — הישג היסטורי." },
  { title: "פונאט פונסרי מתאילנד — שחקן השנה של GPI", category: "דירוגים", author: "מערכת", time: "אתמול", excerpt: "השחקן התאילנדי הפך לראשון מאסיה שזוכה בתואר שחקן השנה — 61 קאשים, $10.9M." },
  { title: "קריסטן פוקסן שוברת שיא: $4.6M ב-2025", category: "שחקנים", author: "מערכת", time: "אתמול", excerpt: "פוקסן עברה את ונסה סלבסט והפכה לשחקנית עם הרווחים הגבוהים בהיסטוריה." },
  { title: "PokerStars מתמזגת עם FanDuel — מה זה אומר?", category: "תעשייה", author: "מערכת", time: "לפני יומיים", excerpt: "Flutter Entertainment מאחדת את הפלטפורמות בארה\"ב — שלוש מדינות בפול משותף." },
  { title: "Resorts World סוגרת חדר פוקר עם 29 שולחנות", category: "תעשייה", author: "מערכת", time: "לפני 3 ימים", excerpt: "ירידה של 8% בתיירות ללאס וגאס ב-2025 מובילה לסגירת חדר הפוקר." },
];

export default function LatestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">LATEST</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Noto Serif Hebrew', Georgia, serif" }}>חדשות אחרונות</h1>
      </div>
      <div className="space-y-5">
        {ARTICLES.map((article) => (
          <a key={article.title} href="#" className="group block p-6 rounded-xl bg-card border border-paper-300 hover:shadow-elevated transition-all">
            <span className="text-[10px] font-bold text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">{article.category}</span>
            <h2 className="text-xl font-bold text-ink-900 mt-2 group-hover:text-accent-500 transition-colors leading-snug">{article.title}</h2>
            <p className="text-sm text-ink-500 mt-2">{article.excerpt}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-ink-400">
              <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.time}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
