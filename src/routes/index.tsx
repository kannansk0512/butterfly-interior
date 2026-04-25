import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  company,
  faqs,
  processSteps,
  projects,
  serviceCategories,
  studioHighlights,
  testimonials,
  trustPoints,
} from "@/data/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Butterfly Interior | Luxury Interior Design in Udumalaipettai" },
      {
        name: "description",
        content:
          "Discover Butterfly Interior, a premium interior design studio in Udumalaipettai offering elegant homes, commercial spaces, and tailored design consultation.",
      },
      { property: "og:title", content: "Butterfly Interior | Luxury Interior Design in Udumalaipettai" },
      {
        property: "og:description",
        content:
          "Premium interior design for homes, offices, hospitality spaces, and staging—crafted with calm luxury and material-led detail.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} aria-hidden="true" />
        <motion.div
          className="absolute inset-y-0 right-0 hidden w-1/2 hero-sheen lg:block"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { opacity: [0.18, 0.34, 0.18] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="section-shell relative flex min-h-[100svh] flex-col justify-center pb-20 pt-36 sm:pb-24 lg:pb-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-background/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary-foreground/80 backdrop-blur-sm">
                <span>5.0 rated studio</span>
                <span className="h-1 w-1 rounded-full bg-primary-foreground/70" />
                <span>10 years experience</span>
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-balance text-5xl leading-tight text-primary-foreground sm:text-6xl lg:text-7xl">
                  Butterfly Interior
                </h1>
                <p className="max-w-2xl text-balance text-lg leading-8 text-primary-foreground/82 sm:text-xl">
                  {company.tagline}
                </p>
                <p className="max-w-2xl text-base leading-7 text-primary-foreground/70">
                  Creating elevated homes and business spaces in and around Udumalaipettai with bespoke planning,
                  refined finishes, and a calm luxury sensibility.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a
                    href={`https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(company.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Consultation
                  </a>
                </Button>
                <Button asChild variant="luxeOutline" size="xl">
                  <Link to="/portfolio">
                    View Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal
              delay={0.12}
              className="rounded-2xl border border-white/15 bg-black/30 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {studioHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="space-y-2 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="text-4xl font-semibold leading-none text-white">{item.value}</p>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/75">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 text-sm leading-7 text-white/80">
                <p>{company.address}</p>
                <p>{company.hoursShort}</p>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-accent"
                >
                  <Star className="size-4 fill-accent text-accent" />
                  {company.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Studio profile"
              title="An interior studio rooted in detail, trust, and a quietly luxurious point of view."
              description={company.shortDescription}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <article key={point} className="surface-panel rounded-lg border border-border/80 p-5">
                  <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="featured-projects" className="border-y border-border/80 bg-card/40 py-20 sm:py-24">
        <div className="section-shell space-y-12">
          <Reveal>
            <SectionHeading
              eyebrow="Featured projects"
              title="Spaces that feel elevated, livable, and unforgettable from the first glance."
              description="A curated look at recent residential and commercial work by Butterfly Interior."
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <ProjectCard project={project} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Comprehensive interior design support—from layout strategy to the final styling layer."
              description="The studio handles both broad transformations and detail-level selections with a premium, cohesive approach."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {serviceCategories.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <article className="overflow-hidden rounded-lg border border-border/80 bg-card shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="space-y-4 p-5">
                    <h3 className="text-2xl text-foreground">{service.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{service.summary}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.includes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/80 bg-card/50 py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A polished design journey that keeps the vision clear from first conversation to final reveal."
              description="Structured enough to build confidence, flexible enough to reflect every project’s unique personality."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.06}>
                <article className="surface-panel rounded-lg border border-border/80 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    {step.step}
                  </p>
                  <h3 className="mt-3 text-2xl text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients describe the studio experience as warm, detail-driven, and genuinely transformative."
            description="Drawn from Butterfly Interior’s five-star local reputation and aligned with the studio’s design ethos."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <article className="surface-panel flex h-full flex-col justify-between rounded-lg border border-border/80 p-6">
                <div>
                  <div className="mb-4 flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`${testimonial.name}-${starIndex}`} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">“{testimonial.quote}”</p>
                </div>
                <div className="mt-6 border-t border-border/70 pt-4">
                  <p className="text-base text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/80 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently asked"
              title="Everything a premium client expects to know before beginning the design journey."
              description="A few of the questions typically asked during early consultations."
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-border/80 bg-card p-5 shadow-soft">
                  <h3 className="text-lg text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg border border-border/80 shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant interior design setting styled by Butterfly Interior"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-lg border border-primary-foreground/12 bg-background/28 p-6 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
                    Ready to begin?
                  </p>
                  <h3 className="mt-3 text-3xl text-primary-foreground">
                    Book a design consultation with Butterfly Interior.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/76">
                    Share your vision for a home, office, or hospitality project and receive expert direction tailored
                    to your space.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="hero" size="xl">
                      <Link to="/contact">Start your project</Link>
                    </Button>
                    <Button asChild variant="luxeOutline" size="xl">
                      <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}