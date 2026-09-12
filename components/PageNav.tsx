import Link from "next/link";
import { getPageNeighbors } from "@/lib/nav";

export function PageNav({ current }: { current: string }) {
  const { prev, next } = getPageNeighbors(current);

  if (!prev && !next) return null;

  return (
    <div className="mx-auto max-w-6xl border-t border-border px-5 py-10">
      <div className="flex items-center justify-between gap-6">
        {prev ? (
          <Link
            href={prev.href}
            transitionTypes={["nav-back"]}
            className="group flex flex-col text-sm text-muted transition-colors hover:text-fg"
          >
            <span className="font-mono text-xs">← {prev.number}</span>
            <span className="mt-1 text-base font-medium text-fg">
              {prev.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            transitionTypes={["nav-forward"]}
            className="group flex flex-col items-end text-right text-sm text-muted transition-colors hover:text-fg"
          >
            <span className="font-mono text-xs">{next.number} →</span>
            <span className="mt-1 text-base font-medium text-fg">
              {next.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
