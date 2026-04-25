import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/data/site-content";

export function ProjectCard({ project, priority = false }: { project: ProjectItem; priority?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-lg border border-border/80 bg-card shadow-soft"
    >
      <Link to="/portfolio/$projectId" params={{ projectId: project.id }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-strong/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-primary-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary-foreground/70">{project.category}</p>
              <h3 className="mt-2 text-2xl leading-tight">{project.title}</h3>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-sm">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
        </div>
      </Link>
    </motion.article>
  );
}
