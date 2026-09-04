import Link from "next/link";
import { pages } from "@/lib/nav";

export function NavGrid() {
  return (
    <section className="relative mx-auto max-w-6xl border-t border-border px-5 py-16 md:py-20">
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex items-center justify-between gap-4 bg-bg-2 px-6 py-6 transition-colors hover:bg-bg"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {page.number}
              </div>
              <div className="mt-2 text-lg font-medium">{page.label}</div>
            </div>
            <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
