import type { Metadata } from "next";
import Link from "next/link";
import FAQClient from "./FAQClient";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Used Cars in Bulandshahr | First Motors",
  description:
    "Answers to common questions about buying, selling, and exchanging used cars in Bulandshahr. Learn about RC transfer, car finance, inspection, test drives & more at First Motors.",
  alternates: {
    canonical: "https://firstmotorsbsr.com/faq",
  },
  openGraph: {
    type: "website",
    url: "https://firstmotorsbsr.com/faq",
    siteName: SITE_CONFIG.name,
    title: "Frequently Asked Questions — Used Cars in Bulandshahr | First Motors",
    description:
      "Answers to common questions about buying, selling, and exchanging used cars in Bulandshahr. RC transfer, car finance, test drives & inspection.",
    images: [{ url: `${SITE_CONFIG.url}/showroom.jpg`, alt: "First Motors Showroom Bulandshahr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions — Used Cars in Bulandshahr | First Motors",
    description: "Common questions about used cars, RC transfer, car finance, and test drives in Bulandshahr.",
    images: [`${SITE_CONFIG.url}/showroom.jpg`],
  },
};

const FAQS = [
  {
    category: "Buying a Car in Bulandshahr",
    items: [
      {
        q: "Where can I buy a reliable used car in Bulandshahr?",
        a: "First Motors is a trusted pre-owned car dealer located on Chandpur Road, near Kalyan Singh Rajkiya Medical College, Bulandshahr, UP – 203001. We maintain 100+ vehicles at our physical showroom while featuring a selected inventory online. Call Shariq Ansari at 8267871486 or Shamir Khan at 9953950721 for assistance.",
      },
      {
        q: "How many cars are available at First Motors showroom?",
        a: "First Motors has 100+ vehicles physically available at our Bulandshahr showroom, while our website currently showcases a selected online inventory. You are always welcome to visit our showroom or contact us directly to explore the full stock.",
      },
      {
        q: "How do I know a used car is genuine and not accidental?",
        a: "We share transparent information about each vehicle including ownership history and physical inspection findings. We recommend you inspect the car physically at our showroom, check paint consistency for panel repairs, and verify the RC and vehicle history on the Parivahan government portal using the registration number.",
      },
      {
        q: "Can I test drive a car before buying?",
        a: "Yes — we strongly encourage test drives. You can book a test drive through our website or by calling/WhatsApp-ing us directly. Our team will schedule a convenient slot for you.",
      },
      {
        q: "What is the process to buy a used car at First Motors?",
        a: "1. Browse our inventory online or visit our showroom. 2. Select a car and inspect it in person. 3. Take a test drive. 4. Discuss transparent pricing and documentation. 5. Complete payment. 6. We assist with complete RC transfer. Our team guides you through every step.",
      },
      {
        q: "Do you offer a warranty on used cars?",
        a: "We do not offer an arbitrary third-party warranty. Each car's condition is shared transparently and checked thoroughly. Please contact us for the full condition and inspection details of any specific vehicle.",
      },
      {
        q: "What should I check when inspecting a used car?",
        a: "Key inspection checkpoints: Panel gaps and paint consistency (for accident repairs), tyre tread depth, electronics (AC, power windows, central locking), service history, engine fluid levels under the bonnet, and test drive braking/suspension feel.",
      },
      {
        q: "Is it safe to buy a used car online?",
        a: "We encourage physical inspection before buying any car. You can browse our selected online inventory to shortlist vehicles, and then visit our showroom on Chandpur Road, Bulandshahr to inspect the car and test drive before finalizing.",
      },
    ],
  },
  {
    category: "Selling & Exchanging Your Car",
    items: [
      {
        q: "How do I sell my car to First Motors in Bulandshahr?",
        a: "Submit your car details through our free Valuation form on the website or contact us via WhatsApp or phone. Our team will review the details and get in touch with you for a physical evaluation and fair market offer.",
      },
      {
        q: "How is the valuation of my car determined?",
        a: "Our team assesses your car based on make, model, year, kilometres driven, condition, service records, and current market value in Western UP. Every assessment is reviewed by our experienced evaluators to provide an honest offer.",
      },
      {
        q: "Can I exchange my existing car for another car at First Motors?",
        a: "Yes, we offer convenient car exchange. Bring your current car to our Bulandshahr showroom for an evaluation, and we will adjust its agreed value against any car you choose from our inventory.",
      },
      {
        q: "How long does the selling process take?",
        a: "The evaluation takes under an hour once you bring the vehicle. Paperwork and payment are processed promptly once documentation is verified.",
      },
      {
        q: "What documents do I need to sell my car?",
        a: "You will need: Original RC (Registration Certificate), valid Insurance, PUC certificate, service records (if available), and Aadhaar/PAN for the sale agreement. If the car has an ongoing loan, you will need a bank NOC (Form 35).",
      },
    ],
  },
  {
    category: "Documents & RC Transfer",
    items: [
      {
        q: "What documents do I need to buy a used car?",
        a: "As a buyer, you will need: Aadhaar Card or PAN Card (for identity/KYC), current address proof, and passport-size photographs. Our team assists you with the complete documentation required for the official RTO RC transfer.",
      },
      {
        q: "How does RC transfer work in Uttar Pradesh?",
        a: "Both the buyer and seller submit Form 29 (Transfer Notice) and Form 30 (Application for Transfer) along with ID/address proofs, valid insurance, PUC, and original RC to the local RTO. The RTO updates records and issues a new RC in the buyer's name.",
      },
      {
        q: "How do I check if a car has an outstanding bank loan?",
        a: "Check the RC for any Hypothecation entry. If a bank or NBFC is listed, the seller must provide Form 35 (NOC) from the lender confirming the loan has been fully repaid. You can also verify on the Parivahan portal using the registration number.",
      },
      {
        q: "How long does RC transfer take?",
        a: "RC transfer typically takes 2 to 4 weeks depending on RTO processing times. Under Motor Vehicles rules, transfer must be initiated within 30 days of purchase.",
      },
    ],
  },
  {
    category: "Finance & EMI Options",
    items: [
      {
        q: "Can I get a car loan / EMI for a used car in Bulandshahr?",
        a: "Yes, we assist buyers in connecting with leading used car finance providers. Loan approval and interest rates depend on your credit score, income profile, and vehicle age.",
      },
      {
        q: "What documents are required for used car loan approval?",
        a: "Common requirements: Aadhaar Card, PAN Card, last 3–6 months' bank statements, salary slips (for salaried) or ITR (for self-employed), and residence proof.",
      },
      {
        q: "What is the typical down payment for a used car?",
        a: "Lenders typically finance 80% to 85% of the vehicle valuation, meaning a minimum down payment of 15% to 20% is required. Contact us to discuss options for specific cars.",
      },
    ],
  },
  {
    category: "About First Motors & Showroom",
    items: [
      {
        q: "Where is First Motors showroom located?",
        a: "First Motors is located on Chandpur Road, near Kalyan Singh Rajkiya Medical College, Bulandshahr, Uttar Pradesh – 203001. Directions are available on our Contact page and Google Maps.",
      },
      {
        q: "What are your business operating hours?",
        a: "Monday to Sunday: 9:30 AM – 7:30 PM (Open all 7 days).",
      },
      {
        q: "How can I directly contact First Motors representatives?",
        a: "You can call or WhatsApp Shariq Ansari at 8267871486 or Shamir Khan at 9953950721. You can also visit our showroom on Chandpur Road, Bulandshahr.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firstmotorsbsr.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://firstmotorsbsr.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <div style={{ background: "var(--color-navy-900)" }}>
        <div className="container-fm py-10 text-center">
          <nav className="text-xs text-slate-400 mb-3" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">FAQ</li>
            </ol>
          </nav>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Common questions about buying, selling, car finance, RC transfer, and test drives at First Motors, Bulandshahr.
          </p>
        </div>
      </div>

      <div className="container-fm py-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <FAQClient faqs={FAQS} />

          <div className="card p-6 text-center">
            <p className="text-gray-900 mb-1 font-bold text-base">Still have questions?</p>
            <p className="text-gray-500 text-sm mb-4">
              Call or WhatsApp our showroom team directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
              <a href="tel:+918267871486" className="text-sm font-semibold text-navy-900 hover:text-red-600 transition-colors">
                📞 Shariq Ansari: 82678 71486
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="tel:+919953950721" className="text-sm font-semibold text-navy-900 hover:text-red-600 transition-colors">
                📞 Shamir Khan: 99539 50721
              </a>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary px-8">Contact Us</Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello First Motors, I have a question about used cars in Bulandshahr.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8"
              >
                WhatsApp Us
              </a>
              <Link href="/buy" className="btn btn-outline px-8">Browse Cars</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
