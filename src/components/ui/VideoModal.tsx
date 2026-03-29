import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: string;
}

function getEmbedUrl(url: string): { type: "youtube" | "cloudinary"; src: string } {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] ?? "";
    } else if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0] ?? "";
    } else if (url.includes("/embed/")) {
      videoId = url.split("/embed/")[1]?.split("?")[0] ?? "";
    }
    return { type: "youtube", src: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` };
  }
  return { type: "cloudinary", src: url };
}

export default function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const embed = isOpen ? getEmbedUrl(videoUrl) : null;

  return (
    <AnimatePresence>
      {isOpen && embed && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl mx-4 md:mx-8"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-colors z-10"
              aria-label="Close video"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Video */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 aura-shadow">
              {embed.type === "youtube" ? (
                <iframe
                  src={embed.src}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={embed.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>

            {/* Title & Description */}
            <div className="mt-6 space-y-2">
              <h3 className="font-headline font-bold text-xl text-on-surface">{title}</h3>
              {description && (
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
