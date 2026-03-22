import { Section, SectionLabel, SectionTitle, SectionDescription, Badge, Card, CardContent, Button } from "@ggclube/ui";
import { ArrowRight, Play, Filter } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses — Poker Education for Every Level",
  description: "Browse all GGClube Academy courses — beginner fundamentals, tournament strategy, cash game exploits, mental game, and more.",
};

const COURSES = [
  { title: "Poker Fundamentals", level: "Beginner", lessons: 24, format: "Video + Quiz", desc: "Master the essential concepts every serious player must know.", featured: true },
  { title: "Tournament Strategy Masterclass", level: "Intermediate", lessons: 36, format: "Video + Analysis", desc: "Advanced MTT concepts — ICM, bubble play, final table dynamics.", featured: true },
  { title: "Cash Game Exploits", level: "Advanced", lessons: 18, format: "Video + Tools", desc: "Exploit-based strategies for live and online cash games.", featured: false },
  { title: "Mental Game & Performance", level: "All Levels", lessons: 12, format: "Video + Exercises", desc: "Tilt management, focus, and peak performance.", featured: false },
  { title: "Pre-flop Mastery", level: "Beginner", lessons: 16, format: "Video + Charts", desc: "Complete pre-flop strategy guide with downloadable range charts.", featured: false },
  { title: "Live Poker Reads", level: "Intermediate", lessons: 14, format: "Video", desc: "Physical tells, bet sizing reads, and live game dynamics.", featured: false },
  { title: "Heads-Up Strategy", level: "Advanced", lessons: 10, format: "Video + Analysis", desc: "Specialized heads-up play for tournaments and cash games.", featured: false },
  { title: "Bankroll Management", level: "Beginner", lessons: 8, format: "Video + Tools", desc: "Protect your bankroll with proper management strategies.", featured: false },
];

export default function CoursesPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Courses</SectionLabel>
      <SectionTitle as="h1">All Courses</SectionTitle>
      <SectionDescription>Structured education designed by professionals. Filter by level, format, or topic.</SectionDescription>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
          <button key={level} className={`px-4 py-2 rounded-lg text-sm transition-colors ${level === "All" ? "bg-emerald-600 text-ivory-50" : "bg-graphite-800 text-platinum-400 hover:bg-graphite-700 hover:text-ivory-100"}`}>
            {level}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {COURSES.map((course) => (
          <Card key={course.title} className="hover:border-emerald-800/60 transition-all group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="premium">{course.level}</Badge>
                <span className="text-xs text-platinum-500">{course.format}</span>
                {course.featured && <Badge variant="new">Featured</Badge>}
              </div>
              <h3 className="text-lg font-semibold text-ivory-50 mb-2 group-hover:text-emerald-400 transition-colors">{course.title}</h3>
              <p className="text-sm text-platinum-400 mb-4">{course.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-platinum-500 flex items-center gap-1"><Play className="w-3 h-3" />{course.lessons} lessons</span>
                <Button variant="ghost" size="sm">View Course <ArrowRight className="w-3.5 h-3.5" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
