import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vehicle Quality Check | First Motors",
  description: "Learn how First Motors evaluates pre-owned vehicles. We assess key areas including exterior, interior, engine, tyres, brakes and documentation.",
};

const CATEGORIES = [
  { icon: "🚗", name: "Exterior", desc: "Body condition, paint, dents, scratches and panel alignment." },
  { icon: "💺", name: "Interior", desc: "Seat condition, dashboard, upholstery, trims and odours." },
  { icon: "⚙️", name: "Engine", desc: "Engine condition, oil level, coolant and general operation." },
  { icon: "🔧", name: "Transmission", desc: "Gear changes, clutch operation and transmission response." },
  { icon: "🔄", name: "Tyres", desc: "Tread depth, sidewall condition and wheel alignment signs." },
  { icon: "🛑", name: "Brakes", desc: "Brake pad condition, disc wear and brake response." },
  { icon: "⚡", name: "Electrical", desc: "Lights, indicators, windows, locks and accessories." },
  { icon: "❄️", name: "AC System", desc: "Cooling performance and blower operation." },
  { icon: "🔩", name: "Suspension", desc: "Ride quality, shock absorber condition and steering response." },
  { icon: "📄", name: "Documents", desc: "RC, insurance, pollution certificate and other ownership papers." },
];

export default function InspectionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Quality Check</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
            Vehicle Quality Check
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Before we list any car, our team evaluates key areas so you can browse with confidence.
          </p>
        </div>
      </section>

      {/* What we check */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              What We Evaluate
            </h2>
            <p className="text-gray-500 mt-2">Key areas covered in our vehicle assessment.</p>
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
          <div className="max-w-2xl mx-auto rounded-xl p-6" style={{ background: "#fef9c3", border: "1px solid #fde68a" }}>
            <h3 className="font-bold text-amber-900 mb-2">Important Note</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Inspection results vary by individual vehicle. A detailed inspection report is available for each car in our inventory. Contact us to request the report for any specific vehicle. Our evaluation is intended to help you make an informed decision — it does not constitute a warranty or guarantee of any kind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm text-center">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
            Want to See a Car&apos;s Report?
          </h2>
          <p className="text-gray-500 mb-6">Contact us with the stock ID of any car and we&apos;ll share its inspection details.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/buy" className="btn btn-primary px-8">Browse Cars</Link>
            <Link href="/contact" className="btn btn-outline px-8">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
