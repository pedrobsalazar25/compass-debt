import { createFileRoute } from "@tanstack/react-router";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMeta } from "@/lib/seo";
import { servicesByPath } from "@/lib/site-content";

const service = servicesByPath["/services/unsecured-loans-collections"];

export const Route = createFileRoute("/services/unsecured-loans-collections")({
  head: () =>
    buildMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.path,
      keywords: service.metaKeywords,
    }),
  component: UnsecuredLoansCollectionsPage,
});

function UnsecuredLoansCollectionsPage() {
  return <ServicePageTemplate service={service} />;
}
