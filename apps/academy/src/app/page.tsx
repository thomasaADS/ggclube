import { Button, Card, CardContent, Section, SectionLabel, SectionTitle, SectionDescription, Badge } from "@ggclube/ui";
import { ArrowRight, BookOpen, Users, Trophy, Play, CheckCircle, Star, Target, Layers, Zap, BarChart3, Shield } from "lucide-react";

const COURSES = [
  { title: "Poker Fundamentals: The Complete Foundation", level: "Beginner", lessons: 24, hours: "8+", desc: "Build an unshakable understanding of position, pot odds, hand reading, and decision-making frameworks. Where every serious player starts." },
  { title: "Tournament Strategy Masterclass", level: "Intermediate", lessons: 36, hours: "12+", desc: "ICM pressure, bubble dynamics, final table adjustments, and the mental frameworks that separate breakeven tournament players from consistent winners." },
  { title: "Cash Game Exploits: Live & Online", level: "Advanced", lessons: 18, hours: "6+", desc: "Identify and exploit population tendencies, adjust bet sizing for maximum extraction, and develop a session-management system that compounds over time." },
  { title: "The Mental Game: Performance Under Pressure", level: "All Levels", lessons: 12, hours: "4+", desc: "Tilt management, variance tolerance, focus rituals, and the psychological edge that every professional player eventually builds — or wishes they had." },
];

const PATHS = [
  { name: "Foundation Track", level: "Beginner → Intermediate", courses: 4, duration: "6 weeks", desc: "From the absolute basics to your first structured approach. You will finish with a real strategy, not just rules.", icon: Target },
  { name: "Tournament Specialist", level: "Intermediate → Advanced", courses: 3, duration: "4 weeks", desc: "Focused on MTT play. ICM, final tables, and the specific adjustments that turn knowledge into results.", icon: Layers },
  { name: "Edge Builder", level: "Advanced", courses: 3, duration: "4 weeks", desc: "For players who already win. Refine exploits, shore up leaks, and develop the analytical habits of top-tier competitors.", icon: Zap },
];

