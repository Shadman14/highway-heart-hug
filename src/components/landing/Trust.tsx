import { Star, Award, FileCheck, Lock, Scale } from "lucide-react";
import { SITE } from "@/lib/site";

const expertise = [
  "Income tax return filing",
  "Tax disputes & litigation",
  "Appeals & tribunal hearings",
  "NBR representation",
];

const trustPoints = [
  {
    icon: Star,
    title: "5.0★ on Google",
    body: `${SITE.reviewCount} verified five-star client reviews from individuals and businesses across Dhaka.`,
  },
  {
    icon: Award,
    title: "Bar Council Enrolled",
    body: `Enrolled advocate with ${SITE.years}+ years of focused income-tax practice.`,
  },
  {
    icon: Scale,
    title: "NBR & Tribunal Experience",
    body: "Direct representation before the National Board of Revenue and Taxes Appellate Tribunal.",
  },
  {
    icon: Lock,
    title: "Complete Confidentiality",
    body: "Every consultation and document is handled with strict, privileged discretion.",
  },
];

export function Trust() {
  return (
    <section id="expertise" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">
            Why Clients Trust Advocate Kowser
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
            Credibility you can verify, counsel you can rely on
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-navy text-gold">
                <t.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy px-6 py-8 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-gold">
                <FileCheck className="size-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Areas of Expertise
                </span>
              </div>
              <ul className="mt-4 grid gap-x-8 gap-y-2 text-ivory sm:grid-cols-2">
                {expertise.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
