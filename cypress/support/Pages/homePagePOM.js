

class homePagePOM {

/**
 * Get the Schedule Consultation CTA
 */
getScheduleConsultation(){
	return cy.get('a.page.button.secondary[href="https://www.qualitylogic.com/contact/"]');
}
/**
 * Get the Watch How We Work CTA
 */
getVideoButton(){
	return cy.get('a.video.button.primary');
}
/**
 * Get the close video pop up button
 */
getCloseButton(){
	return cy.get('div#hero-video').find('button.close-button');
}
/**
 * Get the iFrame for the pop up
 */
getHeroIframe(){
	return cy.get('div.flex-video.widescreen').find('iframe#hero-iframe').its('0.contentDocument').should('exist');
}
/**
 * Get the body of the iFrame
 */
getHeroIframeBody(){
	const homePage = new homePagePOM(); 
	return homePage.getHeroIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
/**
 * Get the iFrame for the video player
 */
getVideoPlayerIframe(){
	const homePage = new homePagePOM();
	return homePage.getHeroIframeBody().find('div#main-content').find('div#name-header').find('div.aspect-ratio.dom-ready.player-ready').find('iframe').its('0.contentDocument').should('exist');
}
/**
 * Get the body for the video player iFrame
 */
getVideoPlayerIframeBody(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
/**
 * Get the play button for the video player
 */
getVideoPlayerButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframeBody().find('[data-testid=splashScreen]');
}
/**
 * Get the video end screen state
 */
getVideoEndScreen(){
	const homePage = new homePagePOM();
	return homePage.getVideoPlayerIframeBody().find('div._9YMRg', {timeout:120000});  // waits for the video to end
}
/**
 * [Video End] Get the Skip button
 */
getVideoSkipButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoEndScreen().find('button._9zHax');
}
/**
 * [Video End] Get the schedule meeting button
 */
getVideoScheduleMeetingButton(){
	const homePage = new homePagePOM();
	return homePage.getVideoEndScreen().find('a.PMdp8'); 
}
/**
 * Get the Contact us Today CTA
 */
getContactUsToday(){
	return cy.get('div.medium-6.columns').find('a[href="https://www.qualitylogic.com/contact/"]');
}
/**
 * Get the Read More CTA
 */
getReadMore(){
	return cy.get('div.medium-6.columns').find('a[href="https://www.qualitylogic.com/who-we-are/software-testing-client-reviews/"]');
}
/**
 * Get the Clutch iFrame
 */
getClutchIframe(){
	return cy.get('div.clutch-widget').find('iframe').its('0.contentDocument').should('exist');
}
/**
 * Get the Clutch iFrame body
 */
getClutchIframeBody(){
	const homePage = new homePagePOM(); 
	return homePage.getClutchIframe().its('body').should('not.be.undefined').then(cy.wrap);
}
/**
 * [Clutch] Get the logo
 */
getClutchLogo(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_top').find('a.logotype'); 
}
/**
 * [Clutch] Get the title
 */
getClutchTitle(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_title').find('a');
}
/**
 * [Clutch] Get the Review Stars 
 */
getClutchReviewsStars(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_stars').find('div.reviews-totals-stars').find('a');
}
/**
 * [Clutch] Get the number of reviews
 */
getClutchReviewsCount(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_stars').find('span.reviews-count').find('a');
}
/**
 * [Clutch] Get the next review button
 */
getClutchNextButton(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_slider.clearfix').find('div.tns-controls').find('[data-controls=next]'); 
}
/**
 * [Clutch] Get the previous review button
 */
getClutchPrevButton(){
	const homePage = new homePagePOM();
	return homePage.getClutchIframeBody().find('div.middle_widget_slider.clearfix').find('div.tns-controls').find('[data-controls=prev]'); 
}
/**
 * Get the First Name field
 */
getFirstNameField(){
	return cy.get('fieldset.form-columns-2').find('div.hs_firstname').find('div.input').find('input#firstname-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
/**
 * Get the Last Name field
 */
getLastNameField(){
	return cy.get('fieldset.form-columns-2').find('div.hs_lastname').find('div.input').find('input#lastname-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
/**
 * Get the Email field
 */
getEmailField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_email').find('div.input').find('input#email-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
/**
 * Get the Company field
 */
getCompanyField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_company').find('div.input').find('input#company-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
/**
 * Get the Help field
 */
getHelpField(){
	return cy.get('fieldset.form-columns-1').find('div.hs_message').find('div.input').find('textarea#message-f6f94c28-b673-48f3-bd6a-01f932c48e03');
}
/**
 * Get the Book Discovery Call CTA
 */
getBookDiscoveryCTA(){
	return cy.get('div.medium-6.columns').find('a.su-button[href="https://info.qualitylogic.com/meetings/pclarke/onshore-software-testing"]');
}
/**
 * Get the Our Guarantee CTA
 */
getOurGuaranteeCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.blue[href="https://www.qualitylogic.com/company/our-guarantee/"]');
}
/**
 * Get the How we Work CTA
 */
getHowWeWorkCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.teal[href="https://www.qualitylogic.com/company/why-qualitylogic/"]');
}
/**
 * Get the Get Started Now CTA
 */
getGetStartedNowCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('a.button.purple[href="https://www.qualitylogic.com/contact/"]');
}
/**
 * Get the Learn More CTA
 */
getLearnMoreCTA(){
	return cy.get('section#features-benefits').find('a.button.primary[href="https://www.qualitylogic.com/company/why-qualitylogic/"]');
}
/**
 * Get the Regression Testing link
 */
getRegressionTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/testing-solutions/regression-testing/"]'); 
}
/**
 * Get the Accessibility Testing link
 */
getAccessibilityTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/2019/09/30/from-chemist-to-qa-engineering-manager/"]'); 
}
/**
 * Get the Smart Energy Testing link
 */
