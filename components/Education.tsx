import { education } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32"
    >
      <Reveal>
        <SectionHeading
          number="05"
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
