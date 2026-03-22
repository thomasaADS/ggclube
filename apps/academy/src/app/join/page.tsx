"use client";

import { useState } from "react";
import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Section className="pt-32 min-h-[70vh] flex items-center">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-800/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-ivory-50 mb-4">Welcome to GGClube Academy</h1>
          <p className="text-platinum-400 mb-8">Your account has been created. Check your email to get started.</p>
          <a href="/courses"><Button variant="primary" size="lg">Browse Courses <ArrowRight className="w-4 h-4" /></Button></a>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pt-32 min-h-[80vh]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <SectionTitle as="h1" className="mx-auto text-center">Join GGClube Academy</SectionTitle>
          <p className="mt-3 text-platinum-400">Create your free account and start learning.</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-5">
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Full Name</label>
              <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Email</label>
              <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Password</label>
              <input type="password" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-emerald-600" />
                <span className="text-sm text-platinum-300">I am 18+ years old</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-emerald-600" />
                <span className="text-sm text-platinum-300">I agree to the <a href="/legal/terms" className="text-emerald-400 hover:underline">Terms</a> and <a href="/legal/privacy" className="text-emerald-400 hover:underline">Privacy Policy</a></span>
              </label>
            </div>
            <Button variant="primary" size="lg" className="w-full" onClick={() => setSubmitted(true)}>
              Create Free Account <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-platinum-500 text-center">
              Already have an account? <a href="/login" className="text-emerald-400 hover:underline">Sign in</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
