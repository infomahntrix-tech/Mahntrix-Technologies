import { PROJECTS } from "@/lib/projectsData";
import { INSIGHTS } from "@/lib/insightsData";

export default function sitemap() {
  const baseUrl = "https://mahntrixtechnologies.com";

  const staticRoutes = [
    "",
    "/services/",
    "/product/",
    "/work/",
    "/about/",
    "/insights/",
    "/contact/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightRoutes = INSIGHTS.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
