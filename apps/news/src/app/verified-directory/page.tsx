import { Section, SectionLabel, SectionTitle, SectionDescription, Badge, Card, CardContent, Button } from "@ggclube/ui";
import { ArrowRight, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Agent Directory — Trusted Poker Agent Network",
  description: "Browse verified poker agents reviewed by the GGClube team. Every listing includes verification status, region, languages, and contact options.",
};

const AGENTS = [
  { name: "Agent Alpha", region: "São Paulo, BR", status: "verified" as const, languages: "PT, EN", since: "Jan 2025" },
  { name: "Agent Beta", region: "London, UK", status: "verified" as const, languages: "EN", since: "Mar 2025" },
  { name: "Agent Gamma", region: "Manila, PH", status: "under-review" as const, languages: "EN, TL", since: "Nov 2025" },
  { name: "Agent Delta", region: "Mexico City, MX", status: "verified" as const, languages: "ES, EN", since: "Feb 2025" },
  { name: "Agent Epsilon", region: "Bangkok, TH", status: "verified" as const, languages: "TH, EN", since: "Jun 2025" },
  { name: "Agent Zeta", region: "Toronto, CA", status: "paused" as const, languages: "EN, FR", since: "Sep 2025" },
];

export default function VerifiedDirectoryPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionLabel>Verified Directory</SectionLabel>
        <SectionTitle as="h1">Trusted Agent Directory</SectionTitle>
        <SectionDescription>
          Every agent listed below has been through the GGClube verification process. Status badges indicate the current state of each profile.
        </SectionDescription>

        {/* Search */}
        <div className="mt-8 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum-500" />
            <input type="search" placeholder="Search by name, region, or language..." className="w-full h-11 pl-10 pr-4 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
          </div>
        </div>

        {/* Status Legend */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Badge variant="verified">Verified</Badge>
          <Badge variant="under-review">Under Review</Badge>
          <Badge variant="unverified">Unverified</Badge>
          <Badge variant="paused">Paused</Badge>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map((agent) => (
            <Card key={agent.name} className="hover:border-emerald-800/60 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-graphite-700" />
                  <Badge variant={agent.status}>{agent.status.replace("-", " ")}</Badge>
                </div>
                <h3 className="font-semibold text-ivory-100 mb-1">{agent.name}</h3>
                <p className="text-sm text-platinum-500 mb-1">{agent.region}</p>
                <p className="text-xs text-platinum-500 mb-1">Languages: {agent.languages}</p>
                <p className="text-xs text-platinum-500">Listed since: {agent.since}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">View Profile</Button>
                  <Button variant="ghost" size="sm">Report Concern</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <section className="border-t border-graphite-800 bg-obsidian-900/30">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <p className="text-sm text-platinum-400 max-w-2xl mx-auto">
            Verification status reflects the completion of GGClube's review process. It does not constitute an endorsement or guarantee.
            If you have concerns about a listed agent, please <a href="/submit-a-tip" className="text-emerald-400 hover:underline">submit a report</a>.
          </p>
        </div>
      </section>
    </>
  );
}
