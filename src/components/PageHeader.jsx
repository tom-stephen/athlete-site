import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="border-b border-line bg-snow pb-14 pt-40 sm:pt-44">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={1}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
