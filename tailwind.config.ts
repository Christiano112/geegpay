import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34CAA5",
        secondary: "#0D062D",
        tertiary: "##3A3F51",
        gray: "#F5F5F5",
        gray2: "#F7F8FA",
        grey: "#FAFAFA",
        grey2: "#EBECF2",
        grey3: "#EDF2F6",
        grey4: "#EDF2F7",
        grey5: "#E1DFDF",
        ash: "#B2ABAB",
        red: "#ED544E",
        dark: "#26282C",
        dark2: "#22242C",
        dark3: "#090C2C",
        purple: "#6160DC",
        blue: "#54C5EB",
        orange: "#FFB74A",
        neutral: "#525252",
        "light-ash": "#606060",
        "light-ash2": "#E6E6E6",
        "light-ash3": "#DADDDD",
        "light-ash4": "#A3A3A3",
        "dark-ash": "#737373",
        "dark-ash2": "#78828A",
        "dark-ash3": "#898989",
        "dark-ash4": "#9CA4AB",
        "dark-ash5": "#787486",
        "medium-ash": "#3A3F51",
        "chart-green": "#34CAA51A",
        "light-green": "#34CAA51F",
        "light-red": "#ED544E1F",
      },
      screens: {
        xs: "340px",
        "2xs": "480px",
      },
    },
  },
  plugins: [],
};
export default config;
