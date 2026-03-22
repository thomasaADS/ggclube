import type { Metadata } from "next";

export const metadata: Metadata = { title: "מדיניות פרטיות", description: "מדיניות הפרטיות של ClubGG News." };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-accent-500 font-bold hover:underline mb-6 inline-block">← חזרה לעמוד הראשי</a>
      <h1 className="text-3xl font-black text-ink-900 mb-8" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>מדיניות פרטיות</h1>
      <div className="space-y-6 text-ink-600 text-[15px] leading-[1.85]" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
        <p className="text-ink-400 text-sm">עדכון אחרון: מרץ 2026</p>

        <h2 className="text-xl font-black text-ink-900">1. מידע שאנו אוספים</h2>
        <p>אנו אוספים מידע שאתם מספקים ישירות (כגון כתובת אימייל בהרשמה לניוזלטר) ומידע שנאסף אוטומטית (נתוני שימוש אנונימיים, מידע על המכשיר).</p>

        <h2 className="text-xl font-black text-ink-900">2. כיצד אנו משתמשים במידע</h2>
        <p>אנו משתמשים במידע כדי לספק ולשפר את השירות, לשלוח ניוזלטרים (למי שנרשם), ולנתח דפוסי שימוש באתר.</p>

        <h2 className="text-xl font-black text-ink-900">3. שיתוף מידע</h2>
        <p>אנו לא מוכרים את המידע האישי שלכם. אנו עשויים לשתף מידע עם ספקי שירות שמסייעים בתפעול האתר, בכפוף לחובות סודיות.</p>

        <h2 className="text-xl font-black text-ink-900">4. הזכויות שלכם</h2>
        <p>יש לכם זכות לגשת, לתקן או למחוק את המידע האישי שלכם. לבקשות ניתן לפנות דרך <a href="/contact" className="text-accent-500 hover:underline">דף צור קשר</a>.</p>

        <h2 className="text-xl font-black text-ink-900">5. עוגיות</h2>
        <p>אנו משתמשים בעוגיות וטכנולוגיות דומות. ניתן לנהל עוגיות דרך הגדרות הדפדפן.</p>

        <h2 className="text-xl font-black text-ink-900">6. אבטחה</h2>
        <p>אנו מיישמים אמצעי אבטחה תקניים להגנה על המידע שלכם.</p>
      </div>
    </div>
  );
}
