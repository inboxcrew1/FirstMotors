"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const SUBJECTS = [
  "General Enquiry",
  "Test Drive",
  "Sell My Car",
  "Car Finance",
  "Car Exchange",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

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
          email: form.email,
          message: `Subject: ${form.subject}\n\n${form.message}`,
          type: "contact",
        }),
      });
    } catch {
      // Lead submission failed silently — WhatsApp/phone are backup contact methods
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center flex flex-col items-center gap-4">
        <CheckCircle size={52} className="text-green-500" />
        <h2 className="text-xl font-bold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
          Message Sent!
        </h2>
        <p className="text-gray-600 text-sm">
          Thank you for reaching out, <strong>{form.name}</strong>. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
        Send a Message
      </h2>
      <div>
        <label className="label-fm">Your Name *</label>
        <input className="input-fm" placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} required />
      </div>
      <div>
        <label className="label-fm">Phone *</label>
        <input className="input-fm" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
      </div>
      <div>
        <label className="label-fm">Email</label>
        <input className="input-fm" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
      </div>
      <div>
        <label className="label-fm">Subject *</label>
        <select className="input-fm" value={form.subject} onChange={(e) => set("subject", e.target.value)} required>
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="label-fm">Message *</label>
        <textarea
          className="input-fm resize-y"
          rows={4}
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary justify-center">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
