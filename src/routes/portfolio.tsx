import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/site/page-hero";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site-content";

const filters = ["All", "Residential", "Commercial", "Hospitality", "Staging"] as const;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Project Portfolio | Butterfly Interior" },
      {
        name: "description",
        content:
          "Browse Butterfly Interior’s portfolio of residential, commercial, hospitality, and staging projects with detail-led luxury interiors.",
      },
      { property: "og:title", content: "Project Portfolio | Butterfly Interior" },
      {
        property: "og:description",
        content:
          "See completed interior projects and explore the studio’s calm, elegant approach to premium spaces.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="A curated collection of finished spaces with depth, restraint, and character."
        description="Explore project stories across homes, workspaces, hospitality, and staging—each shaped with a distinct but consistent luxury sensibility."
        image="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-shell py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Completed work"
              title="Project categories"
              description="Filter the portfolio to quickly explore the type of space most relevant to your brief."
            />
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  type="button"
                  variant={activeFilter === filter ? "hero" : "luxeOutline"}
                  size="lg"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Discuss your project</Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
