import { experience } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="02"
          label="Experience"
          heading={experience.heading}
        />
      </Reveal>

      <div className="space-y-12">
        {experience.roles.map((role, i) => (
          <Reveal
            key={role.title + role.company}
            delay={Math.min(i * 0.05, 0.2)}
            className="grid gap-2 border-t border-border pt-8 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="font-mono text-sm text-muted">
              {role.dates}
              <div className="mt-1 text-xs">{role.type}</div>
            </div>
            <div>
              <h3 className="mt-1 text-xl font-medium md:text-2xl">
                {role.title}
              </h3>
              <div className="mt-1 text-sm text-accent">{role.company}</div>
              <ul className="mt-4 space-y-2 text-[0.98rem] leading-relaxed text-muted">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
