import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions", description: "GGClube News terms and conditions." };

export default function TermsPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Terms & Conditions</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <p>Welcome to GGClube News. By accessing this site, you agree to these terms. GGClube News is an editorial and media platform providing poker-related news, analysis, rankings, and community content for informational purposes only.</p>
        <h2 className="text-lg font-semibold text-ivory-100">Content</h2>
        <p>All editorial content is governed by our Editorial Policy. Rankings, directory listings, and tournament data are provided as-is and may be updated without notice.</p>
        <h2 className="text-lg font-semibold text-ivory-100">User Conduct</h2>
        <p>Users must be 18+ and comply with all applicable laws. Users engaging with community features must follow our Community Guidelines.</p>
      </div>
    </Section>
  );
}
