import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

useEffect(() => {
  if (index === null) return undefined;
  document.addEventListener("keydown", handleKey);
  document.body.style.overflow = "hidden";
  return () => {
    document.removeEventListener("keydown", handleKey);
    document.body.style.overflow = "";
  };
}, [handleKey, index]);

  if (index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-snow/80 transition-colors hover:text-snow sm:right-6 sm:top-6"
      >
        <X size={26} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute left-2 flex h-11 w-11 items-center justify-center text-snow/70 transition-colors hover:text-snow sm:left-6"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>

      <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[80vh] w-auto object-contain" />
        {img.alt && <figcaption className="mt-4 text-center text-[13px] text-snow/60">{img.alt}</figcaption>}
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute right-2 flex h-11 w-11 items-center justify-center text-snow/70 transition-colors hover:text-snow sm:right-6"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>
    </div>
  );
}
