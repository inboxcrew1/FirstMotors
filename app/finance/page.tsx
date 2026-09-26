import type { Metadata } from "next";
import Link from "next/link";
import EMICalculator from "@/components/car-detail/EMICalculator";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Car Finance & EMI | First Motors",
  description: "Finance your used car purchase with flexible EMI options. Use our EMI calculator to plan your budget. First Motors helps connect you with finance options.",
};

const FEATURES = [
  { icon: "⚡", title: "Fast Processing", desc: "Quick document review and timely response." },
  { icon: "🏦", title: "Multiple Options", desc: "We help connect you with available finance providers." },
  { icon: "📅", title: "Flexible Tenure", desc: "Choose a tenure that suits your monthly budget." },
  { icon: "📄", title: "Low Documentation", desc: "Simple documentation process with our guidance." },
];

const PROCESS = [
  { n: "1", title: "Apply", desc: "Share your details and the car you're interested in." },
  { n: "2", title: "Document Review", desc: "Basic KYC and income documents are verified." },
  { n: "3", title: "Approval", desc: "Finance approval from the lender." },
  { n: "4", title: "Disbursal", desc: "Loan disbursed and car delivered." },
];

export default function FinancePage() {
  const whatsappLink = formatWhatsAppLink(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGES.finance);

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Car Finance</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Finance Your Used Car
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-2">
            Flexible EMI options to make your car purchase more manageable.
          </p>
          <p className="text-xs text-slate-400 mb-8">
            * EMI figures are indicative estimates. Actual rates depend on lender, credit profile, and vehicle age.
          </p>
          <Link href="#calculator" className="btn btn-primary gap-2 px-8">
            Calculate Your EMI
          </Link>
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
              EMI Calculator
            </h2>
            <p className="text-gray-500 mt-2">Plan your budget before you buy.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <EMICalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * Interest rates shown are illustrative only. Actual rates depend on your credit profile and the lending institution.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Finance Process
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
            Interested in Finance?
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
            Contact us to explore your finance options. We do not guarantee approvals or specific interest rates — these depend on the lending institution.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp gap-2 px-8">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Enquire About Finance
          </a>
        </div>
      </section>
    </div>
  );
}
