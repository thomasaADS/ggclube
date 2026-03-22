import type { Metadata } from "next";
export const metadata: Metadata = { title: "מדיניות החזרים", description: "מדיניות החזרים ClubGG Academy." };
export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <a href="/" className="text-xs text-red-400 font-bold hover:underline mb-6 inline-block">← חזרה</a>
      <h1 className="text-3xl font-black text-t-50 mb-8">מדיניות החזרים</h1>
      <div className="space-y-5 text-t-300 text-[15px] leading-[1.8]">
        <p className="text-t-500 text-sm">עדכון אחרון: מרץ 2026</p>
        <p>מדיניות זו פועלת בהתאם לחוק הגנת הצרכן, התשמ&quot;א-1981, ותקנות הגנת הצרכן (ביטול עסקה), התשע&quot;א-2010.</p>
        <h2 className="text-xl font-black text-t-50">ביטול מנוי פרימיום</h2>
        <p>בהתאם לחוק, ניתן לבטל את העסקה תוך 14 ימים מיום ההרשמה או מיום קבלת מסמך הגילוי (המאוחר מביניהם), בתנאי שלא נצרכו יותר מ-25% מתוכן הקורסים. דמי ביטול: עד 5% ממחיר העסקה או ₪100 — הנמוך מביניהם.</p>
        <h2 className="text-xl font-black text-t-50">לאחר 14 יום</h2>
        <p>ניתן לבטל את המנוי בכל עת. המנוי ימשיך לפעול עד תום תקופת החיוב הנוכחית. לא יינתן החזר חלקי על תקופה שלא נוצלה, אלא אם כן נדרש על פי דין.</p>
        <h2 className="text-xl font-black text-t-50">איך מבטלים</h2>
        <p>ביטול דרך אזור החשבון באתר, או בפנייה דרך <a href="/faq" className="text-red-400 hover:underline">דף שאלות נפוצות</a>. החזרים מעובדים תוך 14 ימי עסקים כנדרש בחוק.</p>
      </div>
    </div>
  );
}
