"use client";
import { useState } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function JoinPage() {
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h1 className="text-2xl font-black text-text-900 mb-2">ברוכים הבאים!</h1>
      <p className="text-text-500 mb-6">החשבון נוצר. בדקו את המייל כדי להתחיל.</p>
      <a href="/courses"><button className="h-11 px-6 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors cursor-pointer">לקורסים</button></a>
    </div>
  );
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-2xl font-black text-text-900 text-center mb-2">הצטרפו ל-ClubGG Academy</h1>
      <p className="text-text-500 text-center mb-8">חשבון חינמי. התחילו ללמוד עכשיו.</p>
      <div className="p-6 rounded-xl bg-card border border-border space-y-4">
        <div>
          <label className="block text-sm text-text-600 mb-1">שם מלא</label>
          <input type="text" className="w-full h-10 px-3 rounded-lg border border-border bg-bg text-text-800 text-sm focus:outline-none focus:border-green-600 transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-text-600 mb-1">אימייל</label>
          <input type="email" className="w-full h-10 px-3 rounded-lg border border-border bg-bg text-text-800 text-sm focus:outline-none focus:border-green-600 transition-colors" />
        </div>
        <div>
          <label className="block text-sm text-text-600 mb-1">סיסמה</label>
          <input type="password" className="w-full h-10 px-3 rounded-lg border border-border bg-bg text-text-800 text-sm focus:outline-none focus:border-green-600 transition-colors" />
        </div>
        <div className="space-y-2 pt-2">
          <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="mt-1 accent-green-600" /><span className="text-sm text-text-600">אני בן/בת 21+</span></label>
          <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="mt-1 accent-green-600" /><span className="text-sm text-text-600">מסכים/ה ל<a href="/legal/terms" className="text-green-600 hover:underline">תנאים</a> ו<a href="/legal/privacy" className="text-green-600 hover:underline">פרטיות</a></span></label>
        </div>
        <button onClick={() => setDone(true)} className="w-full h-11 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors cursor-pointer inline-flex items-center justify-center gap-2">
          צרו חשבון חינם <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
