import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl:'http://localhost:3000',//with this , it's not necesary to put the full url
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

});