getSmartEnergyTesting(){
	return cy.get('section.resources.module-pad').find('a[href="https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-2030-5-test-tools-qa-services/"]'); 
}
/**
 * Get the View All Resources CTA
 */
getViewAllResourcesCTA(){
	return cy.get('section.resources.module-pad').find('div.column.row.text-center').find('a[href="https://www.qualitylogic.com/knowledge-center/"]');
}
/**
 * Get the What we Test Section
 */
getWhatWeTest(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.gray').find('ul');
}
/**
 * [What we Test] Get the Mobile Apps link
 */
getMobileApps(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/mobile-apps/"]');
}
/**
 * [What we Test] Get the Web link
 */
getWeb(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/web/"]');
}
/**
 * [What we Test] Get the eCommerce link
 */
getEcommerce(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/ecommerce/"]');
}
/**
 * [What we Test] Get the OTT & Streaming Media link
 */
getOTTandStreaming(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/ott-streaming-media/"]');
}
/**
 * [What we Test] Get the Analytics & Telemetry link
 */
getAnalyticsAndTelemetry(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/analytics-telemetry/"]');
}
/**
 * [What we Test] Get the APIs link
 */
getAPI(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/apis/"]');
}
/**
 * [What we Test] Get the Internet of Things (IoT) link
 */
getIoT(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/internet-of-things-iot/"]');
}
/**
 * [What we Test] Get the Smart Energy Standards link
 */
getSmartEnergyStandards(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/smart-energy-standards/"]');
}
/**
 * [What we Test] Get the Print Systems link
 */
getPrintSystems(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/print-systems/"]');
}
/**
 * [What we Test] Get the Fax & Fax over IP link
 */
getFax(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/"]');
}
/**
 * Get the Software Test Solutions section
 */
getSoftwareTestSolutions(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.blue').find('ul');
}
/**
 * [Software Test Solutions] Get the Functionality Testing link
 */
getFunctionality(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/functionality-testing/"]');
}
/**
 * [Software Test Solutions] Get the Interoperability Testing link
 */
getInteroperability(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/interoperability-testing/"]');
}
/**
 * [Software Test Solutions] Get the Usability Testing link
 */
getUsability(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/usability-testing/"]');
}
/**
 * [Software Test Solutions] Get the Test Automation link
 */
getTestAutomation(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/test-automation/"]');
}
/**
 * [Software Test Solutions] Get the QA Test Tools link
 */
getQAtestTools(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/qa-test-tools/"]');
}
/**
 * [Software Test Solutions] Get the Exploratory Testing link
 */
getExploratoryTesting(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/exploratory-testing/"]');
}
/**
 * [Software Test Solutions] Get the Agile QA link
 */
getAgileQA(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/agile-qa/"]');
}
/**
 * [Software Test Solutions] Get the Load & Performance Testing link
 */
getLoadAndPerformance(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/load-performance-testing/"]');
}
/**
 * [Software Test Solutions] Get the Test & Technology Training link
 */
getTestAndTechnology(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/test-technology-training/"]');
}
/**
 * [Software Test Solutions] Get the Accessibility Testing link
 */
getAccessibility(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/testing-solutions/accessibility-testing/"]');
}
/**
 * Get the Industries section
 */
getIndustries(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.teal').find('ul');
}
/**
 * [Industries] Get the Retail & eCommerce link
 */
getRetailAndEcommerce(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/retail-ecommerce/"]');
}
/**
 * [Industries] Get the Media & Entertainment link
 */
getMediaAndEntertainment(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/media-entertainment/"]');
}
/**
 * [Industries] Get the Social & Dating link
 */
getSocialAndDating(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/social-dating/"]');
}
/**
 * [Industries] Get the Marketing & Design link
 */
getMarketingAndDesign(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/marketing-design/"]');
}
/**
 * [Industries] Get the Smart Energy link
 */
getSmartEnergy(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/smart-energy/"]');
}
/**
 * [Industries] Get the Utilities link
 */
getUtilities(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/utilities/"]');
}
/**
 * [Industries] Get the Imaging & 3D Printing link
 */
getImaging(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/imaging-3d-printing/"]');
}
/**
 * [Industries] Get the Telecom link
 */
getTelecom(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/telecom/"]');
}
/**
 * [Industries] Get the Eduaction & Nonprofits link
 */
getEducation(){
	return cy.get('section#featured-expertises a[href="https://www.qualitylogic.com/industries/education-nonprofits/"]');
}
/**
 * Get all logo rows
 */
getLogoRows(){
	return cy.get('section#clients-logos').find('div.row.column.text-center').find('div.su-row'); 
}
}
export default homePagePOM;