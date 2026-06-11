import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import type { StepItem } from "@/lib/site-content";

interface ProcessCarouselProps {
  steps: ReadonlyArray<StepItem>;
}

export function ProcessCarousel({ steps }: ProcessCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Auto-advance every 5s, pause on hover
  const [isPaused, setIsPaused] = React.useState(false);
  React.useEffect(() => {
    if (!emblaApi || isPaused) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 5000);
    return () => window.clearInterval(id);
  }, [emblaApi, isPaused]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {steps.map((step, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={step.title}
                className="min-w-0 flex-[0_0_100%] px-2 md:px-4"
              >
                <div
                  className={cn(
                    "glass-panel relative overflow-hidden p-8 md:p-12 transition-all duration-500",
                    isActive ? "opacity-100 scale-100" : "opacity-70 scale-[0.98]"
                  )}
                >
                  <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
                    <div className="relative">
                      <div className="icon-wrap h-20 w-20 text-2xl font-bold text-primary shadow-lg">
                        {index + 1}
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 blur-2xl"
                        aria-hidden
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="eyebrow w-fit">Step {index + 1} of {steps.length}</p>
                      <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous step"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white shadow-md transition hover:bg-primary hover:text-white hover:shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next step"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white shadow-md transition hover:bg-primary hover:text-white hover:shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
