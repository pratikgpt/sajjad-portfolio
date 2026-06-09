import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { links } from "@/lib/site";

const channels = [
  {
    label: "LinkedIn",
    value: "in/sajjad-chaus",
    href: links.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: `@${links.githubUser}`,
    href: links.github,
    Icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      tag="Contact"
      heading="Let's build something."
      intro="Open to full-time roles and internships. Have a problem worth solving? Send it over."
    >
      <div className="grid items-stretch gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
        {/* Contact channels */}
        <Reveal className="h-full">
          <ul className="flex h-full flex-col gap-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label} className="flex-1">
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-foreground/25"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors group-hover:border-foreground/40 group-hover:text-foreground">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-foreground">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Email CTA */}
        <Reveal delay={0.08} className="h-full">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
