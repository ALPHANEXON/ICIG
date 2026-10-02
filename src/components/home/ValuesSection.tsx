import SectionHeading from "@/components/common/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PROFESSIONAL_VALUES } from "@/data/icig-content";

export default function ValuesSection() {
  return (
    <section className="on-night bg-night">
      <div className="container-page section-y">
        <SectionHeading
          eyebrow="Institutional ethics & standards"
          title="Our professional values"
          subtitle="Six principles that govern our community, our teaching and our conduct as a professional body."
          tone="dark"
        />

        <Stagger as="ul" className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_VALUES.map((value, i) => (
            <StaggerItem key={value.name} as="li" className="border-t border-white/10 pt-6">
              <span className="text-[11px] tabular-nums tracking-[0.12em] text-accent-bright/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-heading font-semibold text-white">{value.name}</h3>
              <p className="mt-3 text-small leading-relaxed text-white/55">{value.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}