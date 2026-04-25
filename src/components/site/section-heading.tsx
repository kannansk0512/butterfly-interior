import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="ambient-line inline-flex text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="max-w-4xl text-balance text-4xl leading-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
