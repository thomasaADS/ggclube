import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { Mail, MessageSquare, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר — תמיכת GGClube",
  description: "צרו קשר עם GGClube — תמיכה, שותפויות, שאלות אימות ופניות כלליות.",
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>צור קשר</SectionLabel>
      <SectionTitle as="h1">יצירת קשר</SectionTitle>
      <SectionDescription>אנחנו כאן לעזור. בחרו את האפשרות המתאימה ביותר לצרכים שלכם.</SectionDescription>

      <div className="mt-12 grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Mail, title: "פניות כלליות", desc: "שאלות על GGClube, שותפויות או תקשורת.", href: "mailto:hello@ggclube.com" },
          { icon: MessageSquare, title: "תמיכה", desc: "עזרה בהגשה, שאלות על חשבון או בעיות טכניות.", href: "/support" },
          { icon: Shield, title: "דיווח על חשש", desc: "דווחו בסודיות על חשש לגבי סוכן או פרופיל.", href: "/support" },
        ].map((item) => (
          <a key={item.title} href={item.href}>
            <Card className="h-full hover:border-emerald-800/60 transition-all">
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-ivory-50 mb-2">{item.title}</h3>
                <p className="text-sm text-platinum-400">{item.desc}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <Card className="max-w-2xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-xl font-semibold text-ivory-50">שליחת הודעה</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">שם</label>
              <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">אימייל</label>
              <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-platinum-300 mb-1.5">נושא</label>
            <select className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors">
              <option>פנייה כללית</option>
              <option>תמיכה בהגשה</option>
              <option>שותפות</option>
              <option>דיווח על חשש</option>
              <option>אחר</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-platinum-300 mb-1.5">הודעה</label>
            <textarea rows={5} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
          </div>
          <Button variant="primary" size="lg">שליחת הודעה</Button>
        </CardContent>
      </Card>
    </Section>
  );
}
