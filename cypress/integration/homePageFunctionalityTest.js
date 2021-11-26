/// <reference types="cypress" />

import homePagePOM from '../support/Pages/homePagePOM.js';

describe ('Verify the Homepage has the correct functionality', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToSite();
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 

	it('Schedule a Consultation CTA', () => {
		const homePage = new homePagePOM();
		homePage.getScheduleConsultation().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/'); 
	});


	it('Video Button CTA', () => {
		
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

	it('Contact us today CTA', () => {
		const homePage = new homePagePOM();
		homePage.getContactUsTodayAndReadMore().each(($el) => {
			if($el.text().includes('Contact us today')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/contact/');
			}
		});
	});

	it('Read more reviews CTA', () => {
		const homePage = new homePagePOM();
		homePage.getContactUsTodayAndReadMore().each(($el) => {
			if ($el.text().includes('Read more reviews')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/who-we-are/software-testing-client-reviews/');
			}
		});
	});

	it('Clutch Iframe', () => {
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
		homePage.getClutchNextButton().click();     // could add some verification that the text is changing
		homePage.getClutchPrevButton().click(); 
	});

	it('Submit Form', () => {
		const homePage = new homePagePOM(); 
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
		const homePage = new homePagePOM();
		homePage.getBookDiscoveryCTA().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://info.qualitylogic.com/meetings/pclarke/onshore-software-testing');
		});
	});

	it('Our Guarantee CTA', () => {
		const homePage = new homePagePOM();
		homePage.getOurGuaranteeCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/company/our-guarantee/');  
	});

	it('How We Work CTA', () => {
		const homePage = new homePagePOM();
		homePage.getHowWeWorkCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/company/why-qualitylogic/');  
	});

	it('Get Started Now CTA', () => {
		const homePage = new homePagePOM();
		homePage.getGetStartedNowCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/');  
	});

	it('Learn More CTA', () => {
		const homePage = new homePagePOM();
		homePage.getLearnMoreCTA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/company/why-qualitylogic/');  
	});

	it('Regression Testing', () => {
		const homePage = new homePagePOM();
		homePage.getSoftwareTestingSection().each(($el) => {
			if ($el.text().includes("Regression Testing: Verify Bug Fixes Don't Cause Other Problems")){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/regression-testing/');
			}
		});
	});

	it('Accessibility Team', () => {
		const homePage = new homePagePOM();
		homePage.getSoftwareTestingSection().each(($el) => {
			if ($el.text().includes('Accessibility Team: From Chemist to QA Engineering Manager')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/2019/09/30/from-chemist-to-qa-engineering-manager/');
			}
		});
	});

	it('Smart Energy', () => {
		const homePage = new homePagePOM();
		homePage.getSoftwareTestingSection().each(($el) => {
			if ($el.text().includes('Smart Energy: Understand, Create, Validate and Certify Interoperable IEEE 2030.5 Products')){
				cy.wrap($el).click(); 
				cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-2030-5-test-tools-qa-services/');
			}
		});
	});
});