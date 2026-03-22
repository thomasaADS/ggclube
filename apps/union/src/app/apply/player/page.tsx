"use client";

import { useState } from "react";
import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export default function PlayerApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Section className="pt-32 min-h-[70vh] flex items-center">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-ivory-50 mb-4">Welcome to GGClube</h1>
          <p className="text-platinum-400 mb-8">Your player registration has been submitted. Check your email for next steps.</p>
          <a href="/"><Button variant="outline" size="lg">Return to Home</Button></a>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pt-32">
        <SectionLabel>Player Registration</SectionLabel>
        <SectionTitle as="h1">Join the GGClube Community</SectionTitle>
        <SectionDescription>Create your player profile and get access to the full GGClube ecosystem.</SectionDescription>
      </Section>

      <Section className="pt-0">
        <Card className="max-w-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-platinum-300 mb-1.5">Full Name *</label>
                <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-platinum-300 mb-1.5">Email *</label>
                <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-platinum-300 mb-1.5">Country / Region *</label>
                <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-platinum-300 mb-1.5">Skill Level</label>
                <select className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Interests</label>
              <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" placeholder="e.g. Tournaments, Cash Games, Education, Community" />
            </div>
            <div className="space-y-3 pt-4 border-t border-graphite-700">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-emerald-600" />
                <span className="text-sm text-platinum-300">I confirm I am 18+ years old *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-emerald-600" />
                <span className="text-sm text-platinum-300">I agree to the <a href="/legal/terms" className="text-emerald-400 hover:underline">Terms</a> and <a href="/legal/privacy" className="text-emerald-400 hover:underline">Privacy Policy</a> *</span>
              </label>
            </div>
            <Button variant="primary" size="lg" className="w-full" onClick={() => setSubmitted(true)}>
              Join GGClube <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
