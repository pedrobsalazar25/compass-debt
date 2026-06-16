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
      <div className="page-shell relative min-h-[28rem] py-20 md:py-28">
        <div className={cn("max-w-3xl space-y-7", align === "center" && "mx-auto text-center")}>
          {eyebrow ? (
            <p className="eyebrow bg-primary/20 text-white border-white/20 backdrop-blur-md">{eyebrow}</p>
          ) : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-white md:text-6xl drop-shadow-sm">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl drop-shadow-sm">{subtitle}</p>
          {children ? <div className="flex flex-wrap items-center gap-4 pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
