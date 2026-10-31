import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { SME_PRACTICAL_CONTROLS } from "@/data/icig-content";
import Photo from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

export default function SmeSection() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label text-accent-ink">For growing businesses</p>
            <h2 className="text-subtitle mt-6 font-semibold text-ink">
              Good controls are not only for big companies
            </h2>
            <p className="mt-6 text-body leading-relaxed text-ink-2">
              Every successful business eventually discovers that growth without control
              creates problems. Small and medium enterprises need practical, low-cost controls
              that protect cash, inventory and long-term viability.
            </p>
            <p className="mt-6 text-body leading-relaxed text-ink-2">
              Build the controls before the business becomes too big to control. ICIG provides
              SME-tailored toolkits and workshops built around high-yield routines.
            </p>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/smes-and-entrepreneurs" variant="primary" size="lg">
                SME programmes
              </ButtonLink>
              <ArrowLink href="/contact">Request a workshop</ArrowLink>
            </Reveal>

            <Reveal delay={0.14} className="mt-12">
              <Photo image={IMAGES.sme} />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <div className="flex items-baseline justify-between border-b border-hairline pb-5">
              <h3 className="text-heading font-semibold text-ink">
                Nine controls every Ghanaian SME should implement
              </h3>
            </div>

            <Stagger as="ul" className="grid gap-x-12 sm:grid-cols-2">
              {SME_PRACTICAL_CONTROLS.map((control, i) => (
                <StaggerItem
                  key={control}
                  as="li"
                  className="flex items-baseline gap-5 border-b border-hairline py-5"
                >
                  <span className="w-7 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-accent-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small leading-relaxed text-ink-2">{control}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}