import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמנים — הצוות המקצועי",
  description: "צוות המאמנים של ClubGG Academy.",
};

const COACHES = [
  { name: "מאמן — אסטרטגיית MTT", specialty: "טורנירים", bio: "15+ שנות ניסיון בטורנירים, ₪7M+ ברווחים. מתמחה בשחק עמוק ואסטרטגיית שולחן גמר.", img: "/coaches/coach-1.jpg" },
  { name: "מאמן — קאש גיימס", specialty: "קאש", bio: "שחקן היי-סטייקס מקצועי ומחבר 3 ספרי אסטרטגיה. מומחה לשחק exploit-based.", img: "/coaches/coach-2.jpg" },
  { name: "מאמן — משחק מנטלי", specialty: "פסיכולוגיה", bio: "פסיכולוג ספורט המתמחה בביצועי פוקר. עבד עם עשרות שחקנים מקצועיים.", img: "/coaches/coach-3.jpg" },
  { name: "מאמן — יסודות", specialty: "מתחילים", bio: "מחנך מסור עם 10,000+ תלמידים. הופך מושגים מורכבים לפשוטים ומובנים.", img: "/coaches/coach-4.jpg" },
  { name: "מאמן — PLO", specialty: "אומהה", bio: "מומחה PLO4 ו-PLO5. שחקן אונליין מוביל עם ניסיון רב במשחקי מיקסד.", img: "/coaches/coach-5.jpg" },
  { name: "מאמן — Short Stack", specialty: "MTT מתקדם", bio: "מומחה Push/Fold ו-ICM. מלמד שחקנים למקסם את הערך בסיטואציות שורט.", img: "/coaches/coach-6.jpg" },
];

export default function CoachesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <span className="text-[10px] font-bold text-red-400 tracking-wider">COACHES</span>
      <h1 className="text-3xl font-black text-t-50 mb-2">צוות המאמנים</h1>
      <p className="text-t-400 mb-10">מאמנים עם רקורד אמיתי — כשחקנים, כמחנכים, וכמומחים.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COACHES.map((c) => (
          <div key={c.name} className="rounded-xl bg-bg-card border border-line overflow-hidden hover:shadow-card transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">{c.specialty}</span>
              <h3 className="text-lg font-bold text-t-50 mt-2">{c.name}</h3>
              <p className="text-sm text-t-400 mt-1.5 leading-relaxed">{c.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
