import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CORPORATE_SERVICES } from "@/data/icig-content";

export const metadata = {
  title: "Corporate Advisory & Support Services",
  description:
    "Internal control health checks, maturity assessments, control design reviews, process reviews and executive workshops for organisations in Ghana.",
};

export default function CorporateServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organisational support"
        title="Advisory and support services"
        subtitle="ICIG works with organisations that want to know where their control environment actually stands — and what to do about it."
        breadcrumbs={[{ label: "Corporate services" }]}
        aside={
          <div className="border-t border-hairline pt-8">
            <p className="label text-ink-3">Who we work with</p>
            <p className="mt-6 text-body leading-relaxed text-ink-2">
              Public agencies, financial institutions, corporates, non-profits and growing
              businesses — engagements are scoped to the part of the environment that needs
              attention first.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg">
                Scope an engagement
              </ButtonLink>
            </div>
          </div>
        }
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Advisory services"
            title="Seven ways to test and strengthen a control environment"
            subtitle="Each engagement ends in something leadership can act on — an objective view of what is working, what is not, and what comes first."
          />

          <ul className="mt-16 border-t border-hairline">
            {CORPORATE_SERVICES.map((service, index) => (
              <li key={service.id} className="border-b border-hairline">
                <Reveal delay={Math.min(index * 0.03, 0.2)} className="py-10">
                  <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12">
                    <div className="lg:col-span-1">
                      <span className="text-[13px] tabular-nums text-ink-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="text-heading font-semibold text-ink">{service.title}</h3>
                      <p className="mt-4 text-small leading-relaxed text-ink-2">
                        {service.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-small leading-relaxed text-ink-2">{service.details}</p>
                    </div>

                    <div className="lg:col-span-3">
                      <p className="label text-ink-3">What you get</p>
                      <ul className="mt-4 space-y-3">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex gap-3 text-small leading-relaxed text-ink-2"
                          >
                            <span
                              className="mt-2.5 h-px w-3 shrink-0 bg-accent/60"
                              aria-hidden
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-subtle">
        <div className="container-page section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Where to start"
                title="Most engagements begin with the health check"
                subtitle="It is fast, independent, and it gives leadership a shared, evidence-based picture before anyone commits to a larger programme of change."
              />
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <ol className="grid gap-10 sm:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Diagnostic",
                    description:
                      "Review the control environment against recognised practice and report the high-risk gaps.",
                  },
                  {
                    step: "02",
                    title: "Prioritise",
                    description:
                      "Agree which gaps carry the most exposure and what a realistic first quarter looks like.",
                  },
                  {
                    step: "03",
                    title: "Embed",
                    description:
                      "Design or remediate the controls, assign ownership, and put monitoring in place to keep them working.",
                  },
                ].map((phase, index) => (
                  <Reveal key={phase.step} delay={index * 0.07} as="li">
                    <span className="text-[13px] tabular-nums text-accent">{phase.step}</span>
                    <h3 className="mt-4 font-semibold text-ink">{phase.title}</h3>
                    <p className="mt-3 text-small leading-relaxed text-ink-2">
                      {phase.description}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Advisory" />
    </>
  );
}