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
  logoSrc?: string;
  description?: string;
  copyright?: string;
  disclaimer?: string;
}

export function Footer({ brand, brandName, columns, legalLinks, ecosystemLinks, rtl = false, logoSrc, description, copyright, disclaimer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-950" dir={rtl ? "rtl" : "ltr"}>
      {/* Red accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-club-red-600/40 to-transparent" />
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {logoSrc ? (
                <img src={logoSrc} alt={brandName} className="h-10 w-10 rounded-xl object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-ivory-50 font-bold text-sm">
                  GG
                </div>
              )}
              <span className="text-ivory-50 font-black tracking-tight text-xl">
                {brandName}
              </span>
            </div>
            <p className="text-sm text-platinum-400 leading-relaxed max-w-xs">
              {description || "A premium poker culture ecosystem built on trust, education, and editorial authority."}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-black text-ivory-100 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-platinum-300 hover:text-white hover:underline transition-colors"
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
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-platinum-400 hover:text-white hover:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-platinum-500">
            {copyright || `© ${currentYear} ${brandName}. All rights reserved.`}
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-graphite-800/50 bg-obsidian-950">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <p className="text-[10px] text-platinum-500/60 leading-relaxed text-center">
            {disclaimer || "This site does not operate as a gambling service or wagering platform. Content is provided for informational and educational purposes only."}
          </p>
        </div>
      </div>
    </footer>
  );
}
