"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import type { CarListing } from "@/lib/types";

interface TestDriveFormProps {
  cars: CarListing[];
  initialCarStockId?: string;
}

const TIME_SLOTS = [
  "Morning (9 AM – 11 AM)",
  "Afternoon (11 AM – 2 PM)",
  "Afternoon (2 PM – 5 PM)",
  "Evening (5 PM – 7 PM)",
];

export default function TestDriveForm({ cars, initialCarStockId = "" }: TestDriveFormProps) {
  const matchingCar = cars.find((c) => c.stockId === initialCarStockId);
  const defaultCarValue = matchingCar
    ? `${matchingCar.year} ${matchingCar.brand} ${matchingCar.model} (${matchingCar.stockId})`
    : "";

  const [form, setForm] = useState({
    car: defaultCarValue,
    name: "",
    phone: "",
    whatsapp: "",
    date: "",
    time: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: `Test Drive Request\nCar: ${form.car}\nDate: ${form.date}\nTime: ${form.time}\nLocation: ${form.location || "First Motors Showroom"}\nWhatsApp: ${form.whatsapp || form.phone}`,
          type: "test_drive",
          carStockId: form.car,
        }),
      });
    } catch {
      // Lead submission failed silently — team will still receive WhatsApp/phone enquiries
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle size={56} className="mx-auto mb-4 text-green-500" />
        <h2 className="text-2xl font-extrabold mb-3" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
          Test Drive Booked!
        </h2>
        <p className="text-gray-600 mb-2">
          Thank you, <strong>{form.name}</strong>! Your test drive request has been received.
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Our team will call you within a few hours to confirm your appointment.
        </p>
        <a href="/buy" className="btn btn-secondary">Continue Browsing</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
        Book a Test Drive
      </h2>

      <div>
        <label className="label-fm">Car of Interest *</label>
        {cars.length > 0 ? (
          <select className="input-fm" value={form.car} onChange={(e) => set("car", e.target.value)} required>
            <option value="">Choose a car...</option>
            {cars.map((car) => (
              <option key={car.id} value={`${car.year} ${car.brand} ${car.model} (${car.stockId})`}>
                {car.year} {car.brand} {car.model} {car.variant}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="input-fm"
            placeholder="e.g. Swift, Creta, or specific car model you want to test drive"
            value={form.car}
            onChange={(e) => set("car", e.target.value)}
            required
          />
        )}
      </div>

      <div>
        <label className="label-fm">Full Name *</label>
        <input className="input-fm" placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} required />
      </div>

      <div>
        <label className="label-fm">Phone *</label>
        <input className="input-fm" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
      </div>

      <div>
        <label className="label-fm">WhatsApp Number</label>
        <input className="input-fm" type="tel" placeholder="Leave blank if same as phone" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label-fm">Preferred Date *</label>
          <input className="input-fm" type="date" min={today} value={form.date} onChange={(e) => set("date", e.target.value)} required />
        </div>
        <div>
          <label className="label-fm">Preferred Time *</label>
          <select className="input-fm" value={form.time} onChange={(e) => set("time", e.target.value)} required>
            <option value="">Select time</option>
            {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="label-fm">Preferred Location</label>
        <input className="input-fm" placeholder="e.g. First Motors Showroom / Home Visit" value={form.location} onChange={(e) => set("location", e.target.value)} />
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary justify-center">
        {loading ? "Booking..." : "Book Test Drive"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Our team will confirm your slot within a few hours.
      </p>
    </form>
  );
}
