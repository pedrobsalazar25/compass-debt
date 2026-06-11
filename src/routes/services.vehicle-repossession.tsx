import { createFileRoute } from "@tanstack/react-router";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMeta } from "@/lib/seo";
import { servicesByPath } from "@/lib/site-content";

const service = servicesByPath["/services/vehicle-repossession"];

export const Route = createFileRoute("/services/vehicle-repossession")({
  head: () =>
    buildMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.path,
      keywords: service.metaKeywords,
    }),
  component: VehicleRepossessionPage,
});

function VehicleRepossessionPage() {
  return <ServicePageTemplate service={service} />;
}
