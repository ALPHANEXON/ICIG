"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { SPRING, SPRING_SNAPPY } from "./springs";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  ul: motion.ul,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  article: motion.article,
  header: motion.header,
  figure: motion.figure,
} as const;

export type MotionTag = keyof typeof MOTION_TAGS;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the reveal begins. */
  delay?: number;
  /** Travel distance in px. Set to 0 for a pure cross-fade. */
  distance?: number;
  as?: MotionTag;
  once?: boolean;
}

/**
 * Scroll-triggered entrance. Motion starts from the element's current value and
 * is skipped entirely under `prefers-reduced-motion`, where it degrades to a
 * short cross-fade so comprehension survives without displacement.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = (MOTION_TAGS[as] ?? motion.div) as typeof motion.div;
  const shift = reduceMotion ? 0 : distance;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: shift }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={
        reduceMotion
          ? { duration: 0.2, ease: "linear" }
          : { ...SPRING, delay }
      }
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
  as?: MotionTag;
}

/** Container that hands its children a shared timeline. */
export function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.07,
  as = "div",
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = (MOTION_TAGS[as] ?? motion.div) as typeof motion.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: reduceMotion
          ? { transition: { staggerChildren: 0.02 } }
          : { transition: { delayChildren, staggerChildren: stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  as?: MotionTag;
}

/** Child of `Stagger`. Inherits timing from the parent timeline. */
export function StaggerItem({
  children,
  className,
  distance = 18,
  as = "div",
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const Tag = (MOTION_TAGS[as] ?? motion.div) as typeof motion.div;
  const shift = reduceMotion ? 0 : distance;

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: shift },
        visible: {
          opacity: 1,
          y: 0,
          transition: reduceMotion
            ? { duration: 0.2, ease: "linear" }
            : SPRING,
        },
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Layout-transition wrapper. One shared `layoutId` across every instance makes
 * a single element appear to move between them instead of cross-fading.
 */
export function LayoutSlide({
  children,
  className,
  layoutId,
}: {
  children: ReactNode;
  className?: string;
  layoutId: string;
}) {
  return (
    <motion.div className={className} layoutId={layoutId} transition={SPRING_SNAPPY}>
      {children}
    </motion.div>
  );
}