import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-2 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availabilityBadge} · {profile.location}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {profile.name}. {profile.title}.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.heroTagline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            {profile.links.cvPdf ? (
              <a href={profile.links.cvPdf} className="btn">
                Download CV
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className="btn">
              Email me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Citizenship</dt>
              <dd className="mt-1">{profile.citizenship}</dd>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <dt className="text-muted">Languages</dt>
              <dd className="mt-1">
                {profile.spokenLanguages
                  .map((l) => `${l.name} (${l.level})`)
                  .join(" · ")}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
