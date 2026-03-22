import type { Metadata } from "next";
export const metadata: Metadata = { title: "מדיניות פרטיות", description: "מדיניות פרטיות ClubGG Academy." };
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-red-400 font-bold hover:underline mb-6 inline-block">← חזרה</a>
      <h1 className="text-3xl font-black text-t-50 mb-8">מדיניות פרטיות</h1>
      <div className="space-y-5 text-t-300 text-[15px] leading-[1.8]">
        <p className="text-t-500 text-sm">עדכון אחרון: מרץ 2026</p>
        <p>מדיניות זו חלה בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, ותקנות הגנת הפרטיות (אבטחת מידע), התשע&quot;ז-2017.</p>
        <h2 className="text-xl font-black text-t-50">1. מידע שנאסף</h2>
        <p>אנו אוספים: שם, כתובת אימייל, ונתוני שימוש אנונימיים. מידע תשלום מעובד דרך ספק PCI-DSS מאובטח ואינו נשמר בשרתינו.</p>
        <h2 className="text-xl font-black text-t-50">2. מטרות השימוש</h2>
        <p>המידע משמש לאספקת השירות, שליחת עדכונים (בהסכמה), שיפור החוויה וניתוח סטטיסטי אנונימי.</p>
        <h2 className="text-xl font-black text-t-50">3. שיתוף עם צדדים שלישיים</h2>
        <p>אנו לא מוכרים מידע אישי. שיתוף רק עם ספקי שירות חיוניים בכפוף להסכמי סודיות. לא מועבר מידע מחוץ לישראל ללא הגנה נאותה.</p>
        <h2 className="text-xl font-black text-t-50">4. זכויותיכם</h2>
        <p>בהתאם לחוק, יש לכם זכות לעיין במידע, לתקנו או למחקו. בקשות ניתן להפנות דרך <a href="/faq" className="text-red-400 hover:underline">דף השאלות</a>. נשיב תוך 30 יום כנדרש בחוק.</p>
        <h2 className="text-xl font-black text-t-50">5. אבטחת מידע</h2>
        <p>אנו מיישמים אמצעי אבטחה בהתאם לתקנות אבטחת מידע, כולל הצפנה, בקרת גישה ותיעוד אירועי אבטחה.</p>
        <h2 className="text-xl font-black text-t-50">6. עוגיות</h2>
        <p>האתר משתמש בעוגיות לצורך תפעול ושיפור. ניתן לנהל העדפות עוגיות דרך הדפדפן.</p>
      </div>
    </div>
  );
}
