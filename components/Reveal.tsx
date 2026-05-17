"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// One-time fade-in on first scroll into view (spec §5.1).
// IntersectionObserver, not a scroll library. Reduced-motion handled in CSS.
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div ref={ref} className="reveal" data-shown={shown}>
      {children}
    </div>
  );
}
