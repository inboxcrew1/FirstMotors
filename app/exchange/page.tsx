import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Car Exchange in Bulandshahr | Upgrade Your Car | First Motors",
  description:
    "Exchange your old car in Bulandshahr and upgrade to a quality pre-owned car from First Motors. Fair vehicle evaluation, transparent pricing and easy finance options.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/exchange",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/exchange",
    siteName: SITE_CONFIG.name,
    title: "Car Exchange in Bulandshahr | Upgrade Your Car | First Motors",
    description: "Exchange your current car in Bulandshahr and upgrade to a certified pre-owned car from First Motors. 100+ vehicles available in showroom stock.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Car Exchange at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Exchange in Bulandshahr | First Motors",
    description: "Exchange your old car in Bulandshahr and upgrade to a quality pre-owned car with First Motors.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Car Exchange in Bulandshahr", item: "https://firstmotorsbsr.com/exchange" },
  ],
};

const STEPS = [
  { n: "01", icon: "🚗", title: "Share Your Current Car Details", desc: "Tell us about the car you want to exchange — make, model, year, and condition." },
  { n: "02", icon: "🔍", title: "We Evaluate Your Car", desc: "Our team assesses your vehicle's current market value at our Bulandshahr showroom." },
  { n: "03", icon: "🔄", title: "Select Your Upgrade", desc: "Choose from our selected online inventory or 100+ showroom cars. Pay only the difference." },
];

export default function ExchangePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%)" }}>
        <div className="container-fm text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Car Exchange</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-red-brand-light)" }}>Car Exchange Service</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
            Car Exchange in Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Sell or exchange your current car and use its value toward your next pre-owned car from First Motors. 100+ cars available in showroom stock.
          </p>
          <Link href="/valuation" className="btn btn-primary gap-2 px-8 py-4">
            Start Your Exchange <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              How Car Exchange Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-2xl font-black mb-2" style={{ color: "var(--color-red-brand)", fontFamily: "var(--font-heading)", opacity: 0.7 }}>{step.n}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-navy-900)" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="section-sm" style={{ background: "var(--color-surface)" }}>
        <div className="container-fm">
          <div className="max-w-2xl mx-auto rounded-xl p-6" style={{ background: "#fef9c3", border: "1px solid #fde68a" }}>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Please note:</strong> Exchange values are assessed individually by our team based on vehicle condition and market demand. Every valuation is reviewed by an experienced First Motors evaluator to ensure accuracy and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-navy-900)" }}>Get Your Car Valued</h3>
              <p className="text-gray-500 text-sm mb-4">Start with a valuation for your current car.</p>
              <Link href="/valuation" className="btn btn-primary w-full justify-center">Get Free Valuation</Link>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-navy-900)" }}>Browse Available Cars</h3>
              <p className="text-gray-500 text-sm mb-4">See what you could upgrade to from our inventory.</p>
              <Link href="/buy" className="btn btn-secondary w-full justify-center">View Cars in Bulandshahr</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
