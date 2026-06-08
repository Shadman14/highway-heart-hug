import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold text-ivory">
            Jakaria Kowser
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Advocate · Tax Law
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2 rounded-md border border-gold/60 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
}
