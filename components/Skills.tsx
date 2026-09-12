import { profile, skills } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const groups = [
    { title: "Core strengths", items: skills.core },
    { title: "Programming", items: skills.languages },
    { title: "Tools", items: skills.tools },
    { title: "Certifications", items: skills.certifications },
    {
      title: "Spoken languages",
      items: profile.spokenLanguages.map((l) => `${l.name} (${l.level})`),
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading number="4" label="Skills" heading={skills.heading} />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={Math.min(0.05 + i * 0.06, 0.3)}>
            <SkillGroup title={group.title} items={group.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
