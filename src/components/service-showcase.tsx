import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceItem } from "@/lib/site-content";

interface ServiceShowcaseProps {
  title: string;
  subtitle: string;
  services: readonly ServiceItem[];
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <Card className="service-card h-full border-border/60">
      <CardContent className="flex h-full flex-col justify-between gap-5 p-6">
        <div className="flex items-start gap-4">
          <div className="icon-wrap h-16 w-16 shrink-0 flex items-center justify-center">
            <Icon className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold tracking-normal text-foreground leading-snug">
              {service.name}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">{service.shortDescription}</p>
          </div>
        </div>
        <Link to={service.path} className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-200 hover:translate-x-1 mt-2">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function ServiceShowcase({ title, subtitle, services }: ServiceShowcaseProps) {
  return (
    <section className="section-band">
      <div className="page-shell">
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">Solutions tailored to your situation</p>
          <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-7 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.slug} className="basis-[88%]">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
