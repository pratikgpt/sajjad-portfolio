"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — the mailto button and visible address still work.
    }
  }

  return (
    <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
      <p className="text-lg font-medium text-foreground">Drop me a line.</p>
      <p className="text-sm text-muted-foreground">
        The fastest way to reach me is email — tell me what you&apos;re building
        and I&apos;ll get back to you soon.
      </p>
      <a
        href={`mailto:${links.email}`}
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-1 h-11 w-full gap-2 px-5 text-sm sm:w-auto"
        )}
      >
        Email me <Mail className="size-4" />
      </a>

      {/* Fallback for when mailto can't open a mail app (in-app browsers, no
          default handler): show the address and let people copy it. */}
      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5 opacity-70 group-hover:opacity-100" />
        )}
        {copied ? "Copied!" : links.email}
      </button>
    </div>
  );
}
