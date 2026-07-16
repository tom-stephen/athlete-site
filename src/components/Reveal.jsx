import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them up once they scroll into view.
 * Respects prefers-reduced-motion via the CSS in index.css.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : delay === 3 ? "reveal-delay-3" : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
