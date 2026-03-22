import { Button, Card, CardContent, Section, SectionLabel, SectionTitle, SectionDescription, Badge } from "@ggclube/ui";
import { Shield, Users, BookOpen, Newspaper, ChevronRight, CheckCircle, ArrowRight, Globe, Award, Lock, FileCheck } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* === CINEMATIC HERO — Command Center Energy === */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,40,40,0.07)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,160,23,0.04)_0%,_transparent_45%)]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-club-red-800/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-club-gold-600/20 to-transparent" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-club-red-800/40 bg-club-red-900/20 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-club-red-500 animate-pulse" />
                <span className="text-xs text-club-gold-400 tracking-[0.15em] uppercase font-medium">Official GGClube Network</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-ivory-50 tracking-tight leading-[1.04]">
                The Infrastructure<br />
                Behind{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-red-400 to-club-gold-400">Trusted Poker</span>
              </h1>

              <p className="mt-7 text-xl text-platinum-300 leading-relaxed max-w-xl">
                GGClube is the verification, education, and editorial network for serious poker culture. We vet agents, connect players, and set the standard — so the community operates on trust, not guesswork.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="/apply/agent">
                  <Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500 shadow-[0_0_20px_rgba(198,40,40,0.15)] hover:shadow-[0_0_30px_rgba(198,40,40,0.25)]">
                    Apply as Agent
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="/apply/player">
                  <Button variant="outline" size="xl" className="border-club-gold-600/40 text-club-gold-400 hover:border-club-gold-500 hover:text-club-gold-300">
                    Join as Player
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-8">
                {[
                  { value: "Verified", label: "Agent Network" },
                  { value: "3 Platforms", label: "One Ecosystem" },
                  { value: "18+", label: "Global Community" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-lg font-bold text-ivory-50">{s.value}</p>
                    <p className="text-xs text-platinum-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Trust Dashboard Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-club-red-900/20 to-club-gold-700/10 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl border border-graphite-700/60 bg-obsidian-900/80 backdrop-blur-sm p-6 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-platinum-500 uppercase tracking-widest font-semibold">Network Status</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs text-emerald-400">Operational</span>
                    </div>
                  </div>

                  {[
                    { name: "Agent — São Paulo, BR", status: "Verified", badge: "verified" as const },
                    { name: "Agent — London, UK", status: "Verified", badge: "verified" as const },
                    { name: "Agent — Manila, PH", status: "Under Review", badge: "under-review" as const },
                    { name: "Agent — Mexico City, MX", status: "Verified", badge: "verified" as const },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-800/60 border border-graphite-700/40">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-graphite-700/80 flex items-center justify-center">
                          <Users className="w-4 h-4 text-platinum-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ivory-100">{agent.name}</p>
                        </div>
                      </div>
                      <Badge variant={agent.badge}>{agent.status}</Badge>
                    </div>
                  ))}

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { label: "Applications", value: "Active" },
                      { label: "Reviews", value: "In Progress" },
                      { label: "Reports", value: "0 Open" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg bg-obsidian-800/40 border border-graphite-700/30 text-center">
                        <p className="text-xs text-platinum-500">{stat.label}</p>
                        <p className="text-sm font-semibold text-ivory-100 mt-0.5">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT IS GGCLUBE — Sharp Manifesto === */}
      <Section className="border-t border-graphite-800">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.2em] mb-4 block">What Is GGClube</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight leading-[1.1]">
            A verification network, editorial engine, and education platform — built for the poker industry.
          </h2>
          <p className="mt-6 text-lg text-platinum-400 leading-relaxed">
            The poker world lacks infrastructure. Players don't know which agents to trust. Agents have no way to prove their credibility. Information is scattered across forums and group chats. GGClube exists to fix that — with three connected platforms, each serving a distinct purpose.
          </p>
        </div>
      </Section>

      {/* === THREE PILLARS — Distinctive Cards === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "GGClube Union",
              accent: "You Are Here",
              desc: "The trust layer. Agent verification, player onboarding, community standards, partnerships, and support. Where credibility is established.",
              href: "/about",
              gradient: "from-club-red-900/30 to-transparent",
              border: "hover:border-club-red-800/50",
              iconBg: "bg-club-red-900/40 border-club-red-800/40",
              linkColor: "text-club-red-400",
            },
            {
              icon: Newspaper,
              title: "GGClube News",
              accent: "Editorial Engine",
              desc: "Independent poker journalism. Tournament coverage, global rankings, the verified agent directory, strategy breakdowns, and daily intelligence.",
              href: process.env.NEXT_PUBLIC_NEWS_URL || "https://news.ggclube.com",
              gradient: "from-emerald-900/20 to-transparent",
              border: "hover:border-emerald-800/50",
              iconBg: "bg-emerald-900/40 border-emerald-800/40",
              linkColor: "text-emerald-400",
            },
            {
              icon: BookOpen,
              title: "GGClube Academy",
              accent: "Education Hub",
              desc: "Structured poker education. Courses by skill level, expert coaching, learning paths, free resources, and a community committed to long-term improvement.",
              href: process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.ggclube.com",
              gradient: "from-emerald-900/20 to-transparent",
              border: "hover:border-emerald-800/50",
              iconBg: "bg-emerald-900/40 border-emerald-800/40",
              linkColor: "text-emerald-400",
            },
          ].map((pillar) => (
            <a key={pillar.title} href={pillar.href} className="group">
              <div className={`h-full rounded-2xl border border-graphite-700 bg-obsidian-800/40 p-8 transition-all duration-500 ${pillar.border} relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${pillar.gradient}`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} border flex items-center justify-center mb-6`}>
                    <pillar.icon className="w-6 h-6 text-platinum-300" />
                  </div>
                  <span className="text-[10px] font-semibold text-platinum-500 uppercase tracking-[0.2em]">{pillar.accent}</span>
                  <h3 className="text-xl font-bold text-ivory-50 mt-2 mb-3">{pillar.title}</h3>
                  <p className="text-sm text-platinum-400 leading-relaxed">{pillar.desc}</p>
                  <div className={`mt-6 flex items-center gap-2 text-sm ${pillar.linkColor} group-hover:gap-3 transition-all`}>
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* === DUAL ENTRY — Agent vs Player === */}
      <Section className="border-t border-graphite-800">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Agent Path */}
          <div className="relative rounded-2xl border border-graphite-700 bg-obsidian-800/30 overflow-hidden group hover:border-club-red-800/40 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-club-red-900/15 to-transparent" />
            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-club-red-900/40 border border-club-red-800/40 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-club-red-400" />
                </div>
                <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.15em]">For Agents</span>
              </div>
              <h3 className="text-2xl font-bold text-ivory-50 mb-4">Prove Your Credibility.<br />Grow Your Network.</h3>
              <p className="text-platinum-400 mb-6 leading-relaxed">
                The GGClube verification process gives agents a documented, public trust status. No more relying on word-of-mouth. Get vetted, get listed, and let your track record speak through a system the community trusts.
              </p>
              <ul className="space-y-2.5 mb-8">
                {["Documented verification with public status badge", "Listed in the GGClube News verified directory", "Direct support channel for account and compliance", "Network visibility across all three GGClube platforms", "Priority access to partnership opportunities"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-platinum-300">
                    <CheckCircle className="w-4 h-4 text-club-gold-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/apply/agent">
                <Button variant="primary" size="lg" className="bg-club-red-600 hover:bg-club-red-500">
                  Start Agent Application <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Player Path */}
          <div className="relative rounded-2xl border border-graphite-700 bg-obsidian-800/30 overflow-hidden group hover:border-emerald-800/40 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-emerald-900/10 to-transparent" />
            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.15em]">For Players</span>
              </div>
              <h3 className="text-2xl font-bold text-ivory-50 mb-4">Find Verified Agents.<br />Learn From the Best.</h3>
              <p className="text-platinum-400 mb-6 leading-relaxed">
                Stop guessing who to trust. GGClube connects you with reviewed agents, provides structured education through the Academy, and keeps you informed with independent editorial coverage through GGClube News.
              </p>
              <ul className="space-y-2.5 mb-8">
                {["Access the verified agent directory", "Free and premium courses at GGClube Academy", "Daily tournament news and global rankings", "Community standards that protect everyone", "Direct support and a clear report-concern process"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-platinum-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/apply/player">
                <Button variant="outline" size="lg" className="border-emerald-700/60 text-emerald-400 hover:border-emerald-600">
                  Join as Player <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* === HOW IT WORKS — Process Strip === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/30">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.2em] mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">From Application to Verified Status</h2>
          <p className="mt-4 text-platinum-400">A transparent, documented process designed for accountability — not for show.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", icon: FileCheck, title: "Apply", desc: "Submit your application with profile details, experience, and at least two community references." },
            { step: "02", icon: Lock, title: "Verify", desc: "Our team reviews documentation, checks references, and evaluates compliance with community standards." },
            { step: "03", icon: Award, title: "Get Listed", desc: "Approved agents receive a public verified badge and directory listing across the GGClube ecosystem." },
            { step: "04", icon: Globe, title: "Stay Active", desc: "Maintain your status through ongoing compliance. Your reputation builds over time in a system that tracks it." },
          ].map((s) => (
            <div key={s.step} className="relative p-6 rounded-xl border border-graphite-700/50 bg-obsidian-800/20">
              <span className="text-4xl font-black text-graphite-700/60">{s.step}</span>
              <div className="mt-3 w-10 h-10 rounded-lg bg-obsidian-800 border border-graphite-600 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-club-gold-500" />
              </div>
              <h4 className="text-base font-bold text-ivory-50 mt-4 mb-2">{s.title}</h4>
              <p className="text-sm text-platinum-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* === TRUST ARCHITECTURE === */}
      <Section className="border-t border-graphite-800">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.2em] mb-4 block">Trust Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight leading-tight">Every Status is Documented. Every Review is Transparent.</h2>
            <p className="mt-5 text-platinum-400 leading-relaxed">
              We don't label anyone a scammer by default. Our trust system is evidence-based, moderated, and designed with clear escalation paths. Every agent in the directory has a documented status that the community can verify.
            </p>
            <a href="/how-verification-works" className="mt-6 inline-block">
              <Button variant="ghost" size="md" className="text-club-gold-400 hover:text-club-gold-300">
                Read the full verification policy <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="space-y-3">
            {[
              { badge: "verified" as const, title: "Verified by Our Team", desc: "Documentation reviewed. References checked. Standards met.", dot: "bg-emerald-500" },
              { badge: "unverified" as const, title: "Unverified", desc: "Profile exists but verification process not yet completed.", dot: "bg-platinum-500" },
              { badge: "under-review" as const, title: "Under Review", desc: "Additional information requested or new concerns being assessed.", dot: "bg-club-gold-500" },
              { badge: "concern" as const, title: "Reported Concerns", desc: "Community-submitted concerns logged. Investigation in progress.", dot: "bg-club-red-500" },
              { badge: "paused" as const, title: "Listing Paused", desc: "Temporarily suspended during review. Protective measure, not a verdict.", dot: "bg-graphite-500" },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-4 p-4 rounded-xl border border-graphite-700/40 bg-obsidian-800/20">
                <div className={`w-2.5 h-2.5 rounded-full ${s.dot} mt-1.5 shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-ivory-100">{s.title}</h4>
                    <Badge variant={s.badge} className="text-[9px]">{s.badge.replace("-", " ")}</Badge>
                  </div>
                  <p className="text-xs text-platinum-500 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* === ECOSYSTEM CROSS-LINKS === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <span className="text-xs font-semibold text-platinum-500 uppercase tracking-[0.2em] mb-8 block">Across the Ecosystem</span>
        <div className="grid md:grid-cols-2 gap-6">
          <a href={process.env.NEXT_PUBLIC_NEWS_URL || "https://news.ggclube.com"} className="group">
            <div className="h-full rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-8 hover:border-emerald-800/50 transition-all duration-500">
              <Newspaper className="w-8 h-8 text-emerald-400 mb-5" />
              <h3 className="text-xl font-bold text-ivory-50 mb-2">GGClube News</h3>
              <p className="text-sm text-platinum-400 leading-relaxed mb-4">Tournament coverage, global rankings, verified directory, strategy analysis, and poker intelligence — updated daily by an independent editorial team.</p>
              <span className="text-sm text-emerald-400 group-hover:underline">Read the latest →</span>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.ggclube.com"} className="group">
            <div className="h-full rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-8 hover:border-emerald-800/50 transition-all duration-500">
              <BookOpen className="w-8 h-8 text-emerald-400 mb-5" />
              <h3 className="text-xl font-bold text-ivory-50 mb-2">GGClube Academy</h3>
              <p className="text-sm text-platinum-400 leading-relaxed mb-4">Structured courses from beginner to advanced, expert coaching, learning paths, and a community of players committed to improving their game.</p>
              <span className="text-sm text-emerald-400 group-hover:underline">Start learning →</span>
            </div>
          </a>
        </div>
      </Section>

      {/* === FINAL CTA === */}
      <section className="border-t border-graphite-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-club-red-900/8 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">The Network Is Open. Your Move.</h2>
          <p className="mt-4 text-lg text-platinum-400 max-w-xl mx-auto">
            Whether you're building your reputation as an agent or looking for a community you can actually trust — it starts here.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/apply/agent">
              <Button variant="primary" size="xl" className="bg-club-red-600 hover:bg-club-red-500">Apply as Agent</Button>
            </a>
            <a href="/apply/player">
              <Button variant="outline" size="xl" className="border-club-gold-600/40 text-club-gold-400 hover:border-club-gold-500">Join as Player</Button>
            </a>
          </div>
          <p className="mt-6 text-xs text-platinum-500">
            By applying, you agree to our <a href="/legal/terms" className="hover:text-platinum-300 underline">Terms</a>, <a href="/legal/privacy" className="hover:text-platinum-300 underline">Privacy Policy</a>, and <a href="/community-standards" className="hover:text-platinum-300 underline">Community Standards</a>. 18+ only.
          </p>
        </div>
      </section>
    </>
  );
}
