const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    baseUrl: "http://localhost",
    viewportWidth: 1366,
    viewportHeight: 768
  },

});
