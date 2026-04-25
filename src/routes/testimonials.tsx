import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company, testimonials } from "@/data/site-content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Butterfly Interior" },
      {
        name: "description",
        content:
          "Read client testimonials and five-star feedback for Butterfly Interior’s residential, commercial, and staging design work.",
      },
      { property: "og:title", content: "Client Testimonials | Butterfly Interior" },
      {
        property: "og:description",
        content:
          "See why clients trust Butterfly Interior for elegant interiors, attention to detail, and premium project guidance.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Testimonials"
        title="Five-star feedback that reinforces the studio’s trust, warmth, and design precision."
        description={`Butterfly Interior holds a ${company.rating.toFixed(1)} rating from ${company.reviewCount} client reviews, reflecting both the process and the final reveal.`}
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Client voice"
            title="A premium design service should feel just as considered as the final space."
            description="These testimonials mirror the kind of response the studio consistently earns from homeowners, business owners, and staging clients."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <article className="surface-panel flex h-full flex-col rounded-lg border border-border/80 p-6">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-border/70 pt-4">
                  <p className="text-lg text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
