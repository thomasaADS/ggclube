import { Section, SectionLabel, SectionTitle, SectionDescription, Button, Card, CardContent } from "@ggclube/ui";
import { Mail, MessageSquare, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — GGClube Support",
  description: "Get in touch with GGClube — support, partnerships, verification questions, and general inquiries.",
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <SectionLabel>Contact</SectionLabel>
      <SectionTitle as="h1">Get in Touch</SectionTitle>
      <SectionDescription>We are here to help. Choose the option that best fits your needs.</SectionDescription>

      <div className="mt-12 grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Mail, title: "General Inquiries", desc: "Questions about GGClube, partnerships, or media.", href: "mailto:hello@ggclube.com" },
          { icon: MessageSquare, title: "Support", desc: "Application help, account questions, or technical issues.", href: "/support" },
          { icon: Shield, title: "Report a Concern", desc: "Confidentially report a concern about an agent or profile.", href: "/support" },
        ].map((item) => (
          <a key={item.title} href={item.href}>
            <Card className="h-full hover:border-emerald-800/60 transition-all">
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-ivory-50 mb-2">{item.title}</h3>
                <p className="text-sm text-platinum-400">{item.desc}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <Card className="max-w-2xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-xl font-semibold text-ivory-50">Send a Message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Name</label>
              <input type="text" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-platinum-300 mb-1.5">Email</label>
              <input type="email" className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-platinum-300 mb-1.5">Subject</label>
            <select className="w-full h-10 px-3 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors">
              <option>General Inquiry</option>
              <option>Application Support</option>
              <option>Partnership</option>
              <option>Report a Concern</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-platinum-300 mb-1.5">Message</label>
            <textarea rows={5} className="w-full px-3 py-2 rounded-lg border border-graphite-600 bg-obsidian-900 text-ivory-100 text-sm focus:outline-none focus:border-emerald-600 transition-colors" />
          </div>
          <Button variant="primary" size="lg">Send Message</Button>
        </CardContent>
      </Card>
    </Section>
  );
}
