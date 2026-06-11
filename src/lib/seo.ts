import { site } from "@/lib/site-content";

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

interface SeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

export function buildMeta({ title, description, path, keywords }: SeoInput) {
  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: path },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (keywords) {
    meta.splice(2, 0, { name: "keywords", content: keywords });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.companyName,
          url: `https://${site.domain}${path === "/" ? "" : path}`,
          telephone: "+1-480-686-4116",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1542 W Maplewood St",
            addressLocality: "Chandler",
            addressRegion: "AZ",
            postalCode: "85286",
            addressCountry: "US",
          },
        }),
      },
    ],
  };
}
