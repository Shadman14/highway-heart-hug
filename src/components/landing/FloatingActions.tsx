import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp float (desktop + above sticky bar on mobile) */}
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 md:bottom-6"
      >
        <MessageCircle className="size-7" />
      </a>

      {/* Sticky mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/30 bg-navy md:hidden">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-gold"
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-gold py-3.5 text-sm font-semibold text-navy"
        >
          Book Consultation
        </a>
      </div>
    </>
  );
}
