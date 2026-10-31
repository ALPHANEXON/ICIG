import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import LeadershipSection from "@/components/home/LeadershipSection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TRAINING_PROGRAMMES } from "@/data/icig-content";

export const metadata = {
  title: "For Boards & Senior Executives",
  description:
    "Executive briefings and board education on governance oversight, risk appetite, tone at the top and evaluating whether internal control is operating.",
};

const BOARD_RELEVANT = ["Governance", "Management Leadership", "Enterprise Risk", "Fraud Prevention"];

const BRIEFING_SHAPE = [
  {
    title: "Session one — The oversight frame",
    description:
      "What boards are actually accountable for, and how internal control sits alongside audit, risk and compliance.",
  },
  {
    title: "Session two — Questions that expose answers",
    description:
      "Replacing status reporting with inquiry: which controls failed, who knew, and what changed afterwards.",
  },
  {
    title: "Session three — Risk appetite in practice",
    description:
      "Translating strategy into boundaries the executive team can operate inside without asking permission.",
  },
  {
    title: "Session four — Tone, override and consequence",
    description:
      "What it means when a senior leader bypasses a control, and why tolerance teaches everyone else.",
  },
];

export default function BoardsAndExecutivesPage() {
  const relevant = TRAINING_PROGRAMMES.filter((p) =>
    BOARD_RELEVANT.includes(p.category),
  );

  return (
    <>
      <PageHeader
        eyebrow="Executive & governance oversight"
        title="For boards & senior executives"
        subtitle="Leadership sets expectations about integrity, accountability, risk-taking and ethical behaviour. Everything downstream inherits them."
        breadcrumbs={[
          { label: "Corporate services", href: "/corporate-services" },
          { label: "Boards & executives" },
        ]}
        aside={
          <div className="border-t border-hairline pt-8">
            <p className="label text-ink-3">Typical engagement</p>
            <p className="mt-6 text-body leading-relaxed text-ink-2">
              Half-day or full-day sessions for boards, audit and risk committees, and senior
              executive teams — at your premises or ours.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg">
                Request a briefing
              </ButtonLink>
            </div>
          </div>
        }
      />

      <LeadershipSection />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Briefing shape"
                title="Four sessions, one honest conversation"
                subtitle="Customised around the governance questions your board is currently struggling to answer."
              />
            </div>

            <div className="lg:col-span-8">
              <ol className="border-t border-hairline">
                {BRIEFING_SHAPE.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 0.05}
                    as="li"
                    className="grid gap-x-10 gap-y-3 border-b border-hairline py-8 sm:grid-cols-12"
                  >
                    <span className="text-[13px] tabular-nums text-ink-3 sm:col-span-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="sm:col-span-11">
                      <h3 className="text-heading font-semibold text-ink">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-small leading-relaxed text-ink-2">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-subtle">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Relevant programmes"
            title="Modules that carry into the boardroom"
            subtitle="These are drawn from the standard catalogue. A briefing selects and reframes them for an executive audience."
          />

          <ul className="mt-14 grid gap-px overflow-hidden rounded-card bg-hairline md:grid-cols-2">
            {relevant.map((programme, index) => (
              <Reveal
                key={programme.id}
                delay={index * 0.05}
                as="li"
                className="bg-subtle p-8 lg:p-10"
              >
                <p className="label text-accent-ink">{programme.category}</p>
                <h3 className="text-heading mt-5 font-semibold text-ink">{programme.title}</h3>
                <p className="mt-4 text-small leading-relaxed text-ink-2">
                  {programme.summary}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.06} className="mt-14">
            <ButtonLink href="/training" variant="secondary" size="lg">
              View the full catalogue
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CTASection eyebrow="Governance education" />
    </>
  );
}