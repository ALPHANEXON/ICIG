import type { Certification } from "@/data/icig-content";
import PageHeader from "./PageHeader";
import SectionHeading from "./SectionHeading";
import CTASection from "./CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";

interface Props {
  cert: Certification;
  overviewEyebrow: string;
  overviewTitle: string;
  overviewSubtitle: string;
  domainsTitle: string;
  audienceTitle: string;
  asideTitle: string;
  asideMeta: string;
  asideBody: string;
  primaryLabel: string;
}

/**
 * Shared layout for the two ICI designation pages. Both are the same story —
 * overview, competency domains, candidate profile, apply — so they share one
 * template rather than drifting apart.
 */
export default function CertificationDetail({
  cert,
  overviewEyebrow,
  overviewTitle,
  overviewSubtitle,
  domainsTitle,
  audienceTitle,
  asideTitle,
  asideMeta,
  asideBody,
  primaryLabel,
}: Props) {
  return (
    <>
      <PageHeader
        eyebrow={cert.id === "cics" ? "Specialist designation" : "Senior designation"}
        title={cert.name}
        subtitle={cert.tagline}
        breadcrumbs={[
          { label: "Certification", href: "/certification" },
          { label: `${cert.code} Designation` },
        ]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow={overviewEyebrow}
                title={overviewTitle}
                subtitle={overviewSubtitle}
              />

              <p className="mt-10 max-w-2xl text-body leading-relaxed text-ink-2">
                {cert.description}
              </p>

              <div className="mt-16">
                <h3 className="label text-ink-3">{domainsTitle}</h3>
                <ul className="mt-6 grid gap-x-12 sm:grid-cols-2">
                  {cert.focusAreas.map((area, i) => (
                    <li
                      key={area}
                      className="flex items-baseline gap-4 border-t border-hairline py-4"
                    >
                      <span className="w-6 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-small leading-relaxed text-ink-2">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16">
                <h3 className="label text-ink-3">{audienceTitle}</h3>
                <ul className="mt-6 grid gap-x-12 sm:grid-cols-2">
                  {cert.targetAudience.map((aud, i) => (
                    <li
                      key={aud}
                      className="flex items-baseline gap-4 border-t border-hairline py-4"
                    >
                      <span className="w-6 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-small leading-relaxed text-ink-2">{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action rail */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="on-night rounded-card bg-night p-8">
                    <p className="label text-accent-bright">{cert.code}</p>
                    <h3 className="mt-5 text-heading font-semibold text-white">{asideTitle}</h3>
                    <p className="mt-2 text-[13px] text-white/35">{asideMeta}</p>
                    <p className="mt-6 text-small leading-relaxed text-white/60">{asideBody}</p>

                    <div className="mt-9 flex flex-col gap-4">
                      <ButtonLink href="/contact" variant="accent" size="lg" className="w-full">
                        {primaryLabel}
                      </ButtonLink>
                      <ArrowLink
                        href="/certification/journey"
                        tone="light"
                        className="justify-center"
                      >
                        View the six-step journey
                      </ArrowLink>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08} className="mt-8">
                  <p className="text-[13px] leading-relaxed text-ink-3">
                    This designation is administered under the certification arrangements of
                    the Internal Control Institute, USA. ICIG supports candidates in Ghana
                    throughout the process.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}