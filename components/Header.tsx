import { profile } from "@/data/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#looking-for", label: "Looking for" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          {profile.links.cvPdf ? (
            <a
              href={profile.links.cvPdf}
              className="transition-colors hover:text-fg"
            >
              CV
            </a>
          ) : null}
        </nav>
        <a href="#contact" className="btn btn-primary hidden text-sm sm:inline-flex">
          Get in touch
        </a>
      </div>
    </header>
  );
}
