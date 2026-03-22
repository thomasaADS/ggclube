import { Button, Card, CardContent, Section, SectionLabel, SectionTitle, SectionDescription, Badge } from "@ggclube/ui";
import { ArrowRight, Clock, User, TrendingUp, Shield, Play, ChevronRight, Bookmark, ExternalLink } from "lucide-react";

const LEAD_STORY = {
  title: "The Evolution of Online Poker in 2026: Platform Growth, Regulatory Shifts, and What Comes Next",
  excerpt: "An in-depth analysis of the forces reshaping competitive poker — from ClubGG's expansion to new regulatory frameworks across Asia-Pacific, Latin America, and Europe. The industry is changing faster than the headlines suggest.",
  author: "GGClube Editorial",
  readTime: "14 min",
  category: "Industry Report",
  date: "March 22, 2026",
};

const TOP_STORIES = [
  { title: "WSOP 2026 Announces Record 108-Event Schedule Spanning Three Venues", category: "Tournaments", time: "2h ago" },
  { title: "Global Rankings Shake-Up: Asia-Pacific Player Claims #1 for First Time", category: "Rankings", time: "5h ago" },
  { title: "EPT Barcelona Preview: What to Expect From the Biggest European Stop", category: "Tournaments", time: "8h ago" },
  { title: "GGClube Verification Report: 47 New Agents Verified in Q1 2026", category: "Trust", time: "1d ago" },
  { title: "Strategic Breakdown: Why 3-Bet Sizing Is Misunderstood at Mid-Stakes", category: "Strategy", time: "1d ago" },
];

const TOURNAMENT_FEED = [
  { name: "WSOP 2026", location: "Las Vegas", dates: "May 28 – Jul 16", status: "Upcoming", events: 108 },
  { name: "EPT Barcelona", location: "Barcelona", dates: "Aug 15 – 28", status: "Upcoming", events: 62 },
  { name: "APT Manila", location: "Manila", dates: "Apr 10 – 22", status: "Upcoming", events: 38 },
];

const RANKINGS_TOP5 = [
  { rank: 1, name: "Player Alpha", region: "Asia-Pacific", points: "12,450", change: "+3" },
  { rank: 2, name: "Player Beta", region: "Europe", points: "11,820", change: "-1" },
  { rank: 3, name: "Player Gamma", region: "North America", points: "10,990", change: "0" },
  { rank: 4, name: "Player Delta", region: "Latin America", points: "9,870", change: "+2" },
  { rank: 5, name: "Player Epsilon", region: "Europe", points: "9,540", change: "-1" },
];

