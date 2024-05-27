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
    },
    extend: {
      colors: {
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
      screens: {
        mdx: "850px",
      },
    },
  },
  plugins: [],
};
