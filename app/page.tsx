import Link from "next/link";
import { Hero } from "@/components/Hero";
import { pages } from "@/lib/nav";

const start = pages[0];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative mx-auto flex max-w-6xl justify-center border-t border-border px-5 py-16 md:py-20">
        <Link
          href={start.href}
          className="group flex items-center gap-4 rounded-[10px] border border-border bg-bg-2 px-8 py-5 transition-colors hover:bg-bg"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {start.number}
            </div>
            <div className="mt-2 text-lg font-medium">{start.label}</div>
          </div>
          <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg">
            →
          </span>
        </Link>
      </section>
    </>
  );
}
