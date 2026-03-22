import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "דירוגים — טופ שחקני הפוקר בעולם 2025",
  description: "דירוג שחקני הפוקר המובילים בעולם לפי רווחי טורנירים חיים ב-2025.",
};

const RANKINGS = [
  { rank: 1, name: "ג׳סי לוניס", country: "ארה\"ב", earnings: "$13,300,000", highlights: "56 קאשים, 35 שולחנות גמר, 9 זכיות, Triton מונטנגרו" },
  { rank: 2, name: "קייהאן מוקרי רושנפקר", country: "נורווגיה", earnings: "$13,200,000", highlights: "10 קאשים בלבד, Triton $250K ($7.7M)" },
  { rank: 3, name: "סטיבן צ׳ידוויק", country: "אנגליה", earnings: "$12,600,000", highlights: "Triton Short Deck $200K ($3.5M), רב-תחומי" },
  { rank: 4, name: "סת׳ דייויס", country: "ארה\"ב", earnings: "$12,400,000", highlights: "עקביות יוצאת דופן בהיי רולרים" },
  { rank: 5, name: "בנג׳מין טולרן", country: "ארה\"ב", earnings: "$12,000,000", highlights: "שחקן סופר היי רולר מוביל" },
  { rank: 6, name: "אלכסיי פונקובס", country: "לטביה", earnings: "$11,900,000", highlights: "חזרה מרשימה לקדמת הבמה" },
  { rank: 7, name: "אלכס פוקסן", country: "ארה\"ב", earnings: "$11,300,000", highlights: "GPI #1 לשעבר, עקביות בהיי רולרים" },
  { rank: 8, name: "ג׳ייסון קון", country: "ארה\"ב", earnings: "$11,100,000", highlights: "אגדת Triton, שחקן מוביל בסדרה" },
  { rank: 9, name: "ארתור מרטירוסיאן", country: "רוסיה", earnings: "$11,000,000", highlights: "כוכב עולה בסצנת ההיי סטייקס" },
  { rank: 10, name: "פונאט פונסרי", country: "תאילנד", earnings: "$10,900,000", highlights: "שחקן השנה GPI 2025, 61 קאשים, 7 זכיות" },
];

export default function RankingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <p className="text-[10px] font-bold text-accent-500 tracking-wider mb-1">RANKINGS</p>
        <h1 className="text-3xl font-black text-ink-900" style={{ fontFamily: "'Noto Serif Hebrew', Georgia, serif" }}>טופ 10 רווחי טורנירים 2025</h1>
        <p className="mt-2 text-ink-500">מבוסס על רווחים בטורנירים חיים. מקור: Hendon Mob, PokerNews.</p>
      </div>
      <div className="rounded-2xl bg-card border border-paper-300 overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_1fr_120px] px-6 py-3 bg-ink-900 text-[11px] text-paper-300 font-bold">
          <span>#</span>
          <span>שחקן</span>
          <span>הישגים בולטים</span>
          <span className="text-left">רווחים</span>
        </div>
        {RANKINGS.map((p, i) => (
          <div key={p.rank} className={`grid grid-cols-[50px_1fr_1fr_120px] px-6 py-4 items-center ${i % 2 === 0 ? "bg-card" : "bg-paper-100"} ${i < RANKINGS.length - 1 ? "border-b border-paper-200" : ""}`}>
            <span className="text-lg font-black text-accent-500">{p.rank}</span>
            <div>
              <p className="text-sm font-bold text-ink-900">{p.name}</p>
              <p className="text-[11px] text-ink-400">{p.country}</p>
            </div>
            <p className="text-xs text-ink-500 leading-relaxed">{p.highlights}</p>
            <span className="text-sm font-black text-ink-900 font-mono text-left">{p.earnings}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
