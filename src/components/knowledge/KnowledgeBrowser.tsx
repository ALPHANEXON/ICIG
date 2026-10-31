"use client";

import { useState } from "react";
import Link from "next/link";
import FilterTabs from "@/components/ui/FilterTabs";
import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  KNOWLEDGE_CATEGORIES,
  SAMPLE_KNOWLEDGE_ARTICLES,
} from "@/data/icig-content";
import Photo from "@/components/common/Photo";
import { ARTICLE_COVERS } from "@/data/images";

export default function KnowledgeBrowser() {
  const [category, setCategory] = useState("all");

  const tabs = [
    { key: "all", label: `All (${SAMPLE_KNOWLEDGE_ARTICLES.length})` },
    ...KNOWLEDGE_CATEGORIES.map((c) => ({ key: c, label: c })),
  ];

  const articles =
    category === "all"
      ? SAMPLE_KNOWLEDGE_ARTICLES
      : SAMPLE_KNOWLEDGE_ARTICLES.filter((a) => a.category === category);

  return (
    <>
      <FilterTabs
        items={tabs}
        value={category}
        onChange={setCategory}
        layoutId="knowledge-tab"
        label="Knowledge category"
      />

      <ul className="mt-12 border-t border-hairline">
        {articles.map((article) => (
          <li key={article.slug} className="border-b border-hairline">
            <Link
              href={`/knowledge/${article.slug}`}
              className="group grid gap-x-12 gap-y-6 py-9 transition-colors duration-200 sm:grid-cols-12 sm:items-center"
            >
              <div className="sm:col-span-8">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-3">
                  <span className="text-accent-ink">{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-heading mt-4 font-semibold text-ink transition-colors duration-200 group-hover:text-accent-ink">
                  {article.title}
                </h2>
                <p className="mt-3 max-w-2xl text-body leading-relaxed text-ink-2">
                  {article.summary}
                </p>
              </div>
              {ARTICLE_COVERS[article.slug] && (
                <Photo
                  image={ARTICLE_COVERS[article.slug]}
                  aspect="aspect-[3/2]"
                  sizes="(min-width: 640px) 30vw, 100vw"
                  className="sm:col-span-4"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {articles.length === 0 && (
        <p className="mt-16 text-body text-ink-3">
          Nothing published in this category yet.
        </p>
      )}

      <Reveal delay={0.06} className="mt-14">
        <ButtonLink href="/contact" variant="secondary" size="lg">
          Suggest a topic
        </ButtonLink>
      </Reveal>
    </>
  );
}