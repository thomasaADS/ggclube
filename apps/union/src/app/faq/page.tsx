import { Section, SectionLabel, SectionTitle, SectionDescription } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Answers to common questions about GGClube Union — applications, verification, community standards, and the GGClube ecosystem.",
};

const FAQS = [
  { q: "What is GGClube?", a: "GGClube is a premium poker culture ecosystem consisting of three platforms: Union (trust & applications), News (editorial & rankings), and Academy (education & community)." },
  { q: "Is GGClube a gambling site?", a: "No. GGClube is a media, education, and community platform. We do not operate gambling services, wagering, or real-money poker tables." },
  { q: "How do I become a verified agent?", a: "Submit an application through our agent application form. You will need to provide identification, proof of activity, and community references." },
  { q: "Is there a cost to join?", a: "Joining as a player is free. Agent verification is free. GGClube Academy offers both free and premium educational content." },
  { q: "What jurisdictions do you support?", a: "GGClube accepts users globally. However, all users must comply with the laws and regulations of their jurisdiction." },
  { q: "How do I report a concern?", a: "Use our support center or the 'Report a Concern' option available on profile pages and in the directory." },
  { q: "How long does verification take?", a: "Typically 5–10 business days. Additional documentation requests may extend this timeline." },
  { q: "Can I appeal a status change?", a: "Yes. All status changes can be appealed through our support center. Appeals are reviewed by a separate moderation team." },
];

export default function FAQPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>FAQ</SectionLabel>
      <SectionTitle as="h1">Frequently Asked Questions</SectionTitle>
      <SectionDescription>Everything you need to know about GGClube Union.</SectionDescription>

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
