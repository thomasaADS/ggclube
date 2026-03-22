import { Section, SectionLabel, SectionTitle, SectionDescription, Badge, Card, CardContent, Button } from "@ggclube/ui";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournament Center — Poker Tournament Coverage & Schedule",
  description: "Complete poker tournament coverage — schedules, results, live updates, and analysis from major tournaments worldwide.",
};

const TOURNAMENTS = [
  { name: "WSOP 2026", location: "Las Vegas, USA", date: "May 28 – Jul 16, 2026", status: "Upcoming", events: "108", prizePool: "$350M+" },
  { name: "EPT Barcelona", location: "Barcelona, Spain", date: "Aug 15 – 28, 2026", status: "Upcoming", events: "62", prizePool: "€45M+" },
  { name: "WPT World Championship", location: "Las Vegas, USA", date: "Dec 2 – 18, 2026", status: "Announced", events: "TBA", prizePool: "TBA" },
  { name: "APT Manila", location: "Manila, Philippines", date: "Apr 10 – 22, 2026", status: "Upcoming", events: "38", prizePool: "$5M+" },
  { name: "LAPT São Paulo", location: "São Paulo, Brazil", date: "Jun 5 – 15, 2026", status: "Upcoming", events: "25", prizePool: "R$20M+" },
  { name: "EPT Monte Carlo", location: "Monaco", date: "Apr 25 – May 6, 2026", status: "Upcoming", events: "55", prizePool: "€40M+" },
];

export default function TournamentsPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Tournament Center</SectionLabel>
      <SectionTitle as="h1">Tournament Coverage & Schedule</SectionTitle>
      <SectionDescription>Complete coverage of major poker tournaments worldwide — schedules, results, live updates, and expert analysis.</SectionDescription>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOURNAMENTS.map((t) => (
          <Card key={t.name} className="hover:border-emerald-800/60 transition-all">
            <CardContent className="p-6">
              <Badge variant="premium" className="mb-3">{t.status}</Badge>
              <h3 className="text-lg font-semibold text-ivory-50 mb-3">{t.name}</h3>
              <div className="space-y-2 text-sm text-platinum-400">
                <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-platinum-500" />{t.location}</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-platinum-500" />{t.date}</div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-platinum-500">
                <span>{t.events} Events</span>
                <span>Prize Pool: {t.prizePool}</span>
              </div>
              <div className="mt-4">
                <Button variant="ghost" size="sm">View Coverage <ArrowRight className="w-3.5 h-3.5" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
