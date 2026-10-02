import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";
import { WHY_ICIG_OUTCOMES } from "@/data/icig-content";

export default function WhyICIG() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why internal control matters"
              title="Good organisations do not leave control to chance."
              subtitle="Controls should not exist simply because regulators, auditors or policy require them. They help organisations operate better, protect value, and actually reach their strategic goals."
            />

            <Reveal delay={0.1} className="mt-12">
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-editorial text-[1.3125rem] italic leading-relaxed text-ink-2">
                  The real question is not simply &ldquo;do we have controls?&rdquo; It is
                  &ldquo;are they the right controls, are they working, and who owns them?&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.16} className="mt-10">
              <ArrowLink href="/about">Read about ICIG&rsquo;s purpose and vision</ArrowLink>
            </Reveal>
          </div>

          <Stagger as="ul" className="lg:col-span-7 lg:pt-2">
            <ol className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
              {WHY_ICIG_OUTCOMES.map((item, i) => (
                <StaggerItem key={item.title} as="li" className="border-t border-hairline py-6">
                  <div className="flex gap-5">
                    <span className="w-6 shrink-0 pt-1 text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-body font-semibold tracking-[-0.01em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-small leading-relaxed text-ink-2">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </ol>
          </Stagger>
        </div>
      </div>
    </section>
  );
}