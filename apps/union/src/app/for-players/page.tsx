import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent, Badge } from "@ggclube/ui";
import { CheckCircle, ArrowRight, BookOpen, Newspaper, Shield, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Players — Join the GGClube Community",
  description: "Join GGClube as a player and access verified agents, elite education, tournament coverage, and a trusted global poker community.",
};

export default function ForPlayersPage() {
  return (
    <>
      <Section className="pt-32">
        <Badge variant="new" className="mb-6">Player Community</Badge>
        <SectionTitle as="h1">
          Play Smarter.<br />Trust Your Network.
        </SectionTitle>
        <SectionDescription>
          GGClube gives serious players what they have always needed: verified agent connections, world-class education, reliable tournament intelligence, and a community that holds itself to a higher standard.
        </SectionDescription>
        <div className="mt-8">
          <a href="/apply/player">
            <Button variant="primary" size="xl">Join as Player <ArrowRight className="w-5 h-5" /></Button>
          </a>
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Verified Agents", desc: "Browse a directory of agents who have been vetted and approved by the GGClube team." },
            { icon: BookOpen, title: "Elite Education", desc: "Access courses and coaching from GGClube Academy — from beginner fundamentals to advanced strategy." },
            { icon: Newspaper, title: "Tournament Intel", desc: "Stay informed with daily coverage, rankings, and analysis from GGClube News." },
            { icon: Users, title: "Trusted Community", desc: "Join a network of players and professionals who share a commitment to trust and fair play." },
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
          <h2 className="text-3xl font-bold text-ivory-50">Start Your Journey</h2>
          <p className="mt-4 text-platinum-400 max-w-lg mx-auto">Join the GGClube community and get access to the full ecosystem.</p>
          <div className="mt-8">
            <a href="/apply/player"><Button variant="primary" size="xl">Join as Player <ArrowRight className="w-5 h-5" /></Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
