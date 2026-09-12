"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Fades and lifts its children into place once they scroll into view.
 *
 * The motion itself is a CSS animation (see `.rise-on-scroll` in globals.css)
 * rather than a JS-driven one: during a page view transition the browser is
 * already compositing snapshots, and a second JS animation loop on top of that
 * is what makes navigation feel stuttery. CSS keeps it on the GPU.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds, matching the previous framer-motion API. */
  delay?: number;
  /** Which direction the content travels in from. */
  from?: "bottom" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or reduced motion) — just show the content.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      // Fire a little before the element is fully on screen so the reveal is
      // already settling by the time the reader reaches it.
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        from === "right" ? "rise-on-scroll rise-from-right" : "rise-on-scroll",
        visible ? "is-visible" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--rise-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
