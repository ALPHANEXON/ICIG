import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CERTIFICATION_JOURNEY_STEPS } from "@/data/icig-content";

export default function CertificationJourney() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Structured pathway"
              title="The certification journey"
              subtitle="ICIG helps candidates in Ghana understand and navigate the appropriate ICI pathway through a transparent six-step framework."
            />
            <Reveal delay={0.1} className="mt-10">
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Submit your CV for an eligibility assessment
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger as="ul" className="lg:col-span-7">
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {CERTIFICATION_JOURNEY_STEPS.map((step) => (
                <StaggerItem
                  key={step.step}
                  as="li"
                  className="border-t border-hairline py-7"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="w-7 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-accent">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-heading font-semibold text-ink">{step.title}</h3>
                      <p className="mt-2.5 text-small leading-relaxed text-ink-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </ol>
          </Stagger>
        </div>
      </div>
    </section>
  );
}