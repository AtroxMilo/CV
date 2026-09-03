export function SectionHeading({
  number,
  label,
  heading,
}: {
  number: string;
  label: string;
  heading: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {number} — {label}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
