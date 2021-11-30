

class homePagePOM {

/**
 * Get the Schedule Consultation CTA
 */
getScheduleConsultation(){
	return cy.get('a.page.button.secondary[href="https://www.qualitylogic.com/contact/"]');
}
getVideoButton(){
	return cy.get('a.video.button.primary');
}
getCloseButton(){
	return cy.get('div#hero-video').find('button.close-button');
}
getHeroIframe(){
	return cy.get('div.flex-video.widescreen').find('iframe#hero-iframe').its('0.contentDocument').should('exist');
}
getHeroIframeBody(){
	const homePage = new homePagePOM(); 
	return homePage.getHeroIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
getVideoPlayerIframe(){
	const homePage = new homePagePOM();
	return homePage.getHeroIframeBody().find('div#main-content').find('div#name-header').find('div.aspect-ratio.dom-ready.player-ready').find('iframe').its('0.contentDocument').should('exist');
}
getVideoPlayerIframeBody(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
getVideoPlayerButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframeBody().find('[data-testid=splashScreen]');
}
getVideoEndScreen(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframeBody().find('div._9YMRg', {timeout:120000});
}
getVideoSkipButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoEndScreen().find('button._9zHax');
}
getVideoScheduleMeetingButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoEndScreen().find('a.PMdp8'); 
}
getContactUsToday(){
	return cy.get('div.medium-6.columns').find('a[href="https://www.qualitylogic.com/contact/"]');
}
getReadMore(){
	return cy.get('div.medium-6.columns').find('a[href="https://www.qualitylogic.com/who-we-are/software-testing-client-reviews/"]');
}
getClutchIframe(){
	return cy.get('div.clutch-widget').find('iframe').its('0.contentDocument').should('exist');
}
getClutchIframeBody(){
	const homePage = new homePagePOM(); 
	return homePage.getClutchIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
getClutchLogo(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_top').find('a.logotype'); 
}
getClutchTitle(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_title').find('a');
}
getClutchReviewsStars(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_stars').find('div.reviews-totals-stars').find('a');
}
getClutchReviewsCount(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_stars').find('span.reviews-count').find('a');
}
getClutchNextButton(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_slider.clearfix').find('div.tns-controls').find('[data-controls=next]'); 
}
getClutchPrevButton(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_slider.clearfix').find('div.tns-controls').find('[data-controls=prev]'); 
}
getFirstNameField(){
	return cy.get('fieldset.form-columns-2').find('div.hs_firstname').find('div.input').find('input#firstname-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
getLastNameField(){
	return cy.get('fieldset.form-columns-2').find('div.hs_lastname').find('div.input').find('input#lastname-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
getEmailField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_email').find('div.input').find('input#email-f6f94c28-b673-48f3-bd6a-01f932c48e03');

}
getCompanyField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_company').find('div.input').find('input#company-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
getHelpField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_message').find('div.input').find('textarea#message-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
getBookDiscoveryCTA(){
	return cy.get('div.medium-6.columns').find('a.su-button[href="https://info.qualitylogic.com/meetings/pclarke/onshore-software-testing"]');
}
getOurGuaranteeCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.blue[href="https://www.qualitylogic.com/company/our-guarantee/"]');
}
getHowWeWorkCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.teal[href="https://www.qualitylogic.com/company/why-qualitylogic/"]');
}
getGetStartedNowCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.purple[href="https://www.qualitylogic.com/contact/"]');
}
getLearnMoreCTA(){
	return cy.get('section#features-benefits').find('a.button.primary[href="https://www.qualitylogic.com/company/why-qualitylogic/"]');
}
getRegressionTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/testing-solutions/regression-testing/"]'); 
}
getAccessibilityTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/2019/09/30/from-chemist-to-qa-engineering-manager/"]'); 
}
getSmartEnergyTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-2030-5-test-tools-qa-services/"]'); 
}
getViewAllResourcesCTA(){
	return cy.get('section.resources.module-pad').find('div.column.row.text-center').find('a[href="https://www.qualitylogic.com/knowledge-center/"]');
}
getWhatWeTest(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.gray').find('ul');
}
getMobileApps(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/mobile-apps/"]');
}
getWeb(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/web/"]');
}
getEcommerce(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/ecommerce/"]');
}
getOTTandStreaming(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/ott-streaming-media/"]');
}
getAnalyticsAndTelemetry(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/analytics-telemetry/"]');
}
getAPI(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/apis/"]');
}
getIoT(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/internet-of-things-iot/"]');
}
getSmartEnergyStandards(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/smart-energy-standards/"]');
}
getPrintSystems(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/print-systems/"]');
}
getFax(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/"]');
}
getSoftwareTestSolutions(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.blue').find('ul');
}
getFunctionality(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/functionality-testing/"]');
}
getInteroperability(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/interoperability-testing/"]');
}
getUsability(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/usability-testing/"]');
}
getTestAutomation(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/test-automation/"]');
}
getQAtestTools(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/qa-test-tools/"]');
}
getExploratoryTesting(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/exploratory-testing/"]');
}
getAgileQA(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/agile-qa/"]');
}
getLoadAndPerformance(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/load-performance-testing/"]');
}
getTestAndTechnology(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/test-technology-training/"]');
}
getAccessibility(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/accessibility-testing/"]');
}
getIndustries(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.teal').find('ul');
}
getRetailAndEcommerce(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/retail-ecommerce/"]');
}
getMediaAndEntertainment(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/media-entertainment/"]');
}
getSocialAndDating(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/social-dating/"]');
}
getMarketingAndDesign(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/marketing-design/"]');
}
getSmartEnergy(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/smart-energy/"]');
}
getUtilities(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/utilities/"]');
}
getImaging(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/imaging-3d-printing/"]');
}
getTelecom(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/telecom/"]');
}
getEducation(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/education-nonprofits/"]');
}
getLogoRows(){
	return cy.get('section#clients-logos').find('div.row.column.text-center').find('div.su-row'); 
}
}
export default homePagePOM;