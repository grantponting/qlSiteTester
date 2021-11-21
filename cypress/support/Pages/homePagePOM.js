

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
}
export default homePagePOM;