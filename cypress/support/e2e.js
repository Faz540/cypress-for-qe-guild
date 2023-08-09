/// <reference types="Cypress" />

// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands');

before(() => {
	// Navigate to the Home Page before all tests
	cy.visit("/");

	// Inject the cookie to replicate clicking "Accept" in the cookie banner
	cy.setCookie("g4m_cookie_consent", "CONSENT_ESSENTIAL|CONSENT_OPTIONAL", { "path": "/", "secure": true, "httpOnly": false, "sameSite": "Lax" });
	cy.reload()
});

// If a JS error occurs on your website, Cypress will fail the test.
// As we know, the Gear4music website is full of JS errors. Hence why we have the below
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from failing the test
	return false
});