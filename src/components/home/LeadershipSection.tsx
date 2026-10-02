import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { BOARD_EXECUTIVE_QUESTIONS } from "@/data/icig-content";
import { ArrowDown } from "lucide-react";
import { Backdrop } from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

export default function LeadershipSection() {
  return (
    <section className="on-night relative overflow-hidden border-b border-white/10 bg-night">
      <Backdrop image={IMAGES.leadership} opacity="opacity-20" />
      <div className="container-page section-y relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="label text-accent-bright">For boards &amp; executive leadership</p>
            <h2 className="text-subtitle mt-6 font-semibold text-white">
              Internal control starts at the top
            </h2>
            <p className="mt-6 text-body leading-relaxed text-white/60">
              Boards and senior management carry a critical responsibility for creating an
              environment in which effective internal control can operate. Leadership sets
              the tone on integrity, risk appetite, compliance, and the consequences of
              control failure.
            </p>
            <p className="mt-6 text-body leading-relaxed text-white/60">
              ICIG provides board and executive education designed to move leaders beyond
              checklist inquiry toward incisive governance oversight.
            </p>

            <Reveal delay={0.08} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/boards-and-executives" variant="accent" size="lg">
                Board &amp; executive programmes
              </ButtonLink>
              <ArrowLink href="/contact" tone="light">
                Request an in-house briefing
              </ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-16">
            <p className="label text-white/35">The governance shift</p>

            <div className="mt-8">
              <div className="border-t border-white/10 pt-6">
                <p className="text-[13px] text-white/35">A superficial question</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/40">
                  &ldquo;{BOARD_EXECUTIVE_QUESTIONS.superficial}&rdquo;
                </p>
              </div>

              <ArrowDown className="my-5 h-4 w-4 text-white/20" aria-hidden />

              <div className="border-t border-accent/50 pt-6">
                <p className="text-[13px] text-accent-bright">A question that changes
                  decisions</p>
                <p className="font-editorial mt-3 text-[1.375rem] leading-snug text-white">
                  &ldquo;{BOARD_EXECUTIVE_QUESTIONS.meaningful}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <h3 className="label text-white/35">Leadership responsibilities</h3>
              <ul className="mt-6 space-y-4">
                {BOARD_EXECUTIVE_QUESTIONS.responsibilities.map((r) => (
                  <li key={r} className="flex gap-4 text-small leading-relaxed text-white/60">
                    <span className="mt-2.5 h-px w-3.5 shrink-0 bg-accent-bright/60" aria-hidden />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}