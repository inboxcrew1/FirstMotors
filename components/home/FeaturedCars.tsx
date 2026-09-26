import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedCars } from "@/data/inventory";
import CarCard from "@/components/inventory/CarCard";

export default function FeaturedCars() {
  const featuredCars = getFeaturedCars();

  return (
    <section className="section" style={{ background: "var(--color-surface)" }}>
      <div className="container-fm">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-red-brand)" }}
            >
              Hand-picked for you
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{
                color: "var(--color-navy-900)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Featured Cars
            </h2>
          </div>
          <Link
            href="/buy"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
            style={{ color: "var(--color-navy-600)" }}
          >
            View All Cars
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Car grid */}
        {featuredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p>New cars coming soon. Check back shortly.</p>
          </div>
        )}

        {/* Mobile: View all button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Link href="/buy" className="btn btn-secondary gap-2">
            View All Cars
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop: bottom CTA */}
        <div className="hidden sm:flex justify-center mt-10">
          <Link href="/buy" className="btn btn-secondary gap-2 px-8">
            Browse Full Inventory
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
