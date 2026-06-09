"use client";

import { useLenis } from "lenis/react";
import type { MouseEvent } from "react";

/**
 * Returns a click handler that smooth-scrolls to an in-page section by id
 * WITHOUT pushing a `#hash` onto the URL. Falls back to native smooth scroll
 * if Lenis isn't mounted (e.g. reduced motion).
 */
export function useScrollTo() {
  const lenis = useLenis();
  return (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    // Resolve the section's absolute document position ourselves — passing the
    // element straight to lenis.scrollTo lands inconsistently short. A small
    // top margin keeps the heading off the very edge.
    const top = el.getBoundingClientRect().top + window.scrollY - 8;
    if (lenis) lenis.scrollTo(top);
    else window.scrollTo({ top, behavior: "smooth" });
  };
}
