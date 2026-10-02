import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import KnowledgeBrowser from "@/components/knowledge/KnowledgeBrowser";
import Reveal from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = {
  title: "Knowledge Centre",
  description:
    "Articles, guidance notes and professional updates making internal control concepts understandable and actionable.",
};

export default function KnowledgePage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights & technical guidance"
        title="ICIG Knowledge Centre"
        subtitle="Articles, guidance notes and professional updates that make internal control concepts understandable and actionable."
        breadcrumbs={[{ label: "Knowledge Centre" }]}
      />

      <section className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Practical insights"
                  title="Translating concepts into organisational value"
                  subtitle="Guidance across the core internal control and enterprise risk categories."
                />
                <Reveal delay={0.08} className="mt-10">
                  <ArrowLink href="/training">Study the formal programmes</ArrowLink>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <KnowledgeBrowser />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}