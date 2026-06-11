import { createFileRoute } from "@tanstack/react-router";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMeta } from "@/lib/seo";
import { servicesByPath } from "@/lib/site-content";

const service = servicesByPath["/services/credit-card-debt"];

export const Route = createFileRoute("/services/credit-card-debt")({
  head: () =>
    buildMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.path,
      keywords: service.metaKeywords,
    }),
  component: CreditCardDebtPage,
});

function CreditCardDebtPage() {
  return <ServicePageTemplate service={service} />;
}
