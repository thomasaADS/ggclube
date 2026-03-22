import { CheckCircle, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "מחירים", description: "מחירי ClubGG Academy." };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-red-400 tracking-wider mb-1">PRICING</p>
        <h1 className="text-3xl font-black text-t-50">מחירים פשוטים ושקופים</h1>
        <p className="mt-2 text-t-400">התחילו חינם. שדרגו כשמוכנים לגישה מלאה.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-8 rounded-xl bg-bg-card border border-line">
          <span className="text-xs font-bold text-t-500 uppercase">חינם</span>
          <p className="text-3xl font-black text-t-50 mt-1">$0</p>
          <p className="text-xs text-t-500 mt-1 mb-6">לתמיד</p>
          <ul className="space-y-2.5 mb-8">
            {["קורס יסודות", "פורומים קהילתיים", "ניוזלטר שבועי", "ספריית משאבים חינמיים"].map(i => (
              <li key={i} className="flex items-center gap-2 text-sm text-t-300"><CheckCircle className="w-4 h-4 text-ok-500" />{i}</li>
            ))}
          </ul>
          <a href="/join"><button className="w-full h-11 rounded-xl border border-line text-t-200 font-bold text-sm hover:bg-bg-elevated transition-colors cursor-pointer">הצטרפו חינם</button></a>
        </div>
        <div className="p-8 rounded-xl bg-bg-card border-2 border-red-500 shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-br-lg">גישה מלאה</div>
          <span className="text-xs font-bold text-red-400 uppercase">פרימיום</span>
          <p className="text-3xl font-black text-t-50 mt-1">$29<span className="text-base text-t-500">/חודש</span></p>
          <p className="text-xs text-t-500 mt-1 mb-6">ביטול בכל עת</p>
          <ul className="space-y-2.5 mb-8">
            {["כל הקורסים ומסלולי הלמידה", "קהילה פרימיום", "Q&A עם מאמנים", "כלים מתקדמים", "תמיכה מועדפת", "משאבים להורדה"].map(i => (
              <li key={i} className="flex items-center gap-2 text-sm text-t-300"><CheckCircle className="w-4 h-4 text-ok-500" />{i}</li>
            ))}
          </ul>
          <a href="/join"><button className="w-full h-11 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors cursor-pointer inline-flex items-center justify-center gap-2">התחילו פרימיום <ArrowLeft className="w-4 h-4" /></button></a>
        </div>
      </div>
      <p className="text-center mt-6 text-xs text-t-500">ראו <a href="/legal/refund-policy" className="hover:underline text-red-400">מדיניות החזרים</a>. 21+ בלבד.</p>
    </div>
  );
}
