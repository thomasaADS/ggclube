import { Clock, Play } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קורסים — כל הקורסים",
  description: "כל קורסי הפוקר של ClubGG Academy — מתחילים עד מתקדמים.",
};

const COURSES = [
  { title: "יסודות הפוקר — הקורס המלא", level: "מתחילים", lessons: 24, hours: "8+", desc: "פוזיציה, סיכויי פוט, קריאת ידיים ומסגרות החלטה.", img: "/courses/cards1.jpg" },
  { title: "אסטרטגיית טורנירים — Masterclass", level: "בינוני", lessons: 36, hours: "12+", desc: "ICM, דינמיקת באבל, התאמות שולחן גמר.", img: "/courses/chips1.jpg" },
  { title: "ניצול בקאש — Live & Online", level: "מתקדם", lessons: 18, hours: "6+", desc: "זיהוי וניצול נטיות, סייזינג אופטימלי.", img: "/courses/table1.jpg" },
  { title: "המשחק המנטלי", level: "כל הרמות", lessons: 12, hours: "4+", desc: "ניהול טילט, סובלנות לוריאנס, ריטואלי פוקוס.", img: "/courses/mind1.jpg" },
  { title: "שליטה ב-Preflop", level: "מתחילים", lessons: 16, hours: "5+", desc: "טבלאות ריינג׳ להורדה. ממיקרו ועד מיד.", img: "/courses/cards2.jpg" },
  { title: "ניהול באנקרול", level: "כל הרמות", lessons: 8, hours: "3+", desc: "כמה באיים, מתי לרדת, מתי לעלות.", img: "/courses/chips2.jpg" },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-xs font-bold text-red-400 tracking-wider mb-1">COURSES</p>
      <h1 className="text-3xl font-black text-t-50 mb-2">כל הקורסים</h1>
      <p className="text-t-400 mb-10">קורסים מובנים לכל רמה. וידאו, תרגילים וכלים.</p>

      <div className="flex gap-2 mb-8">
        {["הכל", "מתחילים", "בינוני", "מתקדם", "כל הרמות"].map((f, i) => (
          <button key={f} className={`h-9 px-4 rounded-lg text-sm font-bold transition-colors cursor-pointer ${i === 0 ? "bg-red-500 text-white" : "bg-bg-card border border-line text-t-300 hover:bg-bg-elevated"}`}>{f}</button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COURSES.map((c) => (
          <div key={c.title} className="rounded-xl bg-bg-card border border-line overflow-hidden hover:shadow-card transition-all group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">{c.level}</span>
                <span className="text-[10px] text-t-500">{c.lessons} שיעורים • {c.hours} שעות</span>
              </div>
              <h3 className="text-base font-bold text-t-50 group-hover:text-red-400 transition-colors">{c.title}</h3>
              <p className="text-sm text-t-400 mt-1.5">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
