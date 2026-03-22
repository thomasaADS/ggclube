import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "GGClube Union terms and conditions of use.",
};

export default function TermsPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Terms & Conditions</SectionTitle>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-platinum-400 text-sm">Last updated: March 2026</p>
        <div className="mt-8 space-y-6 text-platinum-300 text-sm leading-relaxed">
          <p>Welcome to GGClube Union. By accessing or using our platform, you agree to be bound by these Terms & Conditions. Please read them carefully.</p>
          <h2 className="text-lg font-semibold text-ivory-100">1. Platform Description</h2>
          <p>GGClube is a media, education, and community platform focused on poker culture. GGClube does not operate as a gambling service, gaming operator, or wagering platform. Content is provided for informational and educational purposes only.</p>
          <h2 className="text-lg font-semibold text-ivory-100">2. Eligibility</h2>
          <p>You must be at least 18 years of age to use GGClube. By using this platform, you confirm that you meet this requirement and comply with all applicable laws in your jurisdiction.</p>
          <h2 className="text-lg font-semibold text-ivory-100">3. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>
          <h2 className="text-lg font-semibold text-ivory-100">4. Community Standards</h2>
          <p>All users must adhere to our Community Guidelines. Violations may result in account suspension or termination.</p>
          <h2 className="text-lg font-semibold text-ivory-100">5. Verification</h2>
          <p>GGClube offers a verification service for agents. Verification status reflects the completion of our review process and does not constitute a guarantee or endorsement.</p>
          <h2 className="text-lg font-semibold text-ivory-100">6. Limitation of Liability</h2>
          <p>GGClube provides its services on an "as is" basis. We are not liable for any decisions made based on content or profiles on our platform.</p>
          <h2 className="text-lg font-semibold text-ivory-100">7. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:legal@ggclube.com" className="text-emerald-400 hover:underline">legal@ggclube.com</a>.</p>
        </div>
      </div>
    </Section>
  );
}
