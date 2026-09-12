// Central registry of the site's pages, in order. Used by the header nav
// and the prev/next links at the bottom of each page.

export const pages = [
  { href: "/about", number: "1", label: "About" },
  { href: "/experience", number: "2", label: "Experience" },
  { href: "/projects", number: "3", label: "Projects" },
  { href: "/skills", number: "4", label: "Skills" },
  { href: "/education", number: "5", label: "Education" },
  { href: "/looking-for", number: "6", label: "Looking for" },
  { href: "/contact", number: "7", label: "Contact" },
] as const;

export function getPageNeighbors(href: string) {
  const index = pages.findIndex((p) => p.href === href);
  return {
    prev: index > 0 ? pages[index - 1] : null,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : null,
  };
}
