import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        tone === "dark" ? "on-night" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
          <span
            className={`h-px w-8 ${tone === "dark" ? "bg-accent-bright" : "bg-accent"}`}
            aria-hidden
          />
          <span
            className={`label ${tone === "dark" ? "text-accent-bright" : "text-accent"}`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-subtitle mt-6 font-semibold ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lead leading-relaxed ${
            tone === "dark" ? "text-white/60" : "text-ink-2"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}