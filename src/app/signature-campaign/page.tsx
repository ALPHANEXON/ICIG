import PageHeader from "@/components/common/PageHeader";
import { IMAGES } from "@/data/images";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ICIG_SITE_INFO, REAL_WORLD_CAMPAIGN_EXAMPLES } from "@/data/icig-content";

export const metadata = {
  title: "National Campaign",
  description:
    "ICIG's national advocacy campaign demonstrating that internal control happens everywhere people, resources, decisions and information are protected.",
};

const PRINCIPLES = [
  {
    title: "Controls are ordinary work",
    description:
      "Checking a delivery against the order, counting stock, approving a payment — nobody needs the word 'control' for this to be internal control.",
  },
  {
    title: "Everyone holds something",
    description:
      "A procurement officer approving an invoice, a nurse dispensing stock, a teacher recording attendance — each one is protecting an asset with a control.",
  },
  {
    title: "Failure is information",
    description:
      "A control that never fails has probably never been tested. Reporting a breakdown is how an organisation learns before the loss does the teaching.",
  },
];

export default function SignatureCampaignPage() {
  return (
    <>
      <PageHeader
        eyebrow="National advocacy campaign"
        title="Internal control is everyone's business"
        subtitle="Moving internal control beyond auditors and accountants, until control execution is simply part of how work gets done in Ghana."
        breadcrumbs={[{ label: "Signature campaign" }]}
        image={IMAGES.campaign}
      />

      {/* Manifesto */}
      <section className="on-night bg-night">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="label text-accent-bright">The premise</p>
              <h2 className="font-editorial mt-8 text-[clamp(1.75rem,3.4vw,2.75rem)] italic leading-[1.2] text-white">
                Wherever resources, decisions, information and people must be protected,
                internal controls matter.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
              <p className="text-body leading-relaxed text-white/60">
                Internal control is routinely presented as a technical discipline belonging to
                audit and accounting functions. In practice it is the ordinary discipline of
                doing careful work — and almost nobody does it under that name.
              </p>
              <p className="font-editorial mt-10 border-l border-accent-bright/40 pl-6 text-[1.3125rem] italic leading-relaxed text-accent-bright">
                {ICIG_SITE_INFO.coreMessage}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="Why the campaign exists"
            title="Three things the campaign is trying to change"
            subtitle="Advocacy only works when it corrects a specific misreading. These are the three we are working on."
          />

          <ol className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {PRINCIPLES.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.07}
                as="li"
                className="border-t border-hairline pt-8"
              >
                <span className="text-[13px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-heading mt-5 font-semibold text-ink">{principle.title}</h3>
                <p className="mt-4 text-small leading-relaxed text-ink-2">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Every sector */}
      <section className="bg-subtle">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Every sector"
                  title="Controls, role by role"
                  subtitle="No two jobs look the same. The discipline underneath them does."
                />
                <Reveal delay={0.08} className="mt-10">
                  <ButtonLink href="/contact" size="lg">
                    Join the campaign
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t border-hairline">
                {REAL_WORLD_CAMPAIGN_EXAMPLES.map((example, index) => (
                  <li key={example.id} className="border-b border-hairline">
                    <Reveal delay={Math.min(index * 0.03, 0.24)} className="grid gap-x-10 gap-y-3 py-8 sm:grid-cols-12">
                      <div className="sm:col-span-4">
                        <p className="text-heading font-semibold text-ink">{example.role}</p>
                        <p className="mt-2 text-[13px] text-ink-3">
                          {example.category}
                        </p>
                      </div>
                      <p className="text-body leading-relaxed text-ink-2 sm:col-span-8">
                        {example.action}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Internal control is everyone's business" />
    </>
  );
}