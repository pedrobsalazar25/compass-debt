import {
  ArrowRight,
  Briefcase,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/faq-section";
import { ServiceShowcase } from "@/components/service-showcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMeta } from "@/lib/seo";
import {
  assets,
  condensedSteps,
  homeBenefits,
  homeFaqs,
  serviceItems,
  site,
  testimonials,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta({
      title: "Compass Debt Solutions | Debt Relief in Chandler, Arizona",
      description:
        "Compass Debt Solutions helps Arizona clients settle credit card debt, medical bills, collections, business debt, and more with a clear guided process.",
      path: "/",
      keywords:
        "Arizona debt relief, Chandler debt relief, credit card debt relief Arizona, medical debt help, business debt settlement",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <img
          src={assets.hero}
          alt="Compass Debt Solutions team meeting with clients"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="page-shell relative py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="eyebrow">Debt relief in Chandler, Arizona</p>
            <div className="glass-panel space-y-6 p-8 md:p-10">
              <h1 className="font-display text-4xl font-semibold tracking-normal text-balance text-primary-foreground md:text-6xl">
                Guiding You Away from Debt, Toward a Financial Fresh Start.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                {site.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">See How Much You Can Save</Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <a href={site.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/78">{site.slogan}</p>
              <div className="grid gap-3 pt-3 md:grid-cols-3">
                <div className="stat-pill">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Based in</p>
                  <p className="mt-2 text-sm font-medium text-foreground">Chandler, Arizona</p>
                </div>
                <div className="stat-pill">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Focused on</p>
                  <p className="mt-2 text-sm font-medium text-foreground">Credit cards & unsecured debt</p>
                </div>
                <div className="stat-pill">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Support</p>
                  <p className="mt-2 text-sm font-medium text-foreground">One clear program payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">Why people turn to Compass</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              Four reasons clients choose a guided debt settlement path
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {homeBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="service-card border-border/60">
                  <CardContent className="flex gap-5 p-6 md:p-8">
                    <div className="icon-wrap h-12 w-12 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceShowcase
        title="What We Relieve"
        subtitle="From high-interest credit cards to business debt and private student loans, we create plans around the debts that are holding you back."
        services={serviceItems}
      />

      <section className="section-band">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">A guided process</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              How it works in five clear steps
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {condensedSteps.map((step, index) => (
              <div key={step.title} className="glass-panel grid gap-4 p-6 md:grid-cols-[auto_1fr_auto] md:items-start md:p-8">
                <div className="icon-wrap h-12 w-12 text-base font-semibold">{index + 1}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
                <div className="hidden md:flex md:justify-end">
                  <ArrowRight className="h-5 w-5 text-secondary" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <Button variant="brand" size="xl" asChild>
              <Link to="/contact">Start Your Free Evaluation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border/60">
        <img
          src={assets.localTrust}
          alt="Arizona desert landscape at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="page-shell relative py-20">
          <div className="glass-panel max-w-xl space-y-5 p-8 md:p-10">
            <p className="eyebrow">Local trust</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              Proudly serving Arizona from Chandler.
            </h2>
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <span>{site.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Proudly serving Arizona and the Southwest</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">Client stories</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              Real relief starts with feeling understood
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="service-card border-border/60">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                  <p className="text-sm leading-8 text-muted-foreground">“{item.quote}”</p>
                  <p className="font-display text-lg font-semibold text-foreground">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Frequently Asked Questions" items={homeFaqs} />

      <section className="section-band section-band-tight">
        <div className="page-shell">
          <div className="glass-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Get started</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Talk through your debt options with a local team that listens.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get My Free Savings Estimate</Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
