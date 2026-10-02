"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SPRING, SPRING_SNAPPY } from "@/components/motion/springs";

export interface AccordionItem {
  question: string;
  answer: string;
}

/**
 * Disclosure list. The panel grows from its own top edge on a spring, so
 * interrupting an open mid-flight never snaps.
 */
export default function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${i}`}
                className="group flex w-full items-start justify-between gap-8 py-7 text-left"
              >
                <span
                  className={`text-subtitle font-medium tracking-[-0.02em] transition-colors duration-200 ${
                    isOpen ? "text-ink" : "text-ink-2 group-hover:text-ink"
                  }`}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={SPRING_SNAPPY}
                  className="mt-1 shrink-0 text-ink-3"
                >
                  <Plus className="h-5 w-5" strokeWidth={1.5} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${i}`}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={SPRING}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 text-body leading-relaxed text-ink-2">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}