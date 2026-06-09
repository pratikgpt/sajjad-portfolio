"use client";

import { cloneElement, useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { links } from "@/lib/site";

// Monochrome ramp (levels 0–4). Level 0 sits clearly above the ~#0d0d0d card
// so the empty grid reads as a panel; steps rise evenly to a soft white.
const calendarTheme = {
  dark: ["#202020", "#3a3a3a", "#5a5a5a", "#8c8c8c", "#dcdcdc"],
};

/** GitHub contribution heatmap, mounted client-only to avoid hydration drift. */
export function ContributionGraph() {
  const [mounted, setMounted] = useState(false);
  // Deliberate mount gate: render the skeleton on the server/first paint, then
  // swap in the calendar after hydration to avoid a hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <div className="contrib-card rounded-2xl border border-border bg-surface/40 p-6">
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
            renderBlock={(block, activity) =>
              // SVG shows a native tooltip via a <title> child element,
              // not a title attribute.
              cloneElement(
                block,
                undefined,
                <title>{`${activity.count} contribution${
                  activity.count === 1 ? "" : "s"
                } on ${activity.date}`}</title>
              )
            }
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
