"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { CERTIFICATIONS } from "@/data/icig-content";
import { SPRING, SPRING_SNAPPY } from "@/components/motion/springs";

export default function CertificationPreview() {
  const [selected, setSelected] = useState("cics");
  const cert = CERTIFICATIONS.find((c) => c.id === selected)!;

  return (
    <section className="on-night border-b border-white/10 bg-night">
      <div className="container-page section-y">
        <SectionHeading
          eyebrow="International professional designations"
          title="Recognised expertise in internal control"
          subtitle="Administered under ICI USA certification arrangements, CICS and CICP recognise practical competence, rigorous framework understanding, and the leadership judgement to run a control environment."
          tone="dark"
        />

        {/* Segmented control — one selection, one moving indicator */}
        <Reveal delay={0.08} className="mt-14">
          <div
            role="tablist"
            aria-label="Certification designation"
            className="inline-flex rounded-full bg-white/6 p-1 ring-1 ring-inset ring-white/10"
          >
            {CERTIFICATIONS.map((item) => {
              const isActive = item.id === selected;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(item.id)}
                  className={`relative rounded-full px-6 py-2.5 text-small font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cert-segment"
                      className="absolute inset-0 rounded-full bg-white/12"
                      transition={SPRING_SNAPPY}
                    />
                  )}
                  <span className="relative">{item.code}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-16 border-t border-white/10 pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={SPRING}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-7">
                <p className="label text-white/35">
                  {cert.id === "cics" ? "Specialist designation" : "Senior designation"}
                </p>
                <h3 className="text-subtitle mt-5 font-semibold text-white">{cert.name}</h3>
                <p className="mt-6 max-w-xl text-body leading-relaxed text-white/60">
                  {cert.description}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <ButtonLink href={cert.ctaHref} variant="accent" size="md">
                    {cert.ctaLabel}
                  </ButtonLink>
                  <ArrowLink href="/certification/journey" tone="light">
                    Not sure which fits? Review the journey
                  </ArrowLink>
                </div>
              </div>

              <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-16">
                <h4 className="label text-accent-bright">Competency domains</h4>
                <ul className="mt-7 space-y-4">
                  {cert.focusAreas.map((area) => (
                    <li key={area} className="flex gap-4 text-small leading-relaxed text-white/60">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent-bright/60" aria-hidden />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}