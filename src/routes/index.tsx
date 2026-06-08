import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Services } from "@/components/landing/Services";
import { Reviews } from "@/components/landing/Reviews";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingActions } from "@/components/landing/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Income Tax Lawyer in Dhaka | Advocate Jakaria Kowser";
const DESCRIPTION =
  "Trusted income tax lawyer in Dhaka — Advocate Jakaria Kowser. 5.0★ rated tax attorney for return filing, disputes, appeals & NBR representation near Sher-E-Bangla Nagar.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Jakaria Kowser",
      jobTitle: "Income Tax Lawyer",
      description:
        "Income tax lawyer and tax attorney in Dhaka, Bangladesh, specialising in tax filing, disputes, appeals and NBR representation.",
      knowsLanguage: ["bn", "en"],
      areaServed: "Dhaka, Bangladesh",
    },
    {
      "@type": ["LegalService", "LocalBusiness"],
      name: "Advocate Jakaria Kowser — Income Tax Lawyer",
      image: "/og-cover.jpg",
      description: DESCRIPTION,
      telephone: "+8801711000000",
      priceRange: "৳৳",
      areaServed: "Dhaka",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Bijoy Sarani, Sher-E-Bangla Nagar",
        addressLocality: "Dhaka",
        postalCode: "1207",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.7693,
        longitude: 90.3838,
      },
      openingHours: "Sa-Th 10:00-20:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "9",
        bestRating: "5",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "income tax lawyer Dhaka, tax attorney Dhaka, আয়কর আইনজীবী, NBR lawyer, tax appeal Dhaka, income tax return lawyer",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory pb-12 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" />
    </div>
  );
}
