"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import FilterTabs from "@/components/ui/FilterTabs";
import { ButtonLink } from "@/components/ui/Button";
import { REAL_WORLD_CAMPAIGN_EXAMPLES } from "@/data/icig-content";
import { SPRING } from "@/components/motion/springs";
import Photo from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "finance", label: "Finance & Cash" },
  { key: "operations", label: "Operations" },
  { key: "management", label: "Leadership" },
  { key: "healthcare", label: "Healthcare & Safety" },
];

export default function SignatureCampaignSection() {
  const [category, setCategory] = useState("all");
  const examples =
    category === "all"
      ? REAL_WORLD_CAMPAIGN_EXAMPLES
      : REAL_WORLD_CAMPAIGN_EXAMPLES.filter((e) => e.category === category);

  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-page section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label text-accent">National advocacy campaign</p>
          <h2 className="text-title mt-6 font-semibold text-ink">
            Controls happen wherever people, resources and decisions must be protected.
          </h2>
          <p className="mt-7 text-lead leading-relaxed text-ink-2">
            Internal control is often mistaken for something belonging to auditors,
            accountants or compliance officers. It is not. It is the ordinary discipline of
            doing careful work.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-14">
          <Photo
            image={IMAGES.campaign}
            aspect="aspect-[16/10] sm:aspect-[21/9]"
            sizes="(min-width: 1536px) 1408px, 100vw"
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <FilterTabs
            items={CATEGORIES}
            value={category}
            onChange={setCategory}
            layoutId="campaign-tab"
            label="Example category"
          />
        </Reveal>

        <motion.ul layout className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {examples.map((ex) => (
              <motion.li
                key={ex.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={SPRING}
                className="border-t border-hairline pt-6"
              >
                <p className="label text-ink-3">{ex.role}</p>
                <p className="mt-4 text-body leading-relaxed text-ink-2">{ex.action}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal delay={0.06} className="mt-20">
          <div className="flex flex-col gap-8 border-t border-hairline pt-10 lg:flex-row lg:items-center lg:justify-between">
            <blockquote className="font-editorial max-w-2xl text-[1.375rem] italic leading-snug text-ink">
              Your profession may be different. Your responsibilities may be different. But
              wherever resources, decisions, information and people must be protected,
              internal controls matter.
            </blockquote>
            <ButtonLink href="/signature-campaign" variant="secondary" size="lg">
              Explore the campaign
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}