"use client";

import { useState } from "react";
import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const STEPS = ["Profile", "Experience", "References", "Consent"];

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
          <h1 className="text-3xl font-bold text-ivory-50 mb-4">Application Submitted</h1>
          <p className="text-platinum-400 mb-8">
            Thank you for applying to the GGClube Agent Network. Our team will review your application and respond within 5–10 business days.
          </p>
          <a href="/"><Button variant="outline" size="lg">Return to Home</Button></a>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32">
        <SectionLabel>Agent Application</SectionLabel>
        <SectionTitle as="h1">Apply to the Verified Network</SectionTitle>
        <SectionDescription>
          Complete the application below. All information is reviewed confidentially by the GGClube verification team.
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
                <h2 className="text-xl font-semibold text-ivory-50">Profile Basics</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">Full Name *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">Display Name *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Email *</label>
                  <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">Country / Region *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-platinum-300 mb-1.5">Languages *</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="e.g. English, Portuguese" />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">Experience & Activity</h2>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Years Active as Agent *</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors">
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Poker Formats *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="e.g. Cash, Tournament, MTT, SNG" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Platforms / Networks</label>
                  <textarea rows={3} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="List the platforms or networks you work with" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Social Links (optional)</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Twitter, Instagram, Telegram, etc." />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">Community References</h2>
                <p className="text-sm text-platinum-400">Provide at least two references from the poker community who can vouch for your activity and reputation.</p>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Reference 1 — Name & Contact *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Reference 2 — Name & Contact *</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-platinum-300 mb-1.5">Additional Notes</label>
                  <textarea rows={3} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Anything else you'd like us to know" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-ivory-50">Consent & Agreement</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">I confirm that I am 18 years of age or older. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">I agree to the <a href="/legal/terms" className="text-emerald-400 hover:underline">Terms & Conditions</a> and <a href="/legal/privacy" className="text-emerald-400 hover:underline">Privacy Policy</a>. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">I agree to the <a href="/community-standards" className="text-emerald-400 hover:underline">Community Standards</a> and <a href="/legal/verification-policy" className="text-emerald-400 hover:underline">Verification Policy</a>. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">I consent to the processing of my personal data for verification purposes. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-emerald-600" />
                    <span className="text-sm text-platinum-300">I confirm that the information provided is accurate and complete. *</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-graphite-700">
              {step > 0 ? (
                <Button variant="ghost" size="md" onClick={() => setStep(step - 1)}>
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
              ) : <div />}
              {step < STEPS.length - 1 ? (
                <Button variant="primary" size="md" onClick={() => setStep(step + 1)}>
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="primary" size="lg" onClick={() => setSubmitted(true)}>
                  Submit Application <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
