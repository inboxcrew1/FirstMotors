import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Used Car Buying Guide — How to Buy a Second Hand Car in Bulandshahr | First Motors",
  description:
    "Complete guide to buying a used car in Bulandshahr. Learn what to check, which documents you need, how RC transfer works, finance options & how to avoid common mistakes.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/used-car-buying-guide",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents should I check when buying a used car in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verify: RC (Registration Certificate), Insurance certificate, PUC certificate, Service history records, Original invoice if available, Form 35 (NOC) if the car was under loan.",
      },
    },
    {
      "@type": "Question",
      name: "How do I transfer RC when buying a used car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both buyer and seller visit the local RTO with Form 29 and Form 30, along with address proof, ID proof, insurance, PUC and original RC. The RTO processes the transfer and issues new RC in buyer's name.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check if a used car has any loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the RC for hypothecation entry. If a bank name is mentioned, ask for Form 35 (NOC) from the lender. You can also verify on the Parivahan portal using the vehicle registration number.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy a reliable used car in Bulandshahr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First Motors on Chandpur Road (near Kalyan Singh Medical College, Bulandshahr) offers quality pre-owned cars with transparent pricing. Contact: Sharif Ansari 8267871486 or Shamir Khan 9953950721.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a car loan for a used car in Bulandshahr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, banks and NBFCs offer used car loans. Contact First Motors and we will help connect you with available finance options suitable to your situation.",
      },
    },
  ],
};

const SECTIONS = [
  {
    title: "1. Set Your Budget",
    body: "Before you start searching, decide your total budget — not just the car price, but also RC transfer fees, insurance renewal, and any immediate repairs. Keep 10–15% aside beyond the car price for extras.\n\nBudget ranges for used cars in Bulandshahr:\n• Under ₹3 Lakh: Entry-level hatchbacks\n• ₹3–6 Lakh: Well-maintained hatchbacks and small sedans\n• ₹6–12 Lakh: Compact SUVs, premium hatchbacks\n• ₹12 Lakh+: Newer SUVs and premium vehicles",
  },
  {
    title: "2. Choose the Right Car Type",
    body: "Think about how you will mostly use the car:\n• City driving & parking: Hatchback (Swift, i10, Tiago)\n• Family trips + city: Sedan (Dzire) or compact SUV (Nexon, Venue)\n• Off-road or large family: SUV (Thar, Creta)\n• Fuel economy priority: Diesel for high mileage, Petrol/CNG for city use",
  },
  {
    title: "3. Inspect the Car Thoroughly",
    body: "Exterior: Check panel gaps, paint consistency, tyre wear, glass chips.\nInterior: Test AC, windows, music system, central locking. Look for water stains on floor mats (sign of flooding).\nUnder bonnet: Check oil level/colour, look for leaks or corrosion.\nTest drive: Drive at different speeds. Test brakes firmly. Listen for unusual sounds.",
  },
  {
    title: "4. Verify the Documents",
    body: "Always verify: RC (owner name, no active hypothecation or get Form 35 NOC), Valid Insurance, Valid PUC Certificate, Service history records.\n\nTip: Check the vehicle registration number on the Parivahan government portal to verify ownership and loan details.",
  },
  {
    title: "5. Check for Loan / Hypothecation",
    body: "If the RC shows a bank name under Hypothecation, the car is pledged against a loan. Before buying: ensure the seller has obtained a NOC (Form 35) from the bank, the loan is fully closed, and hypothecation removal is completed on the RC.\n\nBuying a car with outstanding hypothecation without NOC can create serious legal problems.",
  },
  {
    title: "6. RC Transfer Process",
    body: "After purchasing, transfer the RC within 30 days (same state) or 45 days (different state).\n\nSteps:\n1. Both buyer and seller visit the local RTO\n2. Submit Form 29 (Transfer notice by seller) and Form 30 (Transfer application by buyer)\n3. Carry: address proof, ID proof, insurance, PUC and original RC\n4. Pay applicable transfer fees\n5. RTO issues new RC in buyer's name\n\nFirst Motors guides you through this process for every purchase.",
  },
  {
    title: "7. Finance for Used Cars",
    body: "Used car loans are available from most banks and NBFCs:\n• Interest rates: typically 10–18% per annum\n• Loan-to-Value: up to 80–85% of car value\n• Tenure: up to 5 years\n• Documents needed: Aadhaar, PAN, income proof, bank statements\n\nContact First Motors and we will help connect you with available finance options.",
  },
  {
    title: "8. Common Mistakes to Avoid",
    body: "• Skipping the test drive — always drive the car yourself\n• Paying without verifying RC, insurance and loan status\n• Relying only on photos — always inspect physically\n• Ignoring service history — it reveals hidden issues\n• Buying without a proper bill or sale agreement\n• Not cross-checking chassis and engine numbers with RC details",
  },
];

export default function BuyingGuidePage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li>/</li>
              <li className="text-slate-300 font-medium">Used Car Buying Guide</li>
            </ol>
          </nav>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Used Car Buying Guide — Bulandshahr
          </h1>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Everything you need to know before buying a second-hand car — inspection checklist, documents, RC transfer, finance options and more.
          </p>
          <p className="text-slate-400 text-sm mt-3">By First Motors · Bulandshahr, U.P.</p>
        </div>
      </div>

      <div className="container-fm py-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {SECTIONS.map((s) => (
            <div key={s.title} className="card p-6">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}

          <div className="card p-7 text-center" style={{ background: "var(--color-navy-900)" }}>
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Buy a Used Car in Bulandshahr?
            </h2>
            <p className="text-slate-300 text-sm mb-5">
              Visit First Motors at Chandpur Road, Bulandshahr. Our team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/buy" className="btn btn-primary">Browse Used Cars</Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello First Motors, I have a question about buying a used car in Bulandshahr.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-slate-400 text-xs mt-4">{SITE_CONFIG.address.full}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
