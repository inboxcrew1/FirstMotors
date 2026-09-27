import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Vehicle Quality Check & Inspection in Bulandshahr | First Motors",
  description:
    "Learn how First Motors inspects pre-owned cars in Bulandshahr. We evaluate exterior, interior, engine, transmission, tyres, brakes, electricals and official documentation.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/inspection",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/inspection",
    siteName: SITE_CONFIG.name,
    title: "Vehicle Quality Check & Inspection in Bulandshahr | First Motors",
    description: "Learn how First Motors inspects pre-owned cars in Bulandshahr before listing. Multi-point assessment for complete transparency.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "Vehicle Quality Check at First Motors Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Quality Check | First Motors Bulandshahr",
    description: "Multi-point used car inspection and quality checks in Bulandshahr.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "Vehicle Quality Check", item: "https://firstmotorsbsr.com/inspection" },
  ],
};

const CATEGORIES = [
  { icon: "🚗", name: "Exterior & Body", desc: "Body panels, paint consistency, accident repair checks, and alignment." },
  { icon: "💺", name: "Interior & Cabin", desc: "Upholstery condition, dashboard controls, seat wear, and hygiene." },
  { icon: "⚙️", name: "Engine & Fluids", desc: "Engine compression, oil condition, coolant levels, and leak checks." },
  { icon: "🔧", name: "Transmission & Clutch", desc: "Gear shifting smoothness, clutch plate bite, and gearbox responsiveness." },
  { icon: "🔄", name: "Tyres & Wheels", desc: "Tread depth, uniform tyre wear, sidewall health, and wheel alignment." },
  { icon: "🛑", name: "Braking System", desc: "Brake pad thickness, disc surface condition, and stopping distance." },
  { icon: "⚡", name: "Electricals & Battery", desc: "Battery health, headlights, indicators, power windows, and accessories." },
  { icon: "❄️", name: "AC & Climate Control", desc: "Compressor cooling power, heating, fan speeds, and cabin filter." },
  { icon: "🔩", name: "Suspension & Steering", desc: "Shock absorber response, steering rack tightness, and ground clearance." },
  { icon: "📄", name: "Documentation & RC", desc: "Original RC, valid insurance, PUC, and Parivahan portal verification." },
];

export default function InspectionPage() {
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
              <li className="text-white font-medium">Quality Check</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Quality Check</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
            Vehicle Quality Check in Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Before we list any car, our team evaluates key areas so you can browse with complete confidence.
          </p>
        </div>
      </section>

      {/* What we check */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              10 Key Areas We Evaluate
            </h2>
            <p className="text-gray-500 mt-2">Comprehensive inspection checkpoints covered in our vehicle assessment.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl p-4 text-center" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--color-navy-900)" }}>{cat.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-sm" style={{ background: "var(--color-surface)" }}>
        <div className="container-fm">
          <div className="max-w-3xl mx-auto rounded-xl p-6" style={{ background: "#fef9c3", border: "1px solid #fde68a" }}>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Transparent Policy:</strong> Inspection findings vary by vehicle age and history. We encourage every buyer to physically inspect and test drive their shortlisted car at our Bulandshahr showroom. Detailed vehicle histories and documentation are shared openly with you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Inspect Our Cars in Person
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
