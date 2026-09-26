"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem { q: string; a: string }
interface FAQSection { category: string; items: FAQItem[] }

function FAQItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-3"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--color-navy-900)" }}>{q}</span>
        {open
          ? <ChevronUp size={16} className="shrink-0 text-gray-400" />
          : <ChevronDown size={16} className="shrink-0 text-gray-400" />
        }
      </button>
      {open && (
        <div className="pb-4 text-sm text-gray-600 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FAQClient({ faqs }: { faqs: FAQSection[] }) {
  return (
    <>
      {faqs.map((section) => (
        <div key={section.category} className="card p-6">
          <h2
            className="text-base font-bold mb-2"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            {section.category}
          </h2>
          <div>
            {section.items.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
