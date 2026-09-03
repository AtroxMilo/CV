import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-2": "var(--color-bg-2)",
        border: "var(--color-border)",
        fg: "var(--color-fg)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Inter",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          '"JetBrains Mono"',
          '"Fira Code"',
          "monospace",
        ],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
