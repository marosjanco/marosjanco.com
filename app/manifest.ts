import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maroš Jančo",
    short_name: "Maroš Jančo",
    description: "Senior AI engineer for production LLM systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#1f3a68",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
