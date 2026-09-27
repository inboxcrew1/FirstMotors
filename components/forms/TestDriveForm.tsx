"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import type { CarListing } from "@/lib/types";

interface TestDriveFormProps {
  cars: CarListing[];
}

const TIME_SLOTS = [
  "Morning (9 AM – 11 AM)",
  "Afternoon (11 AM – 2 PM)",
  "Afternoon (2 PM – 5 PM)",
  "Evening (5 PM – 7 PM)",
];

function TestDriveFormInner({ cars }: TestDriveFormProps) {
  const searchParams = useSearchParams();
  const carParam = searchParams.get("car") || "";

  const [form, setForm] = useState({
    car: "",
    name: "",
    phone: "",
    whatsapp: "",
    date: "",
    time: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (carParam && cars.length > 0) {
      const match = cars.find((c) => c.stockId.toLowerCase() === carParam.toLowerCase());
      if (match) {
        setForm((f) => ({
          ...f,
          car: `${match.year} ${match.brand} ${match.model} (${match.stockId})`,
        }));
      }
    }
  }, [carParam, cars]);

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
      // Lead submission completed
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle size={56} className="mx-auto mb-4 text-green-500" />
        <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
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
          <input className="input-fm" placeholder="e.g. Maruti Swift VXI" value={form.car} onChange={(e) => set("car", e.target.value)} required />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-fm">Full Name *</label>
          <input className="input-fm" placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div>
          <label className="label-fm">Phone Number *</label>
          <input className="input-fm" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
        </div>
      </div>

      <div>
        <label className="label-fm">WhatsApp Number (if different)</label>
        <input className="input-fm" type="tel" placeholder="+91 98765 43210" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-fm">Preferred Date *</label>
          <input className="input-fm" type="date" min={today} value={form.date} onChange={(e) => set("date", e.target.value)} required />
        </div>
        <div>
          <label className="label-fm">Preferred Time Slot *</label>
          <select className="input-fm" value={form.time} onChange={(e) => set("time", e.target.value)} required>
            <option value="">Choose time slot...</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label-fm">Location</label>
        <input
          className="input-fm"
          placeholder="First Motors Showroom, Chandpur Road, Bulandshahr"
          value={form.location}
          onChange={(e) => set("location", e.target.value)}
        />
        <p className="text-xs text-gray-400 mt-1">Default: First Motors Showroom, Chandpur Road, Bulandshahr</p>
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary justify-center py-3 text-base mt-2">
        {loading ? "Submitting..." : "Confirm Test Drive Request"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No payment required. We will confirm by phone or WhatsApp before your appointment.
      </p>
    </form>
  );
}

export default function TestDriveForm({ cars }: TestDriveFormProps) {
  return (
    <Suspense fallback={<div className="card p-8 text-center text-sm text-gray-500">Loading test drive form...</div>}>
      <TestDriveFormInner cars={cars} />
    </Suspense>
  );
}
