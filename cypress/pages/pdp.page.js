/// <reference types="Cypress" />

class PDP {
	// Elements:
	get buttonAddToBasket() { return cy.get("a.add-to-basket-button"); }
	get checkboxExtWarranty() { return cy.get("[data-g4m-ga='pdp-extended-warranty']"); }
	get textPrice() { return cy.get(".info-row-price .c-val"); }

	// Actions:
	addToBasket() {
		this.buttonAddToBasket.click();
	}

	addExtendedWarranty() {
		this.checkboxExtWarranty.click();
	}

	getPrice() {
		return this.textPrice.invoke("text").then((price) => {
			return parseFloat(price.replace(/[^0-9.-]/g, ''));
		});
	}
}

module.exports = new PDP();