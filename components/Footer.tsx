import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {footer.name}
      </div>
    </footer>
  );
}
