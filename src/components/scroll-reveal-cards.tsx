import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

export type RevealItem = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
};

interface Props {
  items: ReadonlyArray<RevealItem>;
  numbered?: boolean;
  className?: string;
}

export function ScrollRevealCards({ items, numbered = false, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal-index]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.revealIndex,
            );
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`grid gap-4 md:hidden ${className ?? ""}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;
        return (
          <Card
            key={item.title}
            data-reveal-index={idx}
            className={`service-card border-border/60 transition-all duration-500 ${
              isActive ? "shadow-lg scale-[1.01]" : ""
            }`}
          >
            <CardContent className="flex gap-4 p-4">
              <div className="icon-wrap h-10 w-10 shrink-0 text-sm font-semibold">
                {numbered || !Icon ? idx + 1 : <Icon className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
