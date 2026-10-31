import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import CTASection from "@/components/common/CTASection";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/motion/Reveal";
import { SAMPLE_KNOWLEDGE_ARTICLES } from "@/data/icig-content";
import { ARTICLE_COVERS } from "@/data/images";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = SAMPLE_KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.summary };
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = SAMPLE_KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  const more = SAMPLE_KNOWLEDGE_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        subtitle={article.summary}
        breadcrumbs={[
          { label: "Knowledge Centre", href: "/knowledge" },
          { label: article.title },
        ]}
        image={ARTICLE_COVERS[article.slug]}
      />

      <article className="bg-canvas">
        <div className="container-page section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            {/* Body */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-hairline pb-6 text-[13px] text-ink-3">
                <span>Published by Internal Control Institute Ghana</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <div className="mt-12 space-y-12">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-heading font-semibold text-ink">{section.heading}</h2>
                    <p className="mt-5 whitespace-pre-line text-body leading-[1.75] text-ink-2">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>
            </div>

            {/* Takeaways rail */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="on-night rounded-card bg-night p-8">
                  <p className="label text-accent-bright">Key takeaways</p>
                  <ul className="mt-7 space-y-5">
                    {article.keyTakeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex gap-4 text-small leading-relaxed text-white/65"
                      >
                        <span
                          className="mt-2.5 h-px w-3.5 shrink-0 bg-accent-bright/70"
                          aria-hidden
                        />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Reveal delay={0.08} className="mt-8">
                  <ArrowLink href="/knowledge">Explore more articles</ArrowLink>
                </Reveal>
              </div>
            </aside>
          </div>

          {more.length > 0 && (
            <div className="mt-20 border-t border-hairline pt-12">
              <p className="label text-ink-3">Continue reading</p>
              <div className="mt-8 grid gap-10 sm:grid-cols-2">
                {more.map((item) => (
                  <div key={item.slug} className="border-t border-hairline pt-6">
                    <p className="text-[13px] text-accent-ink">{item.category}</p>
                    <h3 className="text-heading mt-3 font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-small leading-relaxed text-ink-2">{item.summary}</p>
                    <div className="mt-6">
                      <ArrowLink href={`/knowledge/${item.slug}`}>Read</ArrowLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}