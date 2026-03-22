import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Badge } from "@ggclube/ui";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Verification Works — GGClube Trust Standards",
  description: "Learn how GGClube verifies agents — our documentation requirements, review criteria, status definitions, and moderation process explained transparently.",
};

export default function VerificationPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>Trust & Verification</SectionLabel>
        <SectionTitle as="h1">How Verification Works</SectionTitle>
        <SectionDescription>
          Transparency is core to our trust model. Here is exactly how our verification process works — the criteria, the statuses, and what happens when concerns are raised.
        </SectionDescription>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">Verification Statuses</h2>
        <div className="space-y-4 max-w-3xl">
          {[
            { badge: "verified" as const, title: "Verified by Our Team", desc: "All required documentation has been submitted and reviewed. The agent has passed reference checks, compliance review, and has agreed to community standards." },
            { badge: "unverified" as const, title: "Unverified Profile", desc: "A profile that has not yet completed the verification process or has not submitted required documentation." },
            { badge: "under-review" as const, title: "Under Review", desc: "An existing profile where new information, a community report, or compliance check requires additional review by our team." },
            { badge: "concern" as const, title: "Reported Concerns", desc: "Community-submitted concerns have been logged. Our team is investigating. No determination has been made." },
            { badge: "paused" as const, title: "Listing Paused / Removed Pending Review", desc: "The profile has been temporarily suspended while a review is conducted. This is a protective measure, not a final determination." },
          ].map((s) => (
            <div key={s.title} className="flex items-start gap-4 p-5 rounded-xl border border-graphite-700/50 bg-obsidian-800/30">
              <Badge variant={s.badge} className="mt-0.5 shrink-0">{s.badge.replace("-", " ")}</Badge>
              <div>
                <h4 className="font-medium text-ivory-100 mb-1">{s.title}</h4>
                <p className="text-sm text-platinum-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800 bg-obsidian-900/30">
        <h2 className="text-2xl font-bold text-ivory-50 mb-8">Documentation Required</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {[
            "Government-issued identification",
            "Proof of poker industry activity",
            "At least two community references",
            "Agreement to community standards and terms",
            "Jurisdiction disclosure",
            "Optional: social media profiles, portfolio, testimonials",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-obsidian-800/40 border border-graphite-700/30">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <p className="text-sm text-platinum-300">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-graphite-800">
        <h2 className="text-2xl font-bold text-ivory-50 mb-6">Report a Concern</h2>
        <p className="text-platinum-400 max-w-2xl mb-6">
          If you have a concern about any listed agent or profile, you can submit a report. All reports are reviewed confidentially. We do not publish accusations — we investigate and update statuses based on evidence.
        </p>
        <a href="/support">
          <Button variant="outline" size="lg">Report a Concern <ArrowRight className="w-4 h-4" /></Button>
        </a>
      </Section>
    </>
  );
}
