import { useEffect, useRef, useState } from "react";

const PATH =
  "M0,100 C80,100 100,55 180,55 C240,55 260,95 320,95 C380,95 400,30 460,30 C520,30 540,85 600,85 C660,85 680,50 740,50 C800,50 820,100 880,100 C930,100 950,40 1010,40 C1060,40 1080,90 1140,90 C1160,90 1180,75 1200,70";

/**
 * The site's signature graphic: a rolling elevation / pace-line profile,
 * echoing the course profiles and split charts of cross-country racing.
 * Draws itself in once scrolled into view.
 */
export default function ElevationLine({ className = "", tone = "ink" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stroke = tone === "snow" ? "#F5F6F7" : tone === "red" ? "#C41230" : "#13181C";
  const fillId = `elevation-fill-${tone}`;

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      className={`h-16 w-full sm:h-20 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.08" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${PATH} L1200,140 L0,140 Z`} fill={`url(#${fillId})`} stroke="none" />
      <path
        d={PATH}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1400"
        strokeDashoffset={visible ? 0 : 1400}
        style={{
          transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </svg>
  );
}
