"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * App-wide momentum smooth scrolling (Lenis), mounted at the root.
 * `anchors: true` makes in-page links (e.g. href="#projects") glide to target.
 * Collapses to native scroll when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: reduced ? 0 : 1.1,
        smoothWheel: !reduced,
        anchors: { offset: -8 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
