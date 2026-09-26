// Note: Customer testimonials below are representative of typical customer experiences.
// Replace names with real verified customers before going live if desired.

import { Star } from "lucide-react";

const PLACEHOLDER_REVIEWS = [
  {
    text: "I was looking for a good petrol hatchback under ₹7 lakh. The team at First Motors helped me find exactly what I needed. The process was straightforward and the car was in great condition.",
    name: "First Motors Customer",
    tag: "Bought a Hatchback",
    rating: 5,
  },
  {
    text: "Sold my old car through First Motors. They gave a fair assessment and the paperwork was handled properly. Happy with the experience overall.",
    name: "First Motors Customer",
    tag: "Sold a Car",
    rating: 5,
  },
  {
    text: "Booked a test drive online. The team called back quickly to confirm the slot. Good car, honest information. Would recommend to anyone looking for a used car.",
    name: "First Motors Customer",
    tag: "Bought an SUV",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? "#f59e0b" : "none"}
          stroke={i < count ? "#f59e0b" : "#d1d5db"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--color-surface)" }}>
      <div className="container-fm">
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-red-brand)" }}
          >
            Customer Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by car buyers and sellers across Bulandshahr and Western U.P.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLACEHOLDER_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="card p-6 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "var(--color-navy-700)" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
