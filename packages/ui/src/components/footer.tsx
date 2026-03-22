import { cn } from "../lib/utils";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  brand: "union" | "news" | "academy";
  brandName: string;
  columns: FooterColumn[];
  legalLinks: { label: string; href: string }[];
  ecosystemLinks: { label: string; href: string }[];
  rtl?: boolean;
}

export function Footer({ brand, brandName, columns, legalLinks, ecosystemLinks, rtl = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-700/50 bg-obsidian-950" dir={rtl ? "rtl" : "ltr"}>
      {/* Ecosystem Bar */}
      <div className="border-b border-graphite-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center gap-6">
          <span className="text-xs text-platinum-500 uppercase tracking-widest">
            GGClube Ecosystem
          </span>
          {ecosystemLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-platinum-400 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-ivory-50 font-bold text-sm">
                GG
              </div>
              <span className="text-ivory-50 font-semibold tracking-tight">
                {brandName}
              </span>
            </div>
            <p className="text-sm text-platinum-400 leading-relaxed max-w-xs">
              A premium poker culture ecosystem built on trust, education, and editorial authority.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-platinum-300 uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-platinum-500 hover:text-ivory-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-graphite-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-platinum-500 hover:text-platinum-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-platinum-500">
            &copy; {currentYear} GGClube. All rights reserved. 18+ only.
          </p>
        </div>
      </div>

      {/* Jurisdiction Notice */}
      <div className="border-t border-graphite-800/50 bg-obsidian-950">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <p className="text-[10px] text-platinum-500/60 leading-relaxed text-center">
            GGClube is a media, education, and community platform. This site does not operate as a gambling service or wagering platform.
            Content is provided for informational and educational purposes only. Users must comply with the laws and regulations of their jurisdiction.
            Please play responsibly. If you or someone you know has a gambling problem, seek help from local support services.
          </p>
        </div>
      </div>
    </footer>
  );
}
