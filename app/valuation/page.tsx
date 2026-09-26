import type { Metadata } from "next";
import ValuationForm from "@/components/forms/ValuationForm";

export const metadata: Metadata = {
  title: "Car Valuation | First Motors",
  description: "Get a fair valuation for your car from First Motors. Fill in your vehicle details and our team will contact you with a transparent offer.",
};

export default function ValuationPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Free Valuation</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Know What Your Car Is Worth
          </h1>
          <p className="text-slate-300 max-w-lg mx-auto">
            Fill in your car details below and our First Motors team will review and contact you with a fair, transparent valuation.
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
