

Cypress.Commands.add('navigateToSite', () => {
	cy.visit('https://www.qualitylogic.com/');
});

Cypress.Commands.add('navigateToContactPage', () => {
	cy.visit('https://www.qualitylogic.com/contact/');
});