/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      marck: "'Marck Script','cursive'",
      roboto: "'Roboto','sans-serif'",
      inter: "'Inter','sans-serif'",
      lato: "'Lato', 'sans-serif'",
    },
    extend: {
      colors: {
        geminiBg: "#F0F4F9",
        orangeDeep: "#ff7e5f",
        orangeLight: "#feb47b",
        transTitle: "#F3f4F8",
        deepNavi: "#073d55",
        svgBG: "#cfe4fc",
        flatBg: "#F9F9F9",
        primary: "#21DF78",
        secondary: "#0E88DB",
        deepNaviBlue: "#000000",
        highlighter: "#5B6CFF",
        stroke: "#C5CCD4",
        teal: "#00758F",
        orange: "#F28A2D",
        red: "#FF4545",
        gridLine: "#0E88DB",
        background: "#FEFEFE",
        white: "#FFFFFF",
        black: "#000000",
        gradientBlue: "#4E82EF",
        gradientRose: "#D96570",

        darkMode: {
          textGray: "#c9d1db",
          background: "#1F2937",
          primary_bg: "#0D121C",
          green: "#21DF78",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        mdx: "850px",
        470: "470px",
        570: "570px",
      },
    },
  },
  plugins: [require("@nauverse/tailwind-dot-grid-backgrounds")],
};
