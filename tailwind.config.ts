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
        "color-1": "#0047C3",
        "color-2": "#ABB2BF",
        "color-3": "#FFF",
      },
      backgroundColor: {
        "backgroundColor": "#1E1E1E"
      },
      backgroundImage: { 
      },
    },
  },
  plugins: [],
};
export default config;
