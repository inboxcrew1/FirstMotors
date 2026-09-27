import type { Metadata } from "next";
import Link from "next/link";
import ValuationForm from "@/components/forms/ValuationForm";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Free Used Car Valuation in Bulandshahr | First Motors",
  description:
    "Get a fair, transparent market valuation for your car in Bulandshahr. Fill in your vehicle details and our experienced First Motors evaluators will provide an honest offer.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/valuation",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/valuation",
    siteName: SITE_CONFIG.name,
    title: "Free Used Car Valuation in Bulandshahr | First Motors",
    description: "Get an accurate, transparent used car valuation in Bulandshahr from First Motors. Honest evaluation and prompt offers.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Used Car Valuation at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Used Car Valuation in Bulandshahr | First Motors",
    description: "Get an accurate, transparent used car valuation in Bulandshahr from First Motors.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Sell Your Car", item: "https://firstmotorsbsr.com/sell" },
    { "@type": "ListItem", position: 3, name: "Car Valuation in Bulandshahr", item: "https://firstmotorsbsr.com/valuation" },
  ],
};

export default function ValuationPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10 text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/sell" className="hover:text-white transition-colors">Sell Your Car</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Car Valuation</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>
            Free Valuation Service
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Used Car Valuation in Bulandshahr
          </h1>
          <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base">
            Fill in your vehicle details below and our First Motors team will review and contact you with a fair, transparent market valuation.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="container-fm py-10">
        <div className="max-w-2xl mx-auto">
          <ValuationForm />
        </div>
      </div>
    </div>
  );
}
