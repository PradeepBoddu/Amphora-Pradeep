const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;  // Add .default here

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,  // Enables video recording for test runs
    screenshotOnRunFailure: true,  // Automatically take a screenshot on test failure
    env: {
      TAGS: 'not @ignore',
    },
    baseUrl: "https://amphora.net/",


    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );


      return config;
    },
  },
});
