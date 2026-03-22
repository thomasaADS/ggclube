"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

interface NavProps {
  brand: "union" | "news" | "academy";
  brandName: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

const brandColors = {
  union: "emerald",
  news: "emerald",
  academy: "emerald",
} as const;

export function Nav({ brand, brandName, links, ctaLabel, ctaHref }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[30] border-b border-graphite-700/50">
      <div className="bg-obsidian-950/80 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-ivory-50 font-bold text-sm group-hover:bg-emerald-500 transition-colors">
              GG
            </div>
            <span className="text-ivory-50 font-semibold tracking-tight text-lg">
              {brandName}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-platinum-300 hover:text-ivory-50 transition-colors rounded-lg hover:bg-graphite-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={ctaHref}>
              <Button variant="primary" size="sm">
                {ctaLabel}
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-platinum-300 hover:text-ivory-50"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian-900/95 backdrop-blur-xl border-b border-graphite-700"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm text-platinum-300 hover:text-ivory-50 hover:bg-graphite-800/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a href={ctaHref}>
                  <Button variant="primary" size="md" className="w-full">
                    {ctaLabel}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
