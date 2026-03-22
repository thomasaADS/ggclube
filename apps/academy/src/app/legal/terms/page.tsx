import type { Metadata } from "next";
export const metadata: Metadata = { title: "תנאי שימוש", description: "תנאי שימוש ClubGG Academy." };
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-red-400 font-bold hover:underline mb-6 inline-block">← חזרה</a>
      <h1 className="text-3xl font-black text-t-50 mb-8">תנאי שימוש</h1>
      <div className="space-y-5 text-t-300 text-[15px] leading-[1.8]">
        <p className="text-t-500 text-sm">עדכון אחרון: מרץ 2026</p>
        <h2 className="text-xl font-black text-t-50">1. כללי</h2>
        <p>ClubGG Academy (&quot;האתר&quot;) הוא פלטפורמת חינוך מקוונת בתחום הפוקר. השימוש באתר כפוף לתנאים אלה ולדיני מדינת ישראל. בית המשפט המוסמך לכל סכסוך יהיה בתל אביב-יפו.</p>
        <h2 className="text-xl font-black text-t-50">2. זכאות</h2>
        <p>השימוש באתר מותר למי שמלאו לו 21 שנים. בהרשמה אתם מאשרים שאתם עומדים בדרישה זו ושאתם פועלים בהתאם לכל דין חל.</p>
        <h2 className="text-xl font-black text-t-50">3. מנויים ותשלומים</h2>
        <p>המנוי הפרימיום מחויב ב-₪99 לחודש באמצעות כרטיס אשראי. ניתן לבטל בכל עת דרך אזור החשבון. החיוב יפסק בתום תקופת החיוב הנוכחית. מטבע החיוב הוא שקל חדש (₪) בהתאם לחוק הגנת הצרכן, התשמ&quot;א-1981.</p>
        <h2 className="text-xl font-black text-t-50">4. תוכן</h2>
        <p>כל תוכן הקורסים מסופק למטרות חינוכיות בלבד ואינו מהווה ייעוץ פיננסי, ייעוץ משחק, או ערובה לתוצאות כלשהן. בהתאם לחוק הגנת הצרכן, תיאורי הקורסים משקפים את תוכנם בפועל.</p>
        <h2 className="text-xl font-black text-t-50">5. קניין רוחני</h2>
        <p>כל התוכן באתר מוגן בזכויות יוצרים לפי חוק זכות יוצרים, התשס&quot;ח-2007. אין להעתיק, להפיץ או לפרסם מחדש ללא אישור מפורש בכתב.</p>
        <h2 className="text-xl font-black text-t-50">6. הגבלת אחריות</h2>
        <p>ClubGG Academy אינה אחראית לתוצאות משחק כלשהן. השירות מסופק &quot;כמות שהוא&quot; (AS IS). בהתאם לחוק החוזים (תרופות), האחריות מוגבלת לסכום ששולם בפועל עבור המנוי.</p>
        <h2 className="text-xl font-black text-t-50">7. יצירת קשר</h2>
        <p>לשאלות: <a href="/faq" className="text-red-400 hover:underline">דף שאלות נפוצות</a></p>
      </div>
    </div>
  );
}
