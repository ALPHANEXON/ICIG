"use client";

import { motion } from "framer-motion";
import { SPRING_SNAPPY } from "@/components/motion/springs";

/**
 * Underline tab strip. The active indicator is a shared layout element, so
 * selecting a new tab moves the rule rather than blinking a new one in.
 * Scrolls horizontally on narrow viewports with the edge faded out.
 */
export default function FilterTabs({
  items,
  value,
  onChange,
  layoutId,
  label,
}: {
  items: { key: string; label: string }[];
  value: string;
  onChange: (key: string) => void;
  layoutId: string;
  label: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="scroll-fade-x -mx-6 flex gap-8 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        const isActive = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.key)}
            className={`relative shrink-0 whitespace-nowrap pb-4 text-small font-medium transition-colors duration-200 ${
              isActive ? "text-ink" : "text-ink-3 hover:text-ink-2"
            }`}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-x-0 bottom-0 h-px bg-ink"
                transition={SPRING_SNAPPY}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}