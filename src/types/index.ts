export interface ProjectProcessVideo {
  url: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
}

export interface ProjectTechDetail {
  name: string;
  icon: string;
  role: string;
  colorClass: "primary" | "secondary" | "tertiary" | "on-surface";
}

export interface ProjectImpact {
  title: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
  wide?: boolean;
}

export interface ProjectDetail {
  role: string;
  heroImage?: string;
  heroVideoUrl?: string;
  heroVideoLabel?: string;
  challenge: string[];
  impacts: ProjectImpact[];
  processVideos: ProjectProcessVideo[];
  techDetails: ProjectTechDetail[];
  features: ProjectFeature[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: TechKey[];
  media: {
    thumbnail: string;
    images?: string[];
    video?: string;
    gif?: string;
  };
  links: {
    github?: string;
    demo?: string;
    video?: string;
  };
  featured: boolean;
  order: number;
  detail?: ProjectDetail;
}

export type TechKey = string;

export interface Tech {
  key: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  languages: { code: string; flag: string; name: string; level: string }[];
  instagram?: string;
}
