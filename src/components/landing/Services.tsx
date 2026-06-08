import { FileText, Gavel, Landmark, TrendingUp, BookOpen } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Return",
    body: "Accurate individual & corporate return preparation and submission, fully compliant with current NBR regulations.",
  },
  {
    icon: Gavel,
    title: "Tax Dispute & Appeal",
    body: "Strong representation in assessment disputes, objections, and appeals to protect your rights and reduce liability.",
  },
  {
    icon: Landmark,
    title: "NBR Representation",
    body: "Direct advocacy before the National Board of Revenue, tax circles, and the Appellate Tribunal.",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    body: "Lawful, strategic planning to optimise your tax position for salaries, businesses, and investments.",
  },
  {
    icon: BookOpen,
    title: "Legal Advisory",
    body: "Ongoing advisory on tax notices, compliance, VAT matters, and financial documentation.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ivory-deep py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
            Comprehensive income-tax legal services
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine filing to complex litigation — focused expertise across
            every stage of your tax matter.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-ivory">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-xl bg-navy p-7 text-ivory">
            <h3 className="font-serif text-xl font-semibold">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-sm text-ivory/75">
              Book a confidential consultation and get clear, honest guidance on
              your situation.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
