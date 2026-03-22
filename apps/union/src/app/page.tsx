import { Button, Card, CardContent, Section, SectionLabel, SectionTitle, SectionDescription, Badge } from "@ggclube/ui";
import { Shield, Users, BookOpen, Newspaper, ChevronRight, CheckCircle, ArrowLeft, Globe, Award, Lock, FileCheck, Sparkles, Eye, Scale, Phone, Download, MessageCircle, Trophy, Zap, Star, Clock, Headphones } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* === CINEMATIC HERO === */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,40,40,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,160,23,0.06)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(198,40,40,0.05)_0%,_transparent_30%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-club-red-600/30 to-transparent" />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Logo Badge */}
              <div className="flex items-center gap-4 mb-10">
                <Image src="/ggclub-logo.png" alt="ClubGG" width={56} height={56} className="rounded-xl" />
                <div>
                  <h2 className="text-2xl font-bold text-ivory-50">ClubGG האיחוד</h2>
                  <p className="text-xs text-club-gold-400 tracking-wide">הקהילה הרשמית של שחקני הפוקר בישראל</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-black text-ivory-50 leading-[1.15]">
                ברוכים הבאים לעולם{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-club-red-400 via-club-red-500 to-club-gold-400">הפוקר האמיתי</span>
              </h1>

              <p className="mt-6 text-xl text-platinum-300 leading-relaxed max-w-lg">
                הפלטפורמה המובילה בישראל עם סוכנים מאומתים, שולחנות פעילים 24/7, בונוסים שווים וקהילה אמינה. כל מה שצריך — במקום אחד.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף ל-ClubGG" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="xl" className="bg-[#25D366] hover:bg-[#1fb855] text-white shadow-[0_0_25px_rgba(37,211,102,0.2)] hover:shadow-[0_0_35px_rgba(37,211,102,0.3)]">
                    <MessageCircle className="w-5 h-5" />
                    דברו עם סוכן בוואטסאפ
                  </Button>
                </a>
                <a href="/apply/agent">
                  <Button variant="outline" size="xl" className="border-club-red-600/50 text-club-red-400 hover:border-club-red-500 hover:bg-club-red-900/20">
                    הגשת מועמדות כסוכן
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-6">
                {[
                  { value: "200+", label: "שחקנים פעילים" },
                  { value: "24/7", label: "שולחנות פתוחים" },
                  { value: "50%", label: "בונוס הפקדה" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-obsidian-800/40 border border-graphite-700/30 text-center">
                    <p className="text-2xl font-black text-club-gold-400">{s.value}</p>
                    <p className="text-xs text-platinum-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-club-red-900/30 via-club-gold-700/10 to-transparent rounded-[3rem] blur-2xl" />
                <div className="relative rounded-3xl border border-graphite-700/40 bg-obsidian-900/60 backdrop-blur p-8 max-w-sm">
                  <div className="text-center mb-6">
                    <Image src="/ggclub-logo.png" alt="ClubGG" width={72} height={72} className="rounded-2xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-ivory-50">ClubGG Poker</h3>
                    <p className="text-sm text-platinum-400 mt-1">הורידו את האפליקציה</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { img: "/download-google.webp", label: "Google Play" },
                      { img: "/download-appstore.webp", label: "App Store" },
                      { img: "/download-windows.webp", label: "Windows" },
                    ].map((dl) => (
                      <a key={dl.label} href="#" className="block group">
                        <div className="flex items-center justify-center p-3 rounded-xl bg-obsidian-800/60 border border-graphite-700/30 hover:border-club-gold-600/30 transition-all">
                          <img src={dl.img} alt={dl.label} className="h-10 object-contain" />
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-club-red-900/20 border border-club-red-800/30 text-center">
                    <p className="text-sm font-semibold text-club-red-400">🎁 בונוס 50% על ההפקדה הראשונה</p>
                    <p className="text-xs text-platinum-500 mt-1">לשחקנים חדשים בלבד</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === GAME TYPES === */}
      <Section className="border-t border-graphite-800">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.15em] mb-3 block">משחקים</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">כל סוגי הפוקר — במקום אחד</h2>
          <p className="mt-4 text-platinum-400">שולחנות קאש, טורנירים ועוד. כל הפורמטים, בכל הרמות.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "/texas-holdem.png", title: "טקסס הולדם", desc: "המשחק הקלאסי. שולחנות בכל הרמות, מיקרו ועד היי-סטייקס. זמין 24/7.", tag: "הכי פופולרי" },
            { img: "/omaha.png", title: "אומהה", desc: "PLO4, PLO5, PLO6 — כל הווריאציות. אקשן ברמה אחרת לגמרי.", tag: "אקשן מלא" },
            { img: "/texas-holdem.png", title: "טורנירים", desc: "MTT, SNG, סטלייטים ופרייזפולים ענקיים. טורנירים ייעודיים לקהילה הישראלית.", tag: "פרסים גדולים" },
          ].map((game) => (
            <div key={game.title} className="group relative rounded-2xl border border-graphite-700 bg-obsidian-800/30 overflow-hidden hover:border-club-red-800/50 transition-all duration-500">
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="premium" className="bg-club-red-900/60 text-club-red-300 border-club-red-800/40">{game.tag}</Badge>
              </div>
              <div className="aspect-[4/3] bg-obsidian-800 flex items-center justify-center p-8">
                <img src={game.img} alt={game.title} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ivory-50 mb-2">{game.title}</h3>
                <p className="text-sm text-platinum-400 leading-relaxed">{game.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* === WHY US === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.15em] mb-3 block">למה ClubGG האיחוד</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">לא סתם עוד קלאב פוקר</h2>
          <p className="mt-4 text-platinum-400">בנינו את הרשת על בסיס אמון, שקיפות ושירות — לא רק על בסיס משחק.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, title: "סוכנים מאומתים", desc: "כל סוכן עובר תהליך בדיקה מקיף. אתם יודעים בדיוק עם מי אתם עובדים." },
            { icon: Clock, title: "שולחנות 24/7", desc: "שולחנות קאש וטורנירים פעילים מסביב לשעון. תמיד יש משחק שמחכה לכם." },
            { icon: Headphones, title: "תמיכה בעברית", desc: "צוות תמיכה ישראלי שזמין בכל שעה. בעברית, בוואטסאפ, בלי בירוקרטיה." },
            { icon: Zap, title: "בונוסים שווים", desc: "50% על הפקדה ראשונה, בונוסי ריבאי, ופרומואים שוטפים לשחקנים פעילים." },
            { icon: Lock, title: "אבטחה מלאה", desc: "הגנה על הכסף שלכם עם מערכת אבטחה מתקדמת ו-RNG מאושר." },
            { icon: Star, title: "GGPlatinum", desc: "חברות פרימיום עם הטבות בלעדיות, טורנירים סגורים ושירות VIP." },
            { icon: Users, title: "קהילה ישראלית", desc: "מעל 200 שחקנים פעילים. שולחנות ישראלים, שפה ישראלית, תרבות ישראלית." },
            { icon: Trophy, title: "טורנירים ייעודיים", desc: "טורנירים שמותאמים לקהילה הישראלית עם פרייזפולים מכובדים." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-graphite-700/50 bg-obsidian-800/30 hover:border-club-red-800/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-club-red-900/30 border border-club-red-800/30 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-club-gold-500" />
              </div>
              <h4 className="text-sm font-bold text-ivory-50 mb-1.5">{item.title}</h4>
              <p className="text-xs text-platinum-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* === AGENT SYSTEM === */}
      <Section className="border-t border-graphite-800">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.15em] mb-4 block">מערכת הסוכנים</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight leading-tight">סוכנים מאומתים.<br />שירות אמיתי.</h2>
            <p className="mt-5 text-platinum-400 leading-relaxed">
              ב-ClubGG האיחוד כל סוכן עובר תהליך אימות רציני. אנחנו בודקים רקע, המלצות ועמידה בסטנדרטים. ככה אתם יודעים שאתם עובדים עם מישהו אמין — לא סתם כרטיס ביקור בטלגרם.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "תהליך אימות מתועד ומפוקח",
                "תג סטטוס פומבי — מאומת / בבדיקה / לא מאומת",
                "מעקב ציות שוטף",
                "אפשרות דיווח לקהילה",
                "תמיכה ישירה בוואטסאפ",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-platinum-300">
                  <CheckCircle className="w-4 h-4 text-club-gold-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <a href="/for-agents">
                <Button variant="primary" size="lg" className="bg-club-red-600 hover:bg-club-red-500">
                  למידע לסוכנים <ArrowLeft className="w-4 h-4" />
                </Button>
              </a>
              <a href="/how-verification-works">
                <Button variant="ghost" size="lg" className="text-club-gold-400 hover:text-club-gold-300">
                  איך האימות עובד
                </Button>
              </a>
            </div>
          </div>

          {/* Agent Status Cards */}
          <div className="space-y-3">
            {[
              { name: "סוכן — תל אביב", id: "AG-0142", status: "מאומת", badge: "verified" as const, since: "ינואר 2025" },
              { name: "סוכן — ירושלים", id: "AG-0198", status: "מאומת", badge: "verified" as const, since: "מרץ 2025" },
              { name: "סוכן — חיפה", id: "AG-0231", status: "בבדיקה", badge: "under-review" as const, since: "פברואר 2026" },
              { name: "סוכן — ראשון לציון", id: "AG-0267", status: "מאומת", badge: "verified" as const, since: "יוני 2025" },
              { name: "סוכן — באר שבע", id: "AG-0289", status: "מאומת", badge: "verified" as const, since: "אוגוסט 2025" },
            ].map((agent) => (
              <div key={agent.id} className="flex items-center justify-between p-4 rounded-xl bg-obsidian-800/40 border border-graphite-700/30 hover:border-club-red-800/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-graphite-700/60 flex items-center justify-center">
                    <Users className="w-4 h-4 text-platinum-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ivory-100">{agent.name}</p>
                    <p className="text-[10px] text-platinum-500">{agent.id} • מאז {agent.since}</p>
                  </div>
                </div>
                <Badge variant={agent.badge}>{agent.status}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* === HOW TO JOIN === */}
      <Section className="border-t border-graphite-800 bg-obsidian-900/30">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-club-gold-500 uppercase tracking-[0.15em] mb-3 block">איך מצטרפים</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">שלושה צעדים — ואתם בפנים</h2>
          <p className="mt-4 text-platinum-400">תהליך הרשמה מהיר ופשוט. תוך דקות אתם על השולחן.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "הרשמה מהירה", desc: "הורידו את האפליקציה ופתחו חשבון. התהליך לוקח פחות מ-2 דקות.", icon: Download },
            { step: "02", title: "הצטרפו לקלאב", desc: "התחברו לקלאב הישראלי שלנו עם קוד ייעודי. הסוכן שלנו ידריך אתכם.", icon: Users },
            { step: "03", title: "שחקו ותהנו", desc: "בחרו שולחן, הפקידו ותתחילו לשחק. בונוס 50% מחכה לכם על ההפקדה הראשונה.", icon: Trophy },
          ].map((s) => (
            <div key={s.step} className="relative p-8 rounded-2xl border border-graphite-700/50 bg-obsidian-800/20 text-center">
              <span className="text-6xl font-black text-graphite-700/40 absolute top-4 left-4">{s.step}</span>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-club-red-900/30 border border-club-red-800/30 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-7 h-7 text-club-gold-500" />
                </div>
                <h4 className="text-lg font-bold text-ivory-50 mb-3">{s.title}</h4>
                <p className="text-sm text-platinum-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף ל-ClubGG" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="xl" className="bg-[#25D366] hover:bg-[#1fb855] text-white">
              <MessageCircle className="w-5 h-5" />
              התחילו עכשיו — דברו עם סוכן
            </Button>
          </a>
        </div>
      </Section>

      {/* === ECOSYSTEM === */}
      <Section className="border-t border-graphite-800">
        <span className="text-xs font-semibold text-platinum-500 uppercase tracking-[0.15em] mb-8 block">המערכת שלנו</span>
        <div className="grid md:grid-cols-2 gap-6">
          <a href={process.env.NEXT_PUBLIC_NEWS_URL || "https://news.ggclube.com"} className="group">
            <div className="h-full rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-8 hover:border-emerald-800/50 transition-all duration-500">
              <Newspaper className="w-8 h-8 text-emerald-400 mb-5" />
              <h3 className="text-xl font-bold text-ivory-50 mb-2">GGClube News</h3>
              <p className="text-sm text-platinum-400 leading-relaxed mb-4">סיקור טורנירים, דירוגים, מאגר סוכנים מאומתים וניתוח אסטרטגי — מתעדכן יומית.</p>
              <span className="text-sm text-emerald-400 group-hover:underline">לחדשות ←</span>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.ggclube.com"} className="group">
            <div className="h-full rounded-2xl border border-graphite-700 bg-obsidian-800/30 p-8 hover:border-emerald-800/50 transition-all duration-500">
              <BookOpen className="w-8 h-8 text-emerald-400 mb-5" />
              <h3 className="text-xl font-bold text-ivory-50 mb-2">GGClube Academy</h3>
              <p className="text-sm text-platinum-400 leading-relaxed mb-4">קורסים מובנים, אימון מקצועי ומסלולי למידה — לכל הרמות.</p>
              <span className="text-sm text-emerald-400 group-hover:underline">ללמידה ←</span>
            </div>
          </a>
        </div>
      </Section>

      {/* === FINAL CTA === */}
      <section className="border-t border-graphite-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-club-red-900/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <Image src="/ggclub-logo.png" alt="ClubGG" width={64} height={64} className="rounded-xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-50 tracking-tight">מוכנים להצטרף?</h2>
          <p className="mt-4 text-lg text-platinum-400 max-w-xl mx-auto">
            הצטרפו לקהילה הכי אמינה בישראל. סוכנים מאומתים, בונוסים שווים, ותמיכה בעברית 24/7.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף ל-ClubGG" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="xl" className="bg-[#25D366] hover:bg-[#1fb855] text-white">
                <MessageCircle className="w-5 h-5" />
                וואטסאפ עם סוכן
              </Button>
            </a>
            <a href="/apply/agent">
              <Button variant="outline" size="xl" className="border-club-red-600/50 text-club-red-400 hover:border-club-red-500">
                הגשת מועמדות כסוכן
              </Button>
            </a>
          </div>
          <p className="mt-8 text-[10px] text-platinum-500 max-w-md mx-auto">
            על השחקן להיות בגיל 21+. ClubGG האיחוד היא פלטפורמת קהילה ותוכן. השימוש באתר כפוף ל<a href="/legal/terms" className="hover:text-platinum-300 underline">תנאי השימוש</a> ו<a href="/legal/privacy" className="hover:text-platinum-300 underline">מדיניות הפרטיות</a>.
          </p>
        </div>
      </section>
    </>
  );
}
