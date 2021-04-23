const defaultColors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        25: "6.25rem",
      },
      height: {
        6.5: "1.625rem",
      },
      colors: {
        ...defaultColors,
        card: {
          gray: "#d2d2d2",
          red: "#E24141",
          blue: "#547CE4",
          green: "#73BC6D",
          purple: "#DE59B9",
          mint: "#04c09e",
          pink: "#E76E9A",
          orange: "#F37D3B",
          yellow: "#FBCD58",
        },
        font: {
          darkgray: "#383838",
          gray: "#525252",
          mint: "#04C09E",
        },
        "chip-gold": "#CBBA64", //TODO: 이름 바꿔주기
        input: {
          gray: "#ECEBF1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
