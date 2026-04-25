import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn("h-full", className)}>{children}</div>
    </motion.div>
  );
}
