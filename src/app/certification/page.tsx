import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { CERTIFICATIONS } from "@/data/icig-content";

export const metadata = {
  title: "Professional Certifications — CICS & CICP",
  description:
    "Explore ICI professional designations: Certified Internal Control Specialist (CICS) and Certified Internal Control Professional (CICP). Administered under ICI USA certification arrangements.",
};

export default function CertificationOverviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="ICI international designations"
        title="Professional certifications in internal control"
        subtitle="An opportunity for practitioners to demonstrate their knowledge, experience and competence in internal control."
        breadcrumbs={[{ label: "Certification" }]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Designation pathways"
            title="The principal ICI professional certifications"
            subtitle="Choose the designation that corresponds with your experience level and professional objectives."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-hairline lg:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.id} className="flex flex-col bg-surface p-8 lg:p-12">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="font-editorial text-[2.5rem] leading-none text-ink">
                    {cert.code}
                  </span>
                  <span className="label text-ink-3">
                    {cert.id === "cics" ? "Specialist level" : "Senior designation"}
                  </span>
                </div>

                <h2 className="text-heading mt-10 font-semibold text-ink">{cert.name}</h2>
                <p className="mt-4 text-body leading-relaxed text-ink-2">{cert.tagline}</p>

                <ul className="mt-10 flex-1 space-y-3">
                  {cert.focusAreas.slice(0, 4).map((area) => (
                    <li key={area} className="flex gap-3.5 text-small text-ink-2">
                      <span className="mt-2.5 h-px w-3.5 shrink-0 bg-accent" aria-hidden />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-hairline pt-8">
                  <ButtonLink href={cert.ctaHref} variant="primary" size="md">
                    {cert.ctaLabel}
                  </ButtonLink>
                  <ArrowLink href={`/certification/${cert.id}`}>
                    Full {cert.code} details
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate support */}
      <section className="on-night border-y border-white/10 bg-night">
        <div className="container-page section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="label text-accent-bright">Candidate support in Ghana</p>
              <h2 className="text-subtitle mt-6 font-semibold text-white">
                How ICIG supports candidates
              </h2>
              <p className="mt-6 max-w-xl text-body leading-relaxed text-white/60">
                The professional certification programmes are administered under the
                certification arrangements of the Internal Control Institute, USA. ICIG assists
                candidates in Ghana through awareness, initial eligibility reviews, guidance,
                preparatory professional development and local application processing.
              </p>
              <Reveal delay={0.08} className="mt-10">
                <ButtonLink href="/certification/journey" variant="ghost-light" size="lg">
                  Explore the six-step journey
                </ButtonLink>
              </Reveal>
            </div>

            <Stagger as="ul" className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-16">
              {[
                "Awareness and guidance on designation choice",
                "Initial eligibility review of submitted CVs",
                "Preparatory professional development",
                "Local application processing and support",
              ].map((item, i) => (
                <StaggerItem
                  key={item}
                  as="li"
                  className="flex items-baseline gap-5 border-t border-white/10 py-5"
                >
                  <span className="w-6 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-accent-bright/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small text-white/60">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}