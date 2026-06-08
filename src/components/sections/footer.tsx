import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { links, profile } from "@/lib/site";

const socials = [
  { href: links.github, label: "GitHub", Icon: GithubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row md:px-12 lg:px-18">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 — built by{" "}
            <span className="text-foreground">{profile.name}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
