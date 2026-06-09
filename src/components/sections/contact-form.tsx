import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactForm() {
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
    </div>
  );
}
