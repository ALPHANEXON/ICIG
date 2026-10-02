import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import ControlPhilosophyDiagram from "@/components/common/ControlPhilosophyDiagram";
import LeadershipSection from "@/components/home/LeadershipSection";
import Reveal from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import { BOARD_EXECUTIVE_QUESTIONS } from "@/data/icig-content";

export const metadata = {
  title: "For Organisations",
  description:
    "Policies alone do not create effective internal controls. ICIG helps organisations build practical control ownership across boards, management and staff.",
};

const WHAT_STAFF_MUST_UNDERSTAND = [
  "What can go wrong in this process",
  "Why each control exists",
  "Which controls they personally own",
  "How the control must be performed",
  "When a control failure must be reported",
  "How management responds when controls stop working",
];

export default function ForOrganisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institutional capability"
        title="Build a stronger control culture"
        subtitle="Policies alone do not create effective internal controls. Organisations need people who understand why each control exists and how it operates on an ordinary Tuesday."
        breadcrumbs={[
          { label: "Corporate services", href: "/corporate-services" },
          { label: "For organisations" },
        ]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="From compliance to ownership"
                title="The work, not the paperwork"
                subtitle="An organisation does not have a control problem because it lacks documents. It has one because the people closest to the work do not know which controls are theirs."
              />

              <Reveal delay={0.06} className="mt-12">
                <p className="label text-ink-3">Every employee must be able to answer</p>
                <ul className="mt-7 space-y-4">
                  {WHAT_STAFF_MUST_UNDERSTAND.map((item, index) => (
                    <Reveal
                      key={item}
                      delay={index * 0.04}
                      as="li"
                      className="flex items-baseline gap-5 border-b border-hairline pb-4 text-small leading-relaxed text-ink-2"
                    >
                      <span className="text-[13px] tabular-nums text-ink-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal distance={30}>
                <div className="on-night rounded-card bg-night p-8 lg:p-12">
                  <ControlPhilosophyDiagram />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <LeadershipSection />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Start somewhere specific"
                title="Engage us on a real problem"
                subtitle="Health checks, maturity assessments, control design reviews and customised training — scoped to the part of your environment that needs work first."
              />
              <Reveal delay={0.08} className="mt-10">
                <ArrowLink href="/corporate-services">
                  Review the advisory services
                </ArrowLink>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <blockquote className="font-editorial text-[clamp(1.5rem,2.6vw,2rem)] italic leading-snug text-ink">
                &ldquo;{BOARD_EXECUTIVE_QUESTIONS.meaningful}&rdquo;
              </blockquote>
              <p className="mt-8 text-small text-ink-3">
                If leadership cannot answer that, the next control review will not change
                anything either.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Work with us" />
    </>
  );
}