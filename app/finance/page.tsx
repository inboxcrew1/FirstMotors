import type { Metadata } from "next";
import Link from "next/link";
import EMICalculator from "@/components/car-detail/EMICalculator";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Used Car Finance & EMI in Bulandshahr | First Motors",
  description:
    "Finance your used car purchase in Bulandshahr with flexible EMI options. Use our online EMI calculator to plan your budget. First Motors connects you with verified auto lenders.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/finance",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/finance",
    siteName: SITE_CONFIG.name,
    title: "Used Car Finance & EMI in Bulandshahr | First Motors",
    description: "Finance your used car purchase in Bulandshahr with flexible EMI options. Calculate estimated EMI and discuss loan options with First Motors.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Used Car Finance at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Car Finance & EMI in Bulandshahr | First Motors",
    description: "Flexible used car loan & EMI options in Bulandshahr with First Motors.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Used Car Finance in Bulandshahr", item: "https://firstmotorsbsr.com/finance" },
  ],
};

const FEATURES = [
  { icon: "⚡", title: "Fast Processing", desc: "Quick document review and timely response from our showroom team." },
  { icon: "🏦", title: "Multiple Options", desc: "We help connect you with reputable used car finance providers." },
  { icon: "📅", title: "Flexible Tenure", desc: "Choose a loan tenure from 1 to 5 years that fits your monthly budget." },
  { icon: "📄", title: "Documentation Support", desc: "Complete guidance through required KYC, bank statements, and paperwork." },
];

const PROCESS = [
  { n: "1", title: "Select Car", desc: "Choose from our online listings or 100+ showroom cars in Bulandshahr." },
  { n: "2", title: "Document Check", desc: "Submit basic KYC, identity, and income documents for preliminary review." },
  { n: "3", title: "Approval", desc: "Receive loan approval decision from the lending institution." },
  { n: "4", title: "Disbursal & Drive", desc: "Loan disbursed, documentation completed, and drive away your car." },
];

export default function FinancePage() {
  const whatsappLink = formatWhatsAppLink(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGES.finance);

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
              <li className="text-white font-medium">Finance &amp; EMI</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Car Finance</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Used Car Finance &amp; EMI in Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-2">
            Flexible EMI options to make your pre-owned car purchase more manageable.
          </p>
          <p className="text-xs text-slate-400 mb-8 max-w-lg mx-auto">
            * EMI figures are indicative estimates. Actual loan rates depend on your credit profile, lender terms, and vehicle age.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#calculator" className="btn btn-primary gap-2 px-8">
              Calculate Your EMI
            </Link>
            <Link href="/buy" className="btn gap-2 px-8" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>
              Browse Available Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Finance Made Simple
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center rounded-xl p-5" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--color-navy-900)" }}>{f.title}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="calculator" className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-fm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Used Car EMI Calculator
            </h2>
            <p className="text-gray-500 mt-2">Plan your monthly budget before purchasing.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <EMICalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * Interest rates and EMI values shown are illustrative estimates. Actual terms depend on lender evaluation.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Simple 4-Step Finance Process
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {PROCESS.map((p) => (
              <div key={p.n} className="text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-extrabold text-white" style={{ background: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                  {p.n}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--color-navy-900)" }}>{p.title}</h3>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="section" style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Have Questions About Car Finance in Bulandshahr?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
            Contact Sharif Ansari or Shamir Khan at First Motors to discuss available financing options. We do not claim 0% interest or guaranteed approvals — we offer transparent assistance with legitimate lenders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp gap-2 px-8">
              Enquire on WhatsApp
            </a>
            <Link href="/buy" className="btn btn-primary gap-2 px-8">
              Browse Showroom Cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
