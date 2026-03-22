import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent, Badge } from "@ggclube/ui";
import { CheckCircle, ArrowLeft, BookOpen, Newspaper, Shield, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "לשחקנים — הצטרפו לקהילת GGClube",
  description: "הצטרפו ל-GGClube כשחקנים וקבלו גישה לסוכנים מאומתים, חינוך עילית, סיקור טורנירים וקהילת פוקר עולמית אמינה.",
};

export default function ForPlayersPage() {
  return (
    <>
      <Section className="pt-32">
        <Badge variant="new" className="mb-6">קהילת שחקנים</Badge>
        <SectionTitle as="h1">
          שחקו חכם יותר.<br />סמכו על הרשת שלכם.
        </SectionTitle>
        <SectionDescription>
          GGClube נותנת לשחקנים רציניים את מה שתמיד היה חסר להם: חיבורים לסוכנים מאומתים, חינוך ברמה עולמית, מודיעין טורנירים אמין וקהילה שמחזיקה את עצמה בסטנדרט גבוה יותר.
        </SectionDescription>
        <div className="mt-8">
          <a href="/apply/player">
            <Button variant="primary" size="xl">הצטרפות כשחקן <ArrowLeft className="w-5 h-5" /></Button>
          </a>
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "סוכנים מאומתים", desc: "עיינו בספריית סוכנים שנבדקו ואושרו על ידי צוות GGClube." },
            { icon: BookOpen, title: "חינוך עילית", desc: "גישה לקורסים ואימון מ-GGClube Academy — מיסודות למתחילים ועד אסטרטגיה מתקדמת." },
            { icon: Newspaper, title: "מודיעין טורנירים", desc: "הישארו מעודכנים עם סיקור יומי, דירוגים וניתוחים מ-GGClube News." },
            { icon: Users, title: "קהילה אמינה", desc: "הצטרפו לרשת של שחקנים ואנשי מקצוע שחולקים מחויבות לאמון ולמשחק הוגן." },
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

      <section className="border-t border-graphite-800 bg-emerald-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-ivory-50">התחילו את המסע שלכם</h2>
          <p className="mt-4 text-platinum-400 max-w-lg mx-auto">הצטרפו לקהילת GGClube וקבלו גישה למערכת המלאה.</p>
          <div className="mt-8">
            <a href="/apply/player"><Button variant="primary" size="xl">הצטרפות כשחקן <ArrowLeft className="w-5 h-5" /></Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
