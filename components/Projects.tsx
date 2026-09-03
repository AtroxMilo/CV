import { projects } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32"
    >
      <Reveal>
        <SectionHeading
          number="03"
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
              <h3 className="text-lg font-medium">{project.name}</h3>
              <div className="mt-1 text-sm text-accent">{project.role}</div>
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
