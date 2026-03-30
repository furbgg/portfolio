import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import VideoModal from "@/components/ui/VideoModal";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const projects = getProjects(i18n.language);
  const project = projects.find((p) => p.slug === slug);

  const [videoModal, setVideoModal] = useState<{
    url: string;
    title: string;
    description?: string;
  } | null>(null);

  if (!project || !project.detail) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-6xl text-outline">error_outline</span>
          <h1 className="font-headline font-bold text-3xl">{t("projectDetail.notFound")}</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-label font-bold"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {t("projectDetail.backHome")}
          </Link>
        </div>
      </main>
    );
  }

  const { detail } = project;
  const colorMap: Record<string, { bg: string; text: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary" },
    secondary: { bg: "bg-secondary/10", text: "text-secondary" },
    tertiary: { bg: "bg-tertiary/10", text: "text-tertiary" },
    "on-surface": { bg: "bg-on-surface/10", text: "text-on-surface" },
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 text-sm"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {t("projectDetail.backHome")}
            </Link>

            <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block">
              {detail.role}
            </span>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tighter leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              {project.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {project.links.github && (
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-primary to-secondary text-on-primary font-semibold rounded-sm hover:scale-105 transition-transform aura-shadow"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined">code</span>
                  {t("projectDetail.viewSource")}
                </a>
              )}
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <div
              className="aspect-video bg-surface-container-low rounded-xl overflow-hidden relative border border-outline-variant/10 aura-shadow group cursor-pointer"
              onClick={() => {
                if (detail.heroVideoUrl) {
                  setVideoModal({
                    url: detail.heroVideoUrl,
                    title: project.title,
                    description: detail.heroVideoLabel,
                  });
                }
              }}
            >
              {detail.heroImage && (
                <img
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  src={detail.heroImage}
                  alt={project.title}
                />
              )}
              {detail.heroVideoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-md hover:scale-110 transition-transform"
                    aria-label={t("projectDetail.playVideo")}
                  >
                    <span
                      className="material-symbols-outlined text-primary text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </button>
                </div>
              )}
              {detail.heroVideoLabel && (
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <div className="bg-surface/80 backdrop-blur-sm px-4 py-2 rounded-full border border-outline-variant/20">
                    <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                      {detail.heroVideoLabel}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Impact */}
      {(detail.challenge.length > 0 || detail.impacts.length > 0) && (
        <section className="bg-surface-container-low/40 py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
            {detail.challenge.length > 0 && (
              <div className="md:col-span-7">
                <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">
                  {t("projectDetail.challenge")}
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  {detail.challenge.map((paragraph, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
              </div>
            )}
            {detail.impacts.length > 0 && (
              <div className="md:col-span-5 bg-surface-container p-8 rounded-xl border border-outline-variant/10 aura-shadow">
                <h3 className="font-headline font-bold text-xl mb-6 text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined">trending_up</span>
                  {t("projectDetail.impact")}
                </h3>
                <ul className="space-y-6">
                  {detail.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 shadow-[0_0_8px_rgba(208,188,255,0.6)]" />
                      <div>
                        <p className="font-semibold text-on-surface">{impact.title}</p>
                        <p className="text-sm text-on-surface-variant">{impact.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Process & Development Videos */}
      {detail.processVideos.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/10">
          <div className="mb-12">
            <h2 className="font-headline font-bold text-3xl mb-4 tracking-tight">
              {t("projectDetail.process")}
            </h2>
            <p className="text-on-surface-variant">
              {t("projectDetail.processDescription")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {detail.processVideos.map((video, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() =>
                  setVideoModal({
                    url: video.url,
                    title: video.title,
                    description: video.description,
                  })
                }
              >
                <div className="aspect-video bg-surface-container-high rounded-sm border border-outline-variant/10 flex items-center justify-center mb-2 overflow-hidden relative">
                  {video.thumbnailUrl ? (
                    <>
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl opacity-80 group-hover:opacity-100 transition-opacity">
                          play_circle
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-3xl">
                      play_circle
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-all" />
                </div>
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant leading-tight">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Grid */}
      {detail.techDetails.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-sm mb-4 uppercase tracking-widest text-primary">
              {t("projectDetail.architecture")}
            </h2>
            <p className="text-on-surface-variant">
              {t("projectDetail.architectureDescription")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {detail.techDetails.map((tech, i) => {
              const colors = colorMap[tech.colorClass] ?? colorMap.primary;
              return (
                <div
                  key={i}
                  className="bg-surface-container-high p-8 flex flex-col items-center text-center rounded-xl border border-outline-variant/5 glow-hover transition-all"
                >
                  <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-sm ${colors.bg}`}>
                    <span className={`material-symbols-outlined ${colors.text} text-3xl`}>
                      {tech.icon}
                    </span>
                  </div>
                  <p className="font-headline font-bold">{tech.name}</p>
                  <p className="text-xs text-on-surface-variant mt-2 font-label uppercase tracking-widest">
                    {tech.role}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Features Bento Grid */}
      {detail.features.length > 0 && (
        <section className="bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detail.features.map((feature, i) => (
                <div
                  key={i}
                  className={`${feature.wide ? "md:col-span-2" : ""} bg-surface-container-low p-10 rounded-xl relative overflow-hidden group border border-outline-variant/10`}
                >
                  <div className="relative z-10">
                    <h3 className="font-headline font-bold text-2xl mb-4">{feature.title}</h3>
                    <p className="text-on-surface-variant max-w-md">{feature.description}</p>
                    {feature.tags && feature.tags.length > 0 && (
                      <div className="mt-8 flex gap-2">
                        {feature.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 rounded-sm bg-secondary/20 text-secondary text-[10px] font-bold tracking-widest uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {feature.icon && (
                    <span className="material-symbols-outlined absolute bottom-[-20px] right-[-20px] text-[120px] text-primary/5 group-hover:text-primary/10 transition-colors">
                      {feature.icon}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
            {t("projectDetail.openForOpportunities")}
          </span>
        </div>
        <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-8 tracking-tighter">
          {detail.ctaTitle ?? t("projectDetail.ctaTitle")}
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
          {detail.ctaDescription ?? t("projectDetail.ctaDescription")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="px-8 py-4 bg-linear-to-br from-primary to-secondary text-on-primary font-bold rounded-lg aura-shadow hover:scale-105 transition-transform"
          >
            {t("projectDetail.discuss")}
          </a>
          <Link
            to="/#contact"
            className="px-8 py-4 bg-surface-container text-primary font-bold rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors"
          >
            {t("projectDetail.connect")}
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal !== null}
        onClose={() => setVideoModal(null)}
        videoUrl={videoModal?.url ?? ""}
        title={videoModal?.title ?? ""}
        description={videoModal?.description}
      />
    </main>
  );
}
