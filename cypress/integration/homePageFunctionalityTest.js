/// <reference types="cypress" />

import homePagePOM from '../support/Pages/homePagePOM.js';

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
		
		const homePage = new homePagePOM();
		homePage.getScheduleConsultation().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/'); 
	});

	it('Video Button CTA', () => {
		cy.navigateToSite();
		
		const homePage = new homePagePOM();
		homePage.getVideoButton().click();
		cy.intercept({
			method: 'GET',
			url: 'https://cdn.vidyard.com/hls-videos/38ZdF4RoDoI-qNi017y91A/sd_segmented/sd_segmented_007.ts',
		  }).as('sd_segmented_007.ts');
		cy.wait('@sd_segmented_007.ts', {defaultCommandTimeout: 60000}).its('response.statusCode').should('equal', 200);
		homePage.getVideoPlayerButton().click(); 
		homePage.getVideoEndScreen().should('exist');
		cy.intercept({
			method: 'POST',
			url: 'https://raw.vidyard.com/v2/action_impressions',
		  }).as('action_impressions');
		cy.wait('@action_impressions', {defaultCommandTimeout: 60000}).its('response.statusCode').should('equal', 204);
		homePage.getCloseButton().click(); 
	});
});