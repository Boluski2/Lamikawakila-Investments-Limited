import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className={cn(
          "mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em]",
          light ? "text-accent-foreground/60" : "text-accent"
        )}>
          — {badge}
        </span>
      )}
      <h2 className={cn(
        "font-display text-4xl font-bold tracking-wider sm:text-5xl lg:text-6xl",
        light ? "text-accent-foreground" : "text-foreground",
        align === "center" ? "accent-line-center" : "accent-line"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-8 max-w-2xl text-lg leading-relaxed",
          light ? "text-accent-foreground/70" : "text-muted-foreground",
          align === "center" && "mx-auto"
        )} style={{ textTransform: "none", letterSpacing: "normal" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
