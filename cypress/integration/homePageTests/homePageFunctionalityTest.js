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
		homePage.getContactUsToday();
	});

	it('Read more reviews CTA', () => {
		homePage.getReadMore();
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

	it('Mobile App link', () => {
		homePage.getMobileApps();
	});

	it('Web link', () => { 
		homePage.getWeb();
	});

	it('eCommerce link', () => { 
		homePage.getEcommerce(); 
	});

	it('OTT & Streaming Media link', () => { 
		homePage.getOTTandStreaming();
	});

	it('Analytics & Telemetry link', () => { 
		homePage.getAnalyticsAndTelemetry();
	});

	it('APIs link', () => { 
		homePage.getAPI();
	});

	it('IoT link', () => { 
		homePage.getIoT();
	});

	it('Smart Energy Standards link', () => { 
		homePage.getSmartEnergyStandards();
	});

	it('Print Systems link', () => { 
		homePage.getPrintSystems();
	});

	it('Fax & Fax over IP link', () => { 
		homePage.getFax();
	});

	it('Functionality Testing link', () => { 
		homePage.getFunctionality(); 
	});

	it('Interoperability Testing link', () => { 
		homePage.getInteroperability();
	});

	it('Usability Testing link', () => { 
		homePage.getUsability();
	});

	it('Test Automation link', () => { 
		homePage.getTestAutomation();
	});

	it('QA Test Tools link', () => { 
		homePage.getQAtestTools();
	});

	it('Exploratory Testing link', () => { 
		homePage.getExploratoryTesting();
	});

	it('Agile QA link', () => { 
		homePage.getAgileQA(); 
	});

	it('Load & Performance Testing link', () => { 
		homePage.getLoadAndPerformance();
	});

	it('Test & Technology Training link', () => { 
		homePage.getTestAndTechnology();
	});

	it('Accessibility Testing link', () => { 
		homePage.getAccessibility();
	});

	it('Retail & eCommerce link', () => { 
		homePage.getRetailAndEcommerce();
	});

	it('Media & Entertainment link', () => { 
		homePage.getMediaAndEntertainment();
	});

	it('Social & Dating link', () => { 
		homePage.getSocialAndDating();
	});

	it('Marketing & Design link', () => { 
		homePage.getMarketingAndDesign();
	});

	it('Smart Energy link', () => { 
		homePage.getSmartEnergy();
	});

	it('Utilities link', () => { 
		homePage.getUtilities();
	});

	it('Imaging & 3D Printing link', () => { 
		homePage.getImaging(); 
	});

	it('Telecom link', () => { 
		homePage.getTelecom();
	});

	it('Education & Nonprofits link', () => { 
		homePage.getEducation();
	});

	it('Logos', () => { // checks that all logos are displaying an image (could add a test for the hyperlinks on certain logos)
		homePage.getLogoRows().each(($el) => {
			cy.wrap($el).find('div.su-column.su-column').each(($el) => {
				cy.wrap($el).find('img');
			});
		});
	});

});