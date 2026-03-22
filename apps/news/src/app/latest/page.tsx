import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חדשות אחרונות — עדכוני פוקר",
  description: "החדשות האחרונות מעולם הפוקר.",
};

const ARTICLES = [
  { title: "מייקל מיזרצ׳י זוכה באליפות העולם 2025", cat: "WSOP", time: "לפני 2 שעות", excerpt: "The Grinder ירד ל-3BB ביום 8, חזר בסערה וזכה ב-$10M.", img: "/players/mizrachi.jpg", href: "/articles/mizrachi-wsop-2025" },
  { title: "לאו מרגטס — האישה הראשונה בשולחן הגמר מאז 1995", cat: "WSOP", time: "לפני 5 שעות", excerpt: "הגיעה למקום ה-7 ב-Main Event — הישג היסטורי.", img: "/articles/wsop.jpg", href: "#" },
  { title: "פונאט פונסרי: שחקן השנה מאסיה", cat: "GPI", time: "אתמול", excerpt: "61 קאשים, 7 זכיות ו-$10.9M. הראשון מאסיה.", img: "/players/punsri.jpg", href: "#" },
  { title: "קריסטן פוקסן שוברת שיא", cat: "שחקנים", time: "אתמול", excerpt: "השחקנית הכי מרוויחה בהיסטוריה — $4.6M ב-2025.", img: "/players/foxen.jpg", href: "#" },
  { title: "PokerStars + FanDuel — מה זה אומר?", cat: "תעשייה", time: "לפני יומיים", excerpt: "Flutter מאחדת פלטפורמות. שלוש מדינות בפול.", img: "/articles/industry.jpg", href: "#" },
  { title: "Resorts World סוגרת חדר פוקר", cat: "תעשייה", time: "לפני 3 ימים", excerpt: "29 שולחנות נסגרים. ירידה בתיירות.", img: "/articles/tournament.jpg", href: "#" },
  { title: "אלי אלעזרא — הישראלי הראשון בהיכל התהילה", cat: "פרופיל", time: "לפני 4 ימים", excerpt: "5 צמידים, אגדת PLO, היכל התהילה 2021.", img: "/articles/profile.jpg", href: "/articles/eli-elezra" },
  { title: "ג׳סי לוניס: $13.3M — מספר 1", cat: "דירוגים", time: "לפני 5 ימים", excerpt: "56 קאשים, 9 זכיות. הכי טוב ב-2025.", img: "/players/lonis.jpg", href: "#" },
  { title: "WSOP 2025 במספרים", cat: "WSOP", time: "לפני שבוע", excerpt: "100 אירועים. הסדרה הגדולה בהיסטוריה.", img: "/articles/rankings.jpg", href: "#" },
];

export default function LatestPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">LATEST</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>חדשות אחרונות</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article, i) => (
          <a key={i} href={article.href} className="group block rounded-lg bg-card border border-paper-300 overflow-hidden hover:shadow-elevated transition-all">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-bold text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">{article.cat}</span>
              <h2 className="text-base font-bold text-ink-900 mt-2 leading-snug group-hover:text-accent-500 transition-colors" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{article.title}</h2>
              <p className="text-sm text-ink-500 mt-1.5">{article.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-ink-400">
                <span><User className="w-3 h-3 inline ml-1" />מערכת</span>
                <span><Clock className="w-3 h-3 inline ml-1" />{article.time}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
