"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SPRING, SPRING_SNAPPY } from "@/components/motion/springs";

const STAGES = [
  {
    step: "01",
    name: "Objectives",
    desc: "Define what the organisation seeks to achieve across operational, financial and compliance dimensions.",
    note: "Clear goals set the foundation for identifying what must be protected.",
  },
  {
    step: "02",
    name: "Risks",
    desc: "Identify threats, vulnerabilities and events that could hinder objective attainment.",
    note: "Unaddressed risks compromise organizational survival and financial integrity.",
  },
  {
    step: "03",
    name: "Controls",
    desc: "Design and establish preventive, detective and corrective mechanisms to mitigate identified risks.",
    note: "Effective controls address specific risks without causing operational gridlock.",
  },
  {
    step: "04",
    name: "Responsibilities",
    desc: "Assign explicit ownership so managers, employees and leaders know their control duties.",
    note: "Control without clear personal ownership leads to systematic failure.",
  },
  {
    step: "05",
    name: "Monitoring",
    desc: "Continuously evaluate whether controls are operating effectively and responding to environmental changes.",
    note: "Routine testing ensures controls remain functional over time.",
  },
  {
    step: "06",
    name: "Improvement",
    desc: "Refine control activities based on monitoring results, emerging risks and technological changes.",
    note: "Continuous evolution keeps the internal control environment resilient.",
  },
];

export default function ControlPhilosophyDiagram() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-5">
        <h2 className="text-heading font-semibold tracking-[-0.02em] text-white">
          The ICIG control cycle
        </h2>
        <span className="shrink-0 text-[11px] tabular-nums tracking-[0.14em] text-white/35">
          {stage.step} / 06
        </span>
      </div>

      <div className="grid gap-8 pt-8 md:grid-cols-2 md:gap-10">
        {/* Stage rail */}
        <ol className="md:border-r md:border-white/10 md:pr-10">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group relative flex w-full items-center gap-5 py-3 text-left"
                >
                  {isActive && (
                    <motion.span
                      layoutId="cycle-rail"
                      className="absolute inset-y-1.5 left-0 w-0.5 bg-accent-bright"
                      transition={SPRING}
                    />
                  )}
                  <span
                    className={`relative w-7 shrink-0 text-[11px] tabular-nums tracking-[0.12em] transition-colors duration-200 ${
                      isActive ? "text-accent-bright" : "text-white/25"
                    }`}
                  >
                    {s.step}
                  </span>
                  <span
                    className={`relative text-body font-medium tracking-[-0.01em] transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/45 group-hover:text-white/75"
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail — swaps in place, never jumps */}
        <div className="md:pt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={SPRING_SNAPPY}
            >
              <p className="text-body leading-relaxed text-white/70">{stage.desc}</p>
              <p className="font-editorial mt-6 border-l border-white/15 pl-4 text-[15px] italic leading-relaxed text-white/50">
                {stage.note}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}