"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

// TODO: set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local (see .env.example).
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Fallback when no endpoint is configured yet: open the user's mail client.
    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("submitting");
      setError("");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-surface/40 p-8">
        <CheckCircle2 className="size-8 text-foreground" />
        <p className="text-lg font-medium text-foreground">Message sent.</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Jane Doe" className="h-10" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="h-10"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building?"
        />
      </div>

      {status === "error" ? (
        <p className="mt-3 text-sm text-destructive">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-5 h-11 w-full gap-2 px-5 text-sm sm:w-auto"
        )}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
