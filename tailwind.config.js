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
        custom: {
          "gray-100": "#ECEBF1",
          "gray-200": "#d2d2d2",
          "gray-300": "#525252",
          darkgray: "#383838",
          red: "#E24141",
          blue: "#547CE4",
          green: "#73BC6D",
          purple: "#DE59B9",
          pink: "#E76E9A",
          orange: "#F37D3B",
          yellow: "#FBCD58",
          mint: "#04C09E",
          gold: "#CBBA64",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
