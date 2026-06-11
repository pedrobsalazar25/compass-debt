import { createFileRoute } from "@tanstack/react-router";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMeta } from "@/lib/seo";
import { servicesByPath } from "@/lib/site-content";

const service = servicesByPath["/services/private-student-loans"];

export const Route = createFileRoute("/services/private-student-loans")({
  head: () =>
    buildMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.path,
      keywords: service.metaKeywords,
    }),
  component: PrivateStudentLoansPage,
});

function PrivateStudentLoansPage() {
  return <ServicePageTemplate service={service} />;
}
