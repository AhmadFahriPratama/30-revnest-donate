import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#fbbf24",
        accent: "#fffbeb",
        background: "#ffffff",
        foreground: "#78350f",
      },
    },
  },
  plugins: [],
};

export default config;
