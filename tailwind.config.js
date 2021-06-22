const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      teal: colors.teal,
      emerald: colors.emerald,
      grayBrand:{
        DEFAULT: '#A1B1B6'
      },
      greenBrand: {
        light: "#97BAB2",
        DEFAULT: "#43636D",
      },
      yellowBrand: {
        light: '#FCE2B3',
        DEFAULT: "#F9C667",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
