import { MessageSquare, BookOpen, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "קהילה", description: "הקהילה של ClubGG Academy." };

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-xs font-bold text-red-400 tracking-wider mb-1">COMMUNITY</p>
      <h1 className="text-3xl font-black text-t-50 mb-2">קהילה של שחקנים רציניים</h1>
      <p className="text-t-400 mb-10">לא סתם פורום. מקום שבו שחקנים לומדים ביחד, משתפרים ביחד, ומחזיקים אחד את השני.</p>
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {[
          { icon: MessageSquare, title: "דיונים", desc: "שיחות אסטרטגיה, ניתוח ידיים ותיאוריית פוקר." },
          { icon: BookOpen, title: "ביקורת ידיים", desc: "שלחו ידיים לפידבק מהקהילה ומהמאמנים." },
          { icon: Users, title: "קבוצות למידה", desc: "מצאו שותפי למידה ברמה שלכם. סשנים קבועים." },
          { icon: Calendar, title: "אירועים", desc: "טורנירים קהילתיים, Q&A עם מאמנים, סדנאות." },
        ].map(x => (
          <div key={x.title} className="p-5 rounded-xl bg-bg-card border border-line">
            <x.icon className="w-6 h-6 text-red-400 mb-3" />
            <h3 className="text-base font-bold text-t-50 mb-1">{x.title}</h3>
            <p className="text-sm text-t-400">{x.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-xl bg-bg-elevated border border-line">
        <h3 className="text-lg font-bold text-t-50 mb-3">כללי התנהגות</h3>
        <ul className="space-y-2">
          {["כבוד ובונות בכל אינטראקציה", "ללא ספאם או קידום עצמי ללא אישור", "ללא שיתוף תוכן פיראטי", "עקרונות משחק אחראי", "דיווח על הפרות לצוות"].map(r => (
            <li key={r} className="flex items-start gap-2 text-sm text-t-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />{r}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 text-center">
        <a href="/join"><button className="h-11 px-8 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors cursor-pointer">הצטרפו לקהילה — חינם</button></a>
      </div>
    </div>
  );
}
