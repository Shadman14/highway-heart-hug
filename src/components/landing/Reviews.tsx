import { Star, Quote } from "lucide-react";
import { SITE } from "@/lib/site";

const reviews = [
  {
    name: "Rafiqul Islam",
    role: "Business Owner, Dhaka",
    text: "Advocate Kowser resolved a long-pending tax dispute with the NBR that I thought was hopeless. Professional, calm, and incredibly knowledgeable.",
  },
  {
    name: "Nasrin Akter",
    role: "Salaried Professional",
    text: "He filed my income tax return flawlessly and explained everything in simple Bangla. Highly recommended for anyone in Dhaka.",
  },
  {
    name: "Shahadat Hossain",
    role: "Importer",
    text: "Won my appeal at the tribunal. His preparation was meticulous and his confidence in the courtroom is remarkable.",
  },
  {
    name: "Tania Rahman",
    role: "Startup Founder",
    text: "Excellent tax planning advice that saved my company significant money — all completely lawful and well documented.",
  },
  {
    name: "Kamal Uddin",
    role: "Retired Govt. Officer",
    text: "Honest and trustworthy. He handled a sensitive matter with complete confidentiality. A true gentleman advocate.",
  },
  {
    name: "Farhana Yasmin",
    role: "Doctor",
    text: "Responsive on WhatsApp and always available for a call. The 5-star rating is well deserved.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-navy py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gold">
              {SITE.rating.toFixed(1)} · {SITE.reviewCount} Google Reviews
            </span>
          </div>
          <h2 className="mt-5 font-serif text-3xl font-semibold md:text-4xl">
            The words of clients we have served
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl border border-white/10 bg-navy-soft p-6"
            >
              <Quote className="size-7 text-gold/70" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ivory/85">
                “{r.text}”
              </blockquote>
              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-3">
                <span className="block font-serif font-semibold text-ivory">
                  {r.name}
                </span>
                <span className="text-xs text-ivory/55">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-soft"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
