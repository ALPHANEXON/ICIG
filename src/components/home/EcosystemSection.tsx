import SectionHeading from "@/components/common/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PROFESSIONAL_AUDIENCE_LIST } from "@/data/icig-content";

export default function EcosystemSection() {
  return (
    <section className="bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Professional ecosystem"
              title="Who should engage with ICIG?"
              subtitle="Internal control touches virtually every profession, sector and management tier in Ghana. ICIG welcomes practitioners, leaders, students and advisers."
            />
            <Reveal delay={0.1} className="mt-12">
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-editorial text-[1.3125rem] italic leading-relaxed text-ink-2">
                  You do not need the words &ldquo;internal control&rdquo; in your job title to
                  be responsible for internal control.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.16} className="mt-10">
              <ButtonLink href="/membership" variant="primary" size="lg">
                Join the professional network
              </ButtonLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <Stagger as="ul" className="grid gap-x-12 sm:grid-cols-2">
              {PROFESSIONAL_AUDIENCE_LIST.map((role, i) => (
                <StaggerItem
                  key={role}
                  as="li"
                  className="flex items-baseline gap-5 border-t border-hairline py-5"
                >
                  <span className="w-7 shrink-0 text-[11px] tabular-nums tracking-[0.12em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small font-medium leading-relaxed text-ink">
                    {role}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}