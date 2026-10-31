import type { MetadataRoute } from "next";
import { publicPages, siteOrigin } from "./public-pages";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...publicPages.map(page => page.path), "/jamal-ul-quran", "/privacy-policy"].map(path => ({url: siteOrigin + path, priority: path === "/" ? 1 : 0.7}));
}
