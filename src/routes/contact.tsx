import { Globe, MapPin, Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/seo";
import { assets, site } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildMeta({
      title: "Contact Compass Debt Solutions | Free Debt Consultation",
      description:
        "Call Compass Debt Solutions for a free debt consultation in Chandler, Arizona. Speak with a specialist about credit cards, collections, medical debt, and more.",
      path: "/contact",
      keywords: "contact debt relief Arizona, free debt consultation Chandler, debt help phone number Arizona",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk"
        subtitle="Your free consultation is just a phone call away."
        image={assets.contactHero}
        imageAlt="Compass Debt Solutions reception area"
        eyebrow="Contact Compass Debt Solutions"
        priority
      >
        <Button variant="hero" size="xl" asChild>
          <a href={site.phoneHref}>Call Now</a>
        </Button>
      </PageHero>

      <section className="section-band">
        <div className="page-shell">
          <div className="glass-panel max-w-3xl space-y-6 p-8 md:p-10">
            <div className="space-y-2">
              <p className="eyebrow">Contact info</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Start with a free conversation.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                <Phone className="h-5 w-5 text-primary" />
                <p className="mt-4 font-display text-xl font-semibold text-foreground">Phone</p>
                <a href={site.phoneHref} className="mt-2 block text-lg text-primary hover:underline">
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-4 font-display text-xl font-semibold text-foreground">Address</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{site.address}</p>
              </div>
              <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                <Globe className="h-5 w-5 text-primary" />
                <p className="mt-4 font-display text-xl font-semibold text-foreground">Website</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{site.domain}</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Debt settlement is not available in all situations. Results vary based on individual circumstances and creditor participation.
            </p>
            <Button variant="brand" size="xl" asChild>
              <a href={site.phoneHref}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
