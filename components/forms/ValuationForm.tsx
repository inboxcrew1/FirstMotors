"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import { POPULAR_BRANDS } from "@/data/brands";

const TOTAL_STEPS = 8;

type StepData = {
  registrationNo?: string;
  brand?: string;
  model?: string;
  variant?: string;
  year?: number;
  kmBand?: string;
  fuelType?: string;
  transmission?: string;
  ownership?: string;
  condition?: string;
  photos?: File[];
  name?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
};

const KM_OPTIONS = [
  "Under 20,000 km",
  "20,000 – 50,000 km",
  "50,000 – 80,000 km",
  "80,000 – 1,20,000 km",
  "Over 1,20,000 km",
];
const FUEL_OPTIONS = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
const TRANS_OPTIONS = ["Manual", "Automatic", "AMT"];
const OWNER_OPTIONS = ["1st Owner", "2nd Owner", "3rd Owner", "4th+ Owner"];
const CONDITION_OPTIONS = [
  { value: "excellent", label: "Excellent", desc: "No major damage, full service history" },
  { value: "good", label: "Good", desc: "Minor wear, mostly maintained" },
  { value: "fair", label: "Fair", desc: "Some visible wear, needs minor repairs" },
  { value: "needs_work", label: "Needs Work", desc: "Significant repairs needed" },
];

function OptionCard({ label, desc, selected, onClick }: { label: string; desc?: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-xl p-4 border-2 transition-all w-full"
      style={{
        borderColor: selected ? "var(--color-navy-900)" : "#e5e7eb",
        background: selected ? "var(--color-navy-900)" : "white",
        color: selected ? "white" : "var(--color-navy-900)",
      }}
    >
      <p className="font-semibold text-sm">{label}</p>
      {desc && <p className="text-xs mt-0.5 opacity-70">{desc}</p>}
    </button>
  );
}

export default function ValuationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<StepData>({});
  const [useReg, setUseReg] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const set = (key: keyof StepData, value: unknown) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSubmit = async () => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: `Car Valuation Request\nMake: ${data.brand || ""} ${data.model || ""} ${data.variant || ""}\nYear: ${data.year || ""}\nKM: ${data.kmBand || ""}\nFuel: ${data.fuelType || ""}\nTransmission: ${data.transmission || ""}\nOwnership: ${data.ownership || ""}\nCondition: ${data.condition || ""}\nReg No: ${data.registrationNo || "Not provided"}`,
          type: "valuation",
        }),
      });
    } catch {
      // Silent fallback — contact via WhatsApp/phone still available
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle size={56} className="mx-auto mb-4 text-green-500" />
        <h2 className="text-2xl font-extrabold mb-3" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>
          Request Received!
        </h2>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Thank you, <strong>{data.name}</strong>. Our First Motors team will contact you within 24 hours with your valuation.
        </p>
        <p className="text-sm text-gray-400 mb-6">
          We do not provide instant automated valuations — every valuation is reviewed by our team to ensure accuracy and fairness.
        </p>
        <a href="/" className="btn btn-secondary">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* Progress */}
      <div style={{ background: "var(--color-navy-900)", padding: "1.25rem 1.5rem" }}>
        <div className="flex items-center justify-between text-white mb-3">
          <span className="text-sm font-semibold">Step {step} of {TOTAL_STEPS}</span>
          <span className="text-xs text-slate-400">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/20">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, background: "var(--color-red-brand)" }}
          />
        </div>
      </div>

      <div className="p-6">
        {/* Step 1: Vehicle Details */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Vehicle Details</h2>
            <p className="text-gray-500 text-sm mb-5">Tell us about your car to get started.</p>

            <div className="flex gap-2 mb-5 p-1 rounded-lg" style={{ background: "#f3f4f6" }}>
              <button onClick={() => setUseReg(true)} className="flex-1 py-2 rounded-md text-sm font-semibold transition-all" style={{ background: useReg ? "white" : "transparent", color: "var(--color-navy-900)", boxShadow: useReg ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                Registration Number
              </button>
              <button onClick={() => setUseReg(false)} className="flex-1 py-2 rounded-md text-sm font-semibold transition-all" style={{ background: !useReg ? "white" : "transparent", color: "var(--color-navy-900)", boxShadow: !useReg ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                Select Details
              </button>
            </div>

            {useReg ? (
              <div>
                <label className="label-fm">Vehicle Registration Number</label>
                <input
                  className="input-fm uppercase"
                  placeholder="e.g. MH 12 AB 1234"
                  value={data.registrationNo ?? ""}
                  onChange={(e) => set("registrationNo", e.target.value.toUpperCase())}
                />
                <p className="text-xs text-gray-400 mt-1.5">Enter the number as shown on your RC document.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="label-fm">Brand</label>
                  <select className="input-fm" value={data.brand ?? ""} onChange={(e) => set("brand", e.target.value)}>
                    <option value="">Select Brand</option>
                    {POPULAR_BRANDS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-fm">Model</label>
                  <input className="input-fm" placeholder="e.g. Swift" value={data.model ?? ""} onChange={(e) => set("model", e.target.value)} />
                </div>
                <div>
                  <label className="label-fm">Variant</label>
                  <input className="input-fm" placeholder="e.g. VXi" value={data.variant ?? ""} onChange={(e) => set("variant", e.target.value)} />
                </div>
                <div>
                  <label className="label-fm">Year</label>
                  <input className="input-fm" type="number" min={1990} max={2026} placeholder="e.g. 2021" value={data.year ?? ""} onChange={(e) => set("year", parseInt(e.target.value))} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: KM */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Kilometres Driven</h2>
            <p className="text-gray-500 text-sm mb-5">How many kilometres has your car covered?</p>
            <div className="grid grid-cols-1 gap-3">
              {KM_OPTIONS.map((opt) => (
                <OptionCard key={opt} label={opt} selected={data.kmBand === opt} onClick={() => set("kmBand", opt)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Fuel */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Fuel Type</h2>
            <p className="text-gray-500 text-sm mb-5">What type of fuel does your car use?</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {FUEL_OPTIONS.map((opt) => (
                <OptionCard key={opt} label={opt} selected={data.fuelType === opt} onClick={() => set("fuelType", opt)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Transmission */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Transmission</h2>
            <p className="text-gray-500 text-sm mb-5">What type of gearbox does your car have?</p>
            <div className="grid grid-cols-3 gap-3">
              {TRANS_OPTIONS.map((opt) => (
                <OptionCard key={opt} label={opt} selected={data.transmission === opt} onClick={() => set("transmission", opt)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Ownership */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Ownership</h2>
            <p className="text-gray-500 text-sm mb-5">How many owners has this car had?</p>
            <div className="grid grid-cols-2 gap-3">
              {OWNER_OPTIONS.map((opt) => (
                <OptionCard key={opt} label={opt} selected={data.ownership === opt} onClick={() => set("ownership", opt)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Condition */}
        {step === 6 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Vehicle Condition</h2>
            <p className="text-gray-500 text-sm mb-5">How would you describe the overall condition?</p>
            <div className="grid grid-cols-1 gap-3">
              {CONDITION_OPTIONS.map((opt) => (
                <OptionCard key={opt.value} label={opt.label} desc={opt.desc} selected={data.condition === opt.value} onClick={() => set("condition", opt.value)} />
              ))}
            </div>
          </div>
        )}

        {/* Step 7: Photos */}
        {step === 7 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Vehicle Photos</h2>
            <p className="text-gray-500 text-sm mb-2">Add photos to help us assess your car better (optional).</p>
            <p className="text-xs text-gray-400 mb-5">Front, rear, side, interior, and odometer photos are most useful.</p>
            <label
              className="flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 cursor-pointer transition-colors"
              style={{ borderColor: "#d1d5db" }}
            >
              <div className="text-3xl">📷</div>
              <div className="text-center">
                <p className="text-sm font-semibold" style={{ color: "var(--color-navy-700)" }}>Click to upload photos</p>
                <p className="text-xs text-gray-400 mt-0.5">JPG, PNG up to 10MB each</p>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => set("photos", Array.from(e.target.files ?? []))}
              />
            </label>
            {data.photos && data.photos.length > 0 && (
              <p className="text-sm text-green-600 font-medium mt-3">
                ✓ {data.photos.length} photo{data.photos.length > 1 ? "s" : ""} selected
              </p>
            )}
            <p className="text-xs text-gray-400 mt-3">
              You can also share photos via WhatsApp after submitting your request.
            </p>
          </div>
        )}

        {/* Step 8: Contact */}
        {step === 8 && (
          <div>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}>Your Contact Details</h2>
            <p className="text-gray-500 text-sm mb-5">We&apos;ll use these to get in touch with your valuation.</p>
            <div className="space-y-4">
              <div>
                <label className="label-fm">Full Name *</label>
                <input className="input-fm" placeholder="Your name" value={data.name ?? ""} onChange={(e) => set("name", e.target.value)} required />
              </div>
              <div>
                <label className="label-fm">Phone *</label>
                <input className="input-fm" type="tel" placeholder="+91 XXXXX XXXXX" value={data.phone ?? ""} onChange={(e) => set("phone", e.target.value)} required />
              </div>
              <div>
                <label className="label-fm">WhatsApp Number</label>
                <input className="input-fm" type="tel" placeholder="Same as phone if not specified" value={data.whatsapp ?? ""} onChange={(e) => set("whatsapp", e.target.value)} />
              </div>
              <div>
                <label className="label-fm">Email</label>
                <input className="input-fm" type="email" placeholder="your@email.com" value={data.email ?? ""} onChange={(e) => set("email", e.target.value)} />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button type="button" onClick={back} className="btn btn-outline flex items-center gap-1.5">
              <ChevronLeft size={16} /> Back
            </button>
          )}
          {step < TOTAL_STEPS ? (
            <button type="button" onClick={next} className="btn btn-primary flex-1 justify-center gap-1.5">
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!data.name || !data.phone}
              className="btn btn-primary flex-1 justify-center"
            >
              Get My Valuation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
