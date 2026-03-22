import { User, Search, MessageCircle, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "סוכנים מאומתים — מאגר הסוכנים של ClubGG",
  description: "מאגר הסוכנים המאומתים של ClubGG. כל סוכן עבר תהליך אימות מקיף.",
};

const AGENTS = [
  { name: "סוכן — תל אביב", region: "תל אביב", languages: "עברית, אנגלית", status: "מאומת", since: "ינואר 2025", bio: "סוכן ותיק עם ניסיון של 3+ שנים. מתמחה בקאש ובטורנירים.", img: "/agent-bg-1.jpg" },
  { name: "סוכן — ירושלים", region: "ירושלים", languages: "עברית", status: "מאומת", since: "מרץ 2025", bio: "מומחה ל-PLO ולמשחקי מיקסד. זמין 24/7.", img: "/agent-bg-2.jpg" },
  { name: "סוכן — חיפה", region: "חיפה", languages: "עברית, רוסית", status: "מאומת", since: "מאי 2025", bio: "שירות אישי לשחקנים דוברי רוסית ועברית. כל הפורמטים.", img: "/agent-bg-3.jpg" },
  { name: "סוכן — ראשון לציון", region: "ראשון לציון", languages: "עברית, אנגלית", status: "מאומת", since: "יוני 2025", bio: "מתמחה בהכוונת שחקנים חדשים. בונוסים מיוחדים למצטרפים.", img: "/agent-bg-4.jpg" },
  { name: "סוכן — באר שבע", region: "באר שבע", languages: "עברית", status: "מאומת", since: "אוגוסט 2025", bio: "סוכן דרום הארץ. שולחנות מיקרו ומיד-סטייקס.", img: "/agent-bg-5.jpg" },
  { name: "סוכן — נתניה", region: "נתניה", languages: "עברית, צרפתית", status: "בבדיקה", since: "פברואר 2026", bio: "שירות לקהילה דוברת צרפתית. בתהליך אימות.", img: "/agent-bg-1.jpg" },
  { name: "סוכן — פתח תקווה", region: "פתח תקווה", languages: "עברית, אנגלית", status: "מאומת", since: "ספטמבר 2025", bio: "מומחה טורנירים. עזרה בהרשמה ובבחירת קלאב.", img: "/agent-bg-2.jpg" },
  { name: "סוכן — אשדוד", region: "אשדוד", languages: "עברית, צרפתית", status: "מאומת", since: "נובמבר 2025", bio: "שירות לקהילה דוברת צרפתית ועברית. ניסיון רב.", img: "/agent-bg-3.jpg" },
];

export default function VerifiedDirectoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">VERIFIED AGENTS</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>מאגר סוכנים מאומתים</h1>
        <p className="mt-2 text-ink-500">כל סוכן ברשימה עבר את תהליך האימות של ClubGG Union — בדיקת רקע, המלצות ועמידה בסטנדרטים.</p>
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
            {/* Agent header with image */}
            <div className="h-36 relative overflow-hidden">
              <img src={agent.img} alt={agent.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${agent.status === "מאומת" ? "text-fresh-600 bg-fresh-600/10 border border-fresh-600/20" : "text-accent-gold bg-accent-gold/10 border border-accent-gold/20"}`}>
                {agent.status}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{agent.name}</h3>
              <p className="text-sm text-ink-500 mt-1">{agent.bio}</p>
              <div className="mt-3 space-y-1 text-xs text-ink-400">
                <p>שפות: {agent.languages}</p>
                <p>במאגר מאז: {agent.since}</p>
              </div>

              <a href="#" className="mt-4 inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#25D366] text-white text-sm font-bold hover:bg-[#1ebe5d] transition-colors cursor-pointer">
                <MessageCircle className="w-3.5 h-3.5" />
                שלחו הודעה
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-ink-300 text-center max-w-lg mx-auto">
        סטטוס האימות משקף את השלמת תהליך הבדיקה של ClubGG Union. האימות אינו מהווה המלצה או ערבות. מספרי הוואטסאפ יעודכנו בקרוב.
      </p>
    </div>
  );
}
