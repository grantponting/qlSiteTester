/// <reference types="cypress" />

import contactPOM from '../support/Pages/contactPOM.js';

describe ('Verify the Contact page has the correct functionality', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToContactPage(); 
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Request a Quote CTA', () => {
		const contactPage = new contactPOM();
        contactPage.getRequestQuoteCTA().should('have.text', 'Request a Quote');
		contactPage.getRequestQuoteCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/request-a-quote/'); 
	});
    
    it('General Inquiries CTA', () => {
		const contactPage = new contactPOM();
        contactPage.getGeneralInquiriesCTA().should('have.text', 'General Inquiries');
		contactPage.getGeneralInquiriesCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/general-inquiries/'); 
	});

    it('Support CTA', () => {
		const contactPage = new contactPOM();
        contactPage.getSupportCTA().should('have.text', 'Support'); 
		contactPage.getSupportCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/support/'); 
	});

    it('Careers CTA', () => {
		const contactPage = new contactPOM();
        contactPage.getCareersCTA().should('have.text', 'Careers');
		contactPage.getCareersCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/careers/'); 
	});
});