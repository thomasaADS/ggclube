import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { Shield, Eye, Users, Scale, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות GGClube — המשימה והערכים שלנו",
  description: "למדו על GGClube — מערכת פוקר פרימיום שנבנתה על אמון, חינוך, סמכות עיתונאית וסטנדרטים קהילתיים מאומתים.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>אודות</SectionLabel>
        <SectionTitle as="h1">
          סטנדרט חדש לתרבות הפוקר
        </SectionTitle>
        <SectionDescription>
          GGClube נוצרה כדי לפתור בעיה בסיסית בפוקר: העדר תשתית אמינה ומקצועית שמחברת סוכנים, שחקנים, מחנכים ותקשורת תחת רשת מאומתת אחת. אנחנו לא פלטפורמת הימורים. אנחנו תשתית אמון.
        </SectionDescription>
      </Section>

      <Section className="border-t border-graphite-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "אמון קודם כל", desc: "כל סוכן ושותף עוברים תהליך אימות קפדני. ללא קיצורי דרך." },
            { icon: Eye, title: "שקיפות", desc: "קריטריוני האימות שלנו, תהליכי הבדיקה והסטנדרטים הקהילתיים הם פומביים ומתועדים." },
            { icon: Users, title: "קהילה", desc: "אנחנו משרתים סוכנים, שחקנים, מחנכים ואנשי תקשורת ברחבי מערכת הפוקר העולמית." },
            { icon: Scale, title: "הגינות", desc: "כללי מתינות ברורים, בדיקות מבוססות ראיות וזכות ערעור לכל משתתף." },
          ].map((v) => (
            <Card key={v.title}>
              <CardContent className="p-6">
                <v.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-ivory-50 mb-2">{v.title}</h3>
                <p className="text-sm text-platinum-400 leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <section className="border-t border-graphite-800 bg-emerald-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-ivory-50">הצטרפו לרשת GGClube</h2>
          <p className="mt-4 text-platinum-400 max-w-lg mx-auto">הגישו מועמדות היום והפכו לחלק ממערכת תרבות הפוקר האמינה ביותר.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/apply/agent"><Button variant="primary" size="lg">הגשה כסוכן <ArrowLeft className="w-4 h-4" /></Button></a>
            <a href="/apply/player"><Button variant="outline" size="lg">הצטרפות כשחקן</Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
