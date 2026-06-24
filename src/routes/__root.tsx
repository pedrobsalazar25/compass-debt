import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { SiteLayout } from "@/components/site-layout";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-panel max-w-md p-8 text-center">
        <h1 className="font-display text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="nav-link inline-flex rounded-full px-5 py-3">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-panel max-w-md p-8 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Compass Debt Solutions | Debt Relief in Chandler, Arizona" },
      {
        name: "description",
        content:
          "Compass Debt Solutions helps Arizona clients resolve credit card debt, collections, medical bills, business debt, and more.",
      },
      { name: "author", content: "Compass Debt Solutions" },
      { property: "og:site_name", content: "Compass Debt Solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Compass Debt Solutions | Debt Relief in Chandler, Arizona" },
      { name: "twitter:title", content: "Compass Debt Solutions | Debt Relief in Chandler, Arizona" },
      { name: "description", content: "Compass Debt Solutions helps Arizona residents settle credit card, medical, and personal loan debt for up to 50% less. Free consultation. Chandler, AZ." },
      { property: "og:description", content: "Compass Debt Solutions helps Arizona residents settle credit card, medical, and personal loan debt for up to 50% less. Free consultation. Chandler, AZ." },
      { name: "twitter:description", content: "Compass Debt Solutions helps Arizona residents settle credit card, medical, and personal loan debt for up to 50% less. Free consultation. Chandler, AZ." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CB7rW9WWHhYCSIWkBTL8F09IjxS2/social-images/social-1781219453081-hero_.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CB7rW9WWHhYCSIWkBTL8F09IjxS2/social-images/social-1781219453081-hero_.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://widgets.leadconnectorhq.com/loader.js",
        "data-resources-url": "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
        "data-widget-id": "6a2a426a8eebf2dcc68d4690",
        "data-source": "WEB_USER",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Compass Debt Solutions",
          url: "https://compassdebtsolutions.com",
          telephone: "+1-623-323-3658",
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
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Only load Tawk.to on desktop and tablet screens (width >= 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6a2b6865d6a95f1c2c58b97c/1jqsovk1o";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.head.appendChild(s1);
      }

      // Cleanup on unmount
      return () => {
        s1.remove();
        const tawkElement = document.getElementById("tawkchat-iframe-container") || 
                           document.querySelector("[id^='tawk']");
        if (tawkElement) {
          tawkElement.remove();
        }
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
