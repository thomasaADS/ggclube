import { Section, SectionLabel, SectionTitle, Badge, Card, CardContent } from "@ggclube/ui";
import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News — Poker Headlines & Updates",
  description: "The latest poker news, tournament updates, community stories, and industry analysis from GGClube News.",
};

const ARTICLES = [
  { title: "WSOP 2026 Schedule Announced: Record-Breaking 108 Events", category: "Tournaments", author: "Editorial Team", time: "2 hours ago", excerpt: "The World Series of Poker reveals its most ambitious schedule yet with 108 bracelet events across multiple venues." },
  { title: "Global Poker Rankings: March 2026 Update", category: "Rankings", author: "Rankings Desk", time: "5 hours ago", excerpt: "New movement in the global rankings with a first-time #1 in the Asia-Pacific region." },
  { title: "Inside the GGClube Verification Process", category: "Features", author: "Trust Team", time: "1 day ago", excerpt: "A transparent look at how GGClube builds trust through its multi-step agent verification system." },
  { title: "EPT Barcelona 2026: Complete Preview Guide", category: "Tournaments", author: "Tournament Desk", time: "1 day ago", excerpt: "Everything you need to know about the upcoming European Poker Tour stop in Barcelona." },
  { title: "Optimal Play in 3-Bet Pots: A Strategic Breakdown", category: "Strategy", author: "Academy Coaches", time: "2 days ago", excerpt: "An analytical approach to post-flop play after 3-betting, including range analysis and sizing considerations." },
  { title: "GGClube Academy Launches Advanced MTT Course", category: "Education", author: "Academy Team", time: "3 days ago", excerpt: "A new comprehensive multi-table tournament course designed for intermediate to advanced players." },
];

export default function LatestPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Latest</SectionLabel>
      <SectionTitle as="h1">Latest News & Updates</SectionTitle>

      <div className="mt-12 space-y-6 max-w-4xl">
        {ARTICLES.map((article, i) => (
          <a key={i} href="#" className="group block">
            <Card className="hover:border-emerald-800/60 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="premium" className="mb-3">{article.category}</Badge>
                    <h2 className="text-xl font-semibold text-ivory-50 group-hover:text-emerald-400 transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-platinum-400 mb-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-platinum-500">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.time}</span>
                    </div>
                  </div>
                  <div className="w-32 h-20 rounded-lg bg-graphite-800 shrink-0 hidden md:block" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
