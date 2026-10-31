"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { SPRING_SNAPPY } from "@/components/motion/springs";

const MotionLink = motion.create(Link);
const MotionButton = motion.button;

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost-light";
export type ButtonSize = "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-night-2 shadow-lifted border border-transparent",
  accent:
    "bg-accent text-brand-navy hover:brightness-105 shadow-lifted border border-transparent",
  secondary:
    "bg-transparent text-ink border border-hairline hover:border-ink/25 hover:bg-subtle",
  "ghost-light":
    "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
};

const SIZES: Record<ButtonSize, string> = {
  md: "text-small px-5 py-2.5 gap-2",
  lg: "text-body px-7 py-3.5 gap-2.5",
};

/**
 * Feedback lives on the press: the scale starts on pointer-down and is a
 * spring, so a fast tap still reads as a physical response rather than a
 * delayed transition.
 */
function usePressProps() {
  return {
    whileHover: { y: -1 },
    whileTap: { scale: 0.97, y: 0 },
    transition: SPRING_SNAPPY,
  };
}

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const CLASSES = (
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) =>
  [
    "inline-flex items-center justify-center rounded-full font-semibold",
    "transition-colors duration-200 ease-out-quint will-change-transform",
    VARIANTS[variant],
    SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: BaseProps & { href: string }) {
  return (
    <MotionLink
      href={href}
      className={CLASSES(variant, size, className)}
      {...usePressProps()}
    >
      {children}
    </MotionLink>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: BaseProps & Omit<HTMLMotionProps<"button">, "children" | "className">) {
  return (
    <MotionButton
      className={CLASSES(variant, size, className)}
      {...usePressProps()}
      {...rest}
    >
      {children}
    </MotionButton>
  );
}