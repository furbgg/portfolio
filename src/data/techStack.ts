import type { Tech } from "@/types";

export const techStack: Tech[] = [
  { key: "react", name: "React.js", icon: "react", category: "frontend" },
  { key: "nextjs", name: "Next.js", icon: "nextjs", category: "frontend" },
  { key: "tailwind", name: "Tailwind", icon: "tailwind", category: "frontend" },
  { key: "typescript", name: "TypeScript", icon: "typescript", category: "frontend" },
  { key: "java", name: "Java / Spring", icon: "java", category: "backend" },
  { key: "spring-boot", name: "Spring Boot", icon: "spring", category: "backend" },
  { key: "nodejs", name: "Node.js", icon: "nodejs", category: "backend" },
  { key: "python", name: "Python", icon: "python", category: "backend" },
  { key: "graphql", name: "GraphQL", icon: "graphql", category: "backend" },
  { key: "postgresql", name: "PostgreSQL", icon: "postgresql", category: "database" },
  { key: "mongodb", name: "MongoDB", icon: "mongodb", category: "database" },
  { key: "redis", name: "Redis", icon: "redis", category: "database" },
  { key: "supabase", name: "Supabase", icon: "supabase", category: "database" },
  { key: "aws", name: "AWS", icon: "aws", category: "devops" },
  { key: "docker", name: "Docker", icon: "docker", category: "devops" },
  { key: "kubernetes", name: "Kubernetes", icon: "kubernetes", category: "devops" },
  { key: "cicd", name: "CI/CD", icon: "cicd", category: "devops" },
  { key: "stripe", name: "Stripe", icon: "stripe", category: "other" },
  { key: "vite", name: "Vite", icon: "vite", category: "frontend" },
  { key: "spring-security", name: "Spring Security", icon: "spring-security", category: "backend" },
  { key: "jwt", name: "JWT", icon: "jwt", category: "backend" },
];

export function getTechByKey(key: string): Tech | undefined {
  return techStack.find((t) => t.key === key);
}

export function getTechByCategory(category: Tech["category"]): Tech[] {
  return techStack.filter((t) => t.category === category);
}
