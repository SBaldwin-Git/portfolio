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
        "prussian-blue": "#132637ff",
        "ivory": "#fffee9ff",
        "raisin-black": "#2b2839ff",
        "light-coral": "#e67470ff",
        "davys-gray": "#544e57ff",
      },
    },
  },
  plugins: [],
};
export default config;