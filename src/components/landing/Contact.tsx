import { useState } from "react";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/lib/site";

const services = [
  "Income Tax Return",
  "Tax Dispute & Appeal",
  "NBR Representation",
  "Tax Planning",
  "Legal Advisory",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received", {
        description:
          "Thank you. Advocate Kowser's office will contact you shortly to confirm your consultation.",
      });
    }, 700);
  }

  return (
    <section id="contact" className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">
            Book a Consultation
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
            Speak with a trusted tax lawyer today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details and we will arrange a confidential consultation
            at the earliest convenient time.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="service">Service Needed</Label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Briefly describe your tax matter…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-navy px-6 py-3 text-base font-semibold text-ivory transition-colors hover:bg-navy-soft disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request Consultation"}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your information is kept strictly confidential.
            </p>
          </form>

          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl bg-navy p-6 text-ivory">
              <h3 className="font-serif text-lg font-semibold text-gold">
                Contact & Chamber
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-ivory/85">{SITE.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                  <a href={SITE.phoneHref} className="text-ivory/85 hover:text-gold">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                  <a href={`mailto:${SITE.email}`} className="text-ivory/85 hover:text-gold">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-ivory/85">Sat – Thu · 10:00 AM – 8:00 PM</span>
                </li>
              </ul>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Chamber location near Bijoy Sarani, Dhaka"
                src={SITE.mapEmbed}
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
