import { contact, profile } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="07"
          label="Contact"
          heading={contact.heading}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="max-w-xl text-[1.02rem] leading-relaxed text-muted">
          {contact.blurb}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {profile.email}
          </a>
          {profile.links.linkedin ? (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
          ) : null}
          {profile.links.github ? (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
          ) : null}
          {profile.links.cvPdf ? (
            <a href={profile.links.cvPdf} className="btn">
              Download CV
            </a>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
