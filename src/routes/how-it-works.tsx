import { Compass, Phone } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/seo";
import { assets, fullSteps, howItWorksFaqs, site } from "@/lib/site-content";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    buildMeta({
      title: "How It Works | Compass Debt Solutions",
      description:
        "See the step-by-step debt settlement process Compass Debt Solutions uses to help Arizona clients move toward financial freedom.",
      path: "/how-it-works",
      keywords: "how debt settlement works, Arizona debt relief process, Chandler debt consultation",
    }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="Your Roadmap to a Brighter Financial Future"
        subtitle="A clear, proven process to help you find your way out of debt."
        image={assets.contactHero}
        imageAlt="Compass Debt Solutions office interior"
        eyebrow="How the process works"
        priority
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact">Get Your Free Estimate</Link>
        </Button>
      </PageHero>

      <section className="section-band">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">Seven clear milestones</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              A structured path from stress to resolution
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {fullSteps.map((step, index) => (
              <div key={step.title} className="glass-panel grid gap-4 p-6 md:grid-cols-[auto_1fr] md:p-8">
                <div className="icon-wrap h-12 w-12 text-base font-semibold">{index + 1}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="eyebrow">The flexibility rule</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Zero prepayment penalties.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              <p>
                Extra payments go directly to reducing interest and accelerating your timeline. That means every additional dollar you contribute helps move you closer to resolution faster.
              </p>
              <div className="flex items-center gap-3 rounded-[1.25rem] border border-border/60 bg-accent/60 px-4 py-4 text-foreground">
                <Compass className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  Flexibility matters when life changes. Your plan should be able to move with you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-band section-band-tight">
        <div className="page-shell">
          <div className="glass-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Ready to start?</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Call {site.phoneDisplay} or get your free estimate online.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get Your Free Estimate</Link>
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

      <FaqSection title="How It Works FAQ" items={howItWorksFaqs} />
    </>
  );
}
