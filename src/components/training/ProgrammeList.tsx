"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import { EASE_OUT, SPRING_SNAPPY } from "@/components/motion/springs";
import { TRAINING_PROGRAMMES } from "@/data/icig-content";

const CATEGORIES = Array.from(
  new Set(TRAINING_PROGRAMMES.map((p) => p.category)),
);

export default function ProgrammeList() {
  const [category, setCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>(
    TRAINING_PROGRAMMES[0]?.id ?? null,
  );
  const reduceMotion = useReducedMotion();

  const programmes =
    category === "all"
      ? TRAINING_PROGRAMMES
      : TRAINING_PROGRAMMES.filter((p) => p.category === category);

  const tabs = [
    { key: "all", label: `All (${TRAINING_PROGRAMMES.length})` },
    ...CATEGORIES.map((c) => ({ key: c, label: c })),
  ];

  return (
    <>
      <FilterTabs
        items={tabs}
        value={category}
        onChange={setCategory}
        layoutId="training-catalogue-tab"
        label="Programme category"
      />

      <ul className="mt-14 border-t border-hairline">
        {programmes.map((programme, index) => {
          const isOpen = openId === programme.id;

          return (
            <li key={programme.id} className="border-b border-hairline">
              <h3>
                <button
                  onClick={() => setOpenId(isOpen ? null : programme.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-6 py-8 text-left sm:gap-10"
                >
                  <span className="mt-1 hidden w-8 shrink-0 text-[13px] tabular-nums text-ink-3 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="label block text-accent-ink">{programme.category}</span>
                    <span className="text-heading mt-3 block font-semibold text-ink transition-colors duration-200 group-hover:text-accent-ink">
                      {programme.title}
                    </span>
                    <span className="mt-3 block max-w-2xl text-body leading-relaxed text-ink-2">
                      {programme.summary}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-200 group-hover:border-ink-3"
                  >
                    <motion.span
                      className="block h-px w-3.5 bg-current"
                      animate={
                        reduceMotion
                          ? undefined
                          : { rotate: isOpen ? 0 : 90 }
                      }
                      transition={SPRING_SNAPPY}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="detail"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={reduceMotion ? { duration: 0 } : EASE_OUT}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-10 pb-12 sm:pl-14 lg:grid-cols-12 lg:gap-12">
                      <div className="lg:col-span-5">
                        <p className="text-body leading-[1.75] text-ink-2">
                          {programme.fullDescription}
                        </p>
                      </div>

                      <dl className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
                        <div>
                          <dt className="label text-ink-3">Who it is for</dt>
                          <dd className="mt-4 space-y-2 text-small leading-relaxed text-ink-2">
                            {programme.targetAudience.map((item) => (
                              <span key={item} className="block">
                                {item}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt className="label text-ink-3">What you leave with</dt>
                          <dd className="mt-4 space-y-3 text-small leading-relaxed text-ink-2">
                            {programme.outcomes.map((item) => (
                              <span key={item} className="flex gap-3">
                                <span
                                  className="mt-2.5 h-px w-3 shrink-0 bg-accent/60"
                                  aria-hidden
                                />
                                <span>{item}</span>
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt className="label text-ink-3">Delivery</dt>
                          <dd className="mt-4 space-y-2 text-small leading-relaxed text-ink-2">
                            {programme.formatOptions.map((item) => (
                              <span key={item} className="block">
                                {item}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </>
  );
}