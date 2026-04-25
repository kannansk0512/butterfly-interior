import { Link, Outlet } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, MessageCircle, Phone, Star, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { company, navigation } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(company.whatsappMessage);
    return `https://wa.me/${company.phoneRaw}?text=${text}`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-border/80 bg-background/88 shadow-soft backdrop-blur-xl"
              : "border-white/30 bg-background/78 shadow-soft backdrop-blur-xl",
          )}
        >
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/80 text-lg shadow-sm">
              🦋
            </span>
            <span className="block text-xl leading-none text-foreground">Butterfly Interior</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
  key={item.to}
  to={item.to}
  activeOptions={{ exact: true }}
  activeProps={{
    className: "text-accent font-semibold bg-accent/10"
  }}
  className="px-2 py-1 text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-md"
>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-4" />
              {company.phoneDisplay}
            </a>
            <Button asChild variant="hero" size="lg">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Get Consultation
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/80 bg-card/85 text-foreground shadow-soft lg:hidden"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-border/80 bg-background/96 p-4 shadow-soft backdrop-blur-xl lg:hidden">
            <nav className="grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md border border-border/70 px-4 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <a href={`tel:${company.phoneRaw}`} className="rounded-md border border-border/70 px-4 py-3 text-sm text-muted-foreground">
                {company.phoneDisplay}
              </a>
              <Button asChild variant="hero" size="xl">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Get Consultation
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border/80 bg-card/80">
        <div className="section-shell py-14">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.8fr]">

            {/* Logo + About */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-luxe text-xl shadow-md">
                  🦋
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Butterfly Interior</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Interior Studio</p>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                We design refined residential and commercial interiors with a calm luxury approach, combining material, light, and thoughtful planning.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 transition hover:bg-secondary">
                  <Instagram className="size-4" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 transition hover:bg-secondary">
                  <Facebook className="size-4" />
                </a>
                <a href={`https://wa.me/${company.phoneRaw}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 transition hover:bg-secondary">
                  <MessageCircle className="size-4" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>{company.address}</p>
                <p>{company.hours}</p>
                <a href={`tel:${company.phoneRaw}`} className="block hover:text-foreground transition">
                  {company.phoneDisplay}
                </a>
                <a href={company.googleShareUrl} target="_blank" rel="noreferrer" className="block hover:text-foreground transition">
                  View Google profile
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-foreground">Quick links</h3>
              <div className="grid gap-3 text-sm text-muted-foreground">
                {navigation.map((item) => (
                  <Link key={item.to} to={item.to} className="hover:text-foreground transition">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Butterfly Interior. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-luxe text-primary-foreground shadow-elegant transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}