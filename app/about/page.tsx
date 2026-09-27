import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "About First Motors | 10+ Years Trusted Used Car Dealer in Bulandshahr",
  description:
    "Learn about First Motors — Bulandshahr's trusted pre-owned car dealership with 10+ years of automotive excellence, 100+ vehicles in showroom stock, and 500+ happy customers.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/about",
    siteName: SITE_CONFIG.name,
    title: "About First Motors | Trusted Used Car Dealer in Bulandshahr",
    description: "10+ years in business, 100+ vehicles in showroom stock, and 500+ happy customers in Bulandshahr and Western UP.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "First Motors Dealership Showroom Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About First Motors | Bulandshahr",
    description: "10+ years of trusted automotive service in Bulandshahr. 100+ showroom cars.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "About First Motors", item: "https://firstmotorsbsr.com/about" },
  ],
};

const VALUES = [
  { icon: "🔍", title: "Complete Transparency", desc: "Honest vehicle condition reports, clear pricing, and no hidden charges or misleading claims." },
  { icon: "⭐", title: "Rigorous Quality Check", desc: "Every car in our showroom undergoes physical inspection of mechanicals, electricals, and documentation." },
  { icon: "🤝", title: "Customer-First Philosophy", desc: "Over 500+ satisfied car owners have trusted First Motors across Bulandshahr and Western UP." },
];

const STATS = [
  { value: "10+", label: "Years in Business" },
  { value: "100+", label: "Showroom Vehicles" },
  { value: "500+", label: "Happy Customers" },
  { value: "5.0 ★", label: "Customer Rating" },
];

export default function AboutPage() {
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
              <li className="text-white font-medium">About Us</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Established 2014</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            About First Motors Bulandshahr
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Bulandshahr&apos;s trusted pre-owned car dealership committed to making used car buying simple, transparent, and stress-free.
          </p>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="border-b border-gray-200" style={{ background: "white" }}>
        <div className="container-fm py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Our Story &amp; Commitment
            </h2>
            <div className="prose prose-gray max-w-none text-base leading-relaxed text-gray-700 space-y-4">
              <p>
                Led by <strong>Shariq Ansari</strong> and <strong>Shamir Khan</strong>, <strong>First Motors</strong> has been serving car buyers and sellers in Bulandshahr and Western Uttar Pradesh for over <strong>10+ years</strong>.
              </p>
              <p>
                Our physical dealership showroom is located on <strong>Chandpur Road, near Kalyan Singh Rajkiya Medical College in Bulandshahr</strong>. With more than <strong>100+ vehicles</strong> available in our physical stock, we maintain one of the largest pre-owned vehicle selections in the region.
              </p>
              <p>
                We believe that buying a second-hand car should be completely transparent, simple, and honest. Every car in our showroom is physically inspected, documentation-verified, and presented with genuine details so our customers can drive away with complete confidence.
              </p>
              <p>
                Whether you are buying your first hatchback, upgrading to a family SUV, or seeking to sell or exchange your current vehicle — First Motors provides personal attention, fair pricing, and end-to-end RC transfer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-navy-900)" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Showroom */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand)" }}>
                Visit Us in Person
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
                Our Showroom in Bulandshahr
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Chandpur Road, near Kalyan Singh Rajkiya Medical College, Bulandshahr, Uttar Pradesh – 203001
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 relative group">
              <div className="relative w-full h-[360px] sm:h-[460px] md:h-[500px]">
                <Image
                  src="/showroom.jpg"
                  alt="First Motors Showroom - Chandpur Road, Bulandshahr"
                  fill
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
              <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-white">First Motors Physical Dealership (100+ Cars)</h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Visit us to test drive and inspect our live showroom inventory of verified pre-owned cars.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-primary text-sm shrink-0 px-5 py-2.5"
                >
                  Get Showroom Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to Find Your Next Car?
          </h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Browse our selected online collection or connect with Shariq Ansari (8267871486) and Shamir Khan (9953950721).
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/buy" className="btn btn-primary px-8">Browse Cars</Link>
            <Link href="/contact" className="btn px-8" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>Contact Showroom</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
