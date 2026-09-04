"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";
import { pages } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
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
          className="btn btn-primary hidden text-sm sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
