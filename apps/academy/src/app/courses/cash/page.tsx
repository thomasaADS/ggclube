import { Clock, Play, CheckCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "קאש גיימס — משחק עמוק", description: "קורס מקיף לשליטה במשחקי קאש." };

const LESSONS = [
  { title: "הבדלים בין קאש לטורנירים", duration: "18 דק׳", free: true },
  { title: "בחירת שולחן — Table Selection", duration: "20 דק׳", free: true },
  { title: "Deep Stack — משחק עם סטאק עמוק", duration: "28 דק׳", free: false },
  { title: "3-Bet ו-4-Bet — מלחמת הריייזים", duration: "25 דק׳", free: false },
  { title: "Multi-Way Pots — כשיש הרבה שחקנים בפוט", duration: "22 דק׳", free: false },
  { title: "Thin Value — לסחוט ערך מקסימלי", duration: "24 דק׳", free: false },
  { title: "Exploitative Play — התאמה ליריב", duration: "30 דק׳", free: false },
];

export default function CashCoursePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <a href="/courses" className="text-xs text-red-400 font-bold hover:underline mb-6 inline-block">← חזרה לקורסים</a>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">בינוני</span>
          <h1 className="text-3xl font-black text-t-50 mt-3 mb-3">קאש גיימס — משחק עמוק</h1>
          <p className="text-t-300 leading-relaxed">קאש גיימס דורשים גישה שונה לגמרי מטורנירים. בקורס הזה תלמדו Deep Stack play, ניצול חולשות של יריבים, Thin Value ואסטרטגיות מתקדמות למשחק יומיומי רווחי.</p>

          <div className="flex gap-6 mt-5 text-sm text-t-400">
            <span className="flex items-center gap-1"><Play className="w-4 h-4 text-red-400" />7 שיעורים</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-red-400" />2.5+ שעות</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-red-400" />2 שיעורים חינם</span>
          </div>

          <h2 className="text-lg font-bold text-t-50 mt-10 mb-4">תכנית הלימודים</h2>
          <div className="space-y-2">
            {LESSONS.map((l, i) => (
              <div key={i} className={`flex items-center justify-between p-3.5 rounded-lg border ${l.free ? "border-red-500/20 bg-red-500/5" : "border-line bg-bg-card"}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-t-500 w-6">{String(i+1).padStart(2,"0")}</span>
                  <span className="text-sm text-t-200">{l.title}</span>
                  {l.free && <span className="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">חינם</span>}
                </div>
                <span className="text-xs text-t-500">{l.duration}</span>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold text-t-50 mt-10 mb-4">מה תלמדו</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {["לבחור שולחן רווחי בצורה חכמה", "Deep Stack play — ניצול סטאק עמוק", "3-Bet ו-4-Bet lines מתקדמים", "לסחוט Thin Value מקסימלי", "לזהות חולשות של יריבים ולנצל אותן", "Multi-Way — איך לנווט פוטים מרובי שחקנים"].map(x => (
              <li key={x} className="flex items-start gap-2 text-sm text-t-300"><CheckCircle className="w-4 h-4 text-ok-500 shrink-0 mt-0.5" />{x}</li>
            ))}
          </ul>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 p-6 rounded-xl bg-bg-card border border-line">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img src="/courses/table1.jpg" alt="קאש גיימס" className="w-full h-full object-cover" />
            </div>
            <p className="text-2xl font-black text-t-50 mb-1">₪99<span className="text-sm text-t-400 font-normal">/חודש</span></p>
            <p className="text-sm text-t-400 mb-4">2 שיעורים ראשונים חינם. גישה מלאה עם מנוי פרימיום.</p>
            <a href="/join"><button className="w-full h-11 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors cursor-pointer mb-2">התחילו חינם</button></a>
            <a href="/pricing"><button className="w-full h-11 rounded-xl border border-line text-t-200 font-bold text-sm hover:bg-bg-elevated transition-colors cursor-pointer">ראו מחירים</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
