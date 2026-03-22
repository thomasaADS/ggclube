import { ArrowLeft, BookOpen, Users, Trophy, Play, CheckCircle, Star, Target, Layers, Zap, MessageCircle } from "lucide-react";

const COURSES = [
  { title: "יסודות הפוקר", level: "מתחילים", lessons: 24, desc: "פוזיציה, סיכויי פוט, קריאת ידיים — הבסיס.", img: "/courses/cards1.jpg", href: "/courses/fundamentals" },
  { title: "Masterclass טורנירים", level: "בינוני", lessons: 36, desc: "ICM, באבל, שולחן גמר — הכל.", img: "/courses/chips1.jpg", href: "/courses/tournament" },
  { title: "ניצול בקאש", level: "מתקדם", lessons: 18, desc: "אקספלויט, סייזינג, ניהול סשן.", img: "/courses/table1.jpg", href: "/courses/cash" },
  { title: "המשחק המנטלי", level: "כל הרמות", lessons: 12, desc: "טילט, פוקוס, ביצועים תחת לחץ.", img: "/courses/mind1.jpg", href: "/courses/mental" },
  { title: "שליטה ב-Preflop", level: "מתחילים", lessons: 16, desc: "ריינג׳ים, 3-bet, סקוויז.", img: "/courses/cards2.jpg", href: "/courses/preflop" },
  { title: "ניהול באנקרול", level: "כל הרמות", lessons: 8, desc: "כמה באיים, מתי לעלות ומתי לרדת.", img: "/courses/chips2.jpg", href: "/courses/bankroll" },
];

