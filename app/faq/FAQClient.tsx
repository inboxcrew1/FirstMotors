"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem { q: string; a: string }
interface FAQSection { category: string; items: FAQItem[] }

function FAQItemRow({ q, a, id }: FAQItem & { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-3 group"
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="text-sm font-semibold group-hover:text-red-600 transition-colors" style={{ color: "var(--color-navy-900)" }}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180 text-navy-900" : ""
          }`}
        />
      </button>
      {/* Answer content is ALWAYS rendered in the SSR HTML document for search engines */}
      <div
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm text-gray-600 leading-relaxed pt-0.5">{a}</div>
      </div>
    </div>
  );
}

export default function FAQClient({ faqs }: { faqs: FAQSection[] }) {
  return (
    <>
      {faqs.map((section, sIdx) => (
        <div key={section.category} className="card p-6">
          <h2
            className="text-base font-bold mb-2"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            {section.category}
          </h2>
          <div>
            {section.items.map((item, iIdx) => (
              <FAQItemRow key={item.q} q={item.q} a={item.a} id={`${sIdx}-${iIdx}`} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
