import type { Metadata } from "next";

export const metadata: Metadata = { title: "תנאי שימוש", description: "תנאי השימוש של ClubGG News." };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <h1 className="text-3xl font-black text-ink-900 mb-8" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>תנאי שימוש</h1>
      <div className="space-y-6 text-ink-600 text-[15px] leading-[1.85]" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        <p className="text-ink-400 text-sm">עדכון אחרון: מרץ 2026</p>

        <p>ברוכים הבאים ל-ClubGG News. בגישה לאתר זה, אתם מסכימים לתנאי השימוש הבאים. ClubGG News היא פלטפורמת תוכן ומדיה המספקת חדשות פוקר, ניתוחים, דירוגים ותוכן קהילתי למטרות מידע בלבד.</p>

        <h2 className="text-xl font-black text-ink-900">1. תיאור השירות</h2>
        <p>ClubGG News הוא מגזין דיגיטלי העוסק בעולם הפוקר. האתר מספק חדשות, סיקור טורנירים, דירוגי שחקנים, מאמרי אסטרטגיה, מאגר סוכנים מאומתים ותוכן חינוכי. האתר אינו מפעיל שירותי הימורים ואינו מקבל הפקדות כספיות.</p>

        <h2 className="text-xl font-black text-ink-900">2. תוכן</h2>
        <p>כל התוכן העריכתי כפוף למדיניות העריכה שלנו. דירוגים, רישומי מאגר ונתוני טורנירים מסופקים כמות שהם (as-is) ועשויים להתעדכן ללא הודעה מוקדמת. אנו שואפים לדיוק אך אינם מתחייבים לכך.</p>

        <h2 className="text-xl font-black text-ink-900">3. התנהגות משתמשים</h2>
        <p>על המשתמשים להיות בני 21+ ולציית לכל החוקים החלים. משתמשים המשתתפים בפיצ׳רים קהילתיים חייבים לעמוד בכללי הקהילה שלנו.</p>

        <h2 className="text-xl font-black text-ink-900">4. קניין רוחני</h2>
        <p>כל התוכן באתר, כולל טקסטים, תמונות, סרטונים ועיצוב, הם רכוש ClubGG News או מורשים לשימוש. אין להעתיק, להפיץ או לפרסם מחדש ללא אישור.</p>

        <h2 className="text-xl font-black text-ink-900">5. הגבלת אחריות</h2>
        <p>ClubGG News מספקת מידע למטרות חינוכיות ואינפורמטיביות בלבד. אנו לא אחראים להחלטות שמתקבלות על סמך תוכן באתר. אימות סוכנים משקף את השלמת תהליך הבדיקה שלנו ואינו מהווה המלצה או ערבות.</p>

        <h2 className="text-xl font-black text-ink-900">6. שינויים</h2>
        <p>אנו שומרים את הזכות לעדכן תנאים אלו בכל עת. שימוש מתמשך באתר לאחר שינויים מהווה הסכמה לתנאים המעודכנים.</p>

        <h2 className="text-xl font-black text-ink-900">7. יצירת קשר</h2>
        <p>לשאלות בנוגע לתנאי השימוש, ניתן לפנות אלינו דרך <a href="/contact" className="text-accent-500 hover:underline">דף צור קשר</a>.</p>
      </div>
    </div>
  );
}
