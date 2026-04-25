import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { company, projects } from "@/data/site-content";

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const project = projects.find((item) => item.id === projectId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="section-shell flex min-h-[70svh] flex-col items-center justify-center gap-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">Project not found</p>
        <h1 className="text-5xl text-foreground">This project detail is not available.</h1>
        <Button asChild variant="hero" size="xl">
          <Link to="/portfolio">Back to portfolio</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <section className="section-shell pt-32 pb-16 sm:pt-36 sm:pb-20">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-5">
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="size-4" />
                Back to portfolio
              </Link>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted-foreground">{project.category}</p>
              <h1 className="text-balance text-5xl leading-tight text-foreground sm:text-6xl">{project.title}</h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{project.description}</p>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 lg:text-right">
              <div>
                <p className="text-xs uppercase tracking-[0.22em]">Location</p>
                <p className="mt-2 text-foreground">{project.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em]">Year</p>
                <p className="mt-2 text-foreground">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em]">Studio</p>
                <p className="mt-2 text-foreground">{company.name}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
            <button type="button" className="overflow-hidden rounded-lg border border-border/80 text-left shadow-elegant" onClick={() => setSelectedImage(project.gallery[0])}>
              <img src={project.gallery[0]} alt={`${project.title} featured view`} className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            </button>
            <div className="grid gap-4">
              {project.gallery.slice(1).map((image, index) => (
                <button key={image} type="button" className="overflow-hidden rounded-lg border border-border/80 text-left shadow-soft" onClick={() => setSelectedImage(image)}>
                  <img src={image} alt={`${project.title} gallery view ${index + 2}`} className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border/80 bg-card/45 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Design approach"
              title="A narrative built through circulation, calm materials, and layered finishes."
              description={project.approach}
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <article className="surface-panel rounded-lg border border-border/80 p-6">
                <h2 className="text-2xl text-foreground">Materials used</h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                  {project.materials.map((material) => (
                    <li key={material}>• {material}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
            {project.beforeAfter ? (
              <Reveal delay={0.06}>
                <article className="surface-panel rounded-lg border border-border/80 p-6">
                  <h2 className="text-2xl text-foreground">Before / After</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    <strong className="text-foreground">Before:</strong> {project.beforeAfter.before}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    <strong className="text-foreground">After:</strong> {project.beforeAfter.after}
                  </p>
                </article>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24">
        <Reveal className="rounded-lg border border-border/80 bg-gradient-luxe p-8 text-primary-foreground shadow-elegant sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground/70">Inspired by this project?</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl">Let Butterfly Interior shape a tailored concept for your space.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/78">
            Book a consultation to discuss layout, material direction, styling, or a complete premium transformation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="luxeOutline" size="xl">
              <Link to="/contact">Start a conversation</Link>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
            </Button>
          </div>
        </Reveal>
      </section>

      {selectedImage ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-surface-strong/92 p-4 backdrop-blur-md">
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/16 bg-background/18 text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <img src={selectedImage} alt={`${project.title} enlarged view`} className="max-h-[88svh] w-full max-w-6xl rounded-lg object-cover shadow-elegant" />
        </div>
      ) : null}
    </div>
  );
}

export const Route = createFileRoute("/portfolio/$projectId")({
  head: () => ({
    meta: [
      { title: "Project Detail | Butterfly Interior" },
      {
        name: "description",
        content: "Explore a detailed interior design case study by Butterfly Interior, including gallery, approach, and materials.",
      },
      { property: "og:title", content: "Project Detail | Butterfly Interior" },
      {
        property: "og:description",
        content: "See how Butterfly Interior approaches premium residential and commercial spaces with a calm, elevated design language.",
      },
    ],
  }),
  component: ProjectDetailPage,
});
