import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col">
      {/* Screenshot (falls back to a surface block until an image is added) */}
      <div
        className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-surface bg-grid"
        style={
          project.image
            ? {
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }
            : undefined
        }
        aria-hidden
      />

      <h3 className="mt-6 font-serif text-2xl font-normal tracking-tight text-foreground">
        {project.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-foreground/80">
        {project.stack.join(" / ")}
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Links */}
      <div className="mt-6 flex flex-wrap items-center gap-6 pt-1 text-sm">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-muted-foreground"
          >
            <ArrowUpRight className="size-4" /> Live Preview
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-muted-foreground"
          >
            <GithubIcon className="size-4" /> Repo Url
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" tag="Projects" heading="Featured Projects">
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
