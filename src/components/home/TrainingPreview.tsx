"use client";

import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import FilterTabs from "@/components/ui/FilterTabs";
import { TRAINING_PROGRAMMES } from "@/data/icig-content";

export default function TrainingPreview() {
  const [category, setCategory] = useState("all");
  const categories = [
    { key: "all", label: "All" },
    ...Array.from(new Set(TRAINING_PROGRAMMES.map((p) => p.category))).map((c) => ({
      key: c,
      label: c,
    })),
  ];
  const programmes =
    category === "all"
      ? TRAINING_PROGRAMMES
      : TRAINING_PROGRAMMES.filter((p) => p.category === category);

  return (
    <section className="bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Practical executive education"
              title="Turning knowledge into practice"
              subtitle="Public courses, executive seminars, bootcamps and customised in-house programmes — built for practitioners who have to make controls work on Monday morning."
            />
          </div>
          <div className="flex items-start justify-start lg:col-span-6 lg:justify-end lg:pt-2">
            <ArrowLink href="/training">View the complete catalogue</ArrowLink>
          </div>
        </div>

        {/* Underline tabs — the indicator travels between labels */}
        <Reveal delay={0.06} className="mt-16">
          <FilterTabs
            items={categories}
            value={category}
            onChange={setCategory}
            layoutId="training-preview-tab"
            label="Programme domain"
          />
        </Reveal>

        <ul className="mt-10 border-t border-hairline">
          {programmes.map((prog, i) => (
            <li key={prog.id} className="border-b border-hairline">
              <div className="group grid gap-x-10 gap-y-3 py-8 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-7">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-heading font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
                      {prog.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-2xl pl-8 text-small leading-relaxed text-ink-2">
                    {prog.summary}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p className="text-[13px] text-ink-3">{prog.category}</p>
                  <p className="mt-1 text-[13px] text-ink-3">
                    {prog.targetAudience.slice(0, 2).join(", ")}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <ArrowLink href="/training">Details</ArrowLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}