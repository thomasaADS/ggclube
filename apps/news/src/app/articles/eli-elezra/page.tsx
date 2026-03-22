import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אלי אלעזרא — הישראלי הראשון בהיכל התהילה",
  description: "הסיפור של אלי אלעזרא — 5 צמידי WSOP, היכל התהילה 2021, ואגדת הפוקר הישראלית.",
};

export default function Article() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <span className="block text-[10px] font-bold text-accent-500 tracking-wider mb-2">פרופיל שחקן</span>
      <h1 className="text-3xl sm:text-4xl font-black text-ink-900 leading-snug" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        אלי אלעזרא — 5 צמידים והישראלי הראשון בהיכל התהילה
      </h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-ink-400 border-b border-ink-900/10 pb-6">
        <span><User className="w-3.5 h-3.5 inline ml-1" />מערכת ClubGG News</span>
        <span><Clock className="w-3.5 h-3.5 inline ml-1" />6 דקות קריאה</span>
      </div>

      <div className="prose-custom space-y-5 text-ink-700 leading-[1.85] mt-8" style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: '17px' }}>
        <p>אלי אלעזרא נולד ב-24 בנובמבר 1960 בירושלים. הוא עזב את ישראל בגיל צעיר ועבר ללאס וגאס, שם הפך לאחד מהשמות הכי מוכרים בעולם הפוקר.</p>

        <p>ב-2021 אלעזרא הפך לישראלי הראשון שנכנס להיכל התהילה של הפוקר — ההכרה הגבוהה ביותר שאפשר לקבל בתעשייה. הוא הצטרף לשמות כמו דויל ברנסון, פיל איבי וג׳וני צ׳אן.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>חמישה צמידים</h2>

        <p>אלעזרא זכה בצמיד הראשון שלו ב-2007, וב-2022 — בגיל 61 — זכה בצמיד החמישי שלו באירוע $10,000 PLO Hi-Lo תמורת $611,362. הוא מומחה עולמי בפוט לימיט אומהה ונחשב לאחד השחקנים הכי מכובדים במשחקי ה-High Stakes בלאס וגאס.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>מורשת</h2>

        <p>אלעזרא כתב ביוגרפיה יחד עם מתן קרקוב, שחקן ישראלי נוסף שזכה מאוחר יותר באליפות EPT פראג. הוא פתח את הדרך לדור שלם של שחקנים ישראליים שהוכיחו שישראל היא מעצמת פוקר אמיתית.</p>

        <ul className="list-disc pr-6 space-y-2">
          <li><strong>צמידי WSOP:</strong> 5</li>
          <li><strong>רווחים מצטברים:</strong> $5,000,000+</li>
          <li><strong>התמחות:</strong> PLO, PLO Hi-Lo</li>
          <li><strong>היכל התהילה:</strong> 2021 — הישראלי הראשון</li>
          <li><strong>מגורים:</strong> לאס וגאס</li>
        </ul>
      </div>

      <div className="mt-10 pt-6 border-t border-ink-900/10">
        <a href="/" className="text-sm text-accent-500 font-bold hover:underline">← חזרה לעמוד הראשי</a>
      </div>
    </article>
  );
}
