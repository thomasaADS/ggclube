import type { Metadata } from "next";

export const metadata: Metadata = { title: "שאלות נפוצות", description: "שאלות נפוצות על ClubGG Academy." };

const FAQS = [
  { q: "מה זה ClubGG Academy?", a: "בית ספר דיגיטלי לפוקר. קורסים מובנים, מאמנים מקצועיים, מסלולי למידה וקהילה — לכל הרמות." },
  { q: "יש אפשרות חינמית?", a: "כן. החשבון החינמי נותן גישה לקורס היסודות, פורומים קהילתיים ומשאבים חינמיים." },
  { q: "מה כולל פרימיום?", a: "גישה לכל הקורסים, מסלולי למידה, Q&A עם מאמנים, כלים מתקדמים, משאבים להורדה ותמיכה מועדפת." },
  { q: "אפשר לבטל?", a: "כן, ביטול בכל עת. ראו מדיניות החזרים." },
  { q: "מי המאמנים?", a: "שחקנים מקצועיים, מחנכים מנוסים ומומחים — כל אחד עם רקורד אמיתי." },
  { q: "זה אתר הימורים?", a: "לא. ClubGG Academy היא פלטפורמת חינוך בלבד. לא מפעילים הימורים ולא מקבלים הפקדות." },
  { q: "צריך להיות בגיל מסוים?", a: "כן, 21+." },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs font-bold text-red-400 tracking-wider mb-1">FAQ</p>
      <h1 className="text-3xl font-black text-t-50 mb-8">שאלות נפוצות</h1>
      <div className="space-y-3">
        {FAQS.map(f => (
          <details key={f.q} className="group rounded-xl border border-line bg-bg-card overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-bg-elevated transition-colors list-none">
              <span className="text-sm font-bold text-t-50">{f.q}</span>
              <span className="text-t-500 group-open:rotate-45 transition-transform text-xl leading-none mr-1">+</span>
            </summary>
            <div className="px-5 pb-5"><p className="text-sm text-t-400 leading-relaxed">{f.a}</p></div>
          </details>
        ))}
      </div>
    </div>
  );
}
