

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
getTestSolutionsTestAutomation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1);
}
getTestSolutionsUsabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(2);
}
getTestSolutionsAccessibilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(3);
}
getTestSolutionsWCAG(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(4);
}
getTestSolutionsLoadAndPerformance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(5);
}
getTestSolutionsRegressionTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(6);
}
getTestSolutionsExploratoryTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(7);
}
getTestSolutionsInteroperabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(8);
}
getTestSolutionsQAtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(9);
}
getTestSolutionsAgileQA(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(10);
}
getTestSolutionsTestAndTechTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(11);
}
getIndustries(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3);
}
getIndustriesRetail(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(0);
}
getIndustriesMedia(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(1);
}
getIndustriesSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(2);
}
getIndustriesSocial(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(3);
}
getIndustriesMarketing(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(4);
}
getIndustriesUtilities(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(5);
}
getIndustriesImaging(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(6);
}
getIndustriesTelecommunications(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(7);
}
getIndustriesEducation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(8);
}
getTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1); 
}
getTestToolsSmartEnergyTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(0);
}
getTestToolsPrinterAndPDL(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(1);
}
getTestToolsFaxTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(2);
}
getTestToolsCostEffectiveFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(3);
}
getTestToolsQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(4);
}

}
export default navBarSelectors;