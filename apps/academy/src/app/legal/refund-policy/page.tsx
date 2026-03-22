import { Section, SectionTitle } from "@ggclube/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy", description: "GGClube Academy refund policy." };

export default function RefundPage() {
  return (
    <Section className="pt-32">
      <SectionTitle as="h1" className="mb-8">Refund Policy</SectionTitle>
      <div className="max-w-3xl space-y-6 text-platinum-300 text-sm leading-relaxed">
        <p className="text-platinum-400">Last updated: March 2026</p>
        <h2 className="text-lg font-semibold text-ivory-100">Premium Membership</h2>
        <p>You may request a full refund within 7 days of your initial subscription if you have not completed more than 25% of any course. After 7 days, your membership will continue until the end of the billing cycle upon cancellation.</p>
        <h2 className="text-lg font-semibold text-ivory-100">How to Request a Refund</h2>
        <p>Contact our support team at <a href="mailto:support@ggclube.com" className="text-emerald-400 hover:underline">support@ggclube.com</a> with your account email and reason for the request. Refunds are processed within 5–10 business days.</p>
      </div>
    </Section>
  );
}
