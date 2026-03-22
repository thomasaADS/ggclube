import { Section, SectionLabel, SectionTitle, SectionDescription, Card, CardContent, Button, Badge } from "@ggclube/ui";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Coaches — Learn from Proven Professionals",
  description: "Meet the GGClube Academy coaching team — experienced professionals, proven winners, and dedicated educators.",
};

const COACHES = [
  { name: "Coach Alpha", specialty: "MTT Strategy", bio: "15+ years of tournament experience with over $2M in live and online earnings. Specializes in deep-stack tournament play and final table strategy.", courses: 3 },
  { name: "Coach Beta", specialty: "Cash Games", bio: "High-stakes cash game professional and author of three best-selling strategy books. Expert in exploitative play and game selection.", courses: 2 },
  { name: "Coach Gamma", specialty: "Mental Game", bio: "Sports psychologist specializing in poker performance. Has worked with dozens of professional players on tilt management and peak performance.", courses: 2 },
  { name: "Coach Delta", specialty: "Beginner Fundamentals", bio: "Dedicated educator with over 10,000 students coached. Makes complex concepts accessible and builds strong foundational understanding.", courses: 3 },
];

export default function CoachesPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Coaches</SectionLabel>
      <SectionTitle as="h1">Expert Coaching Team</SectionTitle>
      <SectionDescription>Learn from professionals who have proven their expertise at the highest levels of poker.</SectionDescription>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {COACHES.map((coach) => (
          <Card key={coach.name} className="hover:border-emerald-800/60 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl bg-graphite-700 shrink-0" />
                <div className="flex-1">
                  <Badge variant="premium" className="mb-2">{coach.specialty}</Badge>
                  <h3 className="text-xl font-semibold text-ivory-50 mb-2">{coach.name}</h3>
                  <p className="text-sm text-platinum-400 mb-4">{coach.bio}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-platinum-500">{coach.courses} courses</span>
                    <Button variant="ghost" size="sm">View Profile <ArrowRight className="w-3.5 h-3.5" /></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
