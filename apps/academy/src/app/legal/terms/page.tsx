import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions", description: "GGClube Academy terms and conditions." };

export default function TermsPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Terms & Conditions</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <p>By using GGClube Academy, you agree to these terms. GGClube Academy is an educational platform providing poker-related courses, coaching, and community content.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Eligibility</h2>
        <p>You must be 18+ to use this platform. You are responsible for compliance with your local laws.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Membership</h2>
        <p>Free accounts provide limited access. Premium memberships are billed monthly and can be cancelled at any time.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Content</h2>
        <p>All course content is for educational purposes only. It does not constitute financial advice or a guarantee of results.</p>
      </div>
    </Section>
  );
}
