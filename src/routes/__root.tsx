import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/shell";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="section-shell flex min-h-screen flex-col items-center justify-center gap-5 px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">404</p>
      <h1 className="text-5xl text-foreground sm:text-6xl">The page you requested could not be found.</h1>
      <p className="max-w-md text-sm leading-7 text-muted-foreground">
        The link may have moved, or the page may no longer be available.
      </p>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Butterfly Interior" },
      { name: "description", content: "Premium interior design studio in Udumalaipettai." },
      { name: "author", content: "Lovable" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return <SiteShell><Outlet /></SiteShell>;
}
