import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "GGClube Academy privacy policy." };

export default function PrivacyPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Privacy Policy</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <p>GGClube Academy collects account data (name, email), usage data, and payment information for premium members. See GGClube Union privacy policy for comprehensive data handling practices.</p>
        <p>Contact: <a href="mailto:privacy@ggclube.com" className="text-emerald-400 hover:underline">privacy@ggclube.com</a></p>
      </div>
    </Section>
  );
}
