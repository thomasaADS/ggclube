import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Responsible Play", description: "GGClube responsible play commitment." };

export default function ResponsiblePlayPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Responsible Play</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p>GGClube is committed to promoting responsible engagement with poker and gaming culture.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Our Commitment</h2>
        <p>We provide educational content to help players make informed decisions. We enforce age restrictions (18+). We provide information about problem gambling resources.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Get Help</h2>
        <p>If you or someone you know has a gambling problem, please reach out to local support services. Resources vary by jurisdiction — consult your local gambling helpline.</p>
      </div>
    </Section>
  );
}
