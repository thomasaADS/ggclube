import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GGClube privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Privacy Policy</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <h2 className="text-lg font-semibold text-ivory-100">1. Information We Collect</h2>
        <p>We collect information you provide directly (name, email, application data) and information collected automatically (usage data, device information, cookies).</p>
        <h2 className="text-lg font-semibold text-ivory-100">2. How We Use Your Information</h2>
        <p>We use your data to provide and improve our services, process applications, communicate with you, and enforce our community standards.</p>
        <h2 className="text-lg font-semibold text-ivory-100">3. Data Sharing</h2>
        <p>We do not sell your personal data. We may share data with service providers who assist in platform operations, subject to confidentiality obligations.</p>
        <h2 className="text-lg font-semibold text-ivory-100">4. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:privacy@ggclube.com" className="text-emerald-400 hover:underline">privacy@ggclube.com</a>.</p>
        <h2 className="text-lg font-semibold text-ivory-100">5. Cookies</h2>
        <p>We use cookies and similar technologies. See our <a href="/legal/cookies" className="text-emerald-400 hover:underline">Cookie Policy</a> for details.</p>
        <h2 className="text-lg font-semibold text-ivory-100">6. Security</h2>
        <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
      </div>
    </Section>
  );
}
