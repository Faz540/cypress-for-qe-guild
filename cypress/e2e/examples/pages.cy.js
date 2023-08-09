/// <reference types="Cypress" />

const pdp = require("../../pages/pdp.page");

describe("Tests using the Page Object Model (POM)", () => {
	before(() => {
		cy.visit("/g4m/1HV2");
	});
	it("displays the 'Add To Basket' button", () => {
		pdp.buttonAddToBasket.should("be.visible");
	});
	it("should display a price greater than 0.00 using SHOULD", () => {
		pdp.getPrice().should("be.greaterThan", 0);
	});
	it("should display a price greater than 0.00 using EXPECT", () => {
		pdp.getPrice().then((price) => {
			expect(price).to.be.greaterThan(0);
		});
	});
});