import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Weekly Poker Intelligence",
  description: "Subscribe to the GGClube News newsletter for weekly tournament coverage, rankings, strategy insights, and verified community updates.",
};

export default function NewsletterPage() {
  return (
    <Section className="pt-32 min-h-[70vh]">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Newsletter</SectionLabel>
        <SectionTitle as="h1">The GGClube Weekly Brief</SectionTitle>
        <SectionDescription className="mx-auto">
          Tournament coverage, rankings updates, strategy insights, and verified community news — delivered every Monday.
        </SectionDescription>

        <Card className="mt-12">
          <CardContent className="p-8">
            <div className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full h-11 px-4 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
              <input type="email" placeholder="Your email" className="w-full h-11 px-4 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
              <Button variant="primary" size="lg" className="w-full">Subscribe to Newsletter</Button>
            </div>
            <p className="mt-4 text-xs text-platinum-500 text-center">No spam. Unsubscribe anytime. 18+ only.</p>
          </CardContent>
        </Card>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {["Tournament coverage", "Rankings updates", "Strategy insights"].map((item) => (
            <div key={item} className="flex items-center gap-2 justify-center text-sm text-platinum-300">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
