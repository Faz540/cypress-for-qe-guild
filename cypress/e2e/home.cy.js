/// <reference types="Cypress" />

describe("Home Page Tests", () => {
  it("displays a trading brand logo", () => {
    cy.get("header .home-link svg").should("be.visible");
  });
  it("displays the merchandising banner", () => {
    cy.get(".merchandising-banner").should("be.visible");
  });
})