import type { Transition, Variants } from "framer-motion";

/**
 * House motion language.
 *
 * Springs only — every transition is interruptible and retargetable from the
 * element's current on-screen value. `duration` here is Apple's "response":
 * the time to reach the target, not a fixed length. The settle time falls out
 * of the spring, which is why nothing ever gets interrupted mid-flight.
 */

/** Default UI spring — critically damped, no overshoot, graceful. */
export const SPRING: Transition = { type: "spring", bounce: 0, duration: 0.5 };

/** Snappier, for chrome that must feel instant (nav, toggles). */
export const SPRING_SNAPPY: Transition = { type: "spring", bounce: 0, duration: 0.32 };

/** Physical, for momentum-driven motion where a flick preceded the move. */
export const SPRING_PHYSICAL: Transition = { type: "spring", bounce: 0.22, duration: 0.45 };

/** Sheets and drawers. */
export const SPRING_SHEET: Transition = { type: "spring", bounce: 0, duration: 0.42 };

export const EASE_OUT: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

/** Enter/exit pair that mirrors its own path — in from below, out below. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: SPRING },
  exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

/** Container for staggered children. */
export const staggerVariants = (
  delayChildren = 0,
  stagger = 0.07,
): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren: stagger } },
});