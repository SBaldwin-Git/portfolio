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
        ivory: "#fffee9ff",
        "raisin-black": "#2b2839ff",
        "light-coral": "#e67470ff",
        "davys-gray": "#544e57ff",
        "baby-powder": "#F8FCFB",
        "mint-cream": "#F5FFFA",
        "lavender-blush": "#FFF5FA",
        "red-crayola": "#EE4266",
        "french-grey": "#B3B7C6",
        onyx: "#3E3F4B",
        "alice-blue": "#F0F8FF",
        "sea-salt": "##FAFBFC",
      },
    },
  },
  plugins: [],
};
export default config;