export default function AcademyHomePage() {
  return (
    <>
      {/* === HERO — Mastery-Driven, Not Hype-Driven === */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(5,150,105,0.06)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(5,150,105,0.04)_0%,_transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-800/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-800/40 bg-emerald-900/15 mb-10">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs text-emerald-300 tracking-[0.12em] uppercase font-medium">Structured Poker Education</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-ivory-50 tracking-tight leading-[1.04]">
              Stop Guessing.<br />
              <span className="text-emerald-400">Start Improving.</span>
            </h1>

            <p className="mt-7 text-xl text-platinum-300 leading-relaxed max-w-2xl">
              GGClube Academy replaces random YouTube sessions with a real education system. Structured courses, expert coaches, clear progression, and a community where improvement is the standard — not the exception.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="/join">
                <Button variant="primary" size="xl">
                  Start Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/courses">
                <Button variant="outline" size="xl">
                  Browse Courses
                </Button>
              </a>
            </div>

            <div className="mt-14 flex items-center gap-10 text-sm text-platinum-400">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-500" />
                <span>90+ Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-500" />
                <span>All Skill Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Expert-Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === THE PROBLEM WE SOLVE === */}
      <Section className="border-t border-graphite-800">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-4 block">Why This Exists</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight leading-tight">
            Poker has more information than ever — and less structure than ever.
          </h2>
          <p className="mt-5 text-lg text-platinum-400 leading-relaxed">
            Free content teaches you what. It rarely teaches you when, why, or in what order. GGClube Academy is built on the idea that real improvement requires a curriculum — not a playlist.
          </p>
        </div>
      </Section>

      {/* === FEATURED COURSES === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <SectionLabel>Courses</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-ivory-50 mt-1">Built for Real Progress</h2>
          </div>
          <a href="/courses"><Button variant="ghost" size="sm">All Courses <ArrowRight className="w-3.5 h-3.5" /></Button></a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <a key={course.title} href="#" className="group block">
              <div className="h-full rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-8 hover:border-emerald-800/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-900/8 to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="premium">{course.level}</Badge>
                    <span className="text-[10px] text-platinum-500">{course.lessons} lessons • {course.hours} hours</span>
                  </div>
                  <h3 className="text-lg font-bold text-ivory-50 mb-3 group-hover:text-emerald-400 transition-colors">{course.title}</h3>
                  <p className="text-sm text-platinum-400 leading-relaxed">{course.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400 group-hover:gap-3 transition-all">
                    <span>View curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* === LEARNING PATHS === */}
      <Section className="border-t border-graphite-800">
        <SectionLabel>Learning Paths</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-ivory-50 mt-1 mb-3">Structured Progression, Not Random Content</h2>
        <p className="text-platinum-400 max-w-2xl mb-10">Each path combines multiple courses into a deliberate sequence. You always know what to study next and why it matters at your current level.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {PATHS.map((path) => (
            <div key={path.name} className="p-6 rounded-2xl border border-graphite-700/50 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-800/30 flex items-center justify-center mb-5">
                <path.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <Badge variant="new" className="mb-3">{path.level}</Badge>
              <h3 className="text-lg font-bold text-ivory-50 mb-2">{path.name}</h3>
              <p className="text-sm text-platinum-400 leading-relaxed mb-4">{path.desc}</p>
              <div className="flex items-center gap-3 text-xs text-platinum-500">
                <span>{path.courses} courses</span>
                <span>•</span>
                <span>{path.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* === COACHING TEAM === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <SectionLabel>Expert Coaches</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-ivory-50 mt-1 mb-3">People Who Have Done It, Not Just Studied It</h2>
        <p className="text-platinum-400 max-w-2xl mb-10">Every coach in the Academy has a real track record — as a player, educator, or specialist. No anonymous instructors. No recycled content.</p>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            { name: "Coach Alpha", role: "MTT Strategy", cred: "15+ years, $2M+ tournament earnings" },
            { name: "Coach Beta", role: "Cash Games", cred: "High-stakes pro, 3x published author" },
            { name: "Coach Gamma", role: "Mental Game", cred: "Sports psychologist, poker specialist" },
            { name: "Coach Delta", role: "Fundamentals", cred: "Educator, 10,000+ students coached" },
          ].map((coach) => (
            <div key={coach.name} className="p-5 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 text-center hover:border-emerald-800/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-graphite-700/80 mx-auto mb-4" />
              <h3 className="text-sm font-semibold text-ivory-50">{coach.name}</h3>
              <p className="text-xs text-emerald-400 mt-1">{coach.role}</p>
              <p className="text-[10px] text-platinum-500 mt-2 leading-relaxed">{coach.cred}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="/coaches"><Button variant="ghost" size="sm">Meet the full team <ArrowRight className="w-3.5 h-3.5" /></Button></a>
        </div>
      </Section>

      {/* === SOCIAL PROOF === */}
      <Section className="border-t border-graphite-800">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Community</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-ivory-50 mt-1">What Members Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "The Tournament Masterclass restructured how I think about ICM spots. It was the first course that actually changed my results — not just my knowledge.", name: "Member A", level: "Intermediate" },
            { quote: "I tried learning from YouTube for two years. Six weeks in the Foundation Track taught me more, because it was in the right order with clear reasoning.", name: "Member B", level: "Beginner" },
            { quote: "The Mental Game course should be mandatory. I stopped losing sessions to tilt and started reviewing hands without emotional bias.", name: "Member C", level: "Advanced" },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-graphite-700/40 bg-obsidian-800/20">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 text-trust-400 fill-trust-400" />)}
              </div>
              <p className="text-sm text-platinum-300 leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-medium text-ivory-100">{t.name}</p>
                <p className="text-[10px] text-platinum-500">{t.level}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* === PRICING === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Membership</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-ivory-50 mt-1">Start Free. Upgrade When Ready.</h2>
          <p className="mt-3 text-platinum-400">No pressure. The free tier gives you real value. Premium unlocks everything.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-graphite-700 bg-obsidian-800/30">
            <span className="text-xs font-semibold text-platinum-500 uppercase tracking-wider">Free</span>
            <p className="text-3xl font-bold text-ivory-50 mt-2">$0</p>
            <p className="text-xs text-platinum-500 mt-1 mb-6">No credit card required</p>
            <ul className="space-y-2.5 mb-8">
              {["Beginner course access", "Community forums", "Weekly newsletter", "Free resource library"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-platinum-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <a href="/join"><Button variant="outline" size="lg" className="w-full">Join Free</Button></a>
          </div>
          <div className="p-8 rounded-2xl border border-emerald-800/50 bg-obsidian-800/30 shadow-glow-emerald relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-ivory-50 text-[10px] font-semibold rounded-bl-lg uppercase tracking-wider">Full Access</div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Premium</span>
            <p className="text-3xl font-bold text-ivory-50 mt-2">$29<span className="text-base text-platinum-500">/mo</span></p>
            <p className="text-xs text-platinum-500 mt-1 mb-6">Cancel anytime</p>
            <ul className="space-y-2.5 mb-8">
              {["All courses & learning paths", "Premium community", "Coach Q&A sessions", "Advanced tools", "Priority support", "Downloadable resources"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-platinum-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <a href="/pricing"><Button variant="primary" size="lg" className="w-full">Start Premium <ArrowRight className="w-4 h-4" /></Button></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-platinum-500">See <a href="/legal/refund-policy" className="hover:underline">refund policy</a>. 18+ only.</p>
      </Section>

      {/* === ECOSYSTEM === */}
      <Section className="border-t border-graphite-800">
        <span className="text-xs font-semibold text-platinum-500 uppercase tracking-[0.2em] mb-6 block">GGClube Ecosystem</span>
        <div className="grid md:grid-cols-2 gap-6">
          <a href={process.env.NEXT_PUBLIC_UNION_URL || "https://ggclube.com"} className="group p-6 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
            <Shield className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-semibold text-ivory-50 mb-1">GGClube Union</h3>
            <p className="text-xs text-platinum-400">Verification, applications, trust standards, and the official GGClube network.</p>
          </a>
          <a href={process.env.NEXT_PUBLIC_NEWS_URL || "https://news.ggclube.com"} className="group p-6 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
            <BookOpen className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-semibold text-ivory-50 mb-1">GGClube News</h3>
            <p className="text-xs text-platinum-400">Tournament coverage, rankings, verified directory, and daily poker intelligence.</p>
          </a>
        </div>
      </Section>

      {/* === FINAL CTA === */}
      <section className="border-t border-graphite-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/8 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">Your Next Level Is a Decision Away</h2>
          <p className="mt-4 text-lg text-platinum-400 max-w-xl mx-auto">
            Every player who improved did one thing first: they chose a structured path over random content. The Academy is that path.
          </p>
          <div className="mt-10">
            <a href="/join"><Button variant="primary" size="xl">Start Learning Free <ArrowRight className="w-5 h-5" /></Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
