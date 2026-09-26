import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Used Cars in Bulandshahr | First Motors",
  description:
    "Answers to common questions about buying, selling, and exchanging used cars in Bulandshahr. Learn about RC transfer, car finance, inspection, test drives & more at First Motors.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/faq",
  },
};

export const FAQS = [
  {
    category: "Buying a Car in Bulandshahr",
    items: [
      {
        q: "Where can I buy a reliable used car in Bulandshahr?",
        a: `First Motors is a trusted used car dealer located on Chandpur Road, near Kalyan Singh Medical College, Bulandshahr, UP – 203001. You can browse our inventory on this website or visit us in person. Call Sharif Ansari at 8267871486 or Shamir Khan at 9953950721 for assistance.`,
      },
      {
        q: "How do I know a used car is genuine and not accidental?",
        a: "We share all known information about each car including ownership history and accident history where available. We recommend you inspect the car physically, check paint consistency for panel repairs, and verify the RC and vehicle history on the Parivahan government portal using the registration number.",
      },
      {
        q: "Can I test drive a car before buying?",
        a: "Yes — we encourage test drives. You can book a test drive through our website or by calling/WhatsApp-ing us directly. Our team will schedule a convenient time.",
      },
      {
        q: "What is the process to buy a used car at First Motors?",
        a: "1. Browse our inventory online or visit our showroom. 2. Select a car and inspect it. 3. Book a test drive. 4. Discuss pricing and documentation. 5. Complete payment. 6. We assist with RC transfer. Our team guides you through every step.",
      },
      {
        q: "Do you offer a warranty on used cars?",
        a: "We do not offer a specific warranty. Each car's condition is shared transparently. Please contact us for the full condition and inspection details of any specific vehicle.",
      },
      {
        q: "What should I check when inspecting a used car?",
        a: "Key things to check: Panel gaps and paint consistency (for accident repairs), tyre condition, all electronics (AC, windows, music system, central locking), service history, oil level and colour under the bonnet, and any unusual noises on a test drive. Our guide on the website covers all inspection points in detail.",
      },
      {
        q: "Is it safe to buy a used car online?",
        a: "We encourage physical inspection before buying any car. You can browse inventory online and shortlist vehicles, but we recommend visiting our showroom to inspect the car and take a test drive before making a final decision.",
      },
    ],
  },
  {
    category: "Selling & Exchanging Your Car",
    items: [
      {
        q: "How do I sell my car to First Motors?",
        a: "Submit your car details through our Valuation form on the website or contact us via WhatsApp or phone. Our team will review the details and get in touch with you for an inspection and fair offer.",
      },
      {
        q: "How is the valuation of my car determined?",
        a: "Our team assesses your car based on make, model, year, kilometres driven, condition, service history, and current market rates. We do not use an automated instant valuation tool — every assessment is reviewed by a real person to give you a fair, accurate offer.",
      },
      {
        q: "Can I exchange my existing car for a new one at First Motors?",
        a: "Yes, we offer car exchange. Bring your current car for an evaluation, and we will adjust its value against the car you want to purchase. Contact us to start the process.",
      },
      {
        q: "How long does the selling process take?",
        a: "The timeline depends on the car and documentation. Our team guides you through each step and keeps you informed throughout the process.",
      },
      {
        q: "What documents do I need to sell my car?",
        a: "You will need: Original RC (Registration Certificate), Insurance papers, PUC certificate, Service records (if available), and your Aadhaar/PAN for the sale agreement. If the car has a loan, you will need the NOC/Form 35 from your bank.",
      },
    ],
  },
  {
    category: "Documents & RC Transfer",
    items: [
      {
        q: "What documents do I need to buy a used car?",
        a: "As a buyer, you will need: Aadhaar Card or PAN Card (for identity/KYC), current address proof, and a passport-size photograph. Our team will guide you through the complete documentation required for the RC transfer.",
      },
      {
        q: "How does RC transfer work when buying a used car?",
        a: "Both the buyer and seller visit the local RTO with Form 29 (Transfer Notice by Seller) and Form 30 (Transfer Application by Buyer), along with address proof, ID proof, insurance, PUC and original RC. The RTO processes the transfer and issues a new RC in the buyer's name. Transfer must be done within 30 days of purchase.",
      },
      {
        q: "How do I check if a car has an outstanding loan?",
        a: "Check the RC for any Hypothecation entry — if a bank or NBFC name appears, the car is under loan. Ask the seller for Form 35 (NOC) from the lender confirming the loan is cleared. You can also check on the Parivahan portal using the vehicle's registration number.",
      },
      {
        q: "How long does RC transfer take?",
        a: "RC transfer is typically processed within a few weeks at the RTO, depending on the state and RTO workload. The RC transfer must be initiated within 30 days of purchase (same state) or 45 days (different state).",
      },
      {
        q: "Can I drive the car before the RC is transferred to my name?",
        a: "Yes, you can drive with a sale agreement / purchase receipt as proof of ownership while the RC transfer is being processed. However, it is advisable to carry the original RC and sale documentation whenever you drive.",
      },
    ],
  },
  {
    category: "Finance & EMI",
    items: [
      {
        q: "Can I get a car loan / EMI for a used car?",
        a: "We can help connect you with finance options for used cars. EMI availability depends on the lending institution, your credit profile, income and the specific vehicle. We do not guarantee loan approvals or specific interest rates.",
      },
      {
        q: "What is the typical interest rate for a used car loan?",
        a: "Used car loan interest rates from banks and NBFCs typically range from 10% to 18% per annum, depending on your credit profile, the lender, and the vehicle age. Contact us and we will help connect you with available options.",
      },
      {
        q: "What documents are needed for a car loan?",
        a: "Typically: Aadhaar, PAN Card, last 3 months' salary slips (for salaried) or ITR (for self-employed), last 6 months' bank statements, and address proof. Individual lender requirements may vary.",
      },
      {
        q: "What is the minimum down payment for a used car loan?",
        a: "Lenders typically finance 80–85% of the vehicle value for used cars, meaning you need a minimum down payment of 15–20%. Contact us for guidance specific to the car you are interested in.",
      },
      {
        q: "How long can I take a used car loan for?",
        a: "Used car loan tenures typically range from 1 to 5 years. The maximum tenure depends on the vehicle age and the lender's policy.",
      },
    ],
  },
  {
    category: "About First Motors & General",
    items: [
      {
        q: "Where is First Motors located in Bulandshahr?",
        a: `First Motors is located on Chandpur Road, near Kalyan Singh Medical College, Bulandshahr, Uttar Pradesh – 203001. You can get directions via Google Maps from our Contact page.`,
      },
      {
        q: "What are First Motors' business hours?",
        a: "Monday to Saturday: 9:30 AM – 7:30 PM. Sunday: 10:00 AM – 6:00 PM.",
      },
      {
        q: "How do I contact First Motors?",
        a: `You can call or WhatsApp Sharif Ansari at 8267871486 or Shamir Khan at 9953950721. You can also fill in the contact form on our website or visit us at our Bulandshahr showroom.`,
      },
      {
        q: "Which car brands does First Motors carry?",
        a: "Our inventory includes popular Indian brands including Maruti Suzuki (Swift, Dzire, Baleno, WagonR), Hyundai (i10, i20, Creta, Venue), Tata (Nexon, Tiago, Altroz), Mahindra (Thar), and more. Inventory changes regularly — check our website for the latest listings.",
      },
      {
        q: "Does First Motors offer test drives?",
        a: "Yes. We encourage all buyers to take a test drive before purchasing. Book via our website or contact us directly to schedule.",
      },
      {
        q: "Is there a buying guide for used cars?",
        a: "Yes — visit our Used Car Buying Guide on this website for a complete checklist covering inspection, documents, RC transfer, finance and common mistakes to avoid.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap(section =>
    section.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10 text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 mt-2 max-w-xl mx-auto">
            Common questions about buying, selling, finance, RC transfer and more at First Motors, Bulandshahr.
          </p>
        </div>
      </div>

      <div className="container-fm py-10">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <FAQClient faqs={FAQS} />

          <div className="card p-6 text-center">
            <p className="text-gray-600 mb-1 font-medium">Still have questions?</p>
            <p className="text-gray-400 text-sm mb-4">
              Call or WhatsApp us — Sharif Ansari: 8267871486 · Shamir Khan: 9953950721
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="/contact" className="btn btn-primary px-8">Contact Us</a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello First Motors, I have a question about used cars in Bulandshahr.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
