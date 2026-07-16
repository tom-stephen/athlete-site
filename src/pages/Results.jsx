import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { results } from "../data/site";

export default function Results() {
  usePageTitle("Results");

  return (
    <>
      <PageHeader
        eyebrow="Results"
        title="A curated look at the record."
        lede="These are the highlights. For every start, splits, and the complete history, the official FIS profile is the source of truth."
      />

      {/* ------------------------------------------------------------ Olympics */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{results.olympics.title}</p>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
              Four events across nine days at my first Olympic Games. A 47th in the classic sprint opened the
              Games on Feb 10, before a career-best 9th in the 10km freestyle interval start on Feb 13 — the
              top Canadian result of the day. Two days later, I anchored the men&rsquo;s relay to 5th
              alongside Xavier McKeever, Antoine Cyr, and Rémi Drolet, Canada&rsquo;s best-ever Olympic result
              in the event. I closed out the Games in the 50km classic mass start, finishing 17th.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="divide-y divide-line border-y border-line">
              {results.olympics.rows.map((row) => (
                <div key={row.event} className="flex items-center justify-between gap-6 py-6">
                  <div>
                    <p className="text-[16px] text-ink">{row.event}</p>
                    {row.note && <p className="mt-1 text-[13px] text-ink-faint">{row.note}</p>}
                  </div>
                  <span className="shrink-0 font-mono text-2xl font-medium text-red">{row.finish}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- Worlds */}
      <section className="border-t border-line bg-ice py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">{results.worlds.title}</p>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
              Four straight Junior World Championships from 2019–2022, followed by two U23 World
              Championships. The headline: Canada&rsquo;s first-ever World Championship cross-country relay
              medal, in 2020.
            </p>
          </Reveal>

          <Reveal delay={1} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="eyebrow py-3 pr-4 font-mono font-normal">Competition</th>
                  <th className="eyebrow py-3 pr-4 font-mono font-normal">Year</th>
                  <th className="eyebrow py-3 pr-4 font-mono font-normal">Event</th>
                  <th className="eyebrow py-3 text-right font-mono font-normal">Finish</th>
                </tr>
              </thead>
              <tbody>
                {results.worlds.rows.map((row, i) => (
                  <tr key={i} className="border-b border-ink/10">
                    <td className="py-4 pr-4 text-[14px] text-ink-soft">{row.competition}</td>
                    <td className="py-4 pr-4 font-mono text-[14px] text-ink-soft">{row.year}</td>
                    <td className="py-4 pr-4 text-[15px] text-ink">{row.event}</td>
                    <td className="py-4 text-right font-mono text-[15px] font-medium text-ink">
                      {row.finish}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Senior circuit */}
      <section className="border-t border-line bg-paper py-20 sm:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Senior circuit highlights</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              World Cup &amp; Nor-Am.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <ul className="space-y-5">
              {results.seniorCircuit.map((line, i) => (
                <li key={i} className="flex gap-4 border-b border-line pb-5 text-[15px] leading-relaxed text-ink-soft last:border-none">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- FIS CTA */}
      <section className="border-t border-line bg-ink py-20 sm:py-24">
        <div className="container-content">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Complete record</p>
              <h2 className="mt-4 max-w-lg font-display text-2xl font-bold leading-tight text-snow sm:text-3xl">
                Every start, every split — straight from FIS.
              </h2>
            </div>
            <a
              href={results.fisProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0 bg-red hover:bg-snow hover:text-ink"
            >
              View FIS profile
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
