import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0b1326] w-full py-12 px-8 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-sm font-bold text-slate-200 font-headline">
          {profile.name.toUpperCase()} DIGITAL CRAFTSMAN
        </div>
        <div className="font-body text-[10px] tracking-widest uppercase text-slate-500">
          {t("footer.rights")}
        </div>
        <div className="flex gap-8">
          <a
            className="font-body text-[10px] tracking-widest uppercase text-slate-500 hover:text-purple-400 transition-colors duration-200"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-body text-[10px] tracking-widest uppercase text-slate-500 hover:text-purple-400 transition-colors duration-200"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
