import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { getTechByKey } from "@/data/techStack";

export default function Projects() {
  const { t } = useTranslation();

  const sortedProjects = [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-24 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <span className="font-label uppercase tracking-widest text-xs text-primary font-bold">
              {t("projects.label")}
            </span>
            <h2 className="text-5xl font-headline font-bold tracking-tight">
              {t("projects.title")}
            </h2>
          </div>
          <div className="h-px flex-1 bg-outline-variant/20 mx-12 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedProjects.map((project) => {
            const hasDetail = !!project.detail;
            const Wrapper = hasDetail ? Link : "div";
            const wrapperProps = hasDetail
              ? { to: `/project/${project.slug}` }
              : {};

            return (
              <Wrapper
                key={project.slug}
                {...(wrapperProps as any)}
                className={`group relative bg-surface-container rounded-xl overflow-hidden transition-all duration-500 block ${
                  hasDetail
                    ? "hover:shadow-[0_20px_40px_-10px_rgba(173,198,255,0.08)] hover:-translate-y-2 cursor-pointer"
                    : "opacity-80"
                }`}
              >
                <div className="absolute top-4 left-4 z-10 w-2 h-2 bg-tertiary rounded-full" />
                {!hasDetail && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full">
                    <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                      Bald verfügbar
                    </span>
                  </div>
                )}
                <div className="aspect-video w-full overflow-hidden bg-surface-container-lowest">
                  {project.media.gif ? (
                    <img
                      src={project.media.gif}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={project.media.thumbnail}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hasDetail
                          ? "grayscale group-hover:grayscale-0"
                          : "grayscale"
                      }`}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((key) => {
                      const tech = getTechByKey(key);
                      return (
                        <span
                          key={key}
                          className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                        >
                          {tech?.name ?? key}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-6 pt-4 border-t border-outline-variant/10">
                    {project.links.github && (
                      <span className="flex items-center gap-2 text-xs font-label font-bold text-primary">
                        <span className="material-symbols-outlined text-sm">terminal</span>
                        {t("projects.github")}
                      </span>
                    )}
                    {hasDetail && (
                      <span className="flex items-center gap-2 text-xs font-label font-bold text-primary group-hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        {t("projects.viewProject")}
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
        {sortedProjects.length === 0 && (
          <div className="text-center text-on-surface-variant py-20 text-lg" />
        )}
      </div>
    </section>
  );
}
