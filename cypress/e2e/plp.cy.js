
/// <reference types="Cypress" />

describe("PLP Tests", () => {
	beforeEach(() => {
		cy.visit("/Manufacturer/Fender.html");
	});
	it("displays at least one product card", () => {
		// Cypress is different, and this would not work. Even though it makes perfect sense to us.
		// const productCards = cy.get("[data-test='desktop/plp/product-card']")
		// We can use something called 'aliases' in Cypress
		cy.get("[data-test='desktop/plp/product-card']").as("productCards");

		cy.get("@productCards").its("length").should("be.gte", 1);
		cy.get("@productCards").should("be.visible");
	});
	it("clicks a product card and navigates the user to the PDP", () => {
		cy.get("[data-test='desktop/plp/product-card']").first().click();
		cy.get("a.add-to-basket-button").should("be.visible");
	});
})