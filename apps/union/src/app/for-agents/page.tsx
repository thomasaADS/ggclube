import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent, Badge } from "@ggclube/ui";
import { CheckCircle, ArrowLeft, Shield, TrendingUp, Users, Award, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "לסוכנים — הצטרפו לרשת הסוכנים המאומתים",
  description: "הגישו מועמדות להיות סוכן מאומת של GGClube. בנו אמינות, הגדילו את הרשת שלכם ופעלו בתוך מערכת אמינה עם סטנדרטים מקצועיים.",
};

export default function ForAgentsPage() {
  return (
    <>
      <Section className="pt-32">
        <Badge variant="verified" className="mb-6 bg-club-red-900/40 text-club-red-400 border-club-red-800/40">תוכנית סוכנים</Badge>
        <SectionTitle as="h1">
          הגדילו את המוניטין שלכם.<br />הצטרפו לרשת המאומתת.
        </SectionTitle>
        <SectionDescription>
          GGClube Union היא מערכת הפוקר היחידה שבה סוכנים נבדקים כראוי, מאומתים באופן פומבי ומחויבים לסטנדרט שקוף. אם אתם רציניים לגבי המוניטין שלכם, כאן זה מתחיל.
        </SectionDescription>
        <div className="mt-8">
          <a href="/apply/agent">
            <Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500">התחילו את ההגשה <ArrowLeft className="w-5 h-5" /></Button>
          </a>
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-10">מה תקבלו</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "תג מאומת", desc: "סטטוס אימות פומבי שמוכיח שעברתם בדיקה ואושרתם על ידי צוות GGClube." },
            { icon: TrendingUp, title: "צמיחת רשת", desc: "חשיפה לשחקנים ושותפים בכל מערכת GGClube — News, Academy ו-Union." },
            { icon: Users, title: "אמון קהילתי", desc: "חברות ברשת מקצועית עם סטנדרטים ברורים, מתינות ותמיכה קהילתית." },
            { icon: Award, title: "הטבות שותפות", desc: "גישה לשותפויות, אירועים והזדמנויות בלעדיות הזמינות רק לסוכנים מאומתים." },
            { icon: HelpCircle, title: "תמיכה ייעודית", desc: "ערוץ תמיכה ישיר לשאלות אימות, עזרה בתיעוד וניהול חשבון." },
            { icon: CheckCircle, title: "מסגרת ציות", desc: "הנחיות וסטנדרטים ברורים כדי שתמיד תדעו מה נדרש ואיך לשמור על הסטטוס שלכם." },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <item.icon className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="font-semibold text-ivory-50 mb-2">{item.title}</h3>
                <p className="text-sm text-platinum-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800 bg-obsidian-900/30">
        <h2 className="text-2xl font-bold text-ivory-50 mb-10">תהליך הבדיקה</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "הגשה", desc: "הגישו את המועמדות עם פרטי פרופיל, ניסיון והמלצות." },
            { step: "02", title: "בדיקה", desc: "הצוות שלנו בודק את התיעוד, מאמת המלצות ובודק ציות." },
            { step: "03", title: "אישור", desc: "לאחר האישור, תקבלו את סטטוס המאומת וגישה לרשת." },
            { step: "04", title: "שוטף", desc: "שמרו על הסטטוס שלכם דרך ציות מתמשך וסטנדרטים קהילתיים." },
          ].map((s) => (
            <div key={s.step} className="p-6 rounded-xl border border-graphite-700/50 bg-obsidian-800/30">
              <span className="text-3xl font-bold text-emerald-800">{s.step}</span>
              <h4 className="text-base font-semibold text-ivory-50 mt-3 mb-2">{s.title}</h4>
              <p className="text-sm text-platinum-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">שאלות נפוצות</h2>
        <div className="max-w-3xl space-y-6">
          {[
            { q: "כמה זמן לוקח תהליך האימות?", a: "בדרך כלל 5–10 ימי עסקים. ייתכן שנבקש תיעוד נוסף שעלול להאריך את לוח הזמנים." },
            { q: "אילו מסמכים נדרשים?", a: "תעודה מזהה ממשלתית, הוכחת פעילות, לפחות שתי המלצות קהילתיות והסכמה לסטנדרטים הקהילתיים שלנו." },
            { q: "האם הסטטוס שלי יכול להישלל?", a: "כן. אם הסטנדרטים הקהילתיים מופרים או שחששות מאומתים, הסטטוס שלכם עשוי להשתנות ל'בבדיקה' או 'הוסר בהמתנה לבדיקה'." },
            { q: "האם יש עלות להגשה?", a: "לא. תהליך ההגשה והאימות הוא חינמי." },
            { q: "אילו תחומי שיפוט נתמכים?", a: "אנחנו מקבלים מועמדויות מכל העולם. עם זאת, סוכנים חייבים לציית לחוקים ולתקנות של תחום השיפוט שבו הם פועלים." },
          ].map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl border border-graphite-700/50 bg-obsidian-800/20">
              <h4 className="font-medium text-ivory-100 mb-2">{faq.q}</h4>
              <p className="text-sm text-platinum-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-graphite-800 bg-club-red-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-ivory-50">מוכנים להיות מאומתים?</h2>
          <p className="mt-4 text-platinum-400">התחילו את הגשת המועמדות כסוכן היום.</p>
          <div className="mt-6">
            <a href="/apply/agent"><Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500">התחלת הגשה <ArrowLeft className="w-5 h-5" /></Button></a>
          </div>
          <p className="mt-4 text-xs text-platinum-500">בהגשת מועמדות, אתם מסכימים ל<a href="/legal/terms" className="underline hover:text-platinum-300">תנאי השימוש</a> ול<a href="/community-standards" className="underline hover:text-platinum-300">סטנדרטים הקהילתיים</a>.</p>
        </div>
      </section>
    </>
  );
}
