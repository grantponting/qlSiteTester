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


	it('Video Button CTA', () => {
		
		homePage.getVideoButton().click();
		
		cy.intercept({  // intercepts the last call for the video player to load
			method: 'GET',
			url: '**/sd_segmented/sd_segmented_007.ts',
		  }).as('sd_segmented_007.ts');
		cy.wait('@sd_segmented_007.ts', {timeout: 15000}).its('response.statusCode').should('equal', 200);

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

	it('Contact us today CTA', () => {
		homePage.getContactUsToday().should('be.visible');
	});

	it('Read more reviews CTA', () => {
		homePage.getReadMore().should('be.visible');
	});

	it('Clutch Iframe', () => { 
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
		homePage.getClutchNextButton().click();     // could add some verification that the text is changing
		homePage.getClutchPrevButton().click(); 
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

	it('Mobile App link', () => {
		homePage.getMobileApps().should('be.visible');
	});

	it('Web link', () => { 
		homePage.getWeb().should('be.visible');
	});

	it('eCommerce link', () => { 
		homePage.getEcommerce().should('be.visible'); 
	});

	it('OTT & Streaming Media link', () => { 
		homePage.getOTTandStreaming().should('be.visible');
	});

	it('Analytics & Telemetry link', () => { 
		homePage.getAnalyticsAndTelemetry().should('be.visible');
	});

	it('APIs link', () => { 
		homePage.getAPI().should('be.visible');
	});

	it('IoT link', () => { 
		homePage.getIoT().should('be.visible');
	});

	it('Smart Energy Standards link', () => { 
		homePage.getSmartEnergyStandards().should('be.visible');
	});

	it('Print Systems link', () => { 
		homePage.getPrintSystems().should('be.visible');
	});

	it('Fax & Fax over IP link', () => { 
		homePage.getFax().should('be.visible');
	});

	it('Functionality Testing link', () => { 
		homePage.getFunctionality().should('be.visible'); 
	});

	it('Interoperability Testing link', () => { 
		homePage.getInteroperability().should('be.visible');
	});

	it('Usability Testing link', () => { 
		homePage.getUsability().should('be.visible');
	});

	it('Test Automation link', () => { 
		homePage.getTestAutomation().should('be.visible');
	});

	it('QA Test Tools link', () => { 
		homePage.getQAtestTools().should('be.visible');
	});

	it('Exploratory Testing link', () => { 
		homePage.getExploratoryTesting().should('be.visible');
	});

	it('Agile QA link', () => { 
		homePage.getAgileQA().should('be.visible'); 
	});

	it('Load & Performance Testing link', () => { 
		homePage.getLoadAndPerformance().should('be.visible');
	});

	it('Test & Technology Training link', () => { 
		homePage.getTestAndTechnology().should('be.visible');
	});

	it('Accessibility Testing link', () => { 
		homePage.getAccessibility().should('be.visible');
	});

	it('Retail & eCommerce link', () => { 
		homePage.getRetailAndEcommerce().should('be.visible');
	});

	it('Media & Entertainment link', () => { 
		homePage.getMediaAndEntertainment().should('be.visible');
	});

	it('Social & Dating link', () => { 
		homePage.getSocialAndDating().should('be.visible');
	});

	it('Marketing & Design link', () => { 
		homePage.getMarketingAndDesign().should('be.visible');
	});

	it('Smart Energy link', () => { 
		homePage.getSmartEnergy().should('be.visible');
	});

	it('Utilities link', () => { 
		homePage.getUtilities().should('be.visible');
	});

	it('Imaging & 3D Printing link', () => { 
		homePage.getImaging().should('be.visible'); 
	});

	it('Telecom link', () => { 
		homePage.getTelecom().should('be.visible');
	});

	it('Education & Nonprofits link', () => { 
		homePage.getEducation().should('be.visible');
	});

	it('Logos', () => { // checks that all logos are displaying an image (could add a test for the hyperlinks on certain logos)
		homePage.getLogoRows().each(($el) => {
			cy.wrap($el).find('div.su-column.su-column').each(($el) => {
				cy.wrap($el).find('img').should('be.visible');
			});
		});
	});

});