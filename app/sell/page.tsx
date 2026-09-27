import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sell Your Car in Bulandshahr | Fair Valuation | First Motors",
  description:
    "Sell your used car in Bulandshahr with First Motors. Transparent vehicle evaluation, fair market offers, quick payment and complete RC transfer assistance.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/sell",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/sell",
    siteName: SITE_CONFIG.name,
    title: "Sell Your Car in Bulandshahr | Fair Valuation | First Motors",
    description: "Sell your used car in Bulandshahr with First Motors. Honest vehicle evaluation, fair price offers and hassle-free documentation support.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Sell Your Car at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Car in Bulandshahr | First Motors",
    description: "Sell your used car in Bulandshahr with First Motors. Transparent valuation & quick RC transfer.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Sell Your Car in Bulandshahr", item: "https://firstmotorsbsr.com/sell" },
  ],
};

const STEPS = [
  { n: "01", title: "Tell Us About Your Car", desc: "Share your car's make, model, year, kilometres and condition through our simple valuation form.", icon: "📝" },
  { n: "02", title: "Vehicle Evaluation", desc: "Our team reviews your details and conducts a physical inspection at our Bulandshahr showroom.", icon: "🔍" },
  { n: "03", title: "Receive Our Offer", desc: "We provide a clear, fair market offer based on actual condition and market demand.", icon: "💰" },
  { n: "04", title: "Complete the Sale", desc: "Hassle-free documentation, immediate payment, and complete guidance through official RC transfer.", icon: "✅" },
];

const REASONS = [
  { icon: "⚡", title: "Simple, Transparent Process", desc: "Submit your details online and our experienced Bulandshahr team handles the rest." },
  { icon: "💎", title: "Fair Market Assessment", desc: "We evaluate honestly based on true market conditions across Western UP." },
  { icon: "📄", title: "Complete Documentation Support", desc: "We guide you through all transfer paperwork, sale agreement, and official RC transfer." },
];

export default function SellPage() {
  const whatsappLink = formatWhatsAppLink(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGES.sellCar);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className="section"
        style={{ background: "linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%)" }}
      >
        <div className="container-fm text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Sell Your Car</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-red-brand-light)" }}>
            First Motors Bulandshahr
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sell Your Car in Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Get an honest vehicle valuation from First Motors and explore a simple, transparent way to sell or exchange your car.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/valuation" className="btn btn-primary gap-2 px-8 py-4">
              Get Free Car Valuation <ArrowRight size={16} />
            </Link>
            <Link href="/exchange" className="btn gap-2 px-8 py-4" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>
              Explore Car Exchange
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand)" }}>How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              4 Simple Steps to Sell Your Car
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-xl p-6" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-2xl font-black mb-2" style={{ color: "var(--color-red-brand)", fontFamily: "var(--font-heading)", opacity: 0.7 }}>{step.n}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--color-navy-900)" }}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why sell with us */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Why Sell With First Motors?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {REASONS.map((r) => (
              <div key={r.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{r.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>{r.title}</h3>
                <p className="text-sm text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to Sell Your Car?
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Start with our free vehicle valuation form or visit our showroom on Chandpur Road, Bulandshahr.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/valuation" className="btn btn-primary gap-2 px-8">Get Valuation Now <ArrowRight size={16} /></Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp gap-2 px-8">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
