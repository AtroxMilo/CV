import Image from "next/image";
import { contact, profile } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <SectionHeading
          number="7"
          label="Contact"
          heading={contact.heading}
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
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

        {profile.photo ? (
          <Reveal from="right" delay={0.15} className="justify-self-center md:justify-self-end">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border bg-bg-2 md:h-48 md:w-48">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(min-width: 768px) 192px, 160px"
                className="object-cover"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
