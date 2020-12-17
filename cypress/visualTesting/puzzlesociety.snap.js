/// <reference types="Cypress" />

describe("Puzzle Society", () => {
  before(() => {
    cy.visit("https://www.puzzlesociety.com/");
  });

  describe("Visual State", () => {
    it("Home page should look the same", () => {
      cy.percySnapshot("puzzle-society");
    });
  });
});
