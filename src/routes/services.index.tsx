import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { ServiceShowcase } from "@/components/service-showcase";
import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/seo";
import { assets, serviceItems } from "@/lib/site-content";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildMeta({
      title: "Debt Relief Services | Compass Debt Solutions",
      description:
        "Explore debt relief services from Compass Debt Solutions, including credit card debt, medical debt, collections, business debt, vehicle repossession, and private student loans.",
      path: "/services",
      keywords:
        "debt relief services Arizona, credit card debt relief, medical debt help, vehicle repossession help, private student loan settlement",
    }),
  component: ServicesOverviewPage,
});

function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        title="Debt Relief Services That Meet You Where You Are"
        subtitle="Compass Debt Solutions offers focused help for the debts creating the most pressure, with plans designed around your timeline and budget."
        image={assets.hero}
        imageAlt="Compass Debt Solutions team consultation"
        eyebrow="Services overview"
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact">Get My Free Savings Estimate</Link>
        </Button>
      </PageHero>
      <ServiceShowcase
        title="Choose the type of debt you want to tackle first"
        subtitle="Each service page explains the problem, how our team approaches it, and what next steps may look like."
        services={serviceItems}
      />
    </>
  );
}
