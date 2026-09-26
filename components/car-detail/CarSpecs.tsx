import { Calendar, Gauge, Fuel, Settings2, Cog, Zap, Users, Car, Shield, Palette, FileText } from "lucide-react";
import type { CarListing } from "@/lib/types";
import { formatKmExact } from "@/lib/utils";

interface CarSpecsProps {
  car: CarListing;
}

export default function CarSpecs({ car }: CarSpecsProps) {
  const specs = [
    { icon: Calendar, label: "Registration Year", value: car.registrationYear },
    { icon: Gauge, label: "KM Driven", value: formatKmExact(car.kmDriven) },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Cog, label: "Engine", value: car.engine },
    { icon: Zap, label: "Mileage", value: car.mileage },
    { icon: Users, label: "Ownership", value: car.ownership },
    { icon: Car, label: "Body Type", value: car.bodyType },
    { icon: Users, label: "Seating", value: `${car.seats} Seats` },
    { icon: Palette, label: "Colour", value: car.color },
    { icon: FileText, label: "Registration", value: `${car.registrationState} Registration` },
    {
      icon: Shield,
      label: "Insurance",
      value: car.insuranceExpiry
        ? `${car.insuranceType || "Comprehensive"} · Valid till ${car.insuranceExpiry}`
        : "Available on request",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0 divide-y divide-gray-50">
      {specs.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-3 py-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--color-surface)" }}
          >
            <Icon size={14} style={{ color: "var(--color-navy-700)" }} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-400 font-medium">{label}</p>
            <p className="text-sm font-semibold truncate" style={{ color: "var(--color-navy-900)" }}>
              {value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
