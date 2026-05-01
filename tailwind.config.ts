import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        sentinel: {
          black:  "#030407",
          ink:    "#060812",
          navy:   "#080B18",
        },
        purple: {
          950: "#160622",
          900: "#210A3A",
          800: "#34106B",
          700: "#4E16D8",
          600: "#6D2DFF",
          500: "#8A3FFC",
          400: "#A970FF",
          300: "#C6A0FF",
        },
        green: {
          500: "#20F281",
          400: "#38FF9C",
          300: "#75FFBD",
        },
      },
      borderRadius: {
        card: "22px",
        btn:  "16px",
        pill: "9999px",
      },
      boxShadow: {
        card:        "0 24px 80px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.08)",
        "card-hover":"0 28px 90px rgba(0,0,0,0.52), 0 0 36px rgba(109,45,255,0.16), inset 0 1px 0 rgba(255,255,255,0.10)",
        btn:         "0 18px 44px rgba(79,70,229,0.34), inset 0 1px 0 rgba(255,255,255,0.24)",
        "purple-glow":"0 0 42px rgba(109,45,255,0.28)",
        "green-glow": "0 0 28px rgba(32,242,129,0.22)",
      },
      backgroundImage: {
        "gradient-purple":      "linear-gradient(135deg, #A970FF 0%, #6D2DFF 42%, #2F7BFF 100%)",
        "gradient-purple-text": "linear-gradient(135deg, #C6A0FF 0%, #8A3FFC 42%, #5B21FF 100%)",
        "gradient-cta":         "linear-gradient(135deg, #7C3BFF 0%, #2563FF 100%)",
        "gradient-page":        "radial-gradient(circle at 72% 18%, rgba(109,45,255,0.28), transparent 34%), radial-gradient(circle at 35% 42%, rgba(59,130,246,0.10), transparent 34%), radial-gradient(circle at 52% 78%, rgba(138,63,252,0.20), transparent 38%), linear-gradient(180deg, #030407 0%, #060812 48%, #030407 100%)",
      },
      letterSpacing: {
        logo:    "0.34em",
        kicker:  "0.12em",
        tightest:"-0.06em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
