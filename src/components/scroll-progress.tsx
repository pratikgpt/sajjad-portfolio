"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin scroll-progress bar fixed at the very top of the page.
 * A faint track with a white fill that grows from left as you scroll.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/10"
      aria-hidden
    >
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-foreground"
      />
    </div>
  );
}
