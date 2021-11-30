/// <reference types="cypress" />

import homePagePOM from '../../support/Pages/homePagePOM.js';

const homePage = new homePagePOM();

describe ('Verify the Homepage has the correct functionality', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToSite();
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Logos', () => { // checks that all logos are displaying an image (could add a test for the hyperlinks on certain logos)
		homePage.getLogoRows().each(($el) => {
			cy.wrap($el).find('div.su-column.su-column').each(($el) => {
				cy.wrap($el).find('img');
			});
		});
	});

});