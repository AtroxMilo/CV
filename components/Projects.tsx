import Image from "next/image";
import { projects } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="3"
          label="Projects"
          heading={projects.heading}
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.items.map((project, i) => {
          const cardClass =
            "block h-full rounded-[10px] border border-border bg-bg-2 p-6 transition-colors hover:border-accent/50";
          const content = (
            <>
              <div className="flex items-center gap-3">
                {project.logo ? (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-bg p-1.5">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={44}
                      height={44}
                      // These are small local icons, several of them SVG. The
                      // image optimizer rejects SVG without dangerouslyAllowSVG
                      // and would save nothing on files this size anyway.
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : null}
                <div>
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <div className="mt-0.5 text-sm text-accent">{project.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          return (
            <Reveal key={project.name} delay={Math.min(i * 0.05, 0.2)}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
