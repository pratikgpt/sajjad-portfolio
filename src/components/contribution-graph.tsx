"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { links } from "@/lib/site";

// Monochrome contribution ramp (levels 0–4): dark surface → white.
const calendarTheme = {
  dark: ["#161616", "#2c2c2c", "#555555", "#999999", "#ededed"],
};

/** GitHub contribution heatmap, mounted client-only to avoid hydration drift. */
export function ContributionGraph() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-5 md:p-8">
      <div className="overflow-x-auto">
        {mounted ? (
          <GitHubCalendar
            username={links.githubUser}
            colorScheme="dark"
            theme={calendarTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={13}
            style={{ color: "#8a8a8a" }}
          />
        ) : (
          <div
            className="h-[140px] w-full animate-pulse rounded-md bg-surface-2/60"
            aria-hidden
          />
        )}
      </div>
      <p className="mt-5 font-mono text-xs text-muted-foreground">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          @{links.githubUser}
        </a>{" "}
        · 41 public repositories
      </p>
    </div>
  );
}
