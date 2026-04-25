import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, image, align = "left" }: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-border/70">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 hero-sheen lg:block"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.38, 0.2] }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="section-shell relative flex min-h-[60svh] items-end py-28 sm:py-32">
        <Reveal className={cn("max-w-3xl space-y-6", align === "center" && "mx-auto text-center")}> 
          <p className="inline-flex text-xs font-semibold uppercase tracking-[0.34em] text-primary-foreground/80">
            {eyebrow}
          </p>
          <h1 className="text-balance text-5xl leading-tight text-primary-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-primary-foreground/82 sm:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
