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
		homePage.getScheduleConsultation(); 
	});

	it('Contact us today CTA', () => {
		homePage.getContactUsToday();
	});

	it('Read more reviews CTA', () => {
		homePage.getReadMore();
	});

	it('Book a Discovery Call', () => {
		homePage.getBookDiscoveryCTA();
	});

	it('Our Guarantee CTA', () => {
		homePage.getOurGuaranteeCTA();	
    });

	it('How We Work CTA', () => {
		homePage.getHowWeWorkCTA();
	});

	it('Get Started Now CTA', () => {
		homePage.getGetStartedNowCTA();
	});

	it('Learn More CTA', () => {
		homePage.getLearnMoreCTA();
	});

	it('Regression Testing', () => {
		homePage.getRegressionTesting();
	});

	it('Accessibility Team', () => {
		homePage.getAccessibilityTesting();
	});

	it('Smart Energy', () => {
		homePage.getSmartEnergyTesting();
	});

	it('View All Resources CTA', () => { 
		homePage.getViewAllResourcesCTA();
	});

});