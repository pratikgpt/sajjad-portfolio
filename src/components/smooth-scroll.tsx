"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * App-wide momentum smooth scrolling (Lenis), mounted at the root.
 * In-page links scroll via `useScrollTo` (no `#hash` pushed to the URL), so
 * Lenis's own anchor handling stays off. Collapses to native scroll under
 * reduced motion.
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
      }}
    >
      {children}
    </ReactLenis>
  );
}
