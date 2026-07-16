import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import ElevationLine from "../components/ElevationLine";
import usePageTitle from "../hooks/usePageTitle";
import { photos, profile, bioFirstPerson, timeline, press } from "../data/site";

const quickFacts = [
  { label: "Born", value: profile.birthDate },
  { label: "Hometown", value: profile.birthplace },
  { label: "Based", value: profile.residence },
  { label: "Club", value: profile.club },
  { label: "Program", value: profile.program },
  { label: "Coach", value: profile.coach },
  { label: "Education", value: profile.education },
  { label: "Outside skiing", value: "Fly fishing, backcountry skiing, mountain biking" },
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      {/* ------------------------------------------------------------- Intro */}
      <section className="bg-snow pb-20 pt-40 sm:pt-44">
        <div className="container-content grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 font-display text-[40px] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              My story.
            </h1>
            <div className="mt-8 aspect-[4/5] w-full overflow-hidden bg-ice lg:hidden">
              <img
                src={photos.portraitSummit}
                alt="Tom Stephen with race skis, Nordiq Canada"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {bioFirstPerson.map((para, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 3)}>
                <p className="max-w-2xl text-[17px] leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Quick facts */}
      <section className="border-y border-line bg-paper">
        <div className="container-content">
          <div className="grid grid-cols-2 border-b border-r border-line sm:grid-cols-4">
            {quickFacts.map((fact) => (
              <Reveal key={fact.label} className="border-l border-t border-line px-5 py-7 sm:px-6 sm:py-8">
                <p className="eyebrow">{fact.label}</p>
                <p className="mt-2 text-[15px] leading-snug text-ink">{fact.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Photo break */}
      <section className="hidden bg-snow py-20 lg:block">
        <div className="container-content">
          <Reveal className="mx-auto aspect-[21/9] w-full max-w-4xl overflow-hidden bg-ice">
            <img
              src={photos.teamCanadaGroup}
              alt="Team Canada at the Milano Cortina 2026 Olympic Winter Games"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- Journey */}
      <section className="bg-snow pb-28 pt-8 sm:pt-12">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">The journey</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              From Foothills Nordic to the Olympic start line.
            </h2>
          </Reveal>

          <div className="mt-16">
            <ElevationLine />
          </div>

          <ol className="relative mt-4 border-l border-line pl-8 sm:pl-10">
            {timeline.map((item) => (
              <Reveal as="li" key={item.year + item.title} className="relative py-8 first:pt-0 last:pb-0">
                <span className="absolute -left-[41px] top-9 h-[9px] w-[9px] rounded-full bg-red sm:-left-[49px]" />
                <div className="grid gap-6 sm:grid-cols-[110px_1fr] sm:gap-8">
                  <span className="font-mono text-[13px] uppercase tracking-widest2 text-red">{item.year}</span>
                  <div className={item.image ? "grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center" : ""}>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
                    </div>
                    {item.image && (
                      <div className="mt-2 aspect-[4/3] w-full overflow-hidden bg-ice md:mt-0">
                        <img src={item.image} alt={item.imageAlt || ""} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- In the press */}
      <section className="border-t border-line bg-ice py-20 sm:py-24">
        <div className="container-content">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">In the press</p>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">A few stories.</h2>
            </div>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink-soft transition-colors hover:text-ink"
            >
              Full media kit
            </Link>
          </Reveal>

          <Reveal delay={1} className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            {press.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 border-b border-ink/10 py-5"
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
                <ArrowUpRight size={16} className="mt-1 shrink-0 text-ink-faint transition-colors group-hover:text-red" />
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
