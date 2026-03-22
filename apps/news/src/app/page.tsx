import { Clock, User, MapPin, Calendar, MessageCircle, Trophy, TrendingUp } from "lucide-react";

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center text-white text-3xl font-black ${color}`}>
      {initials}
    </div>
  );
}

export default function NewsHomePage() {
  return (
    <>
      {/* ===== TICKER ===== */}
      <div className="bg-accent-500 text-white">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center gap-3 text-sm">
          <span className="font-black text-xs bg-white text-accent-500 px-2 py-0.5 rounded shrink-0">חדש</span>
          <span className="truncate">WSOP Europe 2026 בפראג בעוד 9 ימים • מתן קרקוב מגן על התואר • 15 אירועי צמיד</span>
        </div>
      </div>

      {/* ===== LEAD + HEADLINES ===== */}
      <section className="border-b-2 border-ink-900/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <a href="/articles/mizrachi-wsop-2025" className="group block">
                <div className="aspect-video rounded-lg bg-ink-900 mb-5 overflow-hidden">
                  <iframe src="https://www.youtube-nocookie.com/embed/7QOTdbfVocI" title="מיזרצ׳י WSOP 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
                </div>
                <span className="text-[10px] font-bold text-accent-500 tracking-wider">WSOP 2025 • כתבה ראשית</span>
                <h2 className="text-2xl sm:text-3xl font-black text-ink-900 leading-snug mt-1 group-hover:text-accent-500 transition-colors" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
                  מייקל מיזרצ׳י זוכה באליפות העולם 2025 — ורושם את עצמו בהיסטוריה
                </h2>
                <p className="mt-3 text-ink-500 leading-relaxed">הישראלי-אמריקאי ירד ל-3 ביג בליינדס ביום 8, חזר בסערה וזכה ב-$10M ובצמיד השמיני שלו.</p>
              </a>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-4">כותרות חמות</h3>
              <div className="divide-y divide-ink-900/10">
                {[
                  { title: "אלי אלעזרא — 5 צמידים והישראלי הראשון בהיכל התהילה", href: "/articles/eli-elezra", cat: "פרופיל" },
                  { title: "מתן קרקוב זוכה ב-EPT פראג — €778K", href: "/articles/krakow-ept", cat: "EPT" },
                  { title: "רפי אלהרר — $1.23M מבאיין $525", href: "/articles/rafi-elharar", cat: "WSOP" },
                  { title: "WSOP 2026: 100 אירועים — לוח מלא", href: "/tournaments", cat: "טורנירים" },
                  { title: "PokerStars + FanDuel — מה זה אומר?", href: "#", cat: "תעשייה" },
                  { title: "שון דיב: $100K PLO + שחקן השנה", href: "#", cat: "WSOP" },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="block py-3 first:pt-0 group">
                    <span className="text-[10px] font-bold text-accent-500">{s.cat}</span>
                    <h4 className="text-[13px] font-bold text-ink-800 leading-snug mt-0.5 group-hover:text-accent-500 transition-colors">{s.title}</h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES WITH IMAGES ===== */}
      <section className="py-12 border-b-2 border-ink-900/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-8 inline-block">כתבות אחרונות</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "לאו מרגטס — האישה הראשונה בשולחן הגמר מאז 1995", cat: "WSOP 2025", excerpt: "השחקנית הספרדייה הגיעה למקום ה-7 ב-Main Event.", time: "4 דק׳", initials: "LM", color: "bg-purple-700" },
              { title: "פונאט פונסרי: שחקן השנה הראשון מאסיה", cat: "GPI 2025", excerpt: "61 קאשים, 7 זכיות ו-$10.9M. שבר מחסומים.", time: "5 דק׳", img: "/players/punsri.jpg" },
              { title: "קריסטן פוקסן שוברת שיא: $4.6M", cat: "שחקנים", excerpt: "השחקנית עם הרווחים הגבוהים בהיסטוריה.", time: "4 דק׳", img: "/players/foxen.jpg" },
              { title: "האחים מיזרצ׳י: 13 צמידים למשפחה", cat: "פרופיל", excerpt: "מייקל (8) ורוברט (5) — שיא משפחתי.", time: "6 דק׳", img: "/players/mizrachi.jpg" },
              { title: "ג׳סי לוניס: $13.3M — מספר 1 בעולם", cat: "דירוגים", excerpt: "56 קאשים, 9 זכיות. הכי טוב ב-2025.", time: "5 דק׳", img: "/players/lonis.jpg" },
              { title: "WSOP 2025: 100 אירועים, שיאים חדשים", cat: "WSOP", excerpt: "הסדרה הגדולה ביותר בהיסטוריה.", time: "7 דק׳", img: "/players/deeb.jpg" },
            ].map((article, i) => (
              <a key={i} href="#" className="group block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-paper-200">
                  {article.img ? (
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : article.initials ? (
                    <Avatar initials={article.initials} color={article.color!} />
                  ) : null}
                </div>
                <span className="text-[10px] font-bold text-accent-500">{article.cat}</span>
                <h3 className="text-base font-black text-ink-900 mt-1 leading-snug group-hover:text-accent-500 transition-colors" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{article.title}</h3>
                <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">{article.excerpt}</p>
                <span className="text-xs text-ink-400 mt-2 block"><Clock className="w-3 h-3 inline ml-1" />{article.time}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ISRAELI PLAYERS — UNIQUE PHOTOS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-8 inline-block">שחקנים ישראליים</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "מייקל מיזרצ׳י", title: "8 צמידי WSOP, $10M", href: "/articles/mizrachi-wsop-2025", img: "/players/mizrachi.jpg" },
              { name: "אלי אלעזרא", title: "5 צמידים, היכל התהילה", href: "/articles/eli-elezra", initials: "אא", color: "bg-amber-800" },
              { name: "רוברט מיזרצ׳י", title: "5 צמידי WSOP", href: "#", img: "/players/negreanu.jpg" },
              { name: "מתן קרקוב", title: "אלוף EPT פראג €778K", href: "/articles/krakow-ept", initials: "מק", color: "bg-teal-800" },
              { name: "תימור מרגולין", title: "3 צמידי WSOP", href: "#", initials: "תמ", color: "bg-indigo-800" },
              { name: "רפי אלהרר", title: "$1.23M מבאיין $525", href: "/articles/rafi-elharar", initials: "רא", color: "bg-rose-800" },
              { name: "אמיר להבות", title: "November Nine 2013", href: "#", initials: "אל", color: "bg-sky-800" },
              { name: "אורי גלבוע", title: "אלוף EPT סוצ׳י 2019", href: "#", initials: "אג", color: "bg-emerald-800" },
            ].map((player) => (
              <a key={player.name} href={player.href} className="group rounded-lg bg-card border border-paper-300 overflow-hidden hover:shadow-elevated transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-paper-200">
                  {player.img ? (
                    <img src={player.img} alt={player.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <Avatar initials={player.initials!} color={player.color!} />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-black text-ink-900 group-hover:text-accent-500 transition-colors" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{player.name}</h3>
                  <p className="text-xs text-accent-500 font-bold mt-0.5">{player.title}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-ink-400">ישראל: 22+ צמידי WSOP • 2 אלופי EPT • 2 בני היכל התהילה</p>
        </div>
      </section>

      {/* ===== WORLD STARS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-8 inline-block">כוכבי העולם</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "דניאל נגראנו", country: "קנדה", info: "6 צמידים, היכל התהילה", img: "/players/negreanu.jpg" },
              { name: "פונאט פונסרי", country: "תאילנד", info: "שחקן השנה GPI 2025", img: "/players/punsri.jpg" },
              { name: "קריסטן פוקסן", country: "קנדה", info: "הכי מרוויחה בהיסטוריה", img: "/players/foxen.jpg" },
              { name: "שון דיב", country: "ארה\"ב", info: "7 צמידים, שחקן השנה WSOP", img: "/players/deeb.jpg" },
              { name: "ג׳סי לוניס", country: "ארה\"ב", info: "#1 רשימת הכסף $13.3M", img: "/players/lonis.jpg" },
              { name: "סטיבן צ׳ידוויק", country: "אנגליה", info: "$12.6M ב-2025", initials: "SC", color: "bg-slate-700" },
              { name: "ג׳ייסון קון", country: "ארה\"ב", info: "אגדת Triton", initials: "JK", color: "bg-zinc-700" },
              { name: "פטריק אנטוניוס", country: "פינלנד", info: "היכל התהילה 2024", initials: "PA", color: "bg-stone-700" },
            ].map((p) => (
              <div key={p.name} className="rounded-lg bg-card border border-paper-300 overflow-hidden">
                <div className="aspect-square overflow-hidden bg-paper-200">
                  {p.img ? (
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <Avatar initials={p.initials!} color={p.color!} />
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-ink-900">{p.name}</h3>
                  <p className="text-[10px] text-accent-500 font-bold">{p.country}</p>
                  <p className="text-xs text-ink-500 mt-1">{p.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-8 inline-block">סרטונים</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { id: "KUV9R2CsnsI", title: "הרגעים המנצחים של WSOP 2025" },
              { id: "7QOTdbfVocI", title: "מיזרצ׳י זוכה ב-Main Event" },
              { id: "aY-_suOLLmo", title: "דניאל נגראנו — WSOP 2025" },
              { id: "5-S0U82eFzo", title: "הרגעים הגדולים מ-WSOP 2025" },
              { id: "xf2XKExLmOY", title: "האם מיזרצ׳י הכי טוב בעולם?" },
              { id: "E4cYh1zT6Eg", title: "שגריר פוקר זוכה ב-$3M" },
            ].map((v) => (
              <div key={v.id} className="rounded-lg overflow-hidden border border-paper-300 bg-card">
                <div className="aspect-video"><iframe src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" /></div>
                <div className="p-3"><h3 className="text-sm font-bold text-ink-800">{v.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOURNAMENTS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 inline-block">טורנירים 2026</h2>
            <a href="/tournaments" className="text-xs text-accent-500 font-bold hover:underline">לוח מלא ←</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "WSOP Europe", loc: "פראג", dates: "31/3 – 12/4", info: "15 אירועים" },
              { name: "EPT מונטה קרלו", loc: "מונקו", dates: "30/4 – 10/5", info: "40 אירועים" },
              { name: "Triton מונטנגרו", loc: "מונטנגרו", dates: "13 – 28/5", info: "High Roller" },
              { name: "WSOP 2026", loc: "לאס וגאס", dates: "26/5 – 15/7", info: "100+ אירועים" },
              { name: "WPT Rolling Thunder", loc: "קליפורניה", dates: "29/3", info: "$3,500" },
              { name: "APT טייפה", loc: "טייוואן", dates: "22/4 – 3/5", info: "20 אירועים" },
            ].map((t) => (
              <div key={t.name} className="p-4 rounded-lg bg-card border border-paper-300">
                <h3 className="text-sm font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{t.name}</h3>
                <p className="text-xs text-ink-500 mt-1"><MapPin className="w-3 h-3 inline ml-1" />{t.loc} <Calendar className="w-3 h-3 inline mr-2 ml-1" />{t.dates}</p>
                <p className="text-[10px] text-ink-400 mt-0.5">{t.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLUBS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-8 inline-block">קלאבים — הרשמה</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { name: "ClubGG Israel — האיחוד", desc: "הקלאב הרשמי. סוכנים מאומתים, שולחנות 24/7, בונוס הפקדה.", featured: true },
              { name: "ClubGG Platinum IL", desc: "קלאב VIP. סטייקס גבוהים, טורנירים ייעודיים.", featured: false },
              { name: "ClubGG Tel Aviv", desc: "קאש מיקרו עד מיד. אידיאלי למתחילים.", featured: false },
            ].map((club) => (
              <div key={club.name} className={`p-6 rounded-lg border ${club.featured ? "border-accent-500/40 bg-card shadow-elevated" : "border-paper-300 bg-card"}`}>
                {club.featured && <span className="text-[9px] font-black text-white bg-accent-500 px-2 py-0.5 rounded">מומלץ</span>}
                <h3 className="text-lg font-black text-ink-900 mt-2" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>{club.name}</h3>
                <p className="text-sm text-ink-500 mt-2">{club.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-[#25D366] text-white text-sm font-bold hover:bg-[#1ebe5d] transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" />הרשמה בוואטסאפ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGY ===== */}
      <section className="py-12 border-b-2 border-ink-900/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 inline-block">אסטרטגיה</h2>
            <a href="/strategy" className="text-xs text-accent-500 font-bold hover:underline">עוד ←</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "ניתוח: מיזרצ׳י עם 3BB ביום 8", cat: "ניתוח", time: "10 דק׳" },
              { title: "5 טעויות ב-Final Table", cat: "MTT", time: "7 דק׳" },
              { title: "מ-Hold'em לאומהה ב-5 צעדים", cat: "אומהה", time: "8 דק׳" },
              { title: "ניהול באנקרול — המדריך", cat: "בסיס", time: "5 דק׳" },
            ].map((a) => (
              <a key={a.title} href="/strategy" className="group block p-4 rounded-lg bg-card border border-paper-300 hover:shadow-card transition-all">
                <span className="text-[10px] font-bold text-accent-500">{a.cat}</span>
                <h3 className="text-sm font-bold text-ink-900 mt-1 leading-snug group-hover:text-accent-500 transition-colors">{a.title}</h3>
                <span className="text-xs text-ink-400 mt-2 block"><Clock className="w-3 h-3 inline ml-1" />{a.time}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RANKINGS ===== */}
      <section className="py-12 border-b-2 border-ink-900/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 inline-block">דירוג 2025</h2>
                <a href="/rankings" className="text-xs text-accent-500 font-bold hover:underline">מלא ←</a>
              </div>
              <div className="rounded-lg bg-card border border-paper-300 overflow-hidden">
                {[
                  { r: 1, name: "ג׳סי לוניס", c: "ארה\"ב", pts: "$13.3M" },
                  { r: 2, name: "קייהאן מוקרי", c: "נורווגיה", pts: "$13.2M" },
                  { r: 3, name: "סטיבן צ׳ידוויק", c: "אנגליה", pts: "$12.6M" },
                  { r: 4, name: "סת׳ דייויס", c: "ארה\"ב", pts: "$12.4M" },
                  { r: 5, name: "בנג׳מין טולרן", c: "ארה\"ב", pts: "$12.0M" },
                ].map((p, i) => (
                  <div key={p.r} className={`flex items-center justify-between px-4 py-3 ${i < 4 ? "border-b border-paper-200" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-black text-accent-500 w-6">{p.r}</span>
                      <div><p className="text-sm font-bold text-ink-900">{p.name}</p><p className="text-[10px] text-ink-400">{p.c}</p></div>
                    </div>
                    <span className="text-sm font-black text-ink-800 font-mono">{p.pts}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-black text-ink-900 tracking-wider uppercase border-b-2 border-accent-500 pb-2 mb-6 inline-block">ישראל — במספרים</h2>
              <div className="space-y-3">
                {[
                  { label: "צמידי WSOP ישראלים", value: "22+" },
                  { label: "שחקנים ב-Hendon Mob", value: "4,667" },
                  { label: "אלופי EPT ישראלים", value: "2" },
                  { label: "בני היכל התהילה", value: "2" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between p-4 rounded-lg bg-card border border-paper-300">
                    <span className="text-sm text-ink-700">{s.label}</span>
                    <span className="text-lg font-black text-accent-500">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-14">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-black text-ink-900" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>הישארו מעודכנים</h2>
          <p className="mt-2 text-ink-500 text-sm">חדשות, טורנירים ואסטרטגיה — ישר לתיבה.</p>
          <div className="mt-5 flex gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="אימייל" className="flex-1 h-10 px-4 rounded-lg border border-paper-300 bg-card text-ink-800 text-sm focus:outline-none focus:border-accent-500 transition-colors" />
            <button className="h-10 px-5 rounded-lg bg-accent-500 text-white font-bold text-sm hover:bg-accent-600 transition-colors cursor-pointer">הרשמה</button>
          </div>
        </div>
      </section>
    </>
  );
}
