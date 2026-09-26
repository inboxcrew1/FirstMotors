import type { CarListing } from "@/lib/types";

interface VehicleHistoryProps {
  car: CarListing;
}

export default function VehicleHistory({ car }: VehicleHistoryProps) {
  const fields = [
    { label: "Registration Year", value: car.registrationYear },
    { label: "Ownership", value: car.ownership },
    { label: "Registration State", value: car.registrationState },
    {
      label: "Insurance",
      value: car.insuranceExpiry
        ? `${car.insuranceType ?? "Comprehensive"} — Valid till ${car.insuranceExpiry}`
        : "Available on request",
    },
    {
      label: "Loan / Hypothecation",
      value:
        car.hypothecation === true
          ? "Active (loan on vehicle)"
          : car.hypothecation === false
          ? "No Active Loan"
          : "Available on request",
    },
    {
      label: "Accidental History",
      value:
        car.accidentHistory === false
          ? "No major accident reported"
          : car.accidentHistory === true
          ? "Accident history present — ask for details"
          : "Available on request",
    },
    { label: "Service Records", value: "Available on request" },
    { label: "RC Status", value: "Available on request" },
  ];

  return (
    <div className="card p-5 lg:p-6">
      <h2
        className="text-lg font-bold mb-4"
        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
      >
        Vehicle Details &amp; History
      </h2>
      <div className="divide-y divide-gray-50">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex items-start justify-between gap-4 py-3">
            <span className="text-sm text-gray-500 shrink-0">{label}</span>
            <span
              className="text-sm font-semibold text-right"
              style={{
                color:
                  value === "Available on request"
                    ? "var(--color-muted)"
                    : "var(--color-navy-900)",
              }}
            >
              {String(value)}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
        For complete documentation details, contact First Motors directly.
      </p>
    </div>
  );
}
