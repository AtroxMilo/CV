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
  const rows = [
    { label: "Roles", items: lookingFor.roles },
    { label: "Industries", items: lookingFor.industries },
    { label: "Locations", items: lookingFor.locations },
    { label: "Arrangement", items: lookingFor.arrangements },
    { label: "Type", items: lookingFor.types },
    { label: "Availability", items: [lookingFor.availability] },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="6"
          label="Looking for"
          heading={lookingFor.heading}
        />
      </Reveal>

      <div>
        {rows.map((row, i) => (
          <Reveal key={row.label} delay={Math.min(0.05 + i * 0.05, 0.3)}>
            <Row label={row.label} items={row.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
