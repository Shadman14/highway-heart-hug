import { Phone, CalendarCheck, Star, ShieldCheck } from "lucide-react";
import portrait from "@/assets/jakaria-portrait.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-ivory">
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c2a14e 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1">
            <Star className="size-4 fill-gold text-gold" />
            <span className="text-sm font-medium text-gold">
              5.0 ★ Rated on Google · {SITE.reviewCount} Reviews
            </span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-[3.4rem]">
            Trusted Income Tax Lawyer in Dhaka
          </h1>

          <p className="mt-3 font-serif text-xl text-gold-soft">
            ঢাকার বিশ্বস্ত আয়কর আইনজীবী
          </p>

          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/75">
            Advocate Jakaria Kowser — {SITE.years}+ years before the National
            Board of Revenue and tax tribunals. Confidential, strategic counsel
            for individuals and businesses near Sher-E-Bangla Nagar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <CalendarCheck className="size-5" />
              Book Consultation
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ivory/30 px-6 py-3 text-base font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="size-5" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-ivory/60">
            <ShieldCheck className="size-4 text-gold" />
            Bangladesh Bar Council enrolled · Strict client confidentiality
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -inset-3 rounded-2xl border border-gold/30" aria-hidden />
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-xl bg-burgundy md:block" aria-hidden />
          <img
            src={portrait}
            alt="Advocate Jakaria Kowser, income tax lawyer in Dhaka"
            width={1024}
            height={1280}
            className="relative z-10 w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
        </div>
      </div>
    </section>
  );
}
