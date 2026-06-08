"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { HeroNav } from "@/components/hero-nav";
import { profile, links } from "@/lib/site";

/** Emphasised phrase inside the hero prose (white against the muted body). */
function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>;
}

const socialLinks = [
  { href: links.github, label: "GitHub", Icon: GithubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative px-6 pb-12 pt-20 md:px-12 md:pb-16 md:pt-24 lg:px-18"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.6fr] md:gap-14">
        {/* Text — second on mobile so the photo sits above it */}
        <motion.div
          className="order-2 md:order-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="font-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-mono text-sm text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 max-w-xl space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base"
          >
            <p>
              I build <Em>AI agents</Em> and the backend that keeps them
              running — RAG pipelines, multi-agent workflows, and the
              unglamorous infrastructure that makes them fast and reliable in
              production.
            </p>
            <p>
              Lately I&apos;ve been deep in agentic systems and ML system
              design. I shipped an AI Agent-as-a-Service platform that handled{" "}
              <Em>1,000+ concurrent requests</Em> at <Em>99.9% uptime</Em> — and
              I keep going deeper on the parts most people skip.
            </p>
            <p>
              Final-year B.Tech student in Mumbai,{" "}
              <Em>graduating May 2026</Em>. When I&apos;m not shipping, I&apos;m
              usually breaking my own systems just to learn how they fail.
            </p>
            <p>
              <Em>Open to work</Em>: Full-time &amp; Internships from May 2026.{" "}
              <a
                href="#contact"
                className="text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Let&apos;s talk.
              </a>
            </p>
          </motion.div>

          {/* Resume button + social icons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resume}
              download
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm text-foreground transition-colors hover:border-foreground/30 hover:bg-surface"
            >
              <FileText className="size-4" /> My resume
            </a>
            <div className="flex items-center gap-1.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Section links + photo (photo stretches to match the text height) */}
        <motion.div
          className="order-1 flex flex-col gap-5 md:order-2"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroNav />
          <div className="relative min-h-[360px] w-full flex-1 overflow-hidden rounded-2xl border border-border">
            <Image
              src={profile.photo}
              alt="Sajjad Chaus"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-center [filter:grayscale(1)_brightness(1)_contrast(1.05)]"
            />
            {/* gentle bottom fade so the photo settles into the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-md border border-border bg-background/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
              Mumbai, India
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
