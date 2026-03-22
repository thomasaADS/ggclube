import { Search, MessageCircle, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סוכנים מאומתים — ClubGG",
  description: "מאגר הסוכנים המאומתים של ClubGG.",
};

const AGENTS = [
  { name: "סוכן — תל אביב", languages: "עברית, אנגלית", status: "מאומת", since: "ינואר 2025", bio: "סוכן ותיק, 3+ שנים. קאש וטורנירים.", img: "/agents/agent-11.jpg" },
  { name: "סוכן — ירושלים", languages: "עברית", status: "מאומת", since: "מרץ 2025", bio: "מומחה PLO ומיקסד. זמין 24/7.", img: "/agents/agent-12.jpg" },
  { name: "סוכן — חיפה", languages: "עברית, רוסית", status: "מאומת", since: "מאי 2025", bio: "שירות אישי. דוברי רוסית ועברית.", img: "/agents/agent-14.jpg" },
  { name: "סוכן — ראשון לציון", languages: "עברית, אנגלית", status: "מאומת", since: "יוני 2025", bio: "הכוונת שחקנים חדשים. בונוסים.", img: "/agents/agent-15.jpg" },
  { name: "סוכן — באר שבע", languages: "עברית", status: "מאומת", since: "אוגוסט 2025", bio: "דרום הארץ. מיקרו ומיד.", img: "/agents/agent-16.jpg" },
  { name: "סוכן — נתניה", languages: "עברית, צרפתית", status: "בבדיקה", since: "פברואר 2026", bio: "קהילה דוברת צרפתית. בתהליך אימות.", img: "/agents/agent-17.jpg" },
  { name: "סוכן — פתח תקווה", languages: "עברית, אנגלית", status: "מאומת", since: "ספטמבר 2025", bio: "מומחה טורנירים. עזרה בהרשמה.", img: "/agents/agent-18.jpg" },
  { name: "סוכן — אשדוד", languages: "עברית, צרפתית", status: "מאומת", since: "נובמבר 2025", bio: "דוברי צרפתית ועברית. ניסיון רב.", img: "/agents/agent-19.jpg" },
];

export default function VerifiedDirectoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">VERIFIED AGENTS</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>מאגר סוכנים מאומתים</h1>
        <p className="mt-2 text-ink-500">כל סוכן ברשימה עבר תהליך אימות — בדיקת רקע, המלצות ועמידה בסטנדרטים.</p>
      </div>

      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
          <input type="search" placeholder="חיפוש לפי עיר או שפה..." className="w-full h-11 pr-10 pl-4 rounded-xl border border-paper-300 bg-card text-ink-800 text-sm focus:outline-none focus:border-accent-500 transition-colors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AGENTS.map((agent) => (
          <div key={agent.name} className="rounded-xl bg-card border border-paper-300 overflow-hidden hover:shadow-elevated transition-all">
            <div className="flex items-center gap-4 p-5">
              <img src={agent.img} alt={agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-paper-200" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-ink-900">{agent.name}</h3>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${agent.status === "מאומת" ? "text-fresh-600 bg-fresh-600/10" : "text-accent-gold bg-accent-gold/10"}`}>{agent.status}</span>
                </div>
                <p className="text-sm text-ink-500 mt-0.5">{agent.bio}</p>
              </div>
            </div>
            <div className="px-5 pb-4 flex items-center justify-between">
              <div className="text-xs text-ink-400">
                <span>שפות: {agent.languages}</span>
                <span className="block">מאז {agent.since}</span>
              </div>
              <button className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebe5d] transition-colors cursor-pointer">
                <MessageCircle className="w-3.5 h-3.5" />הודעה
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-ink-300 text-center">האימות אינו המלצה או ערבות. מספרי וואטסאפ יעודכנו.</p>
    </div>
  );
}
