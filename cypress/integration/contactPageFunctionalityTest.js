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

    it('First Name Field', () => {
        const contactPage = new contactPOM(); 
        contactPage.getFirstNameField().should('not.have.class', 'error');
		contactPage.getLastNameField().should('not.have.class', 'error'); 
        contactPage.getWorkEmailField().should('not.have.class', 'error'); 
        contactPage.getCompanyField().should('not.have.class', 'error'); 
        contactPage.getAreYouDropdown().find('select').should('not.have.class', 'error'); 
        contactPage.getAreaOfInterestDropdown().find('select').should('not.have.class', 'error'); 
        contactPage.getTellUsAboutProjectField().should('not.have.class', 'error'); 

        contactPage.getFirstNameField().click(); 
        contactPage.getLastNameField().click(); 
        contactPage.getWorkEmailField().click();
        contactPage.getCompanyField().click();
        contactPage.getAreYouDropdown().click();
        contactPage.getAreaOfInterestDropdown().click();
        contactPage.getTellUsAboutProjectField().click(); 
        contactPage.getFirstNameField().click(); // selects the first name field again so that the last error is displayed

        contactPage.getFirstNameField().should('have.class', 'error');
		contactPage.getLastNameField().should('have.class', 'error'); 
        contactPage.getWorkEmailField().should('have.class', 'error'); 
        contactPage.getCompanyField().should('have.class', 'error'); 
        contactPage.getAreYouDropdown().find('select').should('have.class', 'error'); 
        contactPage.getAreaOfInterestDropdown().find('select').should('have.class', 'error'); 
        contactPage.getTellUsAboutProjectField().should('have.class', 'error');

        contactPage.getFirstNameField().type('Test');
		contactPage.getLastNameField().type('Tester');
        contactPage.getWorkEmailField().type('test@tester.com');
        contactPage.getCompanyField().type('QualityLogic');
        contactPage.getAreYouDropdown().find('select').select('Researching for a Future Project');
        contactPage.getAreaOfInterestDropdown().find('select').select('Web, Mobile, eCommerce');
        contactPage.getTellUsAboutProjectField().type('Its related to your site');

        contactPage.getFirstNameField().should('not.have.class', 'error');
		contactPage.getLastNameField().should('not.have.class', 'error'); 
        contactPage.getWorkEmailField().should('not.have.class', 'error'); 
        contactPage.getCompanyField().should('not.have.class', 'error'); 
        contactPage.getAreYouDropdown().should('not.have.class', 'error'); 
        contactPage.getAreaOfInterestDropdown().should('not.have.class', 'error'); 
        contactPage.getTellUsAboutProjectField().should('not.have.class', 'error'); 
    });

    it('Drags Carousel', () => {  // not convinced this is working how I want it to. I think this is a false positive
		const contactPage = new contactPOM();
        contactPage.getLogoCarousel()
            .trigger('mousedown', { which:1}, {force:true})
            .trigger('mousemove', -6300, -3000, {force:true})
            .trigger('mouseup');
    });
});