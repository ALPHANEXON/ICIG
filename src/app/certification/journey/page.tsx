import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CERTIFICATION_JOURNEY_STEPS } from "@/data/icig-content";

export const metadata = {
  title: "The Certification Journey — Six Steps",
  description:
    "The six-step pathway from CV submission to continuing professional development for CICS and CICP certifications in Ghana.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Candidate roadmap"
        title="The ICIG certification journey"
        subtitle="Your professional internal control journey starts here. This is how candidates in Ghana navigate the ICI certification pathway."
        breadcrumbs={[
          { label: "Certification", href: "/certification" },
          { label: "Certification Journey" },
        ]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Process transparency"
                  title="Six transparent stages"
                  subtitle="From first contact to continuing professional development, every stage is signposted before you begin it."
                />
                <Reveal delay={0.08} className="mt-10">
                  <ButtonLink href="/contact" variant="primary" size="lg">
                    Start with a CV review
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <Stagger as="ul" className="lg:col-span-8">
              <ol>
                {CERTIFICATION_JOURNEY_STEPS.map((step) => (
                  <StaggerItem
                    key={step.step}
                    as="li"
                    className="grid gap-4 border-t border-hairline py-9 sm:grid-cols-12 sm:gap-8"
                  >
                    <div className="sm:col-span-3">
                      <p className="text-[11px] tabular-nums tracking-[0.12em] text-accent">
                        Stage {String(step.step).padStart(2, "0")} / 06
                      </p>
                    </div>
                    <div className="sm:col-span-9">
                      <h3 className="text-heading font-semibold text-ink">{step.title}</h3>
                      <p className="mt-3 max-w-2xl text-small leading-relaxed text-ink-2">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </ol>
            </Stagger>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}