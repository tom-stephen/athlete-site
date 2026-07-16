import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-snow/95 shadow-[0_1px_0_0_rgba(19,24,28,0.08)] backdrop-blur-sm"
        }`}
      >
        <div className="container-content flex h-[72px] items-center justify-between">
          <NavLink
            to="/"
            className={`font-display text-[17px] font-bold uppercase tracking-[0.04em] transition-colors ${
              transparent ? "text-snow" : "text-ink"
            }`}
          >
            {profile.name}
          </NavLink>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                        transparent
                          ? isActive
                            ? "text-snow"
                            : "text-snow/70 hover:text-snow"
                          : isActive
                            ? "text-red"
                            : "text-ink-soft hover:text-ink"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className={`-mr-2 flex h-11 w-11 items-center justify-center md:hidden ${
              transparent ? "text-snow" : "text-ink"
            }`}
          >
            {open ? (
              <X size={24} strokeWidth={1.75} />
            ) : (
              <Menu size={24} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </header>

      {/* Must remain outside the fixed/backdrop-blurred header */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[72px] z-50 bg-ink md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="container-content flex h-full flex-col justify-center overflow-y-auto py-10">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-snow/10 py-3.5 font-display text-[26px] font-medium ${
                  isActive ? "text-red" : "text-snow"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block pb-6 font-mono text-[12px] uppercase tracking-widest2 text-snow/60"
          >
            Instagram — {profile.instagramHandle}
          </a>
        </nav>
      </div>
    </>
  );

}