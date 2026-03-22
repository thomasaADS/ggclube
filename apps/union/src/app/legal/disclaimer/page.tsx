import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer", description: "GGClube legal disclaimer." };

export default function DisclaimerPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Disclaimer</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <p>GGClube is a media, education, and community platform. We do not operate as a gambling service, gaming operator, or wagering platform.</p>
        <p>Content on this platform is provided for informational and educational purposes only. Verification of agents reflects the completion of our review process and does not constitute an endorsement, guarantee, or warranty.</p>
        <p>Users are responsible for conducting their own due diligence. GGClube is not responsible for any transactions, agreements, or interactions between users outside of the platform.</p>
        <p>Users must comply with all applicable laws and regulations in their jurisdiction. If gambling is restricted in your jurisdiction, do not use GGClube as a means to circumvent those restrictions.</p>
      </div>
    </Section>
  );
}
