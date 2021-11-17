

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
getSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2); 
}
getSmartEnergyTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0); 
}
getSmartEnergyToolsIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(0); 
}
getSmartEnergyToolsIEEE1547(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(1); 
}
getSmartEnergyToolsOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(2); 
}
getSmartEnergyToolsCertificationTestingLabs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(3); 
}
getSmartEnergyToolsWiSUNtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(4); 
}
getSmartEnergyTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1); 
}
getSmartEnergyTrainingSmartEnergyTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0);
}
getSmartEnergyTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1);
}
getSmartEnergyTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2);
}
getSmartEnergyTrainingToolsAndMaintenance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3);
}
getSmartEnergyServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2); 
}
getSmartEnergyServicesVendor(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0);
}
getSmartEnergyServicesUtility(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1);
}
getSmartEnergyGridEdge(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(3); 
}
getSmartEnergyQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(4); 
}
getTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3); 
}
getTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(0);
}
getTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(1);
}
getTrainingFaxTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(2);
}
getTrainingFreeWebinars(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(3);
}
getTrainingQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(4);
}
getQAresources(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4); 
}
getQAresourcesBlog(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(0);
}
getQAresourcesCaseStudies(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(1);
}
getQAresourcesNews(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(2);
}
getQAresourcesContentLibrary(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(3);
}
getContactUs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(5); 
}
getSearch(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(6); 
}
getCart(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(7); 
}
}
export default navBarSelectors;