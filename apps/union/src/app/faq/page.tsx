import { Section, SectionLabel, SectionTitle, SectionDescription } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שאלות נפוצות",
  description: "תשובות לשאלות נפוצות על GGClube Union — מועמדויות, אימות, כללי קהילה ומערכת GGClube.",
};

const FAQS = [
  { q: "מה זה GGClube?", a: "GGClube היא מערכת תרבות פוקר פרימיום המורכבת משלוש פלטפורמות: Union (אמון ומועמדויות), News (עריכה ודירוגים) ו-Academy (חינוך וקהילה)." },
  { q: "האם GGClube הוא אתר הימורים?", a: "לא. GGClube היא פלטפורמת תקשורת, חינוך וקהילה. אנחנו לא מפעילים שירותי הימורים, הימורים או שולחנות פוקר בכסף אמיתי." },
  { q: "איך אני הופך לסוכן מאומת?", a: "הגישו מועמדות דרך טופס ההגשה לסוכנים. תצטרכו לספק תעודה מזהה, הוכחת פעילות והמלצות קהילתיות." },
  { q: "האם יש עלות להצטרפות?", a: "ההצטרפות כשחקן היא חינמית. אימות סוכנים הוא חינמי. GGClube Academy מציעה תכנים חינוכיים חינמיים ופרימיום." },
  { q: "אילו תחומי שיפוט אתם תומכים?", a: "GGClube מקבלת משתמשים מכל העולם. עם זאת, כל המשתמשים חייבים לציית לחוקים ולתקנות של תחום השיפוט שלהם." },
  { q: "איך מדווחים על חשש?", a: "השתמשו במרכז התמיכה שלנו או באפשרות 'דיווח על חשש' הזמינה בדפי פרופיל ובספרייה." },
  { q: "כמה זמן לוקח האימות?", a: "בדרך כלל 5–10 ימי עסקים. בקשות לתיעוד נוסף עשויות להאריך את לוח הזמנים." },
  { q: "האם אפשר לערער על שינוי סטטוס?", a: "כן. ניתן לערער על כל שינוי סטטוס דרך מרכז התמיכה שלנו. ערעורים נבדקים על ידי צוות מתינות נפרד." },
];

export default function FAQPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>שאלות נפוצות</SectionLabel>
      <SectionTitle as="h1">שאלות נפוצות</SectionTitle>
      <SectionDescription>כל מה שצריך לדעת על GGClube Union.</SectionDescription>

      <div className="mt-12 max-w-3xl space-y-4">
        {FAQS.map((faq) => (
          <div key={faq.q} className="p-5 rounded-xl border border-graphite-700/50 bg-obsidian-800/20">
            <h3 className="font-medium text-ivory-100 mb-2">{faq.q}</h3>
            <p className="text-sm text-platinum-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
