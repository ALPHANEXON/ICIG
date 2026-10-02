import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import { PROFESSIONAL_AUDIENCE_LIST } from "@/data/icig-content";
import Photo from "@/components/common/Photo";
import { IMAGES } from "@/data/images";

export const metadata = {
  title: "Membership",
  description:
    "Join Ghana's internal control community. Peer benchmarking, certification support, technical guidance and continuing professional development.",
};

const BENEFITS = [
  {
    title: "A peer network that actually shares",
    description:
      "Internal control, risk, audit and governance practitioners across Ghana, from banks and ministries to family businesses and start-ups.",
  },
  {
    title: "Technical guidance you can use",
    description:
      "Practical frameworks, control templates and peer insight — written to be applied, not filed away.",
  },
  {
    title: "Certification support",
    description:
      "Dedicated candidate guidance through the ICI CICS and CICP designation pathways.",
  },
  {
    title: "Continuing professional development",
    description:
      "Structured learning that keeps your technical currency current and satisfies annual CPD expectations.",
  },
  {
    title: "Conferences and seminars",
    description:
      "Priority access and preferred delegate terms for ICIG national forums, masterclasses and retreats.",
  },
  {
    title: "A voice in national advocacy",
    description:
      "Participation in campaigns that embed control ownership into everyday corporate culture.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ghana's professional community"
        title="A professional home for control practitioners"
        subtitle="ICIG is building a community committed to better governance, better risk decisions and controls that hold up in practice."
        breadcrumbs={[{ label: "Membership" }]}
        aside={
          <div className="on-night rounded-card bg-night p-8">
            <p className="label text-accent-bright">Submit your interest</p>
            <p className="mt-6 text-body leading-relaxed text-white/60">
              Send us your details and we will share the membership registration pack and
              upcoming cohort intakes.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="accent" size="lg">
                Request the pack
              </ButtonLink>
            </div>
          </div>
        }
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Community value"
                title="Continuous engagement, not a subscription"
                subtitle="Membership keeps your technical knowledge current and your judgement benchmarked against practitioners doing comparable work."
              />
              <Reveal delay={0.08} className="mt-10">
                <p className="border-l-2 border-accent pl-6 text-body leading-relaxed text-ink-2">
                  You do not need to be an auditor to belong. We welcome finance leads, risk
                  heads, compliance leads, IT officers, procurement leads, board members, SME
                  owners, students and academics.
                </p>
              </Reveal>
              <Reveal delay={0.12} className="mt-12">
                <Photo image={IMAGES.membership} />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="border-t border-hairline">
                {BENEFITS.map((benefit, index) => (
                  <Reveal
                    key={benefit.title}
                    delay={index * 0.04}
                    as="li"
                    className="grid gap-x-10 gap-y-3 border-b border-hairline py-8 sm:grid-cols-12"
                  >
                    <div className="sm:col-span-5">
                      <span className="text-[13px] tabular-nums text-ink-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-heading mt-3 font-semibold text-ink">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-small leading-relaxed text-ink-2 sm:col-span-7 sm:pt-7">
                      {benefit.description}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-subtle">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Who belongs"
            title="Twenty-one ways to end up in this room"
            subtitle="Internal control is not an audit function. These are the roles that keep an organisation's promises to itself."
          />

          <ul className="mt-14 flex flex-wrap gap-x-3 gap-y-2">
            {PROFESSIONAL_AUDIENCE_LIST.map((role, index) => (
              <Reveal
                key={role}
                delay={Math.min(index * 0.02, 0.3)}
                as="li"
                className="rounded-full border border-hairline px-4 py-2 text-small text-ink-2 transition-colors duration-200 hover:border-ink-3 hover:text-ink"
              >
                {role}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.06} className="mt-16 border-t border-hairline pt-10">
            <ArrowLink href="/signature-campaign">
              See where the campaign is heading
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      <CTASection eyebrow="Join ICIG" />
    </>
  );
}