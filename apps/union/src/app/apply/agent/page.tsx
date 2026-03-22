"use client";

import { useState } from "react";
import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const STEPS = ["פרופיל", "ניסיון", "המלצות", "הסכמה"];

export default function AgentApplicationPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Section className="pt-32 min-h-[70vh] flex items-center">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-ivory-50 mb-4">המועמדות הוגשה</h1>
          <p className="text-platinum-400 mb-8">
            תודה שהגשתם מועמדות לרשת הסוכנים של GGClube. הצוות שלנו יבדוק את המועמדות ויחזור אליכם תוך 5–10 ימי עסקים.
          </p>
          <a href="/"><Button variant="outline" size="lg">חזרה לדף הבית</Button></a>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32">
        <SectionLabel>הגשת מועמדות לסוכן</SectionLabel>
        <SectionTitle as="h1">הגשה לרשת המאומתת</SectionTitle>
        <SectionDescription>
          מלאו את הטופס למטה. כל המידע נבדק בסודיות על ידי צוות האימות של GGClube.
        </SectionDescription>
      </Section>

      <Section className="pt-0">
        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-12 max-w-2xl">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border transition-colors ${i <= step ? "bg-emerald-600 border-emerald-500 text-ivory-50" : "bg-obsidian-800 border-graphite-600 text-platinum-500"}`}>
                {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${i <= step ? "text-ivory-100" : "text-platinum-500"}`}>{s}</span>
              {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-emerald-600" : "bg-graphite-700"}`} />}
            </div>
          ))}
        </div>

        <Card className="max-w-2xl">
          <CardContent className="p-8">
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">פרטי פרופיל</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">שם מלא *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">שם תצוגה *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">אימייל *</label>
                  <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">מדינה / אזור *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">שפות *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="לדוגמה: עברית, אנגלית" />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">ניסיון ופעילות</h2>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">שנות פעילות כסוכן *</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors">
                    <option>פחות משנה</option>
                    <option>1–3 שנים</option>
                    <option>3–5 שנים</option>
                    <option>5+ שנים</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">פורמטי פוקר *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="לדוגמה: Cash, Tournament, MTT, SNG" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">פלטפורמות / רשתות</label>
                  <textarea rows={3} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="רשמו את הפלטפורמות או הרשתות שאתם עובדים איתן" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">קישורים חברתיים (אופציונלי)</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="טוויטר, אינסטגרם, טלגרם וכו׳" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">המלצות קהילתיות</h2>
                <p className="text-sm text-platinum-400">ספקו לפחות שתי המלצות מקהילת הפוקר שיכולות לאשר את הפעילות והמוניטין שלכם.</p>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">המלצה 1 — שם ופרטי קשר *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">המלצה 2 — שם ופרטי קשר *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">הערות נוספות</label>
                  <textarea rows={3} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="כל דבר נוסף שתרצו שנדע" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">הסכמה ואישור</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">אני מאשר/ת שאני בן/בת 18 ומעלה. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">אני מסכים/ה ל<a href="/legal/terms" className="text-emerald-400 hover:underline">תנאים והגבלות</a> ול<a href="/legal/privacy" className="text-emerald-400 hover:underline">מדיניות הפרטיות</a>. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">אני מסכים/ה ל<a href="/community-standards" className="text-emerald-400 hover:underline">סטנדרטים הקהילתיים</a> ול<a href="/legal/verification-policy" className="text-emerald-400 hover:underline">מדיניות האימות</a>. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">אני מסכים/ה לעיבוד המידע האישי שלי לצורך אימות. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">אני מאשר/ת שהמידע שסופק מדויק ומלא. *</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-graphite-700">
              {step > 0 ? (
                <Button variant="ghost" size="md" onClick={() => setStep(step - 1)}>
                  <ArrowRight className="w-4 h-4" /> חזרה
                </Button>
              ) : <div />}
              {step < STEPS.length - 1 ? (
                <Button variant="primary" size="md" onClick={() => setStep(step + 1)}>
                  המשך <ArrowLeft className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="primary" size="lg" onClick={() => setSubmitted(true)}>
                  הגשת מועמדות <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
