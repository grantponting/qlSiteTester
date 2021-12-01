/// <reference types="cypress" />

import contactPOM from '../support/Pages/contactPOM.js';

const contactPage = new contactPOM();

describe ('Verify the Contact page has the correct functionality', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Request a Quote CTA', () => {
        cy.navigateToContactPage(); 
        contactPage.getRequestQuoteCTA().should('have.text', 'Request a Quote');
		contactPage.getRequestQuoteCTA().should('be.visible');
	});
    
    it('General Inquiries CTA', () => {
        contactPage.getGeneralInquiriesCTA().should('have.text', 'General Inquiries');
		contactPage.getGeneralInquiriesCTA().should('be.visible');
	});

    it('Support CTA', () => {
        contactPage.getSupportCTA().should('have.text', 'Support'); 
		contactPage.getSupportCTA().should('be.visible'); 
	});

    it('Careers CTA', () => {
        contactPage.getCareersCTA().should('have.text', 'Careers');
		contactPage.getCareersCTA().should('be.visible'); 
	});

    it('Form Test', () => {
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

    it('Drags Carousel', () => {  // might be a false positive (I think it worked)
        contactPage.getLogoCarousel()
            .trigger('mousedown', { which:1}, {force:true})
            .trigger('mousemove', -6300, -3000, {force:true})
            .trigger('mouseup');
    });

    it('Aimtex', () => {
        contactPage.getAimtexLink().should('be.visible');
        contactPage.getAimtexEmail().should('be.visible');
    });

    it('GCOM', () => {
        contactPage.getGCOMlink().should('be.visible');
        contactPage.getGCOMemail().should('be.visible');
    });

    it('Yan Thai', () => {
        contactPage.getYanThaiLink().should('be.visible');
        contactPage.getYanThaiEmail().should('be.visible');
    });

    it('Daekyoung', () => {
        contactPage.getDaekyoungLink().should('be.visible');
        contactPage.getDaekyoungEmail().should('be.visible');
    });

    it('Grid Wiz Inc.', () => {
        contactPage.getGridWizLink().should('be.visible');
        contactPage.getGridWizEmail().should('be.visible');
    });

});