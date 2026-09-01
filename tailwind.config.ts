import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dracula: {
          bg: "#282a36",
          surface: "#383a59",
          dark: "#191a24",
          cyan: "#8be9fd",
          purple: "#bd93f9",
          fg: "#f8f8f2",
          muted: "#a0a0a0",
          border: "#44475a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
