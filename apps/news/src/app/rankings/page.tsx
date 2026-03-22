import { Section, SectionLabel, SectionTitle, SectionDescription, Badge } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Poker Rankings — March 2026",
  description: "Official GGClube global poker rankings — updated monthly with player standings across all major regions.",
};

const RANKINGS = [
  { rank: 1, name: "Player Alpha", region: "North America", points: "12,450", change: "+2" },
  { rank: 2, name: "Player Beta", region: "Europe", points: "11,820", change: "-1" },
  { rank: 3, name: "Player Gamma", region: "Asia-Pacific", points: "10,990", change: "+5" },
  { rank: 4, name: "Player Delta", region: "Latin America", points: "9,870", change: "0" },
  { rank: 5, name: "Player Epsilon", region: "Europe", points: "9,540", change: "-2" },
  { rank: 6, name: "Player Zeta", region: "North America", points: "9,210", change: "+1" },
  { rank: 7, name: "Player Eta", region: "Asia-Pacific", points: "8,890", change: "+3" },
  { rank: 8, name: "Player Theta", region: "Europe", points: "8,650", change: "-1" },
  { rank: 9, name: "Player Iota", region: "Latin America", points: "8,320", change: "0" },
  { rank: 10, name: "Player Kappa", region: "North America", points: "8,100", change: "+4" },
];

export default function RankingsPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Rankings</SectionLabel>
      <SectionTitle as="h1">Global Poker Rankings</SectionTitle>
      <SectionDescription>Updated monthly. Based on verified tournament results and community performance data.</SectionDescription>

      <div className="mt-12 max-w-4xl">
        <div className="rounded-xl border border-graphite-700 overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_1fr_100px_60px] px-6 py-3 bg-graphite-800/60 text-xs text-platinum-400 uppercase tracking-widest font-semibold">
            <span>#</span>
            <span>Player</span>
            <span>Region</span>
            <span className="text-right">Points</span>
            <span className="text-right">+/-</span>
          </div>
          {RANKINGS.map((p, i) => (
            <div key={p.rank} className={`grid grid-cols-[60px_1fr_1fr_100px_60px] px-6 py-4 items-center ${i % 2 === 0 ? "bg-obsidian-800/40" : "bg-obsidian-900/40"}`}>
              <span className="text-lg font-bold text-emerald-400">#{p.rank}</span>
              <span className="text-sm font-medium text-ivory-100">{p.name}</span>
              <span className="text-sm text-platinum-400">{p.region}</span>
              <span className="text-sm font-mono text-platinum-300 text-right">{p.points}</span>
              <span className={`text-sm text-right font-mono ${Number(p.change) > 0 ? "text-emerald-400" : Number(p.change) < 0 ? "text-alert-400" : "text-platinum-500"}`}>
                {Number(p.change) > 0 ? `+${p.change}` : p.change}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-platinum-500">Rankings methodology is based on verified results from major tournament circuits. Last updated: March 2026.</p>
      </div>
    </Section>
  );
}
