import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <span className="font-serif text-xl font-semibold text-ivory">
              Jakaria Kowser
            </span>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">
              Advocate · Income Tax Law
            </p>
            <p className="mt-4 max-w-xs text-sm text-ivory/65">
              Trusted income tax lawyer serving individuals and businesses near
              Sher-E-Bangla Nagar, Dhaka.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/75">
              <li><a href="#services" className="hover:text-gold">Income Tax Return</a></li>
              <li><a href="#services" className="hover:text-gold">Tax Dispute & Appeal</a></li>
              <li><a href="#services" className="hover:text-gold">NBR Representation</a></li>
              <li><a href="#services" className="hover:text-gold">Tax Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/75">
              <li>{SITE.address}</li>
              <li>
                <a href={SITE.phoneHref} className="hover:text-gold">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              Book Consultation
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-ivory/50">
          © {new Date().getFullYear()} Advocate Jakaria Kowser · আয়কর আইনজীবী, ঢাকা.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
