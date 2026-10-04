"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-6 transition-colors hover:bg-white/[0.01]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between text-left gap-4 select-none group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl font-semibold text-paper group-hover:text-lime transition-colors">
                {item.question}
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-paper group-hover:border-lime group-hover:text-lime transition-colors">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 pr-12 text-sm sm:text-base text-fog leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
