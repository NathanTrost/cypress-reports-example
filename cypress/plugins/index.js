/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */

/**
 * @param on - Used to hook into various events Cypress emits
 * @param config - The resolved Cypress config
 */

module.exports = (on, config) => {
  // require('@cypress/code-coverage/task')(on, config);
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
