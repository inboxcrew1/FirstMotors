// SkeletonCard — shimmer placeholder matching CarCard layout
// Uses CSS animation via inline keyframe style tag; no framer-motion dependency

export default function SkeletonCard() {
  return (
    <>
      {/* Inline keyframe so this works even without Tailwind animate utilities */}
      <style>{`
        @keyframes fm-shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        .fm-shimmer {
          background: linear-gradient(
            90deg,
            #e5e7eb 25%,
            #f3f4f6 50%,
            #e5e7eb 75%
          );
          background-size: 600px 100%;
          animation: fm-shimmer 1.4s ease-in-out infinite;
        }
      `}</style>

      <div
        className="card flex flex-col overflow-hidden"
        style={{ boxShadow: "var(--shadow-card)" }}
        aria-hidden="true"
      >
        {/* Image placeholder */}
        <div className="fm-shimmer" style={{ height: "200px", flexShrink: 0 }} />

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          {/* Brand label */}
          <div className="fm-shimmer rounded" style={{ height: "12px", width: "40%" }} />
          {/* Model name */}
          <div className="fm-shimmer rounded" style={{ height: "18px", width: "70%" }} />

          {/* Specs row */}
          <div className="flex gap-3">
            <div className="fm-shimmer rounded" style={{ height: "12px", width: "20%" }} />
            <div className="fm-shimmer rounded" style={{ height: "12px", width: "25%" }} />
            <div className="fm-shimmer rounded" style={{ height: "12px", width: "20%" }} />
            <div className="fm-shimmer rounded" style={{ height: "12px", width: "20%" }} />
          </div>

          {/* Ownership badge */}
          <div className="fm-shimmer rounded-full" style={{ height: "22px", width: "30%" }} />

          {/* Price */}
          <div className="flex items-end justify-between mt-1">
            <div className="flex flex-col gap-1.5">
              <div className="fm-shimmer rounded" style={{ height: "24px", width: "120px" }} />
              <div className="fm-shimmer rounded" style={{ height: "11px", width: "100px" }} />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2 mt-auto pt-1">
            <div className="fm-shimmer rounded-lg flex-1" style={{ height: "40px" }} />
            <div className="fm-shimmer rounded-lg" style={{ height: "40px", width: "44px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
