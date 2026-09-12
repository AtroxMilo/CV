import Image from "next/image";
import { education } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="5"
          label="Education"
          heading={education.heading}
        />
      </Reveal>

      <div className="space-y-10">
        {education.items.map((item, i) => (
          <Reveal
            key={item.school}
            delay={Math.min(i * 0.05, 0.2)}
            className="grid gap-2 border-t border-border pt-8 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="font-mono text-sm text-muted">{item.dates}</div>
            <div className="flex gap-4">
              {item.logo ? (
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border bg-bg-2">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <div>
                <h3 className="text-lg font-medium">{item.school}</h3>
                <div className="mt-1 text-sm text-accent">{item.degree}</div>
                <div className="mt-1 text-sm text-muted">{item.location}</div>
                {item.notes ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.notes}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