export default function NewsHomePage() {
  return (
    <>
      {/* === EDITORIAL MASTHEAD === */}
      <section className="border-b border-graphite-800">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-platinum-500 uppercase tracking-[0.25em] font-semibold">The Pulse of Global Poker</span>
              <span className="text-graphite-600">|</span>
              <span className="text-[10px] text-platinum-500">{LEAD_STORY.date}</span>
            </div>
            <a href="/newsletter" className="text-[10px] text-emerald-400 uppercase tracking-[0.15em] font-semibold hover:text-emerald-300 transition-colors">
              Subscribe to Newsletter →
            </a>
          </div>
        </div>
      </section>

      {/* === LIVE WIRE === */}
      <div className="border-b border-graphite-800 bg-obsidian-900/80">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center gap-4">
          <Badge variant="live" className="shrink-0 text-[9px]">Live</Badge>
          <div className="flex items-center gap-6 text-xs text-platinum-400 overflow-x-auto whitespace-nowrap">
            <span className="font-medium text-ivory-200">WSOP Circuit — Day 2 underway in Atlantic City</span>
            <span className="text-graphite-600">•</span>
            <span>EPT London Final Table set for tomorrow</span>
            <span className="text-graphite-600">•</span>
            <span>GGClube Academy releases Advanced MTT Course</span>
          </div>
        </div>
      </div>

      {/* === HERO EDITORIAL GRID === */}
      <section className="border-b border-graphite-800">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Lead Story — 3 columns */}
            <div className="lg:col-span-3">
              <a href="#" className="group block">
                <div className="aspect-[16/9] rounded-xl bg-graphite-800 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="premium">{LEAD_STORY.category}</Badge>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight leading-[1.15] group-hover:text-emerald-400 transition-colors">
                  {LEAD_STORY.title}
                </h1>
                <p className="mt-4 text-base text-platinum-400 leading-relaxed">
                  {LEAD_STORY.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-platinum-500">
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{LEAD_STORY.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{LEAD_STORY.readTime}</span>
                  <span>{LEAD_STORY.date}</span>
                </div>
              </a>
            </div>

            {/* Top Stories — 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xs font-semibold text-platinum-400 uppercase tracking-[0.2em]">Top Stories</h2>
                <a href="/latest" className="text-xs text-emerald-400 hover:text-emerald-300">View all →</a>
              </div>
              <div className="space-y-0 divide-y divide-graphite-800/60">
                {TOP_STORIES.map((story, i) => (
                  <a key={i} href="#" className="block py-4 first:pt-0 last:pb-0 group">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-black text-graphite-700/60 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">{story.category}</span>
                          <span className="text-[10px] text-platinum-500">{story.time}</span>
                        </div>
                        <h3 className="text-sm font-medium text-ivory-100 leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {story.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TOURNAMENT CENTER + RANKINGS STRIP === */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Tournaments — 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <SectionLabel>Tournament Center</SectionLabel>
                <h2 className="text-2xl font-bold text-ivory-50 mt-1">Upcoming Tournaments</h2>
              </div>
              <a href="/tournaments"><Button variant="ghost" size="sm">Full Schedule <ArrowRight className="w-3.5 h-3.5" /></Button></a>
            </div>
            <div className="space-y-3">
              {TOURNAMENT_FEED.map((t) => (
                <a key={t.name} href="#" className="group block">
                  <div className="flex items-center justify-between p-5 rounded-xl border border-graphite-700/40 bg-obsidian-800/30 hover:border-emerald-800/40 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-lg bg-graphite-800 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-platinum-500" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-ivory-100 group-hover:text-emerald-400 transition-colors">{t.name}</h3>
                        <p className="text-xs text-platinum-500 mt-0.5">{t.location} • {t.dates}</p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <Badge variant="premium">{t.status}</Badge>
                      <p className="text-xs text-platinum-500 mt-1">{t.events} events</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Rankings Sidebar */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <SectionLabel>Rankings</SectionLabel>
                <h2 className="text-2xl font-bold text-ivory-50 mt-1">Top 5 Global</h2>
              </div>
              <a href="/rankings"><Button variant="ghost" size="sm">Full List <ArrowRight className="w-3.5 h-3.5" /></Button></a>
            </div>
            <div className="rounded-xl border border-graphite-700/40 overflow-hidden">
              {RANKINGS_TOP5.map((p, i) => (
                <div key={p.rank} className={`flex items-center justify-between px-4 py-3.5 ${i % 2 === 0 ? 'bg-obsidian-800/40' : 'bg-obsidian-900/40'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-emerald-400 w-7">{p.rank}</span>
                    <div>
                      <p className="text-sm font-medium text-ivory-100">{p.name}</p>
                      <p className="text-[10px] text-platinum-500">{p.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-platinum-400">{p.points}</span>
                    <span className={`block text-[10px] font-mono ${Number(p.change) > 0 ? 'text-emerald-400' : Number(p.change) < 0 ? 'text-alert-400' : 'text-platinum-500'}`}>
                      {Number(p.change) > 0 ? `▲${p.change}` : Number(p.change) < 0 ? `▼${p.change.replace('-','')}` : '—'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-platinum-500 mt-2">Updated monthly • Based on verified results</p>
          </div>
        </div>
      </Section>

      {/* === VERIFIED DIRECTORY HIGHLIGHT === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionLabel>Verified Directory</SectionLabel>
            <h2 className="text-2xl font-bold text-ivory-50 mt-1">Recently Verified Agents</h2>
          </div>
          <a href="/verified-directory"><Button variant="outline" size="sm">Browse Directory <ArrowRight className="w-3.5 h-3.5" /></Button></a>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: "Agent Alpha", region: "São Paulo, BR", status: "verified" as const, lang: "PT, EN" },
            { name: "Agent Beta", region: "London, UK", status: "verified" as const, lang: "EN" },
            { name: "Agent Gamma", region: "Mexico City, MX", status: "verified" as const, lang: "ES, EN" },
            { name: "Agent Delta", region: "Bangkok, TH", status: "verified" as const, lang: "TH, EN" },
          ].map((a) => (
            <div key={a.name} className="p-4 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-graphite-700/80" />
                <Badge variant={a.status} className="text-[9px]">{a.status}</Badge>
              </div>
              <p className="text-sm font-medium text-ivory-100">{a.name}</p>
              <p className="text-xs text-platinum-500">{a.region} • {a.lang}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-platinum-500">
          Verification reflects completion of GGClube's review process. <a href="/verified-directory" className="text-emerald-400 hover:underline">Learn more</a>.
        </p>
      </Section>

      {/* === NEWSLETTER === */}
      <section className="border-t border-graphite-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-10 md:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
            <div className="relative max-w-xl">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-3 block">Weekly Intelligence</span>
              <h2 className="text-3xl font-bold text-ivory-50 tracking-tight">The GGClube Brief</h2>
              <p className="mt-3 text-platinum-400">Tournament coverage, ranking movements, strategy highlights, and verified directory updates — every Monday.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="you@email.com" className="flex-1 h-12 px-4 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                <Button variant="primary" size="lg">Subscribe</Button>
              </div>
              <p className="mt-3 text-[10px] text-platinum-500">Free. No spam. Unsubscribe anytime. 18+ only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === ECOSYSTEM FOOTER === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <span className="text-xs font-semibold text-platinum-500 uppercase tracking-[0.2em] mb-6 block">GGClube Ecosystem</span>
        <div className="grid md:grid-cols-2 gap-6">
          <a href={process.env.NEXT_PUBLIC_UNION_URL || "https://ggclube.com"} className="group p-6 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
            <Shield className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-semibold text-ivory-50 mb-1">GGClube Union</h3>
            <p className="text-xs text-platinum-400">Apply as an agent or player. Verification, trust, and network access.</p>
          </a>
          <a href={process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.ggclube.com"} className="group p-6 rounded-xl border border-graphite-700/40 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
            <TrendingUp className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-semibold text-ivory-50 mb-1">GGClube Academy</h3>
            <p className="text-xs text-platinum-400">Structured courses, expert coaching, and a community built for improvement.</p>
          </a>
        </div>
      </Section>
    </>
  );
}
