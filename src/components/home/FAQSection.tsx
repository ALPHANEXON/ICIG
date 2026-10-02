import SectionHeading from "@/components/common/SectionHeading";
import Accordion from "@/components/common/Accordion";
import Reveal from "@/components/motion/Reveal";
import { FAQS } from "@/data/icig-content";

export default function FAQSection() {
  return (
    <section className="bg-canvas">
      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Institutional guidance"
              title="Frequently asked questions"
              subtitle="Clear answers on our affiliation with ICI USA, certification pathways, membership and organisational training."
            />
          </div>
          <Reveal delay={0.06} className="lg:col-span-7">
            <Accordion items={FAQS} defaultOpen={0} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}