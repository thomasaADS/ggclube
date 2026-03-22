import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "רפי אלהרר — סינדרלה ישראלית בפוקר",
  description: "רפי אלהרר זכה ב-$1.23M מבאיין של $525 ב-WSOP Super Circuit — הסיפור המלא.",
};

export default function Article() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <span className="block text-[10px] font-bold text-accent-500 tracking-wider mb-2">WSOP • סיפור השראה</span>
      <h1 className="text-3xl sm:text-4xl font-black text-ink-900 leading-snug" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        רפי אלהרר זוכה ב-$1.23 מיליון מבאיין של $525 — סינדרלה ישראלית
      </h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-ink-400 border-b border-ink-900/10 pb-6">
        <span><User className="w-3.5 h-3.5 inline ml-1" />מערכת ClubGG News</span>
        <span><Clock className="w-3.5 h-3.5 inline ml-1" />5 דקות קריאה</span>
      </div>

      <div className="prose-custom space-y-5 text-ink-700 leading-[1.85] mt-8" style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: '17px' }}>
        <p>רפי אלהרר, הידוע גם בשם "רפי וגאס", כתב אחד מסיפורי הסינדרלה הגדולים בהיסטוריה של הפוקר הישראלי. מבאיין של $525 בלבד, הוא הגיע למקום הראשון ב-WSOP Super Circuit Main Event וזכה ב-$1,230,227.</p>

        <p>הטורניר משך 23,249 שחקנים — שדה עצום שהפך את הזכייה למרשימה אף יותר.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>לא פעם ראשונה</h2>

        <p>אלהרר כבר הוכיח את עצמו קודם לכן כשסיים במקום ה-3 ב-Big 50 — הטורניר הכי גדול בהיסטוריה עם 28,371 שחקנים — וזכה ב-$534,574. שני ההישגים האלה ביחד הופכים אותו לאחד משחקני ה-mass field הכי מוצלחים מישראל.</p>

        <ul className="list-disc pr-6 space-y-2">
          <li><strong>זכייה ראשית:</strong> $1,230,227 (WSOP Super Circuit, 23,249 שחקנים)</li>
          <li><strong>Big 50:</strong> מקום 3, $534,574 (28,371 שחקנים)</li>
          <li><strong>באיין:</strong> $525</li>
          <li><strong>כינוי:</strong> רפי וגאס</li>
        </ul>

        <p>הסיפור של אלהרר מוכיח שלא צריך באיין של $10,000 כדי לזכות בסכומים מטורפים. לפעמים $525 זה כל מה שצריך — ואומץ, כישרון וקצת מזל.</p>
      </div>

      <div className="mt-10 pt-6 border-t border-ink-900/10">
        <a href="/" className="text-sm text-accent-500 font-bold hover:underline">← חזרה לעמוד הראשי</a>
      </div>
    </article>
  );
}
