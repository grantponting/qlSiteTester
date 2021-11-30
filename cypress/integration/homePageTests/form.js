/// <reference types="cypress" />

import homePagePOM from '../../support/Pages/homePagePOM.js';

const homePage = new homePagePOM();

describe ('Verify the Form functions properly', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToSite();
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Submit Form', () => { 
		homePage.getFirstNameField().should('not.have.class', 'error');
		homePage.getLastNameField().should('not.have.class', 'error'); 
		homePage.getEmailField().should('not.have.class', 'error');
		homePage.getCompanyField().should('not.have.class', 'error');
		homePage.getHelpField().should('not.have.class', 'error'); 
		
		homePage.getFirstNameField().click(); 
		homePage.getLastNameField().click(); 
		homePage.getEmailField().click();
		homePage.getCompanyField().click();
		homePage.getHelpField().click(); 
		homePage.getFirstNameField().click();   // clicks first name field again so that the help field displays the error

		homePage.getFirstNameField().should('have.class', 'error');
		homePage.getLastNameField().should('have.class', 'error'); 
		homePage.getEmailField().should('have.class', 'error');
		homePage.getCompanyField().should('have.class', 'error');
		homePage.getHelpField().should('have.class', 'error'); 

		homePage.getFirstNameField().type('Test');
		homePage.getLastNameField().type('Tester');
		homePage.getEmailField().type('test@tester.com');
		homePage.getCompanyField().type('QualityLogic');
		homePage.getHelpField().type('No no, its how can I help you?'); 

		homePage.getFirstNameField().should('not.have.class', 'error');
		homePage.getLastNameField().should('not.have.class', 'error'); 
		homePage.getEmailField().should('not.have.class', 'error');
		homePage.getCompanyField().should('not.have.class', 'error');
		homePage.getHelpField().should('not.have.class', 'error');

		// does not submit the entries to not flood the site with entries
	});
});