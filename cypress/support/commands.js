// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

function unquote(str) {
  return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
  'before',
  {
    prevSubject: 'element',
  },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const pseudo = win.getComputedStyle(el[0], 'before');
    return unquote(pseudo.getPropertyValue(property));
  }
);

Cypress.Commands.add(
  'after',
  {
    prevSubject: 'element',
  },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const pseudo = win.getComputedStyle(el[0], 'after');
    return unquote(pseudo.getPropertyValue(property));
  }
);
