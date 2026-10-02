import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  SME_PRACTICAL_CONTROLS,
  TRAINING_PROGRAMMES,
} from "@/data/icig-content";

export const metadata = {
  title: "For SMEs & Entrepreneurs",
  description:
    "Low-cost, high-yield internal controls that protect cash, inventory and long-term viability for small and growing businesses in Ghana.",
};

const CONTROL_GROUPS = [
  {
    theme: "Cash",
    description: "Money in, money out, and the record of both.",
    items: [0, 1, 4, 6],
  },
  {
    theme: "Stock & suppliers",
    description: "What you paid for, and what actually arrived.",
    items: [2, 5, 7],
  },
  {
    theme: "Credit & access",
    description: "Who can take money, and who owes you money.",
    items: [3, 8],
  },
];

export default function SmesAndEntrepreneursPage() {
  const smeProgrammes = TRAINING_PROGRAMMES.filter(
    (p) => p.category === "SMEs & Growth" || p.targetAudience.some((a) => /owner|entrepreneur/i.test(a)),
  );

  return (
    <>
      <PageHeader
        eyebrow="SMEs & entrepreneurs"
        title="Good controls are not only for big companies"
        subtitle="Growth without control creates vulnerability. These are the routines that keep cash, stock and credibility intact while a business gets busy."
        breadcrumbs={[
          { label: "Corporate services", href: "/corporate-services" },
          { label: "SMEs & entrepreneurs" },
        ]}
        aside={
          <div className="border-t border-hairline pt-8">
            <p className="label text-ink-3">The principle</p>
            <p className="font-editorial mt-6 text-[1.375rem] italic leading-snug text-ink">
              Build the controls before the business becomes too big to control.
            </p>
          </div>
        }
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Nine controls"
                  title="Where small businesses quietly lose money"
                  subtitle="None of these require an audit department, a consultant, or new software. They require a decision about who does what."
                />
                <Reveal delay={0.08} className="mt-10">
                  <ButtonLink href="/contact" size="lg">
                    Request an SME workshop
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-14">
                {CONTROL_GROUPS.map((group, groupIndex) => (
                  <Reveal key={group.theme} delay={groupIndex * 0.06}>
                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline pb-5">
                      <h3 className="text-heading font-semibold text-ink">{group.theme}</h3>
                      <p className="text-small text-ink-3">{group.description}</p>
                    </div>

                    <ol className="mt-2">
                      {group.items.map((index) => (
                        <li
                          key={SME_PRACTICAL_CONTROLS[index]}
                          className="flex items-baseline gap-5 border-b border-hairline py-5"
                        >
                          <span className="w-7 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-small leading-relaxed text-ink-2">
                            {SME_PRACTICAL_CONTROLS[index]}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {smeProgrammes.length > 0 && (
        <section className="bg-subtle">
          <div className="container-page section-y">
            <SectionHeading
              eyebrow="Training for owners"
              title="Programmes built for the person who signs everything"
              subtitle="Short, practical sessions that end with routines you can run yourself the following week."
            />

            <ul className="mt-14 grid gap-px overflow-hidden rounded-card bg-hairline md:grid-cols-2">
              {smeProgrammes.map((programme, index) => (
                <Reveal
                  key={programme.id}
                  delay={index * 0.06}
                  as="li"
                  className="bg-subtle p-8 lg:p-10"
                >
                  <p className="label text-accent">{programme.category}</p>
                  <h3 className="text-heading mt-5 font-semibold text-ink">{programme.title}</h3>
                  <p className="mt-4 text-small leading-relaxed text-ink-2">
                    {programme.summary}
                  </p>
                  <p className="mt-6 text-[13px] text-ink-3">
                    {programme.formatOptions.join(" · ")}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.06} className="mt-14">
              <ButtonLink href="/training" variant="secondary" size="lg">
                See the full catalogue
              </ButtonLink>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection eyebrow="For business owners" />
    </>
  );
}