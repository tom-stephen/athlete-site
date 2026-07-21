import { useState } from "react";
import { ArrowUpRight, Download, Expand } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import usePageTitle from "../hooks/usePageTitle";
import { downloadTextFile } from "../lib/download";
import { profile, bioShort, bioLong, video, gallery, press } from "../data/site";

export default function Media() {
  usePageTitle("Media");
  const [bioTab, setBioTab] = useState("short");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeBio = bioTab === "short" ? bioShort : bioLong;

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Media kit."
        lede="Bio copy, photos, and press coverage for journalists, broadcasters, and sponsors. For anything else, reach out on the contact page."
      />

      {/* --------------------------------------------------------------- Bio */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-content">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-1 border border-line p-1">
              <button
                type="button"
                onClick={() => setBioTab("short")}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                  bioTab === "short" ? "bg-ink text-snow" : "text-ink-soft hover:text-ink"
                }`}
              >
                Short bio
              </button>
              <button
                type="button"
                onClick={() => setBioTab("long")}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                  bioTab === "long" ? "bg-ink text-snow" : "text-ink-soft hover:text-ink"
                }`}
              >
                Long bio
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                downloadTextFile(
                  bioTab === "short" ? "tom-stephen-short-bio.txt" : "tom-stephen-long-bio.txt",
                  activeBio
                )
              }
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-ink-soft transition-colors hover:text-ink"
            >
              <Download size={14} /> Download .txt
            </button>
          </Reveal>

          <Reveal delay={1} className="mt-8 max-w-3xl whitespace-pre-line text-[16px] leading-relaxed text-ink-soft">
            {activeBio}
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- Video */}
      <section className="border-t border-line bg-ice py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Video</p>
          </Reveal>
          <Reveal delay={1} className="mt-6 aspect-video w-full max-w-3xl overflow-hidden bg-ink">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Gallery */}
      <section className="border-t border-line bg-paper py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Photos</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">Images.</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 3) + 1}
                as="button"
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/5] overflow-hidden bg-ice text-left"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand size={16} className="text-snow" />
                </span>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-ink-faint">
            Please reach out for credit and usage guidelines if you&rsquo;d like to use any of these images.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- Press */}
      <section className="border-t border-line bg-ice py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Press coverage</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">In the news.</h2>
          </Reveal>

          <Reveal delay={1} className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {press.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-5"
              >
                <div>
                  <p className="text-[15px] leading-snug text-ink transition-colors group-hover:text-red">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12px] text-ink-faint">
                    {item.outlet}
                    {item.date ? ` — ${item.date}` : ""}
                  </p>
                </div>
                <ArrowUpRight size={16} className="shrink-0 text-ink-faint transition-colors group-hover:text-red" />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- Contact CTA */}
      <section className="border-t border-line bg-paper py-16">
        <div className="container-content flex flex-wrap items-center justify-between gap-6">
          <p className="text-[15px] text-ink-soft">Need something not listed here?</p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink transition-colors hover:text-red"
          >
            {profile.email}
          </a>
        </div>
      </section>

      <Lightbox
        images={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
