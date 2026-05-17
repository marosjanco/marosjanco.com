import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Vertical-rhythm wrapper — 120px desktop / 72px mobile (spec §4.4).
export function Section({
  children,
  id,
  className = "",
  divider = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${divider ? "border-t border-subtle" : ""} py-[72px] md:py-[120px] ${className}`}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 font-serif text-[28px] font-semibold tracking-[-0.01em] md:mb-12 md:text-[36px]">
      {children}
    </h2>
  );
}
