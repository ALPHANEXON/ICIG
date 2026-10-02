import PageHeader from "@/components/common/PageHeader";
import { IMAGES } from "@/data/images";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import {
  ICIG_SITE_INFO,
  PROFESSIONAL_VALUES,
  WHY_ICIG_OUTCOMES,
} from "@/data/icig-content";

export const metadata = {
  title: "About ICIG",
  description:
    "Learn about Internal Control Institute Ghana (ICIG), our vision, mission, purpose, professional values, and official affiliation with ICI USA.",
};

const MANDATE = [
  {
    label: "Vision",
    body: "To become Ghana's leading professional platform for advancing knowledge, competence and excellence in internal control.",
  },
  {
    label: "Mission",
    body: "To promote effective internal controls by developing professionals, supporting organisations, advancing professional certification and creating greater public awareness of the importance of strong controls in every sector of the economy.",
  },
  {
    label: "Purpose",
    body: "We exist to help individuals and organisations understand one fundamental principle: good organisations do not leave control to chance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ghana affiliate of ICI USA"
        title="About Internal Control Institute Ghana"
        subtitle="Promoting the understanding, development and effective application of internal controls across business, public institutions and professional practice in Ghana."
        breadcrumbs={[{ label: "About ICIG" }]}
        image={IMAGES.about}
      />

      {/* Who we are */}
      <section className="border-b border-hairline bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Institutional identity"
                title="Who we are"
                subtitle="The Internal Control Institute Ghana serves as the Ghana affiliate of the Internal Control Institute, USA."
              />

              <div className="mt-10 space-y-6 text-body leading-relaxed text-ink-2">
                <p>
                  ICIG exists to promote the professional practice of internal control and to
                  build the capacity of individuals and organisations to design, implement,
                  assess, monitor and continuously improve their systems of internal control.
                </p>
                <p>
                  We provide a local platform through which professionals, organisations,
                  students, business owners and other stakeholders can develop their
                  understanding of internal control and connect with the broader professional
                  standards, certification programmes and resources of the Internal Control
                  Institute.
                </p>
              </div>

              <Reveal delay={0.1} className="mt-12">
                <blockquote className="border-l-2 border-accent pl-6">
                  <p className="font-editorial text-[1.375rem] italic leading-snug text-ink">
                    ICIG seeks to move internal control beyond the audit and finance functions
                    and make it part of everyday organisational culture.
                  </p>
                </blockquote>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-hairline lg:pl-16">
              <h3 className="label text-ink-3">
                Effective controls support ten pillars
              </h3>
              <Stagger as="ul" className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-1">
                {WHY_ICIG_OUTCOMES.map((item, i) => (
                  <StaggerItem
                    key={item.title}
                    as="li"
                    className="flex items-baseline gap-4 border-t border-hairline py-4"
                  >
                    <span className="w-6 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-small font-medium text-ink">{item.title}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, mission, purpose */}
      <section className="on-night border-b border-white/10 bg-night">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Strategic mandate"
            title="Vision, mission & purpose"
            subtitle="Guiding Ghana towards systemic control excellence and organisational resilience."
            tone="dark"
          />

          <Stagger as="ul" className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {MANDATE.map((item, i) => (
              <StaggerItem key={item.label} as="li" className="border-t border-white/10 pt-6">
                <span className="text-[11px] tabular-nums tracking-[0.12em] text-accent-bright/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-heading font-semibold text-white">{item.label}</h3>
                <p className="mt-4 text-small leading-relaxed text-white/55">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Affiliation */}
      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="International affiliation"
                title="Connected to a global internal control community"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-body leading-relaxed text-ink-2">
                <p>
                  The Internal Control Institute, USA is the parent professional body with
                  which Internal Control Institute Ghana is affiliated. ICI is dedicated
                  specifically to the advancement of internal control knowledge and
                  professional competence through professional education, resources, assessment
                  tools and professional certification.
                </p>
                <p>
                  Through our affiliation, ICIG provides a Ghana-focused platform for
                  promoting the principles, professional development opportunities and
                  certification programmes associated with the Internal Control Institute.
                </p>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2">
                <div className="bg-surface p-8">
                  <p className="label text-accent">Parent body</p>
                  <h4 className="mt-5 text-heading font-semibold text-ink">
                    {ICIG_SITE_INFO.relationshipExplanation.parent.name}
                  </h4>
                  <p className="mt-3 text-small leading-relaxed text-ink-2">
                    {ICIG_SITE_INFO.relationshipExplanation.parent.role}
                  </p>
                </div>
                <div className="bg-surface p-8">
                  <p className="label text-accent">Ghana affiliate</p>
                  <h4 className="mt-5 text-heading font-semibold text-ink">
                    {ICIG_SITE_INFO.relationshipExplanation.affiliate.name}
                  </h4>
                  <p className="mt-3 text-small leading-relaxed text-ink-2">
                    {ICIG_SITE_INFO.relationshipExplanation.affiliate.role}
                  </p>
                </div>
              </div>

              <Reveal delay={0.08} className="mt-10">
                <ArrowLink href="/certification">
                  See how the certification programmes work
                </ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="on-night border-t border-white/10 bg-night">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Ethical governance"
            title="Professional values"
            subtitle="Conduct founded on integrity, competence, accountability, professionalism, continuous improvement and practical impact."
            tone="dark"
          />

          <Stagger as="ul" className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROFESSIONAL_VALUES.map((value, i) => (
              <StaggerItem key={value.name} as="li" className="border-t border-white/10 pt-6">
                <span className="text-[11px] tabular-nums tracking-[0.12em] text-accent-bright/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-heading font-semibold text-white">{value.name}</h3>
                <p className="mt-3 text-small leading-relaxed text-white/55">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}