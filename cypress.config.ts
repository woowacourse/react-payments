const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    viewportWidth: 400,
    viewportHeight: 667,
  },
});
