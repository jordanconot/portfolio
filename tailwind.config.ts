import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "fit-content": "fit-content"
      },
      width: {
        'min-content': "min-content"
      },
      colors: {
        "color-1": "#0047C3",
        "color-2": "#ABB2BF",
        "color-3": "#FFF",
        "color-4": "#1E1E1E"
      },
      backgroundColor: {
        "backgroundColor": "#1E1E1E",
        "backgroundColor-menu": "#282C33",
        "backgroundColor-nav": "#0047C3",
        "backgroundColor-white": "#FFF",
      },
      dropShadow: {
        'white': '0 35px 35px rgba(255, 255, 255, 255)'
      },
    },
  },
  plugins: [],
};
export default config;
