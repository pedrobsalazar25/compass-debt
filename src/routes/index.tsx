import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { FaqSection } from "@/components/faq-section";
import { ProcessCarousel } from "@/components/process-carousel";
import { ServiceShowcase } from "@/components/service-showcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buildMeta } from "@/lib/seo";
import {
  assets,
  condensedSteps,
  homeBenefits,
  homeFaqs,
  serviceItems,
  site,
  testimonials,
  aboutAdvantages,
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
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));
  return (
    <>
      <section className="relative isolate overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-[0_30px_70px_-10px_rgba(8,23,54,0.35),0_15px_30px_-15px_rgba(8,23,54,0.2)]">
        <img
          src={assets.hero}
          alt="Compass Debt Solutions team meeting with clients"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="page-shell relative py-20 md:py-32 lg:py-36">
          <div className="max-w-3xl space-y-8">
            <p className="eyebrow bg-primary/20 text-white border-white/20 backdrop-blur-md">Debt relief in Chandler, Arizona</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-white md:text-6xl lg:text-7xl drop-shadow-sm">
              Guiding You Away from Debt, Toward a Financial Fresh Start.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl drop-shadow-sm">
              {site.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">See How Much You Can Save</Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
            <p className="text-sm font-medium text-white/80">{site.slogan}</p>
            <div className="grid gap-3 pt-6 sm:grid-cols-3">
              <div className="stat-pill bg-white/10 border-white/10 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">Based in</p>
                <p className="mt-1.5 text-sm font-semibold text-white">Chandler, Arizona</p>
              </div>
              <div className="stat-pill bg-white/10 border-white/10 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">Focused on</p>
                <p className="mt-1.5 text-sm font-semibold text-white">Credit cards & unsecured debt</p>
              </div>
              <div className="stat-pill bg-white/10 border-white/10 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">Support</p>
                <p className="mt-1.5 text-sm font-semibold text-white">One clear program payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band border-b border-border/60">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">The Compass advantage</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              A calm, flexible approach built to help you move forward faster
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="service-card border-border/60">
                  <CardContent className="space-y-4 p-6">
                    <div className="icon-wrap h-12 w-12 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
          <div className="mt-8">
            <ProcessCarousel steps={condensedSteps} />
          </div>
          <div className="mt-8 flex justify-start">
            <Button variant="brand" size="xl" asChild>
              <Link to="/apply">Start Your Free Evaluation</Link>
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
          <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl max-w-xl space-y-5 p-8 md:p-10 shadow-xl">
            <p className="eyebrow">Local trust</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              Proudly serving Arizona from Chandler.
            </h2>
            <div className="space-y-3 text-sm leading-7 text-foreground/95">
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

      <section className="relative isolate overflow-hidden">
        <img
          src={assets.ctaBg}
          alt="Arizona desert path at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        <div className="page-shell relative py-20 md:py-28">
          <div className="flex flex-col gap-6 bg-white/15 border border-white/25 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_20px_50px_rgba(8,23,54,0.65)] md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Get started</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Talk through your debt options with a local team that listens.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">Get My Free Savings Estimate</Link>
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
    </>
  );
}
