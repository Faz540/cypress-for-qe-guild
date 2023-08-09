
/// <reference types="Cypress" />

describe("PDP Tests", () => {
	before(() => {
		cy.visit("/g4m/2H5E");
	});
	it("displays correct currency symbol", () => {
		// Utilising Alias here since we can't use regular variables
		cy.get(".info-row-price .c-sym").should("be.visible");
		cy.get(".info-row-price .c-sym").invoke("text").should("have.text", "BLAH");
	});
	it("displays the correct VAT amount", () => {
		// Utilising Alias here since we can't use regular variables
		cy.get(".info-row-vat").as("vatRate");
		cy.get("@vatRate").should("be.visible").invoke("text").should("contain", "20%");
	});
})