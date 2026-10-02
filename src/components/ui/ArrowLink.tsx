import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Inline navigational link. The arrow advances on hover so the affordance
 * points where the tap will take you.
 */
export default function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "light";
}) {
  const color =
    tone === "light"
      ? "text-white/70 hover:text-white"
      : "text-ink/70 hover:text-ink";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-small font-medium ${color} transition-colors duration-200 ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out-quint group-hover:w-full" />
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-quint group-hover:translate-x-1" />
    </Link>
  );
}