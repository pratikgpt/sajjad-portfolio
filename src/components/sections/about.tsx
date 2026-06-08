import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { about } from "@/lib/site";

export function About() {
  return (
    <Section id="about" tag="About" heading="A bit about me">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <Reveal>
          <p className="text-balance text-lg leading-relaxed text-foreground/90 md:text-xl">
            {about.body}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {about.human}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <GraduationCap className="size-4" />
              Education
            </div>
            <p className="mt-4 text-base font-medium text-foreground">
              {about.education.school}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {about.education.degree}
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {about.education.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
