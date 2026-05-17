import type { ReactNode } from "react";

type Width = "reading" | "wide" | "full";

const widths: Record<Width, string> = {
  reading: "max-w-[640px]",
  wide: "max-w-[880px]",
  full: "max-w-[1080px]",
};

export function Container({
  children,
  width = "wide",
  className = "",
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${widths[width]} ${className}`}
    >
      {children}
    </div>
  );
}
