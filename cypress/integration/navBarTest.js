/// <reference types="cypress" />

import navBarSelectors from '../support/pages/multiPagePOM';

describe ('Verify the Nav Bar is functioning', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850); 
		cy.navigateToSite(); 
	
		cy.on('uncaught:exception', (err, runnable) => {	//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	
	it('Home Page Button', () => {
		const navBar = new navBarSelectors();
		navBar.getHomePageButton().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/');
	});

	it('Test Services > Software Test Services', () => {   
		const navBar = new navBarSelectors();
		navBar.getTestServices().click(); 
		navBar.getSoftwareTestServices().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/');
	});

	it('Test Services > What we Test > Mobile Apps', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestMobileApps().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/mobile-apps/');
	});

	it('Test Services > What we Test > Websites and Web Apps', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestWebsites().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/web/');
	});

	it('Test Services > What we Test > OTT & Streaming Media', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestOTT().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ott-streaming-media/');
	});

	it('Test Services > What we Test > Smart Energy Standards', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestSmartEnergy().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/');
	});

	it('Test Services > What we Test > Big Data Analytics & Telemetry', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestBigData().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/analytics-telemetry/');
	});

	it('Test Services > What we Test > API Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestAPI().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/apis/');
	});

	it('Test Services > What we Test > Virtual and Augmented Reality Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestVR().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/virtual-augmented-reality/');
	});

	it('Test Services > What we Test > eCommerce', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestEcommerce().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ecommerce/');
	});

	it('Test Services > What we Test > Internet of Things (IoT)', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestIoT().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/internet-of-things-iot/');
	});

	it('Test Services > What we Test > Print Systems', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestPrintSystems().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/print-systems/');
	});

	it('Test Services > What we Test > Fax & Fax over IP Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestFax().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/');
	});

	it('Test Services > Test Solutions > Functional Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/functionality-testing/');
	});

	it('Test Services > Test Solutions > Test Automation Services', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Usability Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Accessibility Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > WCAG Compliance Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Load & Performance Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Regression Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Exploratory Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Interoperability Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > QA Test Tools', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Agile QA', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

	it('Test Services > Test Solutions > Test & Technology Training', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', '');
	});

//	it('Test Tools', () =>{
//		const navBar = new navBarSelectors();
//		navBar.getTestTools().click(); 
//	});
});
