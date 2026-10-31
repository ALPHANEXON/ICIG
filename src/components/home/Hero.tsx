import { ICIG_SITE_INFO } from "@/data/icig-content";
import ControlPhilosophyDiagram from "@/components/common/ControlPhilosophyDiagram";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Backdrop } from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

export default function Hero() {
  return (
    <section className="on-night relative overflow-hidden bg-night">
      <Backdrop
        image={IMAGES.hero}
        priority
        opacity="opacity-60"
        scrim="bg-gradient-to-b from-night via-night/75 to-night/35"
      />
      {/* Depth without noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(245,180,0,0.10),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent)]"
      />

      <div className="container-page relative z-10 pb-24 pt-20 lg:pb-32 lg:pt-32">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal distance={16}>
              <p className="label text-accent-bright">
                {ICIG_SITE_INFO.affiliation}
              </p>
            </Reveal>

            <Reveal delay={0.06} distance={24}>
              <h1 className="text-display mt-10 font-semibold text-white">
                Internal control is
                <br />
                <span className="text-accent-bright">everyone&rsquo;s business.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} distance={20}>
              <p className="mt-10 max-w-xl text-lead leading-relaxed text-white/60">
                ICIG advances the understanding, development and effective application of
                internal control across business, public institutions and not-for-profits in
                Ghana.
              </p>
            </Reveal>

            <Reveal delay={0.18} distance={16}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <ButtonLink href="/certification" variant="accent" size="lg">
                  Explore certification
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/membership" variant="ghost-light" size="lg">
                  Become a member
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.24} distance={12}>
              <p className="mt-14 max-w-lg border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/40">
                Certification programmes are administered by the Internal Control Institute,
                USA. ICIG is the Ghana affiliate and local professional platform.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <Reveal delay={0.1} distance={26}>
              <ControlPhilosophyDiagram />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}