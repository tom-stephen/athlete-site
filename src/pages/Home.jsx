import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "../components/Reveal";
import ElevationLine from "../components/ElevationLine";
import usePageTitle from "../hooks/usePageTitle";
import { photos, heroStats, profile, results, partners, press, bioFirstPerson, featuredVideo } from "../data/site";
import VideoEmbed from "../components/VideoEmbed";

export default function Home() {
  usePageTitle();

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <img
          src={photos.heroSprint}
          alt="Tom Stephen racing for Canada at the Milano Cortina 2026 Olympic Winter Games"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="container-content relative z-10 pb-16 pt-40 sm:pb-24">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-snow/70 animate-fade-in">
            Canada · Cross-Country Skiing
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[15vw] font-bold leading-[0.95] tracking-tight text-snow sm:text-[96px] lg:text-[112px] animate-fade-up">
            Tom
            <br />
            Stephen
          </h1>
          <p
            className="mt-7 max-w-md text-[17px] leading-relaxed text-snow/85 sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            2026 Olympian. 9th in the 10km freestyle, 5th in the men&rsquo;s relay — Canada&rsquo;s best-ever
            Olympic result in the event.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.28s" }}
          >
            <Link to="/results" className="btn-primary bg-red hover:bg-snow hover:text-ink">
              View results
              <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Stat strip */}
      <section className="bg-paper">
        <div className="container-content">
          <div className="grid grid-cols-2 border-b border-r border-line sm:grid-cols-4">
            {heroStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={(i % 3) + 1}
                className="border-l border-t border-line px-5 py-9 sm:px-6 sm:py-12"
              >
                <span className="font-mono text-[34px] font-medium leading-none text-ink sm:text-[42px]">
                  {stat.value}
                </span>
                <span className="mt-3 block text-[13px] leading-snug text-ink-soft">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- About teaser */}
      <section className="bg-snow py-24 sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden bg-ice">
              <img
                src={photos.portraitSummit}
                alt="Tom Stephen with race skis, Nordiq Canada"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <Reveal>
              <p className="eyebrow">Who I am</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Calgary trails to the Olympic top 10.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-ink-soft">{bioFirstPerson[0]}</p>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink-soft">
                Off snow, I&rsquo;m finishing a software engineering degree at the University of Calgary and
                coaching at Foothills Nordic, the club that started it all for me.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink transition-colors hover:text-red"
              >
                Read my story <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="container-content mt-24">
          <ElevationLine />
        </div>
      </section>

      {/* ------------------------------------------------------ Featured video */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Watch</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Worth a watch.
            </h2>
          </Reveal>
          <Reveal delay={1} className="mx-auto mt-10 max-w-3xl">
            <VideoEmbed video={featuredVideo} />
          </Reveal>
          <Reveal delay={2} className="mx-auto mt-6 max-w-3xl text-center">
            <Link to="/media" className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink-soft transition-colors hover:text-ink">
              More videos &amp; media kit <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Results teaser */}
      <section className="bg-ice py-24 sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Results</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Milano Cortina 2026.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
                Four events across nine days at Tom&rsquo;s first Olympic Games, capped by Canada&rsquo;s
                best-ever Olympic result in the cross-country relay.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <Link
                to="/results"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink transition-colors hover:text-red"
              >
                Full results &amp; FIS record <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="divide-y divide-ink/10 border-y border-ink/10 font-body">
              {results.olympics.rows.map((row) => (
                <div key={row.event} className="flex items-center justify-between gap-6 py-5">
                  <div>
                    <p className="text-[15px] text-ink">{row.event}</p>
                    {row.note && <p className="mt-1 text-[12px] text-ink-faint">{row.note}</p>}
                  </div>
                  <span className="shrink-0 font-mono text-xl font-medium text-red">{row.finish}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Media teaser */}
      <section className="bg-snow py-24 sm:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">In the press</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Media &amp; updates.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
                Coverage, interviews, photos, and a downloadable bio for media and sponsors.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/media" className="btn-outline">
                  Media kit
                </Link>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink-soft transition-colors hover:text-ink"
                >
                  <Instagram size={15} strokeWidth={1.75} />
                  {profile.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} className="flex flex-col divide-y divide-line border-y border-line">
            {press.slice(0, 3).map((item) => (
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
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-ink-faint transition-colors group-hover:text-red"
                />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Partners strip */}
      <section className="border-t border-line bg-paper py-20 sm:py-24">
        <div className="container-content">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <p className="eyebrow">Partners</p>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-ink-soft transition-colors hover:text-ink"
            >
              All partners <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={1} className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 w-auto max-w-[120px] object-contain grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Contact CTA */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="container-content">
          <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-snow sm:text-4xl lg:text-5xl">
                Media, sponsorship, or a race-day question — let&rsquo;s talk.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 bg-red hover:bg-snow hover:text-ink">
              Get in touch
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
