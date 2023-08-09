/// <reference types="Cypress" />

// Cypress Chai Docs: https://docs.cypress.io/guides/references/assertions

// Cypress Best Practices: https://docs.cypress.io/guides/references/best-practices
describe("Example Stuff", () => {
	before(() => {
		// Remember, our 'baseUrl' is set in our 'cypress.config.js file ^_^
		cy.visit("/fender");
	});
	it("uses 'SHOULD' assertions", () => {
		// cy.url() returns the current page URL.
		cy.url().should("include", "Fender")
			.should("not.include", "av.com")
			.should("eq", "https://www.gear4music.com/Manufacturer/Fender.html");

		cy.get("[data-test='desktop/plp/category-box']").should("exist")
			.should("be.visible");
	});
	it("uses 'AND' assertions", () => {
		// cy.url() returns the current page URL.
		cy.url().should("include", "Fender")
			.and("not.include", "av.com")
			.and("eq", "https://www.gear4music.com/Manufacturer/Fender.html");

		cy.get("[data-test='desktop/plp/category-box']").should("exist")
			.and("be.visible");
	});
	it("uses 'EXPECT' assertions", () => {
		// cy.url() returns the current page URL.
		cy.url().then((currentUrl) => {
			expect(currentUrl).to.include("Fender");
			expect(currentUrl).to.not.include("av.com");
			expect(currentUrl).to.eql("https://www.gear4music.com/Manufacturer/Fender.html");
		});

		cy.get("[data-test='desktop/plp/category-box']").then((element) => {
			expect(element).to.exist;
			expect(element).to.be.visible;
		});
	});
	it("uses 'ASSERT' assertions", () => {
		// cy.url() returns the current page URL.
		assert.include(cy.url(), "Fender");
		assert.notInclude(cy.url(), "av.com");
		assert.equal(cy.url(), "https://www.gear4music.com/Manufacturer/Fender.html")
	});
});

// .should("eq", "blah")
// .should("include", "blah") -- string contains value
// .should("exist") - element exists in the HTML, doesn't check if it's visible
// .should("be.visible")
// .should("have.length")
// .should("have.value") - checks the text inside a text box