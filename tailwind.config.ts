import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "paint-desc": "rgb(102, 102, 102)",
        "paint-title": "rgb(51, 51, 51)",
      },
    },
    screens: {
      tablet: { max: "705px" },
      mobile: { max: "475px" },
      mobileMin: { min: "475px" },
      md: { max: "840px" },
      lg: { max: "974px", min: "840px" },
      middle: { max: "675px" },
      // tabletMin: { min: "705px" },
    },
  },
  plugins: [],
};
export default config;
