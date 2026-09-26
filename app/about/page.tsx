import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About First Motors | Trusted Pre-Owned Cars",
  description: "Learn about First Motors — a trusted pre-owned car dealership committed to transparent, simple and stress-free used car buying.",
};

const VALUES = [
  { icon: "🔍", title: "Transparency", desc: "Honest information about every car — no hidden surprises or misleading claims." },
  { icon: "⭐", title: "Quality", desc: "We carefully evaluate each vehicle before adding it to our inventory." },
  { icon: "🤝", title: "Customer First", desc: "Your satisfaction and confidence matter more than a quick sale." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            About First Motors
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            A trusted pre-owned car dealership committed to making used car buying simple, transparent and stress-free.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Our Story
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Led by <strong>Sharif Ansari</strong> and <strong>Shamir Khan</strong>, <strong>First Motors</strong> is a premier pre-owned car dealership based on Chandpur Road, near Kalyan Singh Medical College in Bulandshahr, Uttar Pradesh.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that buying a second-hand car should be completely transparent, simple, and stress-free. Every vehicle in our showroom is physically inspected, documented, and presented with genuine details so you can drive away with peace of mind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re buying your first car, upgrading your family vehicle, or looking to sell or exchange your current car — our team is here to guide you at every step with honest advice and easy documentation.
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
                <p className="text-gray-500 text-sm">{v.desc}</p>
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
                Chandpur Road, Near Kalyan Singh Medical College, Bulandshahr, Uttar Pradesh – 203001
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
                  <h3 className="font-bold text-lg text-white">First Motors Physical Dealership</h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Walk in to test drive and inspect our live inventory of verified pre-owned cars.
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
          <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to Find Your Car?
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
