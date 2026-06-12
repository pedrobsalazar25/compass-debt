import { Link, createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMeta } from "@/lib/seo";
import { aboutAdvantages, assets, site } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () =>
    buildMeta({
      title: "About Us | Compass Debt Solutions",
      description:
        "Learn how Compass Debt Solutions in Chandler, Arizona helps clients navigate credit card debt, collections, medical bills, and business debt with transparent guidance.",
      path: "/about",
      keywords: "about Compass Debt Solutions, Chandler Arizona debt relief, debt settlement company Arizona",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="Your Guide Out of Debt"
        subtitle="Based in Chandler, Arizona — serving clients across the Southwest."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions team working with clients in office"
        eyebrow="About Compass Debt Solutions"
        priority
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact">Start Your Free Evaluation</Link>
        </Button>
      </PageHero>

      <section className="section-band">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <article className="glass-panel p-8 md:p-10">
            <p className="eyebrow">Company story</p>
            <div className="mt-4 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                At Compass Debt Solutions, we know that overwhelming debt can feel like being lost without a map. Based in Chandler, Arizona, we serve as your trusted guide, helping individuals and businesses navigate their way out of financial stress and toward a clean slate.
              </p>
              <p>
                We specialize in aggressive, proven debt relief strategies for credit cards, personal loans, medical bills, collections, and business debt. Our mission is simple: to advocate for you. By negotiating directly with your creditors, we work to restructure your payments and settle your obligations for significantly less than what is owed — saving our clients up to 50% on their overall debt.
              </p>
              <p>
                We believe in transparent, client-first solutions. That means zero prepayment penalties and complete flexibility. When you choose to pay extra toward your monthly amount, we ensure those funds actively reduce your interest and shorten your timeline, helping you achieve total freedom in as little as 24 to 48 months.
              </p>
              <p>
                You don't have to face the creditors alone. Let Compass Debt Solutions point you in the right direction.
              </p>
            </div>
          </article>
          <div className="flex flex-col gap-6">
            <aside className="glass-panel p-8 md:p-10">
              <p className="eyebrow">Team philosophy</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-normal text-foreground">
                We believe in transparent, client-first solutions.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Every plan starts with listening, not pushing. We explain the process clearly, tailor the strategy to your budget, and stay focused on practical progress.
              </p>
              <div className="mt-6">
                <Button variant="brand" size="xl" asChild>
                  <Link to="/contact">Start Your Free Evaluation</Link>
                </Button>
              </div>
            </aside>

            {/* Contact cards - desktop/tablet only */}
            <div className="hidden md:flex flex-col gap-4 mt-6">
              <div className="rounded-[1.5rem] border border-border/60 bg-background/50 backdrop-blur-md p-5 flex items-start gap-4">
                <div className="icon-wrap h-10 w-10 shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Phone</p>
                  <a href={site.phoneHref} className="mt-1 block text-primary hover:underline font-medium">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/60 bg-background/50 backdrop-blur-md p-5 flex items-start gap-4">
                <div className="icon-wrap h-10 w-10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Address</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{site.address}</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/60 bg-background/50 backdrop-blur-md p-5 flex items-start gap-4">
                <div className="icon-wrap h-10 w-10 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-foreground">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-medium text-primary hover:underline truncate">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
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
    </>
  );
}
