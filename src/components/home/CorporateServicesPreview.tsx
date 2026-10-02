"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { CORPORATE_SERVICES } from "@/data/icig-content";
import { SPRING, SPRING_SNAPPY } from "@/components/motion/springs";

export default function CorporateServicesPreview() {
  const [active, setActive] = useState(0);
  const service = CORPORATE_SERVICES[active];

  return (
    <section className="on-night border-y border-white/10 bg-night">
      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label text-accent-bright">Corporate advisory &amp; support</p>
            <h2 className="text-subtitle mt-6 font-semibold text-white">
              Strengthening an organisation&rsquo;s control environment
            </h2>
            <p className="mt-6 max-w-md text-body leading-relaxed text-white/60">
              ICIG works with public and private institutions improving the design,
              implementation, maturity and operating effectiveness of their internal controls.
            </p>
            <Reveal delay={0.08} className="mt-10">
              <ButtonLink href="/contact" variant="ghost-light" size="lg">
                Talk to the Secretariat
              </ButtonLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-16">
            <ol className="-mt-1">
              {CORPORATE_SERVICES.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className="group relative flex w-full items-center gap-6 py-4 text-left"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="service-rail"
                          className="absolute inset-y-2 left-0 w-0.5 bg-accent-bright"
                          transition={SPRING}
                        />
                      )}
                      <span
                        className={`relative w-6 shrink-0 text-[11px] tabular-nums tracking-[0.12em] transition-colors duration-200 ${
                          isActive ? "text-accent-bright" : "text-white/25"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`relative flex-1 text-body font-medium tracking-[-0.01em] transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/75"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 border-t border-white/10 pt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={SPRING_SNAPPY}
                >
                  <p className="text-body leading-relaxed text-white/70">{service.summary}</p>

                  <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-3.5 text-small text-white/50">
                        <span className="mt-2.5 h-px w-3.5 shrink-0 bg-accent-bright/60" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <ArrowLink href="/corporate-services" tone="light">
                      Full corporate offerings
                    </ArrowLink>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}