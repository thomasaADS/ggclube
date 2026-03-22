import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy", description: "GGClube cookie policy." };

export default function CookiesPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Cookie Policy</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <p>GGClube uses cookies and similar tracking technologies to enhance your experience, analyze usage, and support our operations.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Types of Cookies</h2>
        <p><strong className="text-ivory-100">Essential cookies:</strong> Required for the platform to function. Cannot be disabled.</p>
        <p><strong className="text-ivory-100">Analytics cookies:</strong> Help us understand how visitors interact with our platform.</p>
        <p><strong className="text-ivory-100">Preference cookies:</strong> Remember your settings and preferences.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Managing Cookies</h2>
        <p>You can manage cookies through your browser settings. Disabling certain cookies may affect platform functionality.</p>
      </div>
    </Section>
  );
}