export default function AcademyHome() {
  return (
    <>
      {/* ===== HERO — FULL WIDTH IMAGE ===== */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/courses/hero-cards.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-40 w-full">
          <span className="inline-block text-[10px] font-black text-gold-500 tracking-[0.2em] uppercase bg-bg/60 backdrop-blur px-3 py-1.5 rounded-full mb-5">ClubGG Academy — בית הספר לפוקר</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] drop-shadow-lg max-w-2xl">
            תפסיקו לנחש.
            <span className="block text-red-400 mt-1">תתחילו לנצח.</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-lg drop-shadow">
            קורסים מובנים עם מאמנים אמיתיים. מסלולי למידה שבנויים לתוצאות.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/join"><button className="h-12 px-7 rounded-xl bg-gradient-to-l from-red-600 to-red-500 text-white font-bold text-[15px] hover:from-red-500 hover:to-red-400 transition-all cursor-pointer shadow-lg shadow-red-500/25 inline-flex items-center gap-2">התחילו חינם <ArrowLeft className="w-4 h-4" /></button></a>
            <a href="/quiz"><button className="h-12 px-7 rounded-xl bg-white/15 backdrop-blur text-white font-bold text-[15px] hover:bg-white/25 transition-all cursor-pointer border border-white/20 inline-flex items-center gap-2"><Target className="w-4 h-4" />מבחן התאמה</button></a>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-bg-card border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "90+", label: "שיעורי וידאו", icon: Play },
            { value: "6", label: "קורסים מובנים", icon: BookOpen },
            { value: "₪0", label: "להתחיל", icon: Trophy },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <s.icon className="w-5 h-5 text-red-400 mb-1" />
              <span className="text-2xl font-black text-t-50">{s.value}</span>
              <span className="text-xs text-t-400">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COURSES — POKER IMAGES ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">COURSES</span>
              <h2 className="text-3xl font-black text-t-50 mt-1">הקורסים שלנו</h2>
            </div>
            <a href="/courses" className="text-sm text-red-400 font-bold hover:underline">כל הקורסים ←</a>
          </div>

          {/* Featured course — big */}
          <a href={COURSES[0].href} className="group block rounded-2xl overflow-hidden mb-8 relative">
            <div className="aspect-[21/9] overflow-hidden">
              <img src={COURSES[0].img} alt={COURSES[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-l from-bg via-bg/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 p-8 max-w-md">
              <span className="text-[10px] font-black text-red-400 bg-red-500/20 px-2.5 py-1 rounded-full">{COURSES[0].level} • {COURSES[0].lessons} שיעורים</span>
              <h3 className="text-2xl font-black text-t-50 mt-3 group-hover:text-red-400 transition-colors">{COURSES[0].title}</h3>
              <p className="text-sm text-t-300 mt-2">{COURSES[0].desc}</p>
            </div>
          </a>

          {/* Rest of courses — grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.slice(1).map(c => (
              <a key={c.title} href={c.href} className="group block rounded-xl bg-bg-card border border-line overflow-hidden hover:border-line-hover hover:shadow-card transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-red-400">{c.level} • {c.lessons} שיעורים</span>
                  <h3 className="text-base font-bold text-t-50 mt-1 group-hover:text-red-400 transition-colors">{c.title}</h3>
                  <p className="text-sm text-t-400 mt-1">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARNING PATHS ===== */}
      <section className="py-16 bg-bg-card border-y border-line relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(198,40,40,0.05)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">PATHS</span>
          <h2 className="text-3xl font-black text-t-50 mt-1 mb-3">בחרו מסלול. קבלו תוכנית.</h2>
          <p className="text-t-400 mb-10 max-w-lg">לא סתם רשימת סרטונים. כל מסלול בנוי בסדר הנכון עם יעדים ברורים.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "מסלול יסודות", level: "מתחיל → בינוני", courses: 4, weeks: "6 שבועות", desc: "מאפס לאסטרטגיה אמיתית. הבסיס שבלעדיו אי אפשר.", icon: Target, color: "from-red-500/10 to-transparent" },
              { name: "מומחה טורנירים", level: "בינוני → מתקדם", courses: 3, weeks: "4 שבועות", desc: "ICM, שולחנות גמר, באבל. להפוך ידע לכסף.", icon: Layers, color: "from-gold-500/10 to-transparent" },
              { name: "בונה יתרון", level: "מתקדם", courses: 3, weeks: "4 שבועות", desc: "לשחקנים שכבר מנצחים. דקדוק, ניצול, הרגלי אליטה.", icon: Zap, color: "from-red-500/10 to-transparent" },
            ].map(p => (
              <div key={p.name} className={`p-6 rounded-2xl bg-gradient-to-b ${p.color} border border-line hover:border-line-hover transition-all`}>
                <p.icon className="w-8 h-8 text-gold-500 mb-5" />
                <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">{p.level}</span>
                <h3 className="text-xl font-black text-t-50 mt-3 mb-2">{p.name}</h3>
                <p className="text-sm text-t-400 leading-relaxed">{p.desc}</p>
                <p className="text-xs text-t-500 mt-4">{p.courses} קורסים • {p.weeks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISUAL STRIP — POKER ATMOSPHERE ===== */}
      <section className="relative h-[300px] overflow-hidden">
        <img src="/courses/atmosphere.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-bg/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-t-50">הפוקר הוא לא מזל.<br /><span className="text-red-400">הוא מיומנות.</span></h2>
            <a href="/join"><button className="mt-6 h-11 px-8 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors cursor-pointer inline-flex items-center gap-2">התחילו ללמוד <ArrowLeft className="w-4 h-4" /></button></a>
          </div>
        </div>
      </section>

      {/* ===== COACHES ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">COACHES</span>
          <h2 className="text-3xl font-black text-t-50 mt-1 mb-8">המאמנים</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "מאמן MTT", spec: "טורנירים", cred: "15+ שנים, ₪7M+", img: "/coaches/coach-1.jpg" },
              { name: "מאמן קאש", spec: "קאש גיימס", cred: "היי-סטייקס, 3 ספרים", img: "/coaches/coach-2.jpg" },
              { name: "מאמן מנטלי", spec: "פסיכולוגיה", cred: "פסיכולוג ספורט", img: "/coaches/coach-3.jpg" },
              { name: "מאמן יסודות", spec: "מתחילים", cred: "10,000+ תלמידים", img: "/coaches/coach-4.jpg" },
            ].map(c => (
              <a key={c.name} href="/coaches" className="group block rounded-xl overflow-hidden relative aspect-[3/4]">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="text-[10px] font-bold text-red-400">{c.spec}</span>
                  <h3 className="text-base font-bold text-t-50 mt-0.5">{c.name}</h3>
                  <p className="text-xs text-t-300">{c.cred}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section className="py-16 bg-bg-card border-y border-line">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">COMMUNITY</span>
          <h2 className="text-3xl font-black text-t-50 mt-1 mb-8">הקהילה</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <a href="#" className="p-6 rounded-xl bg-bg-elevated border border-line hover:border-[#25D366]/40 transition-all group text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4"><MessageCircle className="w-7 h-7 text-[#25D366]" /></div>
              <h3 className="text-base font-bold text-t-50 group-hover:text-[#25D366]">וואטסאפ</h3>
              <p className="text-sm text-t-400 mt-1">דיונים, שאלות ועזרה הדדית</p>
              <button className="mt-4 h-9 px-5 rounded-lg bg-[#25D366] text-white text-xs font-bold cursor-pointer">הצטרפו</button>
            </a>
            <a href="#" className="p-6 rounded-xl bg-bg-elevated border border-line hover:border-[#0088cc]/40 transition-all group text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </div>
              <h3 className="text-base font-bold text-t-50 group-hover:text-[#0088cc]">טלגרם</h3>
              <p className="text-sm text-t-400 mt-1">עדכונים וטיפים יומיים</p>
              <button className="mt-4 h-9 px-5 rounded-lg bg-[#0088cc] text-white text-xs font-bold cursor-pointer">הצטרפו</button>
            </a>
            <a href="/community" className="p-6 rounded-xl bg-bg-elevated border border-line hover:border-red-500/30 transition-all group text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-red-400" /></div>
              <h3 className="text-base font-bold text-t-50 group-hover:text-red-400">פורום</h3>
              <p className="text-sm text-t-400 mt-1">ניתוח ידיים וקבוצות למידה</p>
              <button className="mt-4 h-9 px-5 rounded-lg bg-red-500/10 text-red-400 text-xs font-bold cursor-pointer border border-red-500/20">למידע</button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">REVIEWS</span>
          <h2 className="text-3xl font-black text-t-50 mt-1 mb-8">מה אומרים</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { q: "קורס הטורנירים שינה לי את הגישה ל-ICM. תוצאות תוך חודש.", who: "שחקן — ת״א", lvl: "בינוני" },
              { q: "6 שבועות במסלול היסודות > שנתיים ביוטוב. כי זה בסדר הנכון.", who: "שחקן — חיפה", lvl: "מתחיל" },
              { q: "הקורס המנטלי חובה. הפסקתי להפסיד סשנים בגלל טילט.", who: "שחקן — י-ם", lvl: "מתקדם" },
            ].map(t => (
              <div key={t.who} className="p-6 rounded-xl bg-bg-card border border-line">
                <div className="flex gap-0.5 mb-3">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 text-gold-500 fill-gold-500"/>)}</div>
                <p className="text-sm text-t-300 leading-relaxed italic">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-4"><p className="text-sm font-bold text-t-50">{t.who}</p><p className="text-xs text-t-500">{t.lvl}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-16 bg-bg-card border-y border-line">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black text-red-400 tracking-[0.15em]">PRICING</span>
            <h2 className="text-3xl font-black text-t-50 mt-1">חינם להתחיל. ₪99 לגישה מלאה.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-bg-elevated border border-line">
              <span className="text-xs font-bold text-t-400">חינם</span>
              <p className="text-4xl font-black text-t-50 mt-2">₪0</p>
              <p className="text-xs text-t-500 mt-1 mb-6">לתמיד</p>
              <ul className="space-y-2.5 mb-8">
                {["קורס יסודות","פורומים","ניוזלטר","וואטסאפ"].map(i=>(
                  <li key={i} className="flex items-center gap-2 text-sm text-t-300"><CheckCircle className="w-4 h-4 text-ok-500"/>{i}</li>
                ))}
              </ul>
              <a href="/join"><button className="w-full h-11 rounded-xl border border-line text-t-200 font-bold text-sm hover:bg-bg-surface transition-colors cursor-pointer">הצטרפו חינם</button></a>
            </div>
            <div className="p-8 rounded-2xl bg-bg-elevated border-2 border-red-500 shadow-glow relative overflow-hidden">
              <div className="absolute top-0 left-0 px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-br-lg">מומלץ</div>
              <span className="text-xs font-bold text-red-400">פרימיום</span>
              <p className="text-4xl font-black text-t-50 mt-2">₪99<span className="text-lg text-t-400">/חודש</span></p>
              <p className="text-xs text-t-500 mt-1 mb-6">ביטול בכל עת</p>
              <ul className="space-y-2.5 mb-8">
                {["כל הקורסים","קהילה פרימיום","Q&A מאמנים","כלים מתקדמים","תמיכה VIP","טלגרם VIP"].map(i=>(
                  <li key={i} className="flex items-center gap-2 text-sm text-t-300"><CheckCircle className="w-4 h-4 text-ok-500"/>{i}</li>
                ))}
              </ul>
              <a href="/join"><button className="w-full h-11 rounded-xl bg-gradient-to-l from-red-600 to-red-500 text-white font-bold text-sm hover:from-red-500 hover:to-red-400 transition-all cursor-pointer shadow-lg shadow-red-500/20 inline-flex items-center justify-center gap-2">התחילו <ArrowLeft className="w-4 h-4"/></button></a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/courses/player1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bg/80" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-t-50">הרמה הבאה מתחילה עכשיו</h2>
          <p className="mt-3 text-t-300 max-w-md mx-auto">כל שחקן שהשתפר עשה דבר אחד: בחר מסלול מובנה במקום תוכן אקראי.</p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="/join"><button className="h-13 px-8 rounded-xl bg-gradient-to-l from-red-600 to-red-500 text-white font-black text-base hover:from-red-500 hover:to-red-400 transition-all cursor-pointer shadow-xl shadow-red-500/30 inline-flex items-center gap-2">התחילו — חינם <ArrowLeft className="w-5 h-5"/></button></a>
            <a href="/quiz"><button className="h-13 px-8 rounded-xl bg-white/10 text-t-50 font-black text-base hover:bg-white/20 transition-all cursor-pointer border border-white/20 inline-flex items-center gap-2"><Target className="w-5 h-5"/>מבחן התאמה</button></a>
          </div>
        </div>
      </section>
    </>
  );
}
