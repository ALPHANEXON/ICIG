import PageHeader from "@/components/common/PageHeader";
import { IMAGES } from "@/data/images";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import ProgrammeList from "@/components/training/ProgrammeList";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Training & Professional Development Catalogue",
  description:
    "Explore practical internal control training programmes, executive masterclasses, board retreats and customised in-house workshops offered by ICIG in Ghana.",
};

const DELIVERY = [
  {
    title: "Public courses",
    description:
      "Scheduled cohort sessions anyone can join, with peers from across sectors.",
  },
  {
    title: "Executive masterclasses",
    description:
      "Compressed, decision-focused sessions for boards and senior leadership.",
  },
  {
    title: "Board retreats",
    description:
      "Facilitated working sessions built around your organisation's real governance questions.",
  },
  {
    title: "Customised in-house",
    description:
      "Built for your sector, systems and control environment, delivered on your site.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Executive & technical education"
        title="Training & professional development"
        subtitle="Turning internal control knowledge into practical capability across eleven competency areas."
        breadcrumbs={[{ label: "Training" }]}
        image={IMAGES.training}
      />

      {/* Delivery formats */}
      <section className="bg-canvas">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="How we deliver"
            title="One body of knowledge, four ways to study it"
            subtitle="Every format draws on the same internal control standards, so the rigour is identical — only the pacing changes."
          />

          <dl className="mt-16 grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERY.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="bg-canvas p-8 lg:p-9"
              >
                <dt className="text-heading text-lg font-semibold text-ink">
                  {item.title}
                </dt>
                <dd className="mt-4 text-small leading-relaxed text-ink-2">
                  {item.description}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-subtle">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Programme catalogue"
                  title="Eleven programmes, one standard"
                  subtitle="Open a programme to see who it is designed for, what participants take away, and how it can be delivered."
                />
                <Reveal delay={0.08} className="mt-10">
                  <ButtonLink href="/contact" size="lg">
                    Discuss a programme
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ProgrammeList />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}