import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { ServiceShowcase } from "@/components/service-showcase";
import { Button } from "@/components/ui/button";
import { assets, serviceItems, site, type ServiceItem } from "@/lib/site-content";

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const otherServices = serviceItems.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.heroSubtitle}
        image={service.image}
        imageAlt={service.imageAlt}
        eyebrow="Debt relief services"
      >
        <Button variant="hero" size="xl" asChild>
          <a href={site.phoneHref}>{service.ctaLabel}</a>
        </Button>
        <Button variant="glass" size="xl" asChild>
          <a href={site.phoneHref}>
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="section-band">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel p-8 md:p-10">
            <p className="eyebrow">The challenge</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground">
              Why this debt becomes so overwhelming
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{service.problem}</p>
          </article>
          <article className="glass-panel p-8 md:p-10">
            <p className="eyebrow">How Compass helps</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground">
              A guided plan toward resolution
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{service.solution}</p>
          </article>
        </div>
      </section>

      <ServiceShowcase
        title="Explore More Services"
        subtitle="If your situation spans more than one debt type, our team can help you create a coordinated plan."
        services={otherServices}
      />

      <section className="relative isolate overflow-hidden">
        <img
          src={assets.ctaBg}
          alt="Arizona desert path at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        <div className="page-shell relative py-20 md:py-28">
          <div className="flex flex-col gap-6 bg-white/15 border border-white/25 rounded-3xl p-8 backdrop-blur-3xl shadow-2xl md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Start Your Free Evaluation
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Speak with a debt specialist about your situation and learn what next steps make the most sense.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start Your Free Evaluation</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection title={`${service.name} FAQ`} items={service.faq} />

      <section className="section-band section-band-tight">
        <div className="page-shell">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-primary">
              All services
            </Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-foreground">{service.name}</span>
          </div>
        </div>
      </section>
    </>
  );
}
