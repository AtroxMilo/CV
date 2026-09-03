import { lookingFor } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid gap-1 border-t border-border py-4 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div className="text-sm text-muted">{label}</div>
      <div className="text-[0.98rem]">{items.join(" · ")}</div>
    </div>
  );
}

export function LookingFor() {
  return (
    <section
      id="looking-for"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32"
    >
      <Reveal>
        <SectionHeading
          number="06"
          label="Looking for"
          heading={lookingFor.heading}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div>
          <Row label="Roles" items={lookingFor.roles} />
          <Row label="Industries" items={lookingFor.industries} />
          <Row label="Locations" items={lookingFor.locations} />
          <Row label="Arrangement" items={lookingFor.arrangements} />
          <Row label="Type" items={lookingFor.types} />
          <Row label="Availability" items={[lookingFor.availability]} />
        </div>
      </Reveal>
    </section>
  );
}
