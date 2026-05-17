import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/writing", "/cv"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/writing/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
  }));
  return [...staticRoutes, ...posts];
}
