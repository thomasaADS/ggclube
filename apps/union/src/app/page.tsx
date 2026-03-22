import { Badge } from "@ggclube/ui";
import { Shield, Users, CheckCircle, ArrowLeft, Lock, Download, MessageCircle, Trophy, Zap, Star, Clock, Headphones, BookOpen, Newspaper } from "lucide-react";
import Image from "next/image";

function RedLine() {
  return <div className="h-[2px] bg-gradient-to-r from-transparent via-club-red-600/40 to-transparent" />;
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO WITH IMAGE ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-main.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-obsidian-950 via-obsidian-950/85 to-obsidian-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Image src="/logo-icon.png" alt="ClubGG" width={44} height={44} className="rounded-xl shadow-lg" />
              <div>
                <p className="text-xl font-black text-white leading-tight">ClubGG Union</p>
                <p className="text-[11px] text-club-gold-400 font-medium">הקהילה הרשמית של שחקני הפוקר בישראל</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] drop-shadow-lg">
              ברוכים הבאים<br />
              לעולם הפוקר<br />
              <span className="text-club-gold-400">האמיתי</span>
            </h1>

            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-lg">
              סוכנים מאומתים, שולחנות פעילים 24/7, בונוסים שווים וקהילה אמינה. הכל במקום אחד.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2.5 h-13 px-7 rounded-xl bg-[#25D366] text-white font-bold text-[15px] hover:bg-[#1ebe5d] transition-all shadow-xl shadow-[#25D366]/25 cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                  דברו עם סוכן בוואטסאפ
                </button>
              </a>
              <a href="/apply/agent">
                <button className="inline-flex items-center gap-2 h-13 px-7 rounded-xl bg-white/10 backdrop-blur text-white font-bold text-[15px] hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
                  הגשת מועמדות כסוכן
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: "🎯", label: "קהילה פעילה עם שחקנים מכל הארץ" },
                { icon: "🕐", label: "שולחנות פתוחים מסביב לשעון" },
                { icon: "🎁", label: "בונוס הפקדה ראשונה לשחקנים חדשים" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-lg">{s.icon}</span>
                  <p className="text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== FEATURE CARDS WITH IMAGES ===== */}
      <section className="bg-obsidian-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { img: "/card-tables.jpg", title: "שולחנות פעילים 24/7" },
              { img: "/card-bonus.jpg", title: "50% בונוס הפקדה" },
              { img: "/card-cash.jpg", title: "משחקי קאש חיים" },
              { img: "/card-platinum.jpg", title: "GGPlatinum VIP" },
              { img: "/card-clubgg.jpg", title: "מה זה ClubGG" },
            ].map((card) => (
              <a key={card.title} href="#" className="group relative rounded-2xl overflow-hidden aspect-[3/4] block">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-sm font-bold text-white drop-shadow-lg">{card.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== GAME TYPES ===== */}
      <section className="bg-obsidian-900/40 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-club-gold-500 tracking-wide mb-2">משחקים</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ivory-50">כל סוגי הפוקר — במקום אחד</h2>
            <p className="mt-3 text-platinum-400">שולחנות קאש, טורנירים ועוד. כל הפורמטים, בכל הרמות.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { img: "/banner-1.png", title: "טקסס הולדם", desc: "המשחק הקלאסי. שולחנות בכל הרמות — מיקרו ועד היי-סטייקס. זמין 24/7." },
              { img: "/banner-2.png", title: "אומהה", desc: "PLO4, PLO5, PLO6 — כל הווריאציות. אקשן ברמה אחרת לגמרי." },
              { img: "/banner-3.png", title: "טורנירים", desc: "MTT, SNG, סטלייטים ופרייזפולים ענקיים. טורנירים ייעודיים לקהילה." },
            ].map((game) => (
              <div key={game.title} className="rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="bg-obsidian-800/60 p-5">
                  <h3 className="text-lg font-bold text-ivory-50 mb-1.5">{game.title}</h3>
                  <p className="text-sm text-platinum-400 leading-relaxed">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== WHY US ===== */}
      <section className="bg-obsidian-950 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-club-gold-500 tracking-wide mb-2">למה ClubGG Union</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ivory-50">לא סתם עוד קלאב פוקר</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "סוכנים מאומתים", desc: "כל סוכן עובר בדיקה. יודעים בדיוק עם מי עובדים." },
              { icon: Clock, title: "שולחנות 24/7", desc: "קאש וטורנירים מסביב לשעון. תמיד יש משחק." },
              { icon: Headphones, title: "תמיכה בעברית", desc: "צוות ישראלי בוואטסאפ, בלי בירוקרטיה." },
              { icon: Zap, title: "בונוסים שווים", desc: "50% הפקדה ראשונה ופרומואים שוטפים." },
              { icon: Lock, title: "אבטחה מלאה", desc: "הגנה על הכסף שלכם עם RNG מאושר." },
              { icon: Star, title: "GGPlatinum", desc: "חברות VIP עם הטבות בלעדיות." },
              { icon: Users, title: "קהילה ישראלית", desc: "שחקנים מכל הארץ. שולחנות ישראלים, אווירה ישראלית." },
              { icon: Trophy, title: "טורנירים ייעודיים", desc: "טורנירים לקהילה עם פרייזפולים מכובדים." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-graphite-700/30 bg-obsidian-800/20 hover:bg-obsidian-800/40 hover:border-club-red-800/30 transition-all">
                <item.icon className="w-6 h-6 text-club-gold-500 mb-3" />
                <h4 className="text-sm font-bold text-ivory-50 mb-1">{item.title}</h4>
                <p className="text-xs text-platinum-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== SECURITY + FEATURES ===== */}
      <section className="bg-obsidian-900/30 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img src="/security.jpg" alt="אבטחת שחקן" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="text-xs font-bold text-club-gold-400 mb-2">אבטחה</p>
                <h3 className="text-2xl font-bold text-white mb-2">אבטחת השחקן</h3>
                <p className="text-sm text-white/70">מערכת אבטחה מתקדמת, RNG מאושר, והגנה מלאה על הכספים והמידע שלכם.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img src="/features.jpg" alt="פיצ׳רים מיוחדים" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="text-xs font-bold text-club-gold-400 mb-2">פיצ׳רים</p>
                <h3 className="text-2xl font-bold text-white mb-2">פיצ׳רים מיוחדים</h3>
                <p className="text-sm text-white/70">SmartHUD, PokerCraft, סטטיסטיקות מתקדמות וכלי ניתוח שיעזרו לכם להשתפר.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== AGENTS ===== */}
      <section className="bg-obsidian-950 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold text-club-gold-500 tracking-wide mb-2">מערכת הסוכנים</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ivory-50 leading-tight">סוכנים מאומתים.<br />שירות אמיתי.</h2>
              <p className="mt-4 text-platinum-400 leading-relaxed">
                כל סוכן עובר תהליך אימות רציני — בדיקת רקע, המלצות ועמידה בסטנדרטים. ככה אתם יודעים שאתם עובדים עם מישהו אמין.
              </p>
              <ul className="mt-5 space-y-2.5">
                {["תהליך אימות מתועד ומפוקח", "תג סטטוס פומבי — מאומת / בבדיקה", "מעקב ציות שוטף", "אפשרות דיווח לקהילה", "תמיכה ישירה בוואטסאפ"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-platinum-300">
                    <CheckCircle className="w-4 h-4 text-club-gold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-3">
                <a href="/for-agents">
                  <button className="h-11 px-6 rounded-xl bg-club-red-600 text-white text-sm font-bold hover:bg-club-red-500 transition-colors inline-flex items-center gap-2 cursor-pointer">
                    למידע לסוכנים <ArrowLeft className="w-4 h-4" />
                  </button>
                </a>
                <a href="/how-verification-works">
                  <button className="h-11 px-6 rounded-xl text-club-gold-400 text-sm font-bold hover:bg-obsidian-800/60 transition-colors cursor-pointer">
                    איך האימות עובד
                  </button>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: "סוכן — תל אביב", id: "AG-0142", status: "מאומת", badge: "verified" as const },
                { name: "סוכן — ירושלים", id: "AG-0198", status: "מאומת", badge: "verified" as const },
                { name: "סוכן — חיפה", id: "AG-0231", status: "בבדיקה", badge: "under-review" as const },
                { name: "סוכן — ראשון לציון", id: "AG-0267", status: "מאומת", badge: "verified" as const },
                { name: "סוכן — באר שבע", id: "AG-0289", status: "מאומת", badge: "verified" as const },
              ].map((agent) => (
                <div key={agent.id} className="flex items-center justify-between p-4 rounded-xl bg-obsidian-800/30 border border-graphite-700/30 hover:border-graphite-600/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-graphite-700/50 flex items-center justify-center">
                      <Users className="w-4 h-4 text-platinum-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ivory-100">{agent.name}</p>
                      <p className="text-[10px] text-platinum-500">{agent.id}</p>
                    </div>
                  </div>
                  <Badge variant={agent.badge}>{agent.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== HOW TO JOIN — WITH SCREENSHOTS ===== */}
      <section className="bg-obsidian-900/30 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-club-gold-500 tracking-wide mb-2">איך מצטרפים</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ivory-50">שלושה צעדים — ואתם בפנים</h2>
            <p className="mt-3 text-platinum-400">תהליך הרשמה מהיר ופשוט. תוך דקות אתם על השולחן.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "01", img: "/step1.jpeg", title: "הרשמה מהירה", desc: "הורידו את האפליקציה ופתחו חשבון. לוקח פחות מ-2 דקות." },
              { step: "02", img: "/step2.jpeg", title: "הצטרפו לקלאב", desc: "התחברו לקלאב הישראלי עם קוד ייעודי. הסוכן ידריך אתכם." },
              { step: "03", img: "/step3.jpeg", title: "שחקו ותהנו", desc: "בחרו שולחן, הפקידו ותתחילו לשחק. בונוס 50% מחכה!" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="rounded-2xl overflow-hidden mb-6 mx-auto max-w-[200px] shadow-2xl shadow-black/40 border border-graphite-700/30">
                  <img src={s.img} alt={s.title} className="w-full aspect-[9/16] object-cover" />
                </div>
                <span className="text-3xl font-black text-club-gold-500/30">{s.step}</span>
                <h4 className="text-lg font-bold text-ivory-50 mt-1 mb-2">{s.title}</h4>
                <p className="text-sm text-platinum-400 leading-relaxed max-w-[250px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2.5 h-13 px-8 rounded-xl bg-[#25D366] text-white font-bold text-[15px] hover:bg-[#1ebe5d] transition-all shadow-xl shadow-[#25D366]/25 cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                התחילו עכשיו — דברו עם סוכן
              </button>
            </a>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== DOWNLOAD APP ===== */}
      <section className="bg-obsidian-950 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-graphite-700/40 bg-obsidian-800/30 p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Image src="/logo-icon.png" alt="ClubGG" width={56} height={56} className="rounded-2xl mb-5" />
                <h2 className="text-3xl font-black text-ivory-50">הורידו את ClubGG</h2>
                <p className="mt-3 text-platinum-400 leading-relaxed">זמין לאנדרואיד, אייפון ומחשב. הרשמו תוך דקות והתחילו לשחק עם הקהילה הישראלית.</p>
                <div className="mt-6 p-4 rounded-xl bg-club-red-900/20 border border-club-red-800/20 inline-block">
                  <p className="text-sm font-bold text-club-red-400">🎁 בונוס 50% על ההפקדה הראשונה לשחקנים חדשים</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-w-[280px] md:mx-auto">
                {[
                  { img: "/download-google.webp", label: "Google Play" },
                  { img: "/download-appstore.webp", label: "App Store" },
                  { img: "/download-windows.webp", label: "Windows" },
                ].map((dl) => (
                  <a key={dl.label} href="#" className="flex items-center justify-center p-3 rounded-xl bg-obsidian-900/60 border border-graphite-700/40 hover:border-graphite-500/50 transition-all">
                    <img src={dl.img} alt={dl.label} className="h-10 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== AMBASSADORS ===== */}
      <section className="border-t border-club-red-800/20 relative overflow-hidden">
        <div className="relative h-[400px]">
          <img src="/ambassadors.jpg" alt="שגרירי ClubGG" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-10 md:p-16">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold text-club-gold-400 mb-2">קהילה</p>
              <h2 className="text-3xl font-black text-white">שגרירי ClubGG</h2>
              <p className="mt-2 text-white/70 max-w-lg">שחקנים מקצועיים ומשפיענים שמייצגים את הקהילה שלנו ברמה הגבוהה ביותר.</p>
            </div>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== FAQ ===== */}
      <section className="bg-obsidian-950 py-20 border-t border-club-red-800/20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-club-gold-500 tracking-wide mb-2">שאלות נפוצות</p>
            <h2 className="text-3xl font-black text-ivory-50">שאלות ותשובות</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "מה זה ClubGG?", a: "ClubGG היא אפליקציית פוקר חברתית מבית GGPoker. היא מאפשרת לשחק פוקר בקלאבים פרטיים עם חברים ושחקנים מכל העולם." },
              { q: "האם ClubGG Union זה אתר הימורים?", a: "לא. ClubGG Union היא פלטפורמת קהילה ותוכן. אנחנו לא מפעילים שירותי הימורים ולא מקבלים הפקדות. אנחנו מחברים שחקנים לסוכנים מאומתים." },
              { q: "איך מצטרפים?", a: "מורידים את האפליקציה, יוצרים חשבון, ומצטרפים לקלאב הישראלי דרך קוד שתקבלו מהסוכן. התהליך לוקח 2 דקות." },
              { q: "מה זה סוכן מאומת?", a: "סוכן שעבר את תהליך האימות שלנו — בדיקת רקע, המלצות מהקהילה ועמידה בסטנדרטים. הסטטוס שלו פומבי ושקוף." },
              { q: "מה הבונוסים?", a: "שחקנים חדשים מקבלים 50% בונוס על ההפקדה הראשונה. בנוסף יש בונוסי ריבאי ופרומואים שוטפים." },
              { q: "האם צריך להיות בגיל מסוים?", a: "כן, על השחקן להיות בגיל 21+." },
              { q: "איך יוצרים קשר?", a: "דרך וואטסאפ בלחיצה על הכפתור באתר, או דרך דף צור קשר." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-graphite-700/30 bg-obsidian-800/20 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-obsidian-800/40 transition-colors list-none">
                  <span className="text-sm font-semibold text-ivory-100">{faq.q}</span>
                  <span className="text-platinum-500 group-open:rotate-45 transition-transform text-xl leading-none mr-1">+</span>
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-platinum-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== ECOSYSTEM ===== */}
      <section className="bg-obsidian-900/30 py-16 border-t border-club-red-800/20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold text-platinum-500 tracking-wide mb-6">עוד מ-ClubGG</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <a href={process.env.NEXT_PUBLIC_NEWS_URL || "#"} className="group p-6 rounded-xl border border-graphite-700/30 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
              <Newspaper className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-ivory-50 mb-1">חדשות הפוקר</h3>
              <p className="text-xs text-platinum-400">סיקור טורנירים, דירוגים ומאגר סוכנים מאומתים.</p>
            </a>
            <a href={process.env.NEXT_PUBLIC_ACADEMY_URL || "#"} className="group p-6 rounded-xl border border-graphite-700/30 bg-obsidian-800/20 hover:border-emerald-800/40 transition-all">
              <BookOpen className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-ivory-50 mb-1">אקדמיית הפוקר</h3>
              <p className="text-xs text-platinum-400">קורסים מובנים, אימון מקצועי ומסלולי למידה.</p>
            </a>
          </div>
        </div>
      </section>

      <RedLine />

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-club-red-800/20">
        <div className="absolute inset-0 bg-gradient-to-b from-club-red-900/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <Image src="/logo-icon.png" alt="ClubGG" width={48} height={48} className="rounded-xl mx-auto mb-5" />
          <h2 className="text-3xl font-black text-ivory-50">מוכנים להצטרף?</h2>
          <p className="mt-3 text-platinum-400 max-w-md mx-auto">
            סוכנים מאומתים, בונוסים שווים, ותמיכה בעברית 24/7.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://api.whatsapp.com/send/?phone=%2B972525780821&text=היי, אשמח להצטרף" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ebe5d] transition-colors shadow-lg shadow-[#25D366]/20 cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                וואטסאפ עם סוכן
              </button>
            </a>
            <a href="/apply/agent">
              <button className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border border-club-red-700/50 text-club-red-400 font-bold text-sm hover:bg-club-red-900/20 transition-colors cursor-pointer">
                הגשת מועמדות כסוכן
              </button>
            </a>
          </div>
          <p className="mt-8 text-[10px] text-platinum-500/60 max-w-sm mx-auto">
            על השחקן להיות בגיל 21+. השימוש באתר כפוף ל<a href="/legal/terms" className="underline hover:text-platinum-400">תנאי השימוש</a> ו<a href="/legal/privacy" className="underline hover:text-platinum-400">מדיניות הפרטיות</a>.
          </p>
        </div>
      </section>
    </>
  );
}
