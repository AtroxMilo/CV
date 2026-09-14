"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Fades and lifts its children into place.
 *
 * By default it waits until the element scrolls into view. With
 * `trigger="mount"` it plays as soon as the page opens instead, so a list can
 * cascade in one item at a time using `delay` — whether or not every item is
 * on screen yet.
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
  trigger = "view",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds, matching the previous framer-motion API. */
  delay?: number;
  /** Which direction the content travels in from. */
  from?: "bottom" | "right";
  /** Play when scrolled into view, or immediately when the page opens. */
  trigger?: "view" | "mount";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Mount-triggered reveals are visible from the first render; nothing to observe.
    if (trigger === "mount") return;

    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or reduced motion) — just show the content.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
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
  }, [trigger]);

  // Rendering the mount case as visible straight away (rather than flipping
  // state in an effect) means the cascade starts with the first paint of the
  // server HTML, without waiting for hydration.
  const visible = trigger === "mount" || inView;

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
