import type { Project } from "@/types";
import { projectsEN } from "./projects.en";
import { projects as projectsDE } from "./projects.de";
import { projectsTR } from "./projects.tr";

export const getProjects = (lang: string): Project[] => {
  if (lang === "en" || lang.startsWith("en")) {
    return projectsEN;
  }
  if (lang === "tr" || lang.startsWith("tr")) {
    return projectsTR;
  }
  return projectsDE;
};
