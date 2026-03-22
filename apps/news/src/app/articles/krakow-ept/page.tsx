import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מתן קרקוב זוכה ב-EPT פראג 2025",
  description: "מתן קרקוב הפך לישראלי השני שזוכה ב-EPT Main Event — €778,255 בפראג.",
};

export default function Article() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <span className="block text-[10px] font-bold text-accent-500 tracking-wider mb-2">EPT 2025</span>
      <h1 className="text-3xl sm:text-4xl font-black text-ink-900 leading-snug" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        מתן קרקוב זוכה ב-EPT פראג — הישראלי השני שמנצח ב-Main Event
      </h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-ink-400 border-b border-ink-900/10 pb-6">
        <span><User className="w-3.5 h-3.5 inline ml-1" />מערכת ClubGG News</span>
        <span><Clock className="w-3.5 h-3.5 inline ml-1" />5 דקות קריאה</span>
        <span>דצמבר 2025</span>
      </div>

      <div className="prose-custom space-y-5 text-ink-700 leading-[1.85] mt-8" style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: '17px' }}>
        <p>מתן קרקוב, בן 44 מישראל, הפך לישראלי השני בהיסטוריה שזוכה ב-Main Event של European Poker Tour — אחרי אורי גלבוע שזכה ב-EPT סוצ׳י 2019.</p>

        <p>קרקוב ניצח את הטורקי בורא קורטולוס בראש-בראש אחרי עסקת ICM בין שלושת השחקנים האחרונים. הפרס: €778,255.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>לא סתם שחקן</h2>

        <p>קרקוב פעיל בסצנה מאז 2011 ומוכר גם מחוץ לשולחנות — הוא שותף לכתיבת הביוגרפיה של אלי אלעזרא, אגדת הפוקר הישראלית ובן היכל התהילה.</p>

        <p>הזכייה שלו ב-EPT פראג ממשיכה רצף מרשים של הצלחות ישראליות בזירה הבינלאומית. אחרי האחים מיזרצ׳י (13 צמידים ביחד), אלעזרא (5 צמידים), מרגולין (3 צמידים) וגלבוע (EPT סוצ׳י) — קרקוב מוסיף עוד נדבך לדומיננטיות הישראלית.</p>

        <ul className="list-disc pr-6 space-y-2">
          <li><strong>פרס:</strong> €778,255</li>
          <li><strong>טורניר:</strong> EPT Prague Main Event 2025</li>
          <li><strong>הישג:</strong> הישראלי השני שזוכה ב-EPT Main Event</li>
        </ul>
      </div>

      <div className="mt-10 pt-6 border-t border-ink-900/10">
        <a href="/" className="text-sm text-accent-500 font-bold hover:underline">← חזרה לעמוד הראשי</a>
      </div>
    </article>
  );
}
