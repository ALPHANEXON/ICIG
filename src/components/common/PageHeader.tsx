import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Photo from "@/components/common/Photo";
import type { SiteImage } from "@/data/images";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  aside?: ReactNode;
  image?: SiteImage;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  aside,
  image,
}: PageHeaderProps) {
  return (
    <section className="border-b border-hairline">
      <div className="container-page pb-16 pt-12 lg:pb-24 lg:pt-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-3">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3 text-ink-3/50" aria-hidden />
                    {crumb.href && !last ? (
                      <Link href={crumb.href} className="transition-colors hover:text-ink">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={last ? "text-ink-2" : undefined}>{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            {eyebrow && <p className="label text-accent-ink">{eyebrow}</p>}
            <h1 className="text-title mt-6 font-semibold text-ink">{title}</h1>
            {subtitle && (
              <p className="mt-8 max-w-2xl text-lead leading-relaxed text-ink-2">{subtitle}</p>
            )}
          </div>

          {aside && <div className="lg:col-span-5 lg:pt-3">{aside}</div>}
        </div>

        {image && (
          <Photo
            image={image}
            priority
            aspect="aspect-[16/10] sm:aspect-[21/9]"
            sizes="(min-width: 1536px) 1408px, 100vw"
            className="mt-14 lg:mt-20"
          />
        )}
      </div>
    </section>
  );
}