"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "@/data/icig-content";
import { X } from "lucide-react";
import { SPRING_SHEET } from "@/components/motion/springs";

/** Apple's scroll-deceleration projection — where the flick is actually going. */
function project(velocity: number, decelerationRate = 0.998) {
  return (velocity / 1000) * decelerationRate / (1 - decelerationRate);
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onDragEnd = (
    _e: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    // Where would this flick land if released to rest?
    const landing = info.offset.x + project(info.velocity.x);

    if (landing > window.innerWidth * 0.3 || info.velocity.x > 700) {
      setOpen(false);
    }
    // Otherwise `dragSnapToOrigin` springs it back from wherever it was left.
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="group flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-hairline transition-colors duration-200 hover:bg-subtle"
      >
        <span className="relative block h-3 w-4">
          <span className="absolute left-0 top-0 h-px w-full bg-brand-navy transition-transform duration-300 ease-out-quint group-hover:translate-y-[3px] group-hover:w-3/4" />
          <span className="absolute bottom-0 left-0 h-px w-3/4 bg-brand-navy transition-transform duration-300 ease-out-quint group-hover:translate-y-[-3px] group-hover:w-full" />
        </span>
      </button>

      {/* Portalled to <body>: the header's `backdrop-filter` would otherwise
          become the containing block for this fixed panel, and iOS Safari
          renders descendants of a filtered element translucently. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Scrim pushes the page back without trapping it */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-50 bg-night/60 backdrop-blur-sm lg:hidden"
                />

                <motion.aside
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={SPRING_SHEET}
                  drag="x"
                  dragDirectionLock
                  dragConstraints={{ left: 0 }}
                  dragElastic={0.55}
                  dragSnapToOrigin
                  onDragEnd={onDragEnd}
                  className="fixed inset-y-0 right-0 z-50 flex w-[86vw] max-w-sm flex-col bg-canvas shadow-float lg:hidden"
                >
                  <div className="flex h-16 shrink-0 items-center justify-between px-6">
                    <span className="label text-ink-3">Menu</span>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close menu"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-subtle"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <nav className="flex-1 overflow-y-auto px-6 pb-8">
                    <ul className="divide-y divide-hairline border-t border-hairline">
                      {NAVIGATION_ITEMS.map((item) => {
                        const active =
                          pathname === item.href ||
                          (item.children?.some((c) => pathname === c.href) ?? false);

                        return (
                          <li key={item.href} className="py-4">
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-baseline gap-2.5 text-[1.35rem] font-semibold tracking-[-0.02em] transition-colors ${
                                active ? "text-ink" : "text-ink-3"
                              }`}
                            >
                              {item.label}
                              {active && (
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                              )}
                            </Link>

                            {item.children && (
                              <ul className="mt-3 space-y-2.5 border-l border-hairline pl-4">
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setOpen(false)}
                                      className={`text-small transition-colors ${
                                        pathname === child.href
                                          ? "text-accent-ink"
                                          : "text-ink-3 hover:text-ink"
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="shrink-0 border-t border-hairline p-6">
                    <Link
                      href="/membership"
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-small font-semibold text-white"
                    >
                      Become a member
                    </Link>
                    <p className="mt-4 text-center text-[13px] leading-relaxed text-ink-3">
                      The Ghana affiliate of the Internal Control Institute, USA
                    </p>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}