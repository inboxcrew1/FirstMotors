import { CheckCircle, IndianRupee, CreditCard, Car, FileCheck, Shield } from "lucide-react";

const TRUST_ITEMS = [
  { icon: CheckCircle, label: "Quality Checked Cars", color: "#059669" },
  { icon: IndianRupee, label: "Transparent Pricing", color: "#1a3a8f" },
  { icon: CreditCard, label: "Easy Finance Options", color: "#7c3aed" },
  { icon: Car, label: "Test Drive Available", color: "#0369a1" },
  { icon: FileCheck, label: "Documentation Support", color: "#b45309" },
];

export default function TrustStrip() {
  return (
    <section
      className="border-b"
      style={{
        background: "white",
        borderColor: "#e5e7eb",
      }}
    >
      <div className="container-fm py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-gray-100">
          {TRUST_ITEMS.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-3.5 first:pl-0 last:pr-0"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}18` }}
              >
                <Icon size={14} style={{ color }} />
              </div>
              <span
                className="text-sm font-semibold leading-tight"
                style={{ color: "var(--color-navy-900)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
