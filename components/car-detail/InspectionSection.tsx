import type { CarListing } from "@/lib/types";

interface InspectionSectionProps {
  car: CarListing;
}

const DEFAULT_CATEGORIES = [
  "Exterior",
  "Interior",
  "Engine",
  "Transmission",
  "Tyres",
  "Brakes",
  "Electrical",
  "AC System",
  "Suspension",
  "Documents",
];

function StatusBadge({ status }: { status: string }) {
  if (status === "good") {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
        ✓ Good
      </span>
    );
  }
  if (status === "fair") {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
        ~ Fair
      </span>
    );
  }
  if (status === "needs_attention") {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full">
        ⚠ Needs Attention
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
      ℹ Not Checked
    </span>
  );
}

export default function InspectionSection({ car }: InspectionSectionProps) {
  const hasInspection = car.inspectionItems && car.inspectionItems.length > 0;

  return (
    <div className="card p-5 lg:p-6">
      <h2
        className="text-lg font-bold mb-1"
        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
      >
        Vehicle Quality Check
      </h2>
      <p className="text-xs text-gray-400 mb-4">
        Our team evaluates key areas of each vehicle before listing.
      </p>

      {hasInspection ? (
        <div className="space-y-4">
          {car.inspectionItems!.map((cat) => (
            <div key={cat.category}>
              <h3
                className="text-sm font-bold mb-2 pb-1.5 border-b border-gray-100"
                style={{ color: "var(--color-navy-800)" }}
              >
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-2 py-1.5">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <StatusBadge status={item.status} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            {DEFAULT_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="flex flex-col items-center gap-1.5 p-3 rounded-lg text-center"
                style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-base">
                  {cat === "Exterior" ? "🚗" : cat === "Interior" ? "💺" : cat === "Engine" ? "⚙️" : cat === "Transmission" ? "🔧" : cat === "Tyres" ? "🔄" : cat === "Brakes" ? "🛑" : cat === "Electrical" ? "⚡" : cat === "AC System" ? "❄️" : cat === "Suspension" ? "🔩" : "📄"}
                </div>
                <span className="text-xs font-medium text-gray-600">{cat}</span>
              </div>
            ))}
          </div>
          <div
            className="rounded-lg p-4 text-center"
            style={{ background: "var(--color-surface)", border: "1px solid #e5e7eb" }}
          >
            <p className="text-sm text-gray-600 font-medium mb-1">
              Detailed inspection report available on request.
            </p>
            <p className="text-xs text-gray-400">
              Contact us to receive the full inspection report for this vehicle.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
