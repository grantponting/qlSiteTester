/// <reference types="cypress" />

import homePagePOM from '../../support/Pages/homePagePOM.js';

const homePage = new homePagePOM();

describe ('Verify the Homepage has the correct functionality', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Schedule a Consultation CTA', () => {
        cy.navigateToSite();
		homePage.getScheduleConsultation().should('be.visible'); 
	});

	it('Contact us today CTA', () => {
		homePage.getContactUsToday().should('be.visible');
	});

	it('Read more reviews CTA', () => {
		homePage.getReadMore().should('be.visible');
	});

	it('Book a Discovery Call', () => {
		homePage.getBookDiscoveryCTA().should('be.visible');
	});

	it('Our Guarantee CTA', () => {
		homePage.getOurGuaranteeCTA().should('be.visible');	
    });

	it('How We Work CTA', () => {
		homePage.getHowWeWorkCTA().should('be.visible');
	});

	it('Get Started Now CTA', () => {
		homePage.getGetStartedNowCTA().should('be.visible');
	});

	it('Learn More CTA', () => {
		homePage.getLearnMoreCTA().should('be.visible');
	});

	it('Regression Testing', () => {
		homePage.getRegressionTesting().should('be.visible');
	});

	it('Accessibility Team', () => {
		homePage.getAccessibilityTesting().should('be.visible');
	});

	it('Smart Energy', () => {
		homePage.getSmartEnergyTesting().should('be.visible');
	});

	it('View All Resources CTA', () => { 
		homePage.getViewAllResourcesCTA().should('be.visible');
	});

});