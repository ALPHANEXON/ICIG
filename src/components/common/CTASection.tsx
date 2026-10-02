import { ICIG_SITE_INFO } from "@/data/icig-content";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Backdrop } from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

export default function CTASection({
  eyebrow = "Get involved",
}: {
  eyebrow?: string;
}) {
  return (
    <section className="on-night relative overflow-hidden bg-night">
      <Backdrop image={IMAGES.cta} opacity="opacity-20" />
      <div className="container-page section-y relative">
        <Reveal>
          <p className="label text-accent-bright">{eyebrow}</p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" distance={26}>
            <h2 className="text-title font-semibold text-white">
              Effective controls protect organisations. They protect jobs, investments,
              public resources and reputation.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-3" delay={0.08} distance={26}>
            <p className="text-body leading-relaxed text-white/60">
              Whatever your profession, role or sector, you have a part to play. ICIG exists
              to give you the knowledge, the credentials and the professional community to
              play it well.
            </p>

            <p className="font-editorial mt-10 text-[1.375rem] italic leading-snug text-accent-bright">
              {ICIG_SITE_INFO.coreMessage}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/membership" variant="accent" size="lg">
                Become a member
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/certification" variant="ghost-light" size="lg">
                Explore certification
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}