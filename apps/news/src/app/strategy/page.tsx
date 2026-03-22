import { Clock, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אסטרטגיה — מדריכים וניתוחי פוקר",
  description: "מאמרי אסטרטגיית פוקר, ניתוחי ידיים, מדריכים למתחילים ומתקדמים.",
};

const ARTICLES = [
  { title: "ניתוח יד: איך מיזרצ׳י ניצח עם 3 ביג בליינדס ביום 8 של ה-Main Event", category: "ניתוח ידיים", time: "10 דקות", excerpt: "ניתוח מפורט של ההחלטות שהפכו את הסיטואציה הכי קשה ל-comeback היסטורי." },
  { title: "5 שגיאות נפוצות ב-Final Table שעולות לכם כסף אמיתי", category: "MTT", time: "7 דקות", excerpt: "שגיאות ICM, סייזינג ופסיכולוגיה שרוב השחקנים עושים תחת לחץ." },
  { title: "מדריך PLO למתחילים: מ-Hold'em לאומהה ב-5 צעדים", category: "אומהה", time: "8 דקות", excerpt: "המעבר מטקסס לאומהה הוא לא רק עוד שני קלפים. הנה מה שצריך לדעת." },
  { title: "ניהול באנקרול: הכללים שימנעו מכם לפשוט רגל", category: "בסיס", time: "5 דקות", excerpt: "כמה באיים צריך, מתי לרדת רמה, ומתי לעלות — המדע מאחורי ניהול כסף." },
  { title: "קריאת שחקנים: 7 טלים פיזיים שעובדים גם בפוקר אונליין", category: "מתקדם", time: "6 דקות", excerpt: "טיימינג טלים, סייזינג טלים ודפוסי התנהגות שחושפים את היד של היריב." },
  { title: "אסטרטגיית Short Stack: איך לשחק עם 20BB ומטה", category: "MTT", time: "7 דקות", excerpt: "טבלאות Push/Fold, ICM considerations ואיך למקסם את הסיכויים שלכם." },
];

export default function StrategyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">STRATEGY</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Noto Serif Hebrew', Georgia, serif" }}>אסטרטגיה ומדריכים</h1>
        <p className="mt-2 text-ink-500">מאמרים, ניתוחי ידיים ומדריכים מקצועיים לכל הרמות.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {ARTICLES.map((article) => (
          <a key={article.title} href="#" className="group block p-6 rounded-xl bg-card border border-paper-300 hover:shadow-elevated transition-all">
            <span className="text-[10px] font-bold text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">{article.category}</span>
            <h2 className="text-base font-bold text-ink-900 mt-3 mb-2 leading-snug group-hover:text-accent-500 transition-colors">{article.title}</h2>
            <p className="text-sm text-ink-500 leading-relaxed">{article.excerpt}</p>
            <span className="text-xs text-ink-400 flex items-center gap-1 mt-3"><Clock className="w-3 h-3" />{article.time}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
