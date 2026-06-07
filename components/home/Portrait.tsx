"use client";

import Image from "next/image";
import { useState } from "react";

// Client-side resilience: if the optimised portrait fails to load at runtime
// (CDN miss, cache glitch), hide the frame instead of showing a broken image.
// The build-time fs check in About.tsx handles the file being absent entirely.
export function Portrait() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="order-first">
      <Image
        src="/portrait.jpg"
        alt="Maroš Jančo"
        width={520}
        height={650}
        sizes="(max-width: 768px) 100vw, 260px"
        className="w-full rounded-lg object-cover"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}
