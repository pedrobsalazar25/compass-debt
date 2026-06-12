import { Home, Menu, Phone, Briefcase, Compass } from "lucide-react";
import { Link, Outlet } from "@tanstack/react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  assets,
  desktopNavLinks,
  serviceItems,
  site,
  type SitePath,
} from "@/lib/site-content";

const mobileBottomLinks: ReadonlyArray<{
  label: string;
  path: SitePath;
  icon: typeof Home;
}> = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "How It Works", path: "/how-it-works", icon: Compass },
  { label: "Contact", path: "/contact", icon: Phone },
] as const;

function DesktopHeader() {
  return (
    <header className="site-header hidden md:block">
      <div className="page-shell">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.companyName} home`}>
            <img src={assets.logo} alt="Compass Debt Solutions logo" className="h-11 w-auto" loading="eager" />
          </Link>

          <div className="flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {desktopNavLinks.slice(0, 2).map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuLink asChild>
                      <Link to={link.path} className="nav-link">
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[34rem] grid-cols-2 gap-3 p-3">
                      {serviceItems.map((service) => {
                        const Icon = service.icon;
                        return (
                          <NavigationMenuLink key={service.slug} asChild>
                            <Link to={service.path} className="dropdown-link">
                              <span className="icon-wrap h-10 w-10">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="space-y-1">
                                <span className="block font-display text-base font-semibold text-foreground">
                                  {service.name}
                                </span>
                                <span className="block text-sm leading-6 text-muted-foreground">
                                  {service.shortDescription}
                                </span>
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {desktopNavLinks.slice(2).map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuLink asChild>
                      <Link to={link.path} className="nav-link">
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="brand" size="smWide" asChild>
              <Link to="/apply">Get My Free Savings Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="site-header md:hidden">
      <div className="page-shell">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.companyName} home`}>
            <img src={assets.logo} alt="Compass Debt Solutions logo" className="h-9 w-auto" loading="eager" />
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="brand" size="smWide" asChild>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border-2 border-secondary text-secondary bg-transparent hover:bg-secondary/10 hover:text-secondary rounded-full" aria-label="Open menu">
                  <Menu className="h-5 w-5 text-secondary stroke-[2.5]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-drawer border-border/60">
                <div className="space-y-6 pt-8">
                  <img src={assets.logo} alt="Compass Debt Solutions logo" className="h-12 w-auto" loading="eager" />
                  <nav className="flex flex-col gap-2">
                    {[...desktopNavLinks, { label: "Services", path: "/services" as SitePath }].map((link) => (
                      <Link key={link.path} to={link.path} className="drawer-link">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="glass-panel space-y-3 p-4">
                    <p className="font-display text-lg font-semibold text-foreground">Call for a free consultation</p>
                    <a href={site.phoneHref} className="text-lg font-medium text-primary">
                      {site.phoneDisplay}
                    </a>
                    <p className="text-sm leading-6 text-muted-foreground">{site.address}</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" as SitePath },
    { label: "Services", path: "/services" as SitePath },
    { label: "About", path: "/about" as SitePath },
    { label: "How It Works", path: "/how-it-works" as SitePath },
    { label: "Contact", path: "/contact" as SitePath },
  ];

  return (
    <footer className="border-t border-border/60 bg-card/70">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <img src={assets.logo} alt="Compass Debt Solutions logo" className="h-12 w-auto" loading="lazy" />
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{site.slogan}</p>
          <p className="text-sm leading-7 text-muted-foreground">Proudly serving Arizona and the Southwest</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar md:hidden">
      <div className="mobile-bottom-inner">
        {mobileBottomLinks.map((item, index) => {
          const Icon = item.icon;
          const needsGap = index >= 2;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn("mobile-nav-link", needsGap && "ml-12")}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <a href={site.phoneHref} className="mobile-call-button" aria-label="Call Compass Debt Solutions">
          <span className="call-ring" />
          <span className="mobile-call-core">
            <Phone className="h-6 w-6" />
          </span>
        </a>
      </div>
    </div>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DesktopHeader />
      <MobileHeader />
      <main className="pb-28 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
