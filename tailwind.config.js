module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        25: "6.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
