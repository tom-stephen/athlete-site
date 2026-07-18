import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoEmbed({ video, className = "" }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-ink ${className}`}>
      {playing ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${video.title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/45" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-snow/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={26} fill="currentColor" strokeWidth={0} className="ml-1" />
            </span>
          </span>
          {video.title && (
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-left text-[13px] text-snow sm:p-5 sm:text-sm">
              {video.title}
            </span>
          )}
        </button>
      )}
    </div>
  );
}