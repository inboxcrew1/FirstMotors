import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sell Your Car | First Motors",
  description: "Sell your car through First Motors. Get a fair, transparent valuation and a simple, hassle-free selling process.",
};

const STEPS = [
  { n: "01", title: "Tell Us About Your Car", desc: "Share your car's make, model, year, kilometres and condition through our simple form.", icon: "📝" },
  { n: "02", title: "Vehicle Evaluation", desc: "Our team reviews your details and assesses your car's current market value.", icon: "🔍" },
  { n: "03", title: "Receive Our Offer", desc: "We provide a clear, no-obligation offer with no hidden surprises.", icon: "💰" },
  { n: "04", title: "Complete the Sale", desc: "Hassle-free documentation and straightforward payment.", icon: "✅" },
];

const REASONS = [
  { icon: "⚡", title: "Simple Process", desc: "Fill one form and our team handles everything else." },
  { icon: "💎", title: "Fair Assessment", desc: "We evaluate honestly based on actual market conditions." },
  { icon: "📄", title: "Documentation Help", desc: "We guide you through transfer papers and RC processes." },
];

export default function SellPage() {
  const whatsappLink = formatWhatsAppLink(SITE_CONFIG.whatsapp, WHATSAPP_MESSAGES.sellCar);

  return (
    <div>
      {/* Hero */}
      <section
        className="section"
        style={{ background: "linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%)" }}
      >
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-red-brand-light)" }}>
            Sell Your Car
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Sell Your Car Without the Hassle
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Get a valuation from First Motors and explore a simple way to sell or exchange your car.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/valuation" className="btn btn-primary gap-2 px-8 py-4">
              Get Car Valuation <ArrowRight size={16} />
            </Link>
            <Link href="/exchange" className="btn gap-2 px-8 py-4" style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>
              Learn About Exchange
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
            Ready to Sell?
          </h2>
          <p className="text-slate-300 mb-8">Start with a free valuation. No obligation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/valuation" className="btn btn-primary gap-2 px-8">Get Valuation Now <ArrowRight size={16} /></Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp gap-2 px-8">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
