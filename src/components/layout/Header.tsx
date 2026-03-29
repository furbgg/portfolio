import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/data/profile";

const LANGUAGES = ["de", "en", "tr"] as const;
const LANGUAGE_LABELS: Record<string, string> = {
  de: "DE",
  en: "EN",
  tr: "TR",
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const cycleLanguage = () => {
    const currentIndex = LANGUAGES.indexOf(i18n.language as typeof LANGUAGES[number]);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    i18n.changeLanguage(LANGUAGES[nextIndex]);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_-10px_rgba(173,198,255,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="text-xl font-black tracking-tighter text-slate-100 font-headline uppercase hover:text-primary transition-colors"
        >
          {profile.name.split(" ")[0].toUpperCase()} {profile.name.split(" ")[1]?.toUpperCase() ?? ""}
        </Link>

        {isHome && (
          <div className="hidden md:flex gap-8 items-center">
            <a
              className="font-label uppercase tracking-widest text-xs text-blue-400 border-b-2 border-blue-400 pb-1 hover:scale-105 transition-all duration-300"
              href="#projects"
            >
              {t("nav.projects")}
            </a>
            <a
              className="font-label uppercase tracking-widest text-xs text-slate-400 hover:text-slate-100 hover:scale-105 transition-all duration-300"
              href="#about"
            >
              {t("nav.about")}
            </a>
            <a
              className="font-label uppercase tracking-widest text-xs text-slate-400 hover:text-slate-100 hover:scale-105 transition-all duration-300"
              href="#contact"
            >
              {t("nav.contact")}
            </a>
          </div>
        )}

        {!isHome && (
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="font-label uppercase tracking-widest text-xs text-slate-400 hover:text-slate-100 hover:scale-105 transition-all duration-300 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {t("projectDetail.backHome")}
            </Link>
          </div>
        )}

        <div className="flex items-center gap-3 text-slate-400">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-300 transition-all duration-300"
            aria-label="Email"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined text-xl">link</span>
          </a>
          {profile.instagram && (
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </a>
          )}
          <div className="w-px h-4 bg-outline-variant/30 mx-1" />
          <button
            onClick={cycleLanguage}
            className="cursor-pointer hover:text-blue-300 transition-all duration-300 flex items-center gap-1"
            aria-label="Toggle language"
          >
            <span className="material-symbols-outlined">language</span>
            <span className="text-[10px] font-label font-bold tracking-widest">
              {LANGUAGE_LABELS[i18n.language] ?? "DE"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
