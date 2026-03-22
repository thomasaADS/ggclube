import { Section, SectionLabel, SectionTitle, SectionDescription, Badge, Card, CardContent, Button } from "@ggclube/ui";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Free & Premium Membership",
  description: "GGClube Academy pricing — free tier with beginner access and premium membership with full course library, coaching, and community.",
};

export default function PricingPage() {
  return (
    <Section className="pt-32 min-h-[80vh]">
      <div className="text-center max-w-2xl mx-auto">
        <SectionLabel>Pricing</SectionLabel>
        <SectionTitle as="h1" className="mx-auto">Simple, Transparent Pricing</SectionTitle>
        <SectionDescription className="mx-auto">Start free. Upgrade when you are ready for the full experience.</SectionDescription>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-8">
            <Badge variant="unverified" className="mb-4">Free</Badge>
            <h3 className="text-3xl font-bold text-ivory-50 mb-1">$0</h3>
            <p className="text-sm text-platinum-500 mb-6">Forever free</p>
            <ul className="space-y-3 mb-8">
              {["Beginner courses", "Community forums", "Weekly newsletter", "Free resource library", "Selected strategy content"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-platinum-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <a href="/join"><Button variant="outline" size="lg" className="w-full">Get Started Free</Button></a>
          </CardContent>
        </Card>
        <Card className="border-emerald-800/60 shadow-glow-emerald relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-ivory-50 text-xs font-semibold rounded-bl-lg">Most Popular</div>
          <CardContent className="p-8">
            <Badge variant="premium" className="mb-4">Premium</Badge>
            <h3 className="text-3xl font-bold text-ivory-50 mb-1">$29<span className="text-lg text-platinum-400">/mo</span></h3>
            <p className="text-sm text-platinum-500 mb-6">Cancel anytime</p>
            <ul className="space-y-3 mb-8">
              {["All courses & learning paths", "Premium community access", "Coach Q&A sessions", "Advanced strategy tools", "Priority support", "Downloadable resources", "Exclusive masterclasses"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-platinum-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />{item}
                </li>
              ))}
            </ul>
            <a href="/join"><Button variant="primary" size="lg" className="w-full">Start Premium <ArrowRight className="w-4 h-4" /></Button></a>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-platinum-400">
          Need coaching? <a href="/coaches" className="text-emerald-400 hover:underline">View our coaching options</a>.
        </p>
        <p className="mt-2 text-xs text-platinum-500">
          See our <a href="/legal/refund-policy" className="hover:underline">refund policy</a> for details.
        </p>
      </div>
    </Section>
  );
}
