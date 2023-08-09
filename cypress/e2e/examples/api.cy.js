/// <reference types="Cypress" />

// https://pokeapi.co/
const apiUrl = "https://pokeapi.co/api/v2";

describe("GET /pokemon/", () => {
	it("should return the expected details for 'Nidoking'", () => {
		cy.request("GET", `${apiUrl}/pokemon/nidoking`).then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body).to.have.property("name", "nidoking");
			expect(response.body).to.have.property("id", 34);
			expect(response.body).to.have.property("weight", 620);
			expect(response.body.types).to.have.a.lengthOf(2);
			expect(response.body.types[0].type).to.have.property("name", "poison");
			expect(response.body.types[1].type).to.have.property("name", "ground");
		});
	});
});
