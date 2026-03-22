import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של ClubGG Union.",
};

export default function AccessibilityPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">הצהרת נגישות</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">עדכון אחרון: מרץ 2026</p>
        <p>ClubGG Union מחויבת להנגשת האתר לכלל המשתמשים, כולל אנשים עם מוגבלויות. אנו פועלים לעמידה בתקני הנגישות המקובלים ומשקיעים מאמצים מתמשכים בשיפור חווית השימוש עבור כולם.</p>
        <h2 className="text-lg font-semibold text-ivory-100">המחויבות שלנו</h2>
        <p>אנו שואפים לעמוד בהנחיות WCAG 2.1 ברמה AA. האתר נבנה עם תמיכה ב-RTL, ניגודיות צבעים ברורה, ומבנה סמנטי תקין.</p>
        <h2 className="text-lg font-semibold text-ivory-100">נתקלתם בבעיה?</h2>
        <p>אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו דרך <a href="/contact" className="text-emerald-400 hover:underline">דף צור קשר</a> ונטפל בכך בהקדם.</p>
      </div>
    </Section>
  );
}
