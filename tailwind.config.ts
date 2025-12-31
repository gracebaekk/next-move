import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8ecf5",
          100: "#d1d9eb",
          200: "#a3b3d7",
          300: "#87B5DE",
          400: "#2F64C1",
          500: "#193B73",
          600: "#193B73",
          700: "#142f5c",
          800: "#0f2345",
          900: "#0a172e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-lexend)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

