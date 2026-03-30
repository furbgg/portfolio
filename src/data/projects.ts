import type { Project } from "@/types";
import { projectsEN } from "./projects.en";
import { projects as projectsDE } from "./projects.de";

export const getProjects = (lang: string): Project[] => {
  if (lang === "en" || lang.startsWith("en")) {
    return projectsEN;
  }
  return projectsDE;
};
