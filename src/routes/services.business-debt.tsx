import { createFileRoute } from "@tanstack/react-router";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMeta } from "@/lib/seo";
import { servicesByPath } from "@/lib/site-content";

const service = servicesByPath["/services/business-debt"];

export const Route = createFileRoute("/services/business-debt")({
  head: () =>
    buildMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.path,
      keywords: service.metaKeywords,
    }),
  component: BusinessDebtPage,
});

function BusinessDebtPage() {
  return <ServicePageTemplate service={service} />;
}
