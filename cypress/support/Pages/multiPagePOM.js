

class navBarSelectors {

getHomePageButton(){
	return cy.get('li.home').find('a');
}
getTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0); 
}
getSoftwareTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(0).find('a');
}
getWhatWeTest(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1);
}
getWhatWeTestMobileApps(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
getWhatWeTestWebsites(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
getWhatWeTestOTT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
getWhatWeTestSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
getWhatWeTestBigData(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(4).find('a');
}
getWhatWeTestAPI(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(5).find('a');
}
getWhatWeTestVR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(6).find('a');
}
getWhatWeTestEcommerce(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(7).find('a');
}
getWhatWeTestIoT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(8).find('a');
}
getWhatWeTestPrintSystems(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(9).find('a');
}
getWhatWeTestFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(10).find('a');
}
getTestSolutions(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2);
}
getTestSolutionsFunctionalTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0).find('a');
}
getTestSolutionsTestAutomation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1).find('a');
}
getTestSolutionsUsabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(2).find('a');
}
getTestSolutionsAccessibilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(3).find('a');
}
getTestSolutionsWCAG(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(4).find('a');
}
getTestSolutionsLoadAndPerformance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(5).find('a');
}
getTestSolutionsRegressionTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(6).find('a');
}
getTestSolutionsExploratoryTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(7).find('a');
}
getTestSolutionsInteroperabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(8).find('a');
}
getTestSolutionsQAtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(9).find('a');
}
getTestSolutionsAgileQA(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(10).find('a');
}
getTestSolutionsTestAndTechTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(11).find('a');
}
getIndustries(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3);
}
getIndustriesRetail(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(0).find('a');
}
getIndustriesMedia(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(1).find('a');
}
getIndustriesSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(2).find('a');
}
getIndustriesSocial(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(3).find('a');
}
getIndustriesMarketing(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(4).find('a');
}
getIndustriesUtilities(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(5).find('a');
}
getIndustriesImaging(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(6).find('a');
}
getIndustriesTelecommunications(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(7).find('a');
}
getIndustriesEducation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(8).find('a');
}
getTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1); 
}
getTestToolsSmartEnergyTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
getTestToolsPrinterAndPDL(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
getTestToolsFaxTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
getTestToolsCostEffectiveFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
getTestToolsQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(4).find('a');
}
getSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2); 
}
getSmartEnergyTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0); 
}
getSmartEnergyToolsIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(0).find('a'); 
}
getSmartEnergyToolsIEEE1547(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(1).find('a'); 
}
getSmartEnergyToolsOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(2).find('a'); 
}
getSmartEnergyToolsCertificationTestingLabs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(3).find('a'); 
}
getSmartEnergyToolsWiSUNtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(4).find('a'); 
}
getSmartEnergyTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1); 
}
getSmartEnergyTrainingSmartEnergyTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
getSmartEnergyTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
getSmartEnergyTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
getSmartEnergyTrainingToolsAndMaintenance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
getSmartEnergyServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2); 
}
getSmartEnergyServicesVendor(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0).find('a');
}
getSmartEnergyServicesUtility(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1).find('a');
}
getSmartEnergyGridEdge(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(3).find('a'); 
}
getSmartEnergyQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(4).find('a'); 
}
getTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3); 
}
getTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(0).find('a');
}
getTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(1).find('a');
}
getTrainingFaxTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(2).find('a');
}
getTrainingFreeWebinars(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(3).find('a');
}
getTrainingQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(4).find('a');
}
getQAresources(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4); 
}
getQAresourcesBlog(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(0).find('a');
}
getQAresourcesCaseStudies(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(1).find('a');
}
getQAresourcesNews(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(2).find('a');
}
getQAresourcesContentLibrary(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(3).find('a');
}
getContactUs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(5).find('a'); 
}
getSearch(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(6).find('a'); 
}
getCart(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(7).find('a'); 
}
getFooterWhatWeTest(){
	return cy.get('ul#menu-footer').children().eq(0).find('a');
}
getFooterTestSolutions(){
	return cy.get('ul#menu-footer').children().eq(1).find('a');
}
getFooterKnowledgeCenter(){
	return cy.get('ul#menu-footer').children().eq(2).find('a');
}
getFooterWhyUs(){
	return cy.get('ul#menu-footer').children().eq(3).find('a');
}
getFooterWhoWeAre(){
	return cy.get('ul#menu-footer').children().eq(4).find('a');
}
getFooterCareers(){
	return cy.get('ul#menu-footer').children().eq(5).find('a');
}
getFooterContactUs(){
	return cy.get('ul#menu-footer').children().eq(6).find('a');
}
getFacebook(){
	return cy.get('ul#menu-social-media').children().eq(0).find('a.social-link');
}
getTwitter(){
	return cy.get('ul#menu-social-media').children().eq(1).find('a.social-link');
}
getLinkedIn(){
	return cy.get('ul#menu-social-media').children().eq(2).find('a.social-link');
}
getYouTube(){
	return cy.get('ul#menu-social-media').children().eq(3).find('a.social-link');
}
getAddress(){
	return cy.get('div.row.column.text-center.footer-address');
}
}
export default navBarSelectors;