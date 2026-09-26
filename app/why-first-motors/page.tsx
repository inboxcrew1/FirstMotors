import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why First Motors | Our Commitment to You",
  description: "Discover why customers choose First Motors for pre-owned cars. Transparent information, quality checks, easy finance, documentation support and more.",
};

const REASONS = [
  { icon: "🔍", title: "Carefully Selected Cars", desc: "Each vehicle in our inventory is evaluated by our team before being listed. We aim to provide accurate information about every car." },
  { icon: "📋", title: "Transparent Information", desc: "We share honest details about ownership, kilometres, fuel type and known history. What you see is what you get." },
  { icon: "🚗", title: "Easy Test Drives", desc: "Schedule a test drive at a time that works for you. We encourage you to drive before you decide." },
  { icon: "💰", title: "Finance Assistance", desc: "We help connect you with finance options to make your purchase manageable. We do not claim guaranteed approvals or specific rates." },
  { icon: "📄", title: "Documentation Support", desc: "Our team helps guide you through the RC transfer, insurance and other paperwork involved in a used car purchase." },
  { icon: "🤝", title: "Personalised Service", desc: "You deal with real people who take time to understand your needs — not an impersonal website checkout." },
];

export default function WhyFirstMotorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Our Promise</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
            Why Buy From First Motors?
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            We believe used car buying should be simple, transparent and stress-free. Here&apos;s how we try to deliver that.
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
              <strong>A note on our claims:</strong> We only state what we can genuinely offer. We do not claim to be &ldquo;India&apos;s #1&rdquo; dealership, offer fixed inspection scores, guarantee warranties, or promise returns unless specifically agreed in writing. We believe honest communication builds better relationships.
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
            <Link href="/contact" className="btn px-8" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>Talk to Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
