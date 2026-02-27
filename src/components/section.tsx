import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Section = ({ id, className, children }: { id?: string, className?: string, children: ReactNode }) => (
  <section id={id} className={cn("py-16 md:py-24", className)}>
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);
  
export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
    {children}
  </h2>
);
