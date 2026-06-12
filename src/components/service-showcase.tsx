import { Link } from "@tanstack/react-router";
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
    <Link to={service.path} className="block group">
      <Card className="service-card h-full border-border/60 transition-all duration-300 hover:shadow-md hover:border-primary/40">
        <CardContent className="flex items-center gap-4 p-5">
          <div className="icon-wrap h-12 w-12 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-base font-semibold tracking-normal text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
            {service.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
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

        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}