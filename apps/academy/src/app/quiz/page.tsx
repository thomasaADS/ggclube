"use client";
import { useState } from "react";
import { ArrowLeft, Target, CheckCircle } from "lucide-react";

const QUESTIONS = [
  { q: "כמה זמן אתם משחקים פוקר?", options: ["פחות משנה", "1-3 שנים", "3+ שנים", "5+ שנים"] },
  { q: "באיזה פורמט אתם משחקים בעיקר?", options: ["קאש גיימס", "טורנירים (MTT)", "Sit & Go", "מעורב"] },
  { q: "מה הסטייקס שלכם?", options: ["מיקרו (עד ₪50)", "לואו (₪50-200)", "מיד (₪200-1000)", "היי (₪1000+)"] },
  { q: "האם אתם מכירים את המושג ICM?", options: ["לא שמעתי", "שמעתי אבל לא מבין", "מבין בסיסי", "שולט ברמה גבוהה"] },
  { q: "כמה פעמים בשבוע אתם משחקים?", options: ["פעם-פעמיים", "3-4 פעמים", "כמעט כל יום", "שחקן מקצועי"] },
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  function answer(idx: number) {
    const next = [...answers, idx];
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  const score = answers.reduce((a, b) => a + b, 0);
  const level = score <= 5 ? "מתחיל" : score <= 10 ? "בינוני" : "מתקדם";
  const path = score <= 5 ? "מסלול יסודות" : score <= 10 ? "מומחה טורנירים" : "בונה יתרון";

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <CheckCircle className="w-14 h-14 text-red-400 mx-auto mb-5" />
        <h1 className="text-3xl font-black text-t-50 mb-2">הרמה שלכם: {level}</h1>
        <p className="text-t-300 mb-6">המסלול המומלץ: <span className="text-red-400 font-bold">{path}</span></p>
        <div className="p-5 rounded-xl bg-bg-card border border-line mb-8">
          <p className="text-sm text-t-400">בהתבסס על התשובות שלכם, אנחנו ממליצים להתחיל עם {path}. המסלול כולל קורסים שמותאמים לרמה שלכם ויקדמו אתכם בצורה מובנית.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <a href="/courses"><button className="h-11 px-6 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors cursor-pointer inline-flex items-center gap-2">לקורסים <ArrowLeft className="w-4 h-4" /></button></a>
          <a href="/join"><button className="h-11 px-6 rounded-xl border border-line text-t-200 font-bold text-sm hover:bg-bg-elevated transition-colors cursor-pointer">הצטרפו חינם</button></a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-6 py-16">
      <div className="text-center mb-10">
        <Target className="w-8 h-8 text-gold-500 mx-auto mb-3" />
        <h1 className="text-2xl font-black text-t-50">מבחן התאמה</h1>
        <p className="text-t-400 text-sm mt-1">5 שאלות קצרות. 2 דקות. נגיד לכם מאיפה להתחיל.</p>
      </div>

      {/* Progress */}
      <div className="flex gap-1 mb-8">
        {QUESTIONS.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-red-500" : "bg-line"}`} />
        ))}
      </div>

      <div className="p-6 rounded-xl bg-bg-card border border-line">
        <p className="text-xs text-t-500 mb-2">שאלה {step + 1} מתוך {QUESTIONS.length}</p>
        <h2 className="text-lg font-bold text-t-50 mb-6">{QUESTIONS[step].q}</h2>
        <div className="space-y-3">
          {QUESTIONS[step].options.map((opt, i) => (
            <button key={opt} onClick={() => answer(i)} className="w-full text-right p-4 rounded-xl border border-line bg-bg-elevated text-t-200 text-sm font-medium hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-pointer">
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
