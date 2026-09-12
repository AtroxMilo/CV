import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading number="1" label="About" heading={about.heading} />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        <Reveal className="space-y-5 text-[1.02rem] leading-relaxed text-muted md:col-span-2">
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
              Leadership
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              {about.leadership.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
              Outside of work
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span key={interest} className="tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
