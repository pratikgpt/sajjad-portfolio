import { cn } from "@/lib/utils";

/** Small mono pill used for tech-stack tags on cards. */
export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
