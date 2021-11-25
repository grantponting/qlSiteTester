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

	/*
	it('Video Button CTA', () => {
		cy.navigateToSite();
		
		const homePage = new homePagePOM();
		homePage.getVideoButton().click();
		
		cy.intercept({  // intercepts the last call for the video player to load
			method: 'GET',
			url: 'https://cdn.vidyard.com/hls-videos/38ZdF4RoDoI-qNi017y91A/sd_segmented/sd_segmented_007.ts',
		  }).as('sd_segmented_007.ts');
		cy.wait('@sd_segmented_007.ts', {timeout: 10000}).its('response.statusCode').should('equal', 200);

		homePage.getVideoPlayerButton().click(); 
		homePage.getVideoEndScreen().should('exist');
		
		cy.intercept({ // verifies video end event fired 
			method: 'POST',
			url: 'https://raw.vidyard.com/v2/action_impressions',
		  }).as('action_impressions');
		cy.wait('@action_impressions').its('response.statusCode').should('equal', 204);

		homePage.getVideoScheduleMeetingButton().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://info.qualitylogic.com/meetings/pclarke/software-testing-company#web');
        });

		homePage.getVideoSkipButton().click();
		homePage.getVideoPlayerButton().click(); 

		cy.intercept({ // verifies the video started again 
			method: 'PUT',
			url: 'https://raw.vidyard.com/v2/views',
		  }).as('views');
		cy.wait('@views').its('response.statusCode').should('equal', 200);

		homePage.getCloseButton().click(); 
	});
	*/

	it('Contact us today CTA', () => {
		cy.navigateToSite();

		const homePage = new homePagePOM();
		homePage.getContactUsTodayAndReadMore().each(($el) => {
			if($el.text().includes('Contact us today')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/contact/');
			}
		});
	});

	it('Read more reviews CTA', () => {
		cy.navigateToSite();

		const homePage = new homePagePOM();
		homePage.getContactUsTodayAndReadMore().each(($el) => {
			if ($el.text().includes('Read more reviews')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/who-we-are/software-testing-client-reviews/');
			}
		});
	});

	it('Clutch Iframe', () => {
		cy.navigateToSite(); 

		const homePage = new homePagePOM(); 
		homePage.getClutchLogo().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://clutch.co?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=logo');
        });
		homePage.getClutchTitle().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://clutch.co/profile/qualitylogic?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=title');
        });
		homePage.getClutchReviewsStars().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://clutch.co/profile/qualitylogic?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=stars#reviews');
        });
		homePage.getClutchReviewsCount().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://clutch.co/profile/qualitylogic?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=num_reviews#reviews');
        });
		homePage.getClutchNextButton().click();
		homePage.getClutchPrevButton().click(); 

	});
	

});