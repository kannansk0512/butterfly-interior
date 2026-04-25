import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company, processSteps, trustPoints } from "@/data/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Butterfly Interior | Premium Interior Studio" },
      {
        name: "description",
        content:
          "Learn about Butterfly Interior’s story, design philosophy, and detail-led approach to residential and commercial interiors.",
      },
      { property: "og:title", content: "About Butterfly Interior | Premium Interior Studio" },
      {
        property: "og:description",
        content:
          "Explore the mission, vision, and trust-building qualities behind Butterfly Interior’s luxury design service.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About the studio"
        title="Designing spaces that feel refined, personal, and quietly luxurious."
        description="From Udumalaipettai, Butterfly Interior brings together spatial clarity, thoughtful material choices, and a hospitality-inspired sense of comfort."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Company story"
              title="A studio built on the belief that premium interiors should feel effortless, not excessive."
              description="Butterfly Interior was shaped to deliver grounded luxury—spaces that feel visually elegant, deeply functional, and tailored to how people truly live and work."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                The studio’s work blends calm palettes, architectural thinking, and tactile finishing to make each project feel sophisticated from every angle.
              </p>
              <p>
                Whether designing a family home, a brand-facing commercial space, or a property prepared for sale, Butterfly Interior approaches every brief with clarity, precision, and empathy.
              </p>
              <p>
                That consistency has helped the studio earn a five-star local reputation and repeat word-of-mouth referrals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/80 bg-card/50 py-20 sm:py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="surface-panel rounded-lg border border-border/80 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">Mission</p>
              <h2 className="mt-4 text-3xl text-foreground">Create spaces that elevate everyday living through detail, warmth, and timeless material choices.</h2>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="surface-panel rounded-lg border border-border/80 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">Vision</p>
              <h2 className="mt-4 text-3xl text-foreground">Become the most trusted premium interior studio for clients seeking design that feels both elegant and deeply livable.</h2>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose Butterfly Interior"
              title="A design process that balances aesthetics, function, and client confidence."
              description={`Clients choose ${company.name} for a high-touch approach, clear communication, and polished final outcomes.`}
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <article className="rounded-lg border border-border/80 bg-card p-6 shadow-soft">
                  <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/80 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Founder perspective"
              title="A studio culture centered on listening first, then designing with conviction."
              description="Butterfly Interior operates like a boutique design partner—guiding each project with care, discernment, and a strong eye for harmony."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.step} delay={index * 0.04}>
                  <article className="surface-panel rounded-lg border border-border/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{step.step}</p>
                    <h3 className="mt-3 text-xl text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-lg border border-border/80 shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                alt="Warm premium living room interior representing Butterfly Interior's design style"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
