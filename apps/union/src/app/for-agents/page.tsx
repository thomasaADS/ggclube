import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent, Badge } from "@ggclube/ui";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Award, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Agents — Join the Verified Agent Network",
  description: "Apply to become a verified GGClube agent. Build credibility, grow your network, and operate within a trusted ecosystem with professional standards.",
};

export default function ForAgentsPage() {
  return (
    <>
      <Section className="pt-32">
        <Badge variant="verified" className="mb-6 bg-club-red-900/40 text-club-red-400 border-club-red-800/40">Agent Program</Badge>
        <SectionTitle as="h1">
          Grow Your Reputation.<br />Join the Verified Network.
        </SectionTitle>
        <SectionDescription>
          GGClube Union is the only poker ecosystem where agents are properly vetted, publicly verified, and held to a transparent standard. If you are serious about your reputation, this is where it begins.
        </SectionDescription>
        <div className="mt-8">
          <a href="/apply/agent">
            <Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500">Start Your Application <ArrowRight className="w-5 h-5" /></Button>
          </a>
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-10">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Verified Badge", desc: "A public verification status that proves you have been reviewed and approved by the GGClube team." },
            { icon: TrendingUp, title: "Network Growth", desc: "Visibility to players and partners across the entire GGClube ecosystem — News, Academy, and Union." },
            { icon: Users, title: "Community Trust", desc: "Membership in a professional network with clear standards, moderation, and community support." },
            { icon: Award, title: "Partner Benefits", desc: "Access to exclusive partnerships, events, and opportunities available only to verified agents." },
            { icon: HelpCircle, title: "Dedicated Support", desc: "A direct support channel for verification questions, documentation help, and account management." },
            { icon: CheckCircle, title: "Compliance Framework", desc: "Clear guidelines and standards so you always know what is expected and how to maintain your status." },
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
        <h2 className="text-2xl font-bold text-ivory-50 mb-10">Vetting Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Apply", desc: "Submit your application with profile details, experience, and references." },
            { step: "02", title: "Review", desc: "Our team reviews your documentation, verifies references, and checks compliance." },
            { step: "03", title: "Approval", desc: "Once approved, you receive your verified status and access to the network." },
            { step: "04", title: "Ongoing", desc: "Maintain your status through continued compliance and community standards." },
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
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl space-y-6">
          {[
            { q: "How long does the verification process take?", a: "Typically 5–10 business days. We may request additional documentation which can extend the timeline." },
            { q: "What documentation is required?", a: "Government-issued ID, proof of activity, at least two community references, and agreement to our community standards." },
            { q: "Can my status be revoked?", a: "Yes. If community standards are violated or concerns are substantiated, your status may be changed to 'Under Review' or 'Removed Pending Review'." },
            { q: "Is there a cost to apply?", a: "No. The application and verification process is free." },
            { q: "What jurisdictions are supported?", a: "We accept applications globally. However, agents must comply with the laws and regulations of their operating jurisdiction." },
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
          <h2 className="text-3xl font-bold text-ivory-50">Ready to Get Verified?</h2>
          <p className="mt-4 text-platinum-400">Start your agent application today.</p>
          <div className="mt-6">
            <a href="/apply/agent"><Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500">Start Application <ArrowRight className="w-5 h-5" /></Button></a>
          </div>
          <p className="mt-4 text-xs text-platinum-500">By applying, you agree to our <a href="/legal/terms" className="underline hover:text-platinum-300">Terms</a> and <a href="/community-standards" className="underline hover:text-platinum-300">Community Standards</a>.</p>
        </div>
      </section>
    </>
  );
}
