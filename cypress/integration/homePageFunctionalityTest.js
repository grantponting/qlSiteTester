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

	it('View All Resources CTA', () => {
		const homePage = new homePagePOM(); 
		homePage.getViewAllResourcesCTA().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/');
	});

	it('Mobile App link', () => {
		const homePage = new homePagePOM();
		homePage.getMobileApps().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/mobile-apps/');
	});

	it('Web link', () => {
		const homePage = new homePagePOM(); 
		homePage.getWeb().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/web/'); 
	});

	it('eCommerce link', () => {
		const homePage = new homePagePOM(); 
		homePage.getEcommerce().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ecommerce/'); 
	});

	it('OTT & Streaming Media link', () => {
		const homePage = new homePagePOM(); 
		homePage.getOTTandStreaming().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ott-streaming-media/'); 
	});

	it('Analytics & Telemetry link', () => {
		const homePage = new homePagePOM(); 
		homePage.getAnalyticsAndTelemetry().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/analytics-telemetry/'); 
	});

	it('APIs link', () => {
		const homePage = new homePagePOM(); 
		homePage.getAPI().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/apis/'); 
	});

	it('IoT link', () => {
		const homePage = new homePagePOM(); 
		homePage.getIoT().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/internet-of-things-iot/'); 
	});

	it('Smart Energy Standards link', () => {
		const homePage = new homePagePOM(); 
		homePage.getSmartEnergyStandards().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/'); 
	});

	it('Print Systems link', () => {
		const homePage = new homePagePOM(); 
		homePage.getPrintSystems().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/print-systems/'); 
	});

	it('Fax & Fax over IP link', () => {
		const homePage = new homePagePOM(); 
		homePage.getFax().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/'); 
	});

	it('Functionality Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getFunctionality().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/functionality-testing/'); 
	});

	it('Interoperability Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getInteroperability().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/interoperability-testing/'); 
	});

	it('Usability Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getUsability().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/usability-testing/'); 
	});

	it('Test Automation link', () => {
		const homePage = new homePagePOM(); 
		homePage.getTestAutomation().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/test-automation/'); 
	});

	it('QA Test Tools link', () => {
		const homePage = new homePagePOM(); 
		homePage.getQAtestTools().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/qa-test-tools/'); 
	});

	it('Exploratory Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getExploratoryTesting().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/exploratory-testing/'); 
	});

	it('Agile QA link', () => {
		const homePage = new homePagePOM(); 
		homePage.getAgileQA().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/agile-qa/'); 
	});

	it('Load & Performance Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getLoadAndPerformance().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/load-performance-testing/'); 
	});

	it('Test & Technology Training link', () => {
		const homePage = new homePagePOM(); 
		homePage.getTestAndTechnology().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/test-technology-training/'); 
	});

	it('Accessibility Testing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getAccessibility().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/accessibility-testing/'); 
	});

	it('Retail & eCommerce link', () => {
		const homePage = new homePagePOM(); 
		homePage.getRetailAndEcommerce().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/retail-ecommerce/'); 
	});

	it('Media & Entertainment link', () => {
		const homePage = new homePagePOM(); 
		homePage.getMediaAndEntertainment().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/media-entertainment/'); 
	});

	it('Social & Dating link', () => {
		const homePage = new homePagePOM(); 
		homePage.getSocialAndDating().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/social-dating/'); 
	});

	it('Marketing & Design link', () => {
		const homePage = new homePagePOM(); 
		homePage.getMarketingAndDesign().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/marketing-design/'); 
	});

	it('Smart Energy link', () => {
		const homePage = new homePagePOM(); 
		homePage.getSmartEnergy().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/'); 
	});

	it('Utilities link', () => {
		const homePage = new homePagePOM(); 
		homePage.getUtilities().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/utilities/'); 
	});

	it('Imaging & 3D Printing link', () => {
		const homePage = new homePagePOM(); 
		homePage.getImaging().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/imaging-3d-printing/'); 
	});

	it('Telecom link', () => {
		const homePage = new homePagePOM(); 
		homePage.getTelecom().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/telecom/'); 
	});

	it('Education & Nonprofits link', () => {
		const homePage = new homePagePOM(); 
		homePage.getEducation().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/education-nonprofits/'); 
	});

	it('Logos', () => { // checks that all logos are displaying an image (could add a test for the hyperlinks on certain logos)
		const homePage = new homePagePOM();
		homePage.getLogoRows().each(($el) => {
			cy.wrap($el).find('div.su-column.su-column').each(($el) => {
				cy.wrap($el).find('img');
			});
		});
	});

});