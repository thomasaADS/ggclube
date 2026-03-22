import { MapPin, Calendar, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טורנירים — לוח טורנירי פוקר 2026",
  description: "לוח טורנירי הפוקר המלא ל-2026. WSOP, EPT, WPT, Triton ועוד — תאריכים, מיקומים ופרטים.",
};

const TOURNAMENTS = [
  { name: "WSOP Europe 2026", location: "פראג, צ׳כיה", dates: "31 מרץ – 12 אפריל 2026", events: 15, buyIn: "€10M GTD Main Event", status: "בקרוב" },
  { name: "EPT מונטה קרלו", location: "מונקו", dates: "30 אפריל – 10 מאי 2026", events: 40, buyIn: "€5,300 Main Event", status: "בקרוב" },
  { name: "Triton מונטנגרו", location: "מונטנגרו", dates: "13 – 28 מאי 2026", events: 12, buyIn: "High Roller Series", status: "בקרוב" },
  { name: "WSOP 2026 — סדרה ראשית", location: "לאס וגאס, ארה\"ב", dates: "26 מאי – 15 יולי 2026", events: 100, buyIn: "$10,000 Main Event", status: "בקרוב" },
  { name: "WPT Rolling Thunder", location: "לינקולן, קליפורניה", dates: "29 מרץ 2026", events: 1, buyIn: "$3,500", status: "בקרוב" },
  { name: "APT טייפה", location: "טייפה, טייוואן", dates: "22 אפריל – 3 מאי 2026", events: 20, buyIn: "משתנה", status: "בקרוב" },
];

export default function TournamentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">TOURNAMENTS</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Noto Serif Hebrew', Georgia, serif" }}>טורנירי פוקר 2026</h1>
        <p className="mt-2 text-ink-500">לוח הטורנירים המלא — WSOP, EPT, WPT, Triton ועוד.</p>
      </div>
      <div className="space-y-4">
        {TOURNAMENTS.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-card border border-paper-300 hover:shadow-elevated transition-all">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-lg font-black text-ink-900">{t.name}</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-ink-500">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{t.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{t.dates}</span>
                </div>
                <p className="text-sm text-ink-400 mt-1">{t.events} אירועים • {t.buyIn}</p>
              </div>
              <span className="text-[11px] font-bold text-card bg-accent-500 px-3 py-1 rounded-full">{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
