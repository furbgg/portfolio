import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface-container-lowest" id="contact">
      <div className="max-w-3xl mx-auto px-8 text-center space-y-12">
        <div className="space-y-4">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold">
            {t("contact.label")}
          </span>
          <h2 className="text-5xl font-headline font-bold tracking-tight">
            {t("contact.title")}
          </h2>
        </div>
        <div className="flex justify-center gap-12 text-slate-400">
          {profile.email && (
            <a
              className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"
              href={`mailto:${profile.email}`}
            >
              <span className="material-symbols-outlined text-3xl">mail</span>
              <span className="font-label text-[10px] uppercase tracking-widest">
                Email
              </span>
            </a>
          )}
          <a
            className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-3xl">
              terminal
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest">
              GitHub
            </span>
          </a>
          <a
            className="flex flex-col items-center gap-2 hover:text-primary transition-colors group"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-3xl">link</span>
            <span className="font-label text-[10px] uppercase tracking-widest">
              LinkedIn
            </span>
          </a>
        </div>
        <form
          className="space-y-6 text-left"
          action=""
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label uppercase text-[10px] tracking-widest text-slate-500">
                {t("contact.name")}
              </label>
              <input
                name="name"
                className="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-on-surface py-3 px-0"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-label uppercase text-[10px] tracking-widest text-slate-500">
                {t("contact.email")}
              </label>
              <input
                name="email"
                className="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-on-surface py-3 px-0"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label uppercase text-[10px] tracking-widest text-slate-500">
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              className="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-on-surface py-3 px-0"
              rows={4}
              required
            />
          </div>
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="cta-gradient text-on-primary-container font-label font-bold py-4 px-16 rounded-md hover:scale-105 transition-transform shadow-lg"
            >
              {t("contact.send")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
