import { NavLink } from "react-router-dom";
import { Instagram, ArrowUpRight } from "lucide-react";
import { nav, profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-snow">
      <div className="container-content grid gap-12 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.03em]">{profile.name}</p>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-snow/60">
            Canadian cross-country skier and 2026 Olympian, racing for Canada out of the Alberta World Cup
            Academy and Foothills Nordic Ski Club.
          </p>
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest2 text-snow/80 transition-colors hover:text-red"
          >
            <Instagram size={15} strokeWidth={1.75} />
            {profile.instagramHandle}
          </a>
        </div>

        <div>
          <p className="eyebrow text-snow/40">Site</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="text-[15px] text-snow/70 transition-colors hover:text-snow"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-snow/40">Elsewhere</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="https://www.fis-ski.com/DB/general/athlete-biography.html?competitorid=226849&sectorcode=CC"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[15px] text-snow/70 transition-colors hover:text-snow"
              >
                FIS athlete profile <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a
                href="https://olympic.ca/team-canada/tom-stephen/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[15px] text-snow/70 transition-colors hover:text-snow"
              >
                Team Canada profile <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a
                href="https://nordiqcanada.ca/athlete/tom-stephen/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[15px] text-snow/70 transition-colors hover:text-snow"
              >
                Nordiq Canada profile <ArrowUpRight size={13} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-snow/10">
        <div className="container-content flex flex-col gap-2 py-6 text-[12px] text-snow/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a 
          href="https://www.nordicfocus.com/"
          target="_blank"
          rel="noreferrer"
          >
            Photos From World Cup and Olympics Credited to Nordic Focus
          </a>
          <p>Calgary &amp; Canmore, Alberta, Canada</p>
        </div>
      </div>
    </footer>
  );
}
