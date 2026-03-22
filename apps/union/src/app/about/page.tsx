import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { Shield, Eye, Users, Scale, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GGClube — Our Mission & Values",
  description: "Learn about GGClube — the premium poker culture ecosystem built on trust, education, editorial authority, and verified community standards.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>About Us</SectionLabel>
        <SectionTitle as="h1">
          A New Standard for Poker Culture
        </SectionTitle>
        <SectionDescription>
          GGClube was created to solve a fundamental problem in poker: the absence of a trusted, professional infrastructure that connects agents, players, educators, and media under one verified network. We are not a gambling platform. We are a trust infrastructure.
        </SectionDescription>
      </Section>

      <Section className="border-t border-graphite-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Trust First", desc: "Every agent and partner goes through a rigorous verification process. No shortcuts." },
            { icon: Eye, title: "Transparency", desc: "Our verification criteria, review processes, and community standards are public and documented." },
            { icon: Users, title: "Community", desc: "We serve agents, players, educators, and media professionals across the global poker ecosystem." },
            { icon: Scale, title: "Fairness", desc: "Clear moderation rules, evidence-based reviews, and a right to appeal for every participant." },
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
          <h2 className="text-3xl font-bold text-ivory-50">Join the GGClube Network</h2>
          <p className="mt-4 text-platinum-400 max-w-lg mx-auto">Begin your application today and become part of the most trusted poker culture ecosystem.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/apply/agent"><Button variant="primary" size="lg">Apply as Agent <ArrowRight className="w-4 h-4" /></Button></a>
            <a href="/apply/player"><Button variant="outline" size="lg">Join as Player</Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
