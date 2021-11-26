

class homePagePOM {

getLeadInModal(){
	return cy.get('div#leadinModal-content-wrapper-1803274');
}
getLeadInModalClose(){
	return cy.get('div#leadInModal-1803274').get('button.leadinModal-close');
}
getScheduleConsultation(){
	return cy.get('a.page.button.secondary');
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
getContactUsTodayAndReadMore(){
	return cy.get('a.button.purple.large');
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
	return cy.get('div.medium-6.columns').find('a.su-button');
}
getOurGuaranteeCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('article.medium-4.columns.icon-panel-home-item.blue').find('a.button.blue');
}
getHowWeWorkCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('article.medium-4.columns.icon-panel-home-item.teal').find('a.button.teal');
}
getGetStartedNowCTA(){
	return cy.get('div.text-center.module-pad.icon-panel-home.background-').find('article.medium-4.columns.icon-panel-home-item.purple').find('a.button.purple');
}
getLearnMoreCTA(){
	return cy.get('section#features-benefits').find('div.row.column.text-center').find('a.button.primary');
}
getSoftwareTestingSection(){
	return cy.get('section.resources.module-pad').find('article.resources-item.column.column-block'); 
}
getViewAllResourcesCTA(){
	return cy.get('section.resources.module-pad').find('div.column.row.text-center').find('a.button.blue');
}
getWhatWeTest(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.gray').find('ul');
}
getMobileApps(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(0).find('a');
}
getWeb(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(1).find('a');
}
getEcommerce(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(2).find('a');
}
getOTTandStreaming(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(3).find('a');
}
getAnalyticsAndTelemetry(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(4).find('a');
}
getAPI(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(5).find('a');
}
getIoT(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(6).find('a');
}
getSmartEnergyStandards(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(7).find('a');
}
getPrintSystems(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(8).find('a');
}
getFax(){
	const homePage = new homePagePOM();
	return homePage.getWhatWeTest().children().eq(9).find('a');
}
getSoftwareTestSolutions(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.blue').find('ul');
}
getFunctionality(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(0).find('a');
}
getInteroperability(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(1).find('a');
}
getUsability(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(2).find('a');
}
getTestAutomation(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(3).find('a');
}
getQAtestTools(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(4).find('a');
}
getExploratoryTesting(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(5).find('a');
}
getAgileQA(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(6).find('a');
}
getLoadAndPerformance(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(7).find('a');
}
getTestAndTechnology(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(8).find('a');
}
getAccessibility(){
	const homePage = new homePagePOM();
	return homePage.getSoftwareTestSolutions().children().eq(9).find('a');
}
getIndustries(){
	return cy.get('div.row').find('article.medium-4.featured-expertises-item.teal').find('ul');
}
getRetailAndEcommerce(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(0).find('a');
}
getMediaAndEntertainment(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(1).find('a');
}
getSocialAndDating(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(2).find('a');
}
getMarketingAndDesign(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(3).find('a');
}
getSmartEnergy(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(4).find('a');
}
getUtilities(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(5).find('a');
}
getImaging(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(6).find('a');
}
getTelecom(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(7).find('a');
}
getEducation(){
	const homePage = new homePagePOM();
	return homePage.getIndustries().children().eq(8).find('a');
}
getLogoRows(){
	return cy.get('section#clients-logos').find('div.row.column.text-center').find('div.su-row'); 
}
}
export default homePagePOM;