import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "##34CAA5",
        secondary: "#0D062D",
        tertiary: "#212121",
        ash: "#B2ABAB",
        red: "#ED544E",
        dark: "#26282C",
        purple: "#6160DC",
        blue: "#54C5EB",
        orange: "#FFB74A",
        neutral: "#525252",
        "light-ash": "#606060",
        "dark-ash2": "#78828A",
        "dark-ash3": "#898989",
        "medium-ash": "#3A3F51",
        "chart-green": "#34CAA51A",
        "light-green": "#34CAA51F",
        "light-red": "#ED544E1F",
      },
      screens: {
        xs: "480px",
        "2xs": "576px",
      },
    },
  },
  plugins: [],
};
export default config;
