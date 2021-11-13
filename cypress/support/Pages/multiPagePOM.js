

class navBarSelectors {

getHomePageButton(){
	return cy.get('li.home');
}
getTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0); 
}
getSoftwareTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(0);
}
getWhatWeTest(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1);
}
getWhatWeTestMobileApps(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0);
}
getWhatWeTestWebsites(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1);
}
getWhatWeTestOTT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2);
}
getWhatWeTestSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3);
}
getWhatWeTestBigData(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(4);
}
getWhatWeTestAPI(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(5);
}
getWhatWeTestVR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(6);
}
getWhatWeTestEcommerce(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(7);
}
getWhatWeTestIoT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(8);
}
getWhatWeTestPrintSystems(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(9);
}
getWhatWeTestFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(10);
}
getTestSolutions(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2);
}
getTestSolutionsFunctionalTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0);
}


getTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1); 
}

}
export default navBarSelectors;