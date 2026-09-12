"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";
import { pages } from "@/lib/nav";

/**
 * Which way the content should slide to reach `href` from the current page.
 * Home sits before every numbered page, so leaving it is always "forward".
 */
function useDirection() {
  const pathname = usePathname();
  const currentIndex =
    pathname === "/" ? -1 : pages.findIndex((p) => p.href === pathname);

  return (href: string) => {
    const targetIndex = href === "/" ? -1 : pages.findIndex((p) => p.href === href);
    return targetIndex > currentIndex ? "nav-forward" : "nav-back";
  };
}

export function Header() {
  const pathname = usePathname();
  const directionTo = useDirection();

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          href="/"
          transitionTypes={[directionTo("/")]}
          className="font-semibold tracking-tight"
        >
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                transitionTypes={[directionTo(page.href)]}
                className={
                  isActive
                    ? "text-fg"
                    : "text-muted transition-colors hover:text-fg"
                }
              >
                {page.label}
              </Link>
            );
          })}
          {profile.links.cvPdf ? (
            <a
              href={profile.links.cvPdf}
              className="text-muted transition-colors hover:text-fg"
            >
              CV
            </a>
          ) : null}
        </nav>
        <Link
          href="/contact"
          transitionTypes={[directionTo("/contact")]}
          className="btn btn-primary hidden text-sm sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
