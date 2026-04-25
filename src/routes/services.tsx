import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { allServices, serviceCategories } from "@/data/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior Design Services | Butterfly Interior" },
      {
        name: "description",
        content:
          "Explore Butterfly Interior services including residential interiors, commercial design, room planning, refurbishment, staging, and custom detailing.",
      },
      { property: "og:title", content: "Interior Design Services | Butterfly Interior" },
      {
        property: "og:description",
        content:
          "A full spectrum of premium interior design services for homes, offices, hospitality spaces, and styling projects.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Tailored design services for homes, hospitality, workspaces, and property styling."
        description="Butterfly Interior offers end-to-end support across planning, renovation, detailing, selections, and presentation-focused styling."
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Signature offerings"
            title="Strategic design thinking paired with a luxury finish across every scope."
            description="Each service combines practical decision-making with a sophisticated visual outcome."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="overflow-hidden rounded-lg border border-border/80 bg-card shadow-soft">
                <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                  <img src={service.image} alt={service.title} loading="lazy" className="h-full min-h-80 w-full object-cover" />
                  <div className="space-y-5 p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{service.slug}</p>
                      <h2 className="mt-3 text-3xl text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{service.summary}</p>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Benefits</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                        {service.benefits.map((benefit) => (
                          <li key={benefit}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Includes</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.includes.map((item) => (
                          <span key={item} className="rounded-full border border-border/80 bg-secondary px-3 py-1 text-xs uppercase tracking-[0.16em] text-secondary-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-card/45 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Complete service menu"
              title="A full design toolkit for every stage of the project."
              description="From concept planning to styling and staging, the studio’s service range supports both aesthetic direction and execution confidence."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.map((service) => (
                <div key={service} className="rounded-md border border-border/80 bg-card px-4 py-3 text-sm text-muted-foreground shadow-soft">
                  {service}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
