import { Section, SectionLabel, SectionTitle, SectionDescription, Card, CardContent, Button, Badge } from "@ggclube/ui";
import { Users, MessageSquare, BookOpen, Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — Join the GGClube Poker Community",
  description: "Join the GGClube Academy community — discussions, hand reviews, study groups, events, and a network of serious poker players.",
};

export default function CommunityPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>Community</SectionLabel>
        <SectionTitle as="h1">A Community Built for Serious Players</SectionTitle>
        <SectionDescription>
          GGClube Academy is more than courses — it is a community of players committed to learning, improving, and supporting each other.
        </SectionDescription>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MessageSquare, title: "Discussions", desc: "Strategy conversations, hand history analysis, and poker theory discussions." },
            { icon: BookOpen, title: "Hand Reviews", desc: "Submit hands for community and coach feedback. Learn from real situations." },
            { icon: Users, title: "Study Groups", desc: "Find study partners at your level. Organize regular sessions and accountability." },
            { icon: Calendar, title: "Events", desc: "Community tournaments, Q&A sessions with coaches, and special workshops." },
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
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-ivory-50 mb-4">Code of Conduct</h2>
          <p className="text-platinum-400 mb-6">Our community is a respectful, constructive space. We expect all members to:</p>
          <ul className="space-y-2">
            {["Be respectful and constructive in all interactions", "No spam, self-promotion, or solicitation without approval", "No sharing of pirated or stolen content", "Follow responsible play principles", "Report violations to the moderation team"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-platinum-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="border-t border-graphite-800 bg-emerald-900/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-ivory-50">Join the Community</h2>
          <p className="mt-4 text-platinum-400">Free members get community access. Premium members get priority and coach interactions.</p>
          <div className="mt-8">
            <a href="/join"><Button variant="primary" size="xl">Join Free <ArrowRight className="w-5 h-5" /></Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
