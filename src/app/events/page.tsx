import PageHeader from "@/components/common/PageHeader";
import { IMAGES } from "@/data/images";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Events & Seminars",
  description:
    "Conferences, executive forums and technical masterclasses advancing internal control practice in Ghana.",
};

const FORMATS = [
  {
    title: "National conferences",
    description:
      "Multi-sector gatherings where practitioners compare what actually happened and what it cost.",
  },
  {
    title: "Executive retreats",
    description:
      "Closed-door working sessions for boards and senior teams on the decisions they own.",
  },
  {
    title: "Technical masterclasses",
    description:
      "Single-discipline sessions on COSO, fraud risk, control design, assessment and governance.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conferences & technical seminars"
        title="Events & seminars"
        subtitle="Professional gatherings, executive forums and technical masterclasses where internal control practice in Ghana is examined honestly."
        breadcrumbs={[{ label: "Events" }]}
        image={IMAGES.events}
      />

      {/* Schedule — currently empty, so say so plainly */}
      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline px-4 py-2">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-ping" />
                  <span className="relative size-1.5 rounded-full bg-accent" />
                </span>
                <span className="label text-ink-2">Schedule being finalised</span>
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="text-title mt-10 font-semibold text-ink">
                Dates are announced as they are confirmed
              </h2>
              <p className="mt-7 text-lead leading-relaxed text-ink-2">
                Rather than publish a calendar we cannot stand behind, ICIG releases session
                dates, venues and registration through the Secretariat and directly to members
                as each cohort is confirmed.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Enquire with the Secretariat
              </ButtonLink>
              <ButtonLink href="/training" variant="secondary" size="lg">
                View the training catalogue
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-subtle">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="What we convene"
            title="Three formats, one subject"
            subtitle="Every ICIG gathering comes back to the same question: is this control actually doing anything?"
            align="center"
          />

          <dl className="mt-16 grid gap-px overflow-hidden rounded-card bg-hairline md:grid-cols-3">
            {FORMATS.map((format, index) => (
              <Reveal key={format.title} delay={index * 0.06} className="bg-subtle p-8 lg:p-10">
                <dt className="text-heading text-lg font-semibold text-ink">{format.title}</dt>
                <dd className="mt-4 text-small leading-relaxed text-ink-2">
                  {format.description}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CTASection eyebrow="Stay informed" />
    </>
  );
}