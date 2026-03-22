import { Section, SectionLabel, SectionTitle, SectionDescription } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Answers to common questions about GGClube Academy — courses, membership, pricing, refunds, and community.",
};

const FAQS = [
  { q: "What is GGClube Academy?", a: "GGClube Academy is a structured poker education platform offering courses, coaching, learning paths, and community for players of all levels." },
  { q: "Is there a free option?", a: "Yes. The free tier gives you access to beginner courses, community forums, and selected free resources." },
  { q: "What does Premium include?", a: "Premium members get access to all courses, all learning paths, coach Q&A sessions, advanced tools, downloadable resources, and priority support." },
  { q: "Can I cancel anytime?", a: "Yes. Premium membership can be cancelled at any time. See our refund policy for details." },
  { q: "Who are the coaches?", a: "Our coaching team includes professional players, experienced educators, and specialists in areas like mental game and tournament strategy." },
  { q: "Is this a gambling site?", a: "No. GGClube Academy is an educational platform. We do not offer gambling, wagering, or real-money poker." },
];

export default function FAQPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>FAQ</SectionLabel>
      <SectionTitle as="h1">Frequently Asked Questions</SectionTitle>
      <SectionDescription>Everything you need to know about GGClube Academy.</SectionDescription>

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
