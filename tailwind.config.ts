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
        "pumpkin": "#ff6d1bff",
        "white-smoke": "#f2f4f3ff",
        "raisin-black": "#272727ff",
        "glaucous": "#6e75a8ff",
        "cool-gray": "#8d91c7ff",
      },
    },
  },
  plugins: [],
};
export default config;
