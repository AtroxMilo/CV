// Central registry of the site's pages, in order. Used by the header nav
// and the prev/next links at the bottom of each page.

export const pages = [
  { href: "/about", number: "01", label: "About" },
  { href: "/experience", number: "02", label: "Experience" },
  { href: "/projects", number: "03", label: "Projects" },
  { href: "/skills", number: "04", label: "Skills" },
  { href: "/education", number: "05", label: "Education" },
  { href: "/looking-for", number: "06", label: "Looking for" },
  { href: "/contact", number: "07", label: "Contact" },
] as const;

export function getPageNeighbors(href: string) {
  const index = pages.findIndex((p) => p.href === href);
  return {
    prev: index > 0 ? pages[index - 1] : null,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : null,
  };
}
