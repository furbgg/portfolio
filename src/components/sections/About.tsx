import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";
import { getTechByCategory } from "@/data/techStack";

const categories = ["frontend", "backend", "database", "devops"] as const;

const borderColors: Record<string, string> = {
  frontend: "border-primary",
  backend: "border-secondary",
  database: "border-tertiary",
  devops: "border-on-surface",
};

const labelColors: Record<string, string> = {
  frontend: "text-primary",
  backend: "text-secondary",
  database: "text-tertiary",
  devops: "text-on-surface",
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="font-label uppercase tracking-widest text-xs text-primary font-bold">
              {t("about.label")}
            </span>
            <h2 className="text-5xl font-headline font-bold tracking-tight">
              {t("about.title")}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              {t("about.bio")}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-label uppercase tracking-widest text-xs text-slate-400">
              {t("about.languages")}
            </h4>
            <div className="flex flex-wrap gap-6">
              {profile.languages.map((lang) => (
                <div key={lang.code} className="flex items-center gap-3">
                  <span className="text-2xl grayscale opacity-90">{lang.flag}</span>
                  <span className="font-body font-medium">
                    {lang.name} ({t(`about.levels.${lang.code}`)})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`bg-surface-container-low p-6 rounded-lg space-y-4 border-l-2 ${borderColors[cat]}`}
            >
              <h4
                className={`font-label uppercase tracking-widest text-[10px] ${labelColors[cat]}`}
              >
                {t(`about.${cat}`)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {getTechByCategory(cat).map((tech) => (
                  <span
                    key={tech.key}
                    className="text-sm font-body text-on-surface"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
