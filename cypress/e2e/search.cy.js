/// <reference types="Cypress" />

describe("Search Tests", () => {
	before(() => {
		// Performs a Search
		cy.get("#srch-str")
			.clear()
			.type("PURPLE");
		cy.get("#header-search-button").click();
	});
	it("displays at least one search result", () => {
		cy.get(".list-row-container").should("be.visible");
	});
	it("displays at least one 'Add To Basket' button", () => {
		cy.get(".add-to-basket-button").should("be.visible");
	});
	it("displays the Filter Menu", () => {
		cy.get(".filter-box").should("be.visible");
	});
})