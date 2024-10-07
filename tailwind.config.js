/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Sans"', "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "3px 3px 0px 0px #000",
        active: "1px 1px 0px 0px #000",
      },
    },
    fontFamily: {
      nunito: ['"Nunito"', "sans-serif"],
    },
   
  },
  darkMode: "class",
  plugins: [nextui()],
};
