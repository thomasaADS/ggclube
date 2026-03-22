import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Badge } from "@ggclube/ui";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך האימות עובד — סטנדרטים של אמון GGClube",
  description: "למדו איך GGClube מאמתת סוכנים — דרישות התיעוד, קריטריוני הבדיקה, הגדרות הסטטוסים ותהליך המנהלת מוסברים בשקיפות.",
};

export default function VerificationPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>אמון ואימות</SectionLabel>
        <SectionTitle as="h1">איך האימות עובד</SectionTitle>
        <SectionDescription>
          שקיפות היא הליבה של מודל האמון שלנו. כאן מוסבר בדיוק איך תהליך האימות שלנו עובד — הקריטריונים, הסטטוסים ומה קורה כשמועלים חששות.
        </SectionDescription>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">סטטוסי אימות</h2>
        <div className="space-y-4 max-w-3xl">
          {[
            { badge: "verified" as const, title: "מאומת על ידי הצוות שלנו", desc: "כל התיעוד הנדרש הוגש ונבדק. הסוכן עבר בדיקת המלצות, בדיקת ציות והסכים לסטנדרטים הקהילתיים." },
            { badge: "unverified" as const, title: "פרופיל לא מאומת", desc: "פרופיל שעדיין לא השלים את תהליך האימות או לא הגיש את התיעוד הנדרש." },
            { badge: "under-review" as const, title: "בבדיקה", desc: "פרופיל קיים שבו מידע חדש, דיווח קהילתי או בדיקת ציות דורשים בדיקה נוספת על ידי הצוות שלנו." },
            { badge: "concern" as const, title: "חששות שדווחו", desc: "חששות שהוגשו על ידי הקהילה נרשמו. הצוות שלנו חוקר. לא נקבעה קביעה סופית." },
            { badge: "paused" as const, title: "רישום מושהה / הוסר בהמתנה לבדיקה", desc: "הפרופיל הושעה זמנית בזמן שמתבצעת בדיקה. זהו אמצעי הגנה, לא קביעה סופית." },
          ].map((s) => (
            <div key={s.title} className="flex items-start gap-4 p-5 rounded-xl border border-graphite-700/50 bg-obsidian-800/30">
              <Badge variant={s.badge} className="mt-0.5 shrink-0">{s.badge.replace("-", " ")}</Badge>
              <div>
                <h4 className="font-medium text-ivory-100 mb-1">{s.title}</h4>
                <p className="text-sm text-platinum-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800 bg-obsidian-900/30">
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">תיעוד נדרש</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {[
            "תעודה מזהה ממשלתית",
            "הוכחת פעילות בתעשיית הפוקר",
            "לפחות שתי המלצות קהילתיות",
            "הסכמה לסטנדרטים קהילתיים ותנאי שימוש",
            "גילוי תחום שיפוט",
            "אופציונלי: פרופילי מדיה חברתית, תיק עבודות, המלצות",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-obsidian-800/40 border border-graphite-700/30">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <p className="text-sm text-platinum-300">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-6">דיווח על חשש</h2>
        <p className="text-platinum-400 max-w-2xl mb-6">
          אם יש לכם חשש לגבי סוכן או פרופיל רשום כלשהו, תוכלו להגיש דיווח. כל הדיווחים נבדקים בסודיות. אנחנו לא מפרסמים האשמות — אנחנו חוקרים ומעדכנים סטטוסים על בסיס ראיות.
        </p>
        <a href="/support">
          <Button variant="outline" size="lg">דיווח על חשש <ArrowLeft className="w-4 h-4" /></Button>
        </a>
      </Section>
    </>
  );
}
