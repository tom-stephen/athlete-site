import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { partners } from "../data/site";

export default function Partners() {
  usePageTitle("Partners");

  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="The gear and brands behind the results."
        lede="Every partner listed here plays an active role in training and racing — from the skis underfoot to the gloves on the start line."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-content">
          <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Reveal
                key={partner.name}
                className="flex flex-col justify-between border-b border-r border-line bg-paper p-8 sm:p-10"
              >
                <div className="flex h-16 items-start">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto max-w-[160px] object-contain object-left"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="font-display text-lg font-semibold text-ink">{partner.name}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{partner.blurb}</p>
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint transition-colors hover:text-red"
                    >
                      Visit site <ArrowUpRight size={12} />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Inquiry */}
      <section className="border-t border-line bg-ink py-24 sm:py-28">
        <div className="container-content">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Sponsorship inquiries</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
                Interested in partnering with an Olympian?
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-snow/70">
                I&rsquo;m always open to conversations with brands that fit — get in touch and I&rsquo;ll
                follow up personally.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 bg-red hover:bg-snow hover:text-ink">
              Start a conversation
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
