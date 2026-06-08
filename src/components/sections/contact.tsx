import { Mail, CalendarClock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { links } from "@/lib/site";

// TODO: set NEXT_PUBLIC_CAL_LINK in .env.local to enable scheduling (see .env.example).
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com";

const channels = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, Icon: Mail },
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
      intro="Open to full-time roles and internships from May 2026. Have a problem worth solving? Send it over."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
        {/* Channels + scheduling */}
        <Reveal>
          <ul className="space-y-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-foreground/25"
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

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-foreground/25"
          >
            <span className="flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground">
                <CalendarClock className="size-[18px]" />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Schedule
                </span>
                <span className="block text-sm text-foreground">
                  Book a 30-min call
                </span>
              </span>
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground" />
          </a>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
