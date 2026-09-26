import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/config";
import { formatWhatsAppLink } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Car",
    desc: "Provide your vehicle registration, make, model, year, and condition.",
  },
  {
    number: "02",
    title: "Vehicle Evaluation",
    desc: "Our team reviews your details and assesses your car's current market value.",
  },
  {
    number: "03",
    title: "Receive Our Offer",
    desc: "Get a transparent, no-obligation offer from First Motors.",
  },
  {
    number: "04",
    title: "Complete the Sale",
    desc: "Quick, hassle-free paperwork. Get paid and we handle the rest.",
  },
];

export default function SellCTABanner() {
  const whatsappLink = formatWhatsAppLink(
    SITE_CONFIG.whatsapp,
    WHATSAPP_MESSAGES.sellCar
  );

  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%)",
      }}
    >
      <div className="container-fm">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-red-brand-light)" }}
          >
            Sell or Exchange
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Know What Your Car Is Worth
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">
            Get a valuation from First Motors and explore a simple way to sell or exchange your car.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(100%_-_16px)] w-8 h-px z-10"
                  style={{ background: "rgba(232,34,46,0.4)" }}
                />
              )}
              <div
                className="rounded-xl p-5 h-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-3xl font-black mb-3"
                  style={{
                    color: "var(--color-red-brand-light)",
                    fontFamily: "var(--font-heading)",
                    opacity: 0.8,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/valuation" className="btn btn-primary gap-2 px-8 py-3.5">
            Get Car Valuation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/exchange"
            className="btn gap-2 px-8 py-3.5"
            style={{
              background: "transparent",
              color: "white",
              border: "1.5px solid rgba(255,255,255,0.35)",
            }}
          >
            Learn About Exchange
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp gap-2 px-8 py-3.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
