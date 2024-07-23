import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "bumblebee"],
    },
    extend: {
      colors: {
        n900: "#151713",
        n800: "#181B16",
        n700: "#1C1E1A",
        n600: "#20221E",
        n500: "#242721",
        n400: "2E312A",
        n300: "#777A74",
        n200: "#A8ADA4",
        n100: "#CFD8C7",
        n50: "#F1FFEF",
        orange900: "#FFAA5A",
        orange500: "#FEC793",
        orange300: "#FFDDBD",
        red900: "#FF6262",
        red500: "#FF8D8D",
        red300: "#FFACAC",
        purple900: "#543763",
        purple500: "#806190",
        purple300: "#A788B7",
        green900: "#BAF853",
        green600: "#BAF853",
        green500: "#CEFB86",
        green400: "#D6FB9B",
        green300: "#E1FDB6",
        green200: "#ECFDCF",
        green100: "#F4FEE4",
        blue900: "#3E80E3",
        blue500: "#90C0F9",
        blue300: "#C8E1FF",
      },
      dropShadow: {
        'text': '1px 1px 2px rgba(0, 0, 0, 0.75)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        square: "0px 0px 10px 0px #928C93",
        squareXl: "0px 0px 20px 0px #928C93"
      },
      backgroundImage: {
        greenWhite: "linear-gradient(159deg, rgba(186,248,83,1) 0%, rgba(244,254,228,1) 100%)",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
