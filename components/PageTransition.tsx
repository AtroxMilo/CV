import { ViewTransition } from "react";
import type { ReactNode } from "react";

/**
 * Page-level view transition. Links tagged `nav-forward` slide content left on
 * the way out and in from the right; `nav-back` reverses it. Untyped
 * navigations (browser back/forward, refresh) get `none` so nothing lurches.
 *
 * This has to wrap the content inside each `page.tsx` — layouts persist across
 * navigation, so enter/exit would never fire from there.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
