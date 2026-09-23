import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "810px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#050505",
        surface: "#171717",
        line: "#343434",
        "line-soft": "#5A5A5A",
        accent: "#F3F1EC",
        "accent-dark": "#8A8A8A",
        "accent-tint": "#171717",
        "accent-ring": "#F3F1EC40",
        scrim: "#050505CC",
        paper: "#F3F1EC",
        muted: "#8A8A8A",
        "muted-light": "#C7C5C0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2.5rem, 7vw, 4.5rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "0.92" }],
        "display-lg": ["clamp(4rem, 13vw, 12rem)", { lineHeight: "0.88" }],
        "display-xl": ["clamp(5rem, 18vw, 20rem)", { lineHeight: "0.85" }],
      },
      letterSpacing: {
        display: "0.02em",
        wide: "0.08em",
        wider: "0.14em",
        widest: "0.24em",
      },
      maxWidth: {
        shell: "1400px",
      },
      transitionTimingFunction: {
        framer: "cubic-bezier(0.44, 0, 0.14, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
