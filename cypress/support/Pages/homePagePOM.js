

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
}
export default homePagePOM;