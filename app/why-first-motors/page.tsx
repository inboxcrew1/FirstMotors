import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Why Choose First Motors | Trusted Used Car Dealer in Bulandshahr",
  description:
    "Discover why car buyers across Bulandshahr trust First Motors. 10+ years experience, 100+ vehicles in showroom stock, transparent pricing, and complete documentation support.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/why-first-motors",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/why-first-motors",
    siteName: SITE_CONFIG.name,
    title: "Why Choose First Motors | Bulandshahr",
    description: "10+ years in business, 100+ showroom cars, transparent pricing & full documentation support in Bulandshahr.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Why Buy From First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose First Motors | Bulandshahr",
    description: "10+ years of trusted automotive service in Bulandshahr. 100+ showroom cars.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Why First Motors", item: "https://firstmotorsbsr.com/why-first-motors" },
  ],
};

const REASONS = [
  { icon: "🔍", title: "Carefully Selected & Verified Cars", desc: "Each vehicle in our showroom is physically inspected by our experienced team before being listed for sale." },
  { icon: "📋", title: "Transparent Vehicle Information", desc: "Honest odometer readings, authentic ownership details, genuine fuel type and verified registration history." },
  { icon: "🚗", title: "Convenient Showroom Test Drives", desc: "Test drive any vehicle at our Chandpur Road showroom before deciding. Feel the road comfort first-hand." },
  { icon: "💰", title: "Reputable Finance Assistance", desc: "We connect you with leading auto finance institutions for flexible, affordable EMI options." },
  { icon: "📄", title: "End-to-End Documentation Support", desc: "We guide you through RC transfer, sale agreements, and official paperwork from start to finish." },
  { icon: "🤝", title: "10+ Years of Local Trust", desc: "Over 500+ happy customers across Bulandshahr and Western UP rely on our personal, honest service." },
];

export default function WhyFirstMotorsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Why First Motors</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Our Promise</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
            Why Buy From First Motors Bulandshahr?
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            10+ years of automotive excellence, 100+ cars available in showroom stock, and a commitment to transparent dealings.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((item) => (
              <div key={item.title} className="rounded-xl p-6" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--color-navy-900)" }}>{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="mt-8 max-w-3xl mx-auto rounded-xl p-5" style={{ background: "#f0f9ff", border: "1px solid #bae6fd" }}>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Our Honest Approach:</strong> We state only verified facts. With 10+ years in business and 100+ vehicles available at our Bulandshahr showroom, we focus on genuine customer service and transparent deals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Experience the First Motors Difference
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/buy" className="btn btn-primary px-8">Browse Cars</Link>
            <Link href="/contact" className="btn px-8" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
