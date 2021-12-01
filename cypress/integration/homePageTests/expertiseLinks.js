/// <reference types="cypress" />

import homePagePOM from '../../support/Pages/homePagePOM.js';

const homePage = new homePagePOM();

describe ('HomePage Expertise Section', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToSite();
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	it('Tests all links in Expertise Section', () => { 
                let isVisible = [
                        homePage.getMobileApps,
                        homePage.getWeb,
                        homePage.getEcommerce,
                        homePage.getOTTandStreaming,
                        homePage.getAnalyticsAndTelemetry,
                        homePage.getAPI,
                        homePage.getIoT,
                        homePage.getSmartEnergyStandards,
                        homePage.getPrintSystems,
                        homePage.getFax,
                        homePage.getFunctionality,
                        homePage.getInteroperability,
                        homePage.getUsability,
                        homePage.getTestAutomation,
                        homePage.getQAtestTools,
                        homePage.getExploratoryTesting,
                        homePage.getAgileQA,
                        homePage.getLoadAndPerformance,
                        homePage.getTestAndTechnology,
                        homePage.getAccessibility,
                        homePage.getRetailAndEcommerce,
                        homePage.getMediaAndEntertainment,
                        homePage.getSocialAndDating,
                        homePage.getMarketingAndDesign,
                        homePage.getSmartEnergy,
                        homePage.getUtilities,
                        homePage.getImaging,
                        homePage.getTelecom,
                        homePage.getEducation
                ]; 

                isVisible.forEach(($el) => {
                        $el().should('be.visible'); 
                });
	});

});