import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  align?: "left" | "center";
  children?: ReactNode;
  priority?: boolean;
}

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  eyebrow,
  align = "left",
  children,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="page-shell relative min-h-[32rem] py-16 md:py-24">
        <div
          className={cn(
            "max-w-3xl space-y-6",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <div className="glass-panel space-y-5 p-8 md:p-10">
            <h1 className="font-display text-4xl font-semibold tracking-normal text-balance text-foreground md:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {subtitle}
            </p>
            {children ? <div className="flex flex-wrap items-center gap-3">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
