"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const options = [
  {
    value: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </g>
      </svg>
    ),
  },
  {
    value: "system",
    label: "System",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
        <rect
          x="3"
          y="4"
          width="18"
          height="12"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 20h6M12 16v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
        <path
          d="M20 13.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — render only after the client knows the theme.
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div aria-hidden className="h-7 w-[84px]" />;
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="flex items-center rounded-full border border-subtle p-0.5"
    >
      {options.map((o) => {
        const active = theme === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setTheme(o.value)}
            aria-label={o.label}
            aria-pressed={active}
            title={o.label}
            className={`flex h-6 w-7 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-accent text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            {o.icon}
          </button>
        );
      })}
    </div>
  );
}
