const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;  // Add .default here

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
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
