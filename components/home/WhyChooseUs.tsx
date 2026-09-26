import Link from "next/link";

const WHY_ITEMS = [
  {
    emoji: "🔍",
    title: "Carefully Selected Cars",
    desc: "Each vehicle in our inventory is evaluated before listing so you browse with confidence.",
  },
  {
    emoji: "📋",
    title: "Transparent Information",
    desc: "Honest details about ownership, kilometres, fuel, and known history — no surprises.",
  },
  {
    emoji: "🚗",
    title: "Easy Test Drives",
    desc: "Schedule a test drive at our showroom at a time that works for you.",
  },
  {
    emoji: "💰",
    title: "Finance Assistance",
    desc: "We help connect you with finance options to make your purchase more manageable.",
  },
  {
    emoji: "📄",
    title: "Documentation Support",
    desc: "Guidance through transfer papers, insurance, and RC so the process is stress-free.",
  },
  {
    emoji: "🤝",
    title: "Personalised Service",
    desc: "One-on-one attention from our team throughout your buying or selling journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container-fm">
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-red-brand)" }}
          >
            Our Commitment
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            Why Buy From First Motors?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We believe buying a used car should be simple, transparent and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--color-surface)",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "white", boxShadow: "var(--shadow-card)" }}
              >
                {item.emoji}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "var(--color-navy-900)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4 flex-wrap">
          <Link href="/why-first-motors" className="btn btn-outline">
            Learn More About Us
          </Link>
          <Link href="/buy" className="btn btn-primary">
            Browse Cars
          </Link>
        </div>
      </div>
    </section>
  );
}
