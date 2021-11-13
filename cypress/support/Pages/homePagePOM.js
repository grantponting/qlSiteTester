

class homePagePOM {

getLeadInModal(){
	return cy.get('div#leadinModal-content-wrapper-1803274');
}
getLeadInModalClose(){
	return cy.get('div#leadInModal-1803274').get('button.leadinModal-close');
}
}
export default homePagePOM;