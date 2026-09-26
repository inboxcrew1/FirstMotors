import type { Metadata } from "next";
import { getAllCars } from "@/data/inventory";
import TestDriveForm from "@/components/forms/TestDriveForm";

export const metadata: Metadata = {
  title: "Book a Test Drive | First Motors",
  description: "Book a test drive for any car in our inventory. Schedule at a time that suits you at the First Motors showroom.",
};

export default function TestDrivePage() {
  const cars = getAllCars().filter((c) => c.status === "available");

  return (
    <div style={{ background: "var(--color-surface)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-navy-950), var(--color-navy-900))" }}>
        <div className="container-fm text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-red-brand-light)" }}>Test Drive</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Take It For a Drive.
          </h1>
          <p className="text-slate-300 text-lg max-w-lg mx-auto">
            Nothing beats experiencing a car in person. Book your test drive in minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="container-fm py-10">
        <div className="max-w-lg mx-auto">
          <TestDriveForm cars={cars} />
        </div>
      </div>

      {/* Why test drive */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-fm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
              Why Test Drive First?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🎯", title: "Feel the Car", desc: "Comfort, visibility, cabin noise — things you can only judge by driving." },
              { icon: "🔧", title: "Hear the Engine", desc: "Listen for any unusual sounds before you decide." },
              { icon: "🛣️", title: "Test in Real Conditions", desc: "City driving, speed bumps, braking — test what matters to you." },
            ].map((item) => (
              <div key={item.title} className="text-center rounded-xl p-6" style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
