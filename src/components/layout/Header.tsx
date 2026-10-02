"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { NAVIGATION_ITEMS } from "@/data/icig-content";
import MobileNav from "./MobileNav";
import { ChevronDown } from "lucide-react";
import { SPRING, SPRING_SNAPPY } from "@/components/motion/springs";
import { ButtonLink } from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu, close]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const isActive = (href: string, children?: { href: string }[]) =>
    pathname === href || (children?.some((c) => pathname === c.href) ?? false);

  return (
    <header className="sticky top-0 z-50">
      {/* Translucent material — page content scrolls underneath, never behind a
          hard divider. One surface, no second governance strip. */}
      <div
        className={`glass-dark transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_-16px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-8 lg:h-[4.5rem]">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="ICIG home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 ring-1 ring-inset ring-white/12 transition-colors duration-300 group-hover:bg-white/12">
              <span className="font-editorial text-[15px] font-semibold leading-none text-accent-bright">
                i
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                Internal Control Institute
              </span>
              <span className="mt-0.5 text-[13px] font-medium tracking-[0.01em] text-white/45">
                Ghana
              </span>
            </span>
          </Link>

          {/* Primary navigation */}
          <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Primary">
            {NAVIGATION_ITEMS.map((item) => {
              const active = isActive(item.href, item.children);

              if (item.children) {
                const expanded = openMenu === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hoverOpen(item.label)}
                    onMouseLeave={hoverClose}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(expanded ? null : item.label)}
                      className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                        active || expanded ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-white/10"
                          transition={SPRING_SNAPPY}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                      <motion.span
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={SPRING_SNAPPY}
                        className="relative"
                      >
                        <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.97, filter: "blur(6px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{
                            opacity: 0,
                            y: -6,
                            scale: 0.98,
                            filter: "blur(4px)",
                            transition: { duration: 0.14 },
                          }}
                          transition={SPRING}
                          style={{ transformOrigin: "top center" }}
                          className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2"
                        >
                          <div className="overflow-hidden rounded-2xl bg-night-2/95 p-1.5 shadow-float ring-1 ring-inset ring-white/10 backdrop-blur-2xl">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={close}
                                className={`block rounded-xl px-3.5 py-2.5 text-[13px] transition-colors duration-150 ${
                                  pathname === child.href
                                    ? "bg-white/10 text-white"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={SPRING_SNAPPY}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Single, unambiguous action */}
          <div className="hidden lg:block">
            <ButtonLink href="/membership" variant="accent" size="md">
              Become a member
            </ButtonLink>
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Scroll position, as a hairline */}
      <motion.div
        aria-hidden
        style={{ scaleX: reduceMotion ? 0 : scrollYProgress }}
        className="h-px origin-left bg-accent-bright/70"
      />
    </header>
  );
}