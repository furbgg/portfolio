import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-label uppercase tracking-widest text-xs text-primary font-bold">
              {t("hero.available")}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-none">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl font-headline font-bold text-primary-fixed-dim">
              {t("hero.title")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={profile.cvUrl}
              download
              className="cta-gradient text-on-primary-container font-label font-bold py-4 px-8 rounded-md hover:scale-102 transition-transform shadow-[0_0_20px_rgba(173,198,255,0.2)] inline-block"
            >
              {t("hero.downloadCv")}
            </a>
            <a
              href="#contact"
              className="border border-outline-variant/20 text-primary font-label font-bold py-4 px-8 rounded-md hover:bg-surface-container transition-colors inline-block"
            >
              {t("hero.getInTouch")}
            </a>
          </div>
        </div>
        <div className="hidden md:block relative aspect-square">
          <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 w-full h-full opacity-40">
              <div className="bg-surface-container-highest rounded-lg border border-outline-variant/10 p-4" />
              <div className="bg-primary/20 rounded-lg border border-primary/20 p-4 transform translate-y-12" />
              <div className="bg-surface-container-high rounded-lg border border-outline-variant/10 p-4" />
              <div className="bg-secondary/20 rounded-lg border border-secondary/20 p-4 transform -translate-y-8" />
              <div className="bg-surface-container-low rounded-lg border border-outline-variant/10 p-4" />
              <div className="bg-primary/10 rounded-lg border border-primary/10 p-4" />
              <div className="bg-surface-container-highest rounded-lg border border-outline-variant/10 p-4 transform translate-x-4" />
              <div className="bg-surface-container rounded-lg border border-outline-variant/10 p-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
