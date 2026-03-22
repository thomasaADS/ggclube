import { Clock, User, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מייקל מיזרצ׳י זוכה באליפות העולם 2025",
  description: "הישראלי-אמריקאי מייקל מיזרצ׳י זוכה ב-WSOP Main Event 2025, $10M ובצמיד השמיני שלו.",
};

export default function Article() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <span className="block text-[10px] font-bold text-accent-500 tracking-wider mb-2">WSOP 2025 • כתבה ראשית</span>
      <h1 className="text-3xl sm:text-4xl font-black text-ink-900 leading-snug" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        מייקל מיזרצ׳י זוכה באליפות העולם 2025 — ורושם את עצמו בהיסטוריה
      </h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-ink-400 border-b border-ink-900/10 pb-6">
        <span><User className="w-3.5 h-3.5 inline ml-1" />מערכת ClubGG News</span>
        <span><Clock className="w-3.5 h-3.5 inline ml-1" />7 דקות קריאה</span>
        <span>16 יולי 2025</span>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden my-8">
        <iframe src="https://www.youtube-nocookie.com/embed/7QOTdbfVocI" title="מיזרצ׳י WSOP" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
      </div>

      <div className="prose-custom space-y-5 text-ink-700 leading-[1.85]" style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: '17px' }}>
        <p>מייקל "The Grinder" מיזרצ׳י, יליד 1981 למשפחה ישראלית-אמריקאית ממיאמי, עשה את מה שנראה בלתי אפשרי בקיץ של 2025. הוא לא רק זכה באליפות העולם בפוקר — הוא עשה את זה אחרי שירד ל-3 ביג בליינדס ביום 8 של הטורניר.</p>

        <p>19 יום לפני כן, מיזרצ׳י כבר זכה ב-$50,000 Poker Players Championship — לפעם הרביעית בקריירה שלו, שיא כל הזמנים. אבל זה היה רק חימום.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>הקאמבק ההיסטורי</h2>

        <p>ביום 8 של ה-Main Event, מיזרצ׳י מצא את עצמו עם ערימה זעומה — 3 ביג בליינדס בלבד. רוב השחקנים היו מתפללים לאיזה דאבל ושמחים לצאת עם כבוד. מיזרצ׳י לא. הוא שיחק כל יד בדיוק כירורגי, ניצל כל הזדמנות, ובנה מחדש את הערימה שלו צעד אחר צעד.</p>

        <p>שולחן הגמר נמשך 79 ידיים בלבד — הכי מהיר ב-20+ שנים. מיזרצ׳י שלט מתחילתו ועד סופו.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>לאו מרגטס עושה היסטוריה</h2>

        <p>את שולחן הגמר חילקה גם לאו מרגטס מספרד, שהפכה לאישה הראשונה שמגיעה לשולחן הגמר של ה-Main Event מאז ברברה אנרייט ב-1995 — 30 שנה. מרגטס סיימה במקום ה-7, אבל הנוכחות שלה שם היא כבר הישג היסטורי.</p>

        <h2 className="text-xl font-black text-ink-900 mt-8 mb-3" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>מספרים</h2>

        <ul className="list-disc pr-6 space-y-2">
          <li><strong>פרס ראשון:</strong> $10,000,000</li>
          <li><strong>צמידים:</strong> 8 (חמישי בכל הזמנים)</li>
          <li><strong>רווחים מצטברים:</strong> $29,000,000+</li>
          <li><strong>גיל:</strong> 44</li>
          <li><strong>לאום:</strong> ישראלי-אמריקאי</li>
          <li><strong>מגורים:</strong> לאס וגאס</li>
        </ul>

        <p>מיזרצ׳י הצטרף להיכל התהילה של הפוקר מיד לאחר הזכייה, יחד עם ניק שולמן. הוא הוכיח שוב שהעקביות, הסבלנות והניסיון מנצחים — גם כשנראה שהכל אבוד.</p>
      </div>

      <div className="mt-10 pt-6 border-t border-ink-900/10">
        <a href="/" className="text-sm text-accent-500 font-bold hover:underline">← חזרה לעמוד הראשי</a>
      </div>
    </article>
  );
}
