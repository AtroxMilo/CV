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
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading number="04" label="Skills" heading={skills.heading} />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="grid gap-8 sm:grid-cols-2">
          <SkillGroup title="Core strengths" items={skills.core} />
          <SkillGroup title="Programming" items={skills.languages} />
          <SkillGroup title="Tools" items={skills.tools} />
          <SkillGroup title="Certifications" items={skills.certifications} />
          <SkillGroup
            title="Spoken languages"
            items={profile.spokenLanguages.map(
              (l) => `${l.name} (${l.level})`,
            )}
          />
        </div>
      </Reveal>
    </section>
  );
}
