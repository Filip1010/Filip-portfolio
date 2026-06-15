"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.link.replace("#", ""))
      .filter(Boolean);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "-80px 0px -30% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed z-[5000] top-8 inset-x-0 mx-auto flex justify-center",
          className
        )}
      >
        <div
          className="relative flex items-center gap-1 px-3 py-2.5 rounded-2xl overflow-hidden"
          style={{
            backdropFilter: "blur(24px) saturate(200%)",
            WebkitBackdropFilter: "blur(24px) saturate(200%)",
            backgroundColor: "rgba(10, 13, 30, 0.88)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(203,172,249,0.05)",
          }}
        >
          {/* scroll progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
            style={{
              scaleX,
              background:
                "linear-gradient(90deg, transparent 0%, #CBACF9 40%, #818cf8 80%, transparent 100%)",
            }}
          />

          {/* nav links */}
          <div className="flex items-center gap-0.5">
            {navItems.map((navItem, idx) => {
              const sectionId = navItem.link.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 select-none"
                  style={{
                    color: isActive
                      ? "#CBACF9"
                      : "rgba(255,255,255,0.55)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "rgba(203,172,249,0.10)",
                        border: "1px solid rgba(203,172,249,0.18)",
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{navItem.name}</span>
                </Link>
              );
            })}
          </div>

          {/* divider */}
          <div
            className="w-px h-5 mx-2 shrink-0"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />

          {/* Hire Me CTA */}
          <a href="mailto:filipkuzmanoski386@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05, opacity: 0.95 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 rounded-xl text-sm font-semibold shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #CBACF9 0%, #818cf8 100%)",
                color: "#0a0d1e",
                boxShadow: "0 2px 12px rgba(203,172,249,0.3)",
              }}
            >
              Book a Project
            </motion.button>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
