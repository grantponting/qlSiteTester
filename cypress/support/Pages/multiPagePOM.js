

class navBarSelectors {

/**
* [NavBar] Gets the home page CTA
*/
getHomePageButton(){
	return cy.get('li.home').find('a');
}
/**
* [NavBar] Gets the Test Services Dropdown
*/
getTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0); 
}
/**
* [Test Services] Gets the Software Test Services CTA 
*/
getSoftwareTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Test Services] Gets the What we Test dropdown
*/
getWhatWeTest(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1);
}
/**
* [Test Services > What we Test] Gets the Mobile Apps CTA
*/
getWhatWeTestMobileApps(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Test Services > What we Test] Gets the Websites and Web Apps CTA
*/
getWhatWeTestWebsites(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Test Services > What we Test] Gets the OTT & Streaming Media CTA
*/
getWhatWeTestOTT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Test Services > What we Test] Gets the Smart Energy Standards CTA
*/
getWhatWeTestSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Test Services > What we Test] Gets the Big Data Analytics & Telemetry CTA
*/
getWhatWeTestBigData(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(4).find('a');
}
/**
* [Test Services > What we Test] Gets the API Testing CTA
*/
getWhatWeTestAPI(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(5).find('a');
}
/**
* [Test Services > What we Test] Gets the Virtual and Augmented Reality Testing CTA
*/
getWhatWeTestVR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(6).find('a');
}
/**
* [Test Services > What we Test] Gets the eCommerce CTA
*/
getWhatWeTestEcommerce(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(7).find('a');
}
/**
* [Test Services > What we Test] Gets the Internet of Things CTA
*/
getWhatWeTestIoT(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(8).find('a');
}
/**
* [Test Services > What we Test] Gets the Print Systems CTA
*/
getWhatWeTestPrintSystems(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(9).find('a');
}
/**
* [Test Services > What we Test] Gets the Fax & Fax over IP Testing CTA
*/
getWhatWeTestFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(10).find('a');
}
/**
* [Test Services] Gets the Test Solutions dropdown
*/
getTestSolutions(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2);
}
/**
* [Test Services > Test Solutions] Gets the Functional Testing CTA
*/
getTestSolutionsFunctionalTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Test Automation Services CTA
*/
getTestSolutionsTestAutomation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Usability Testing CTA
*/
getTestSolutionsUsabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Accessibility Testing CTA
*/
getTestSolutionsAccessibilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Test Services > Test Solutions] Gets the WCAG Compliance Testing CTA
*/
getTestSolutionsWCAG(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(4).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Load & Performance Testing CTA
*/
getTestSolutionsLoadAndPerformance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(5).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Regression Testing CTA
*/
getTestSolutionsRegressionTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(6).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Exploratory Testing CTA
*/
getTestSolutionsExploratoryTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(7).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Interoperability Testing CTA
*/
getTestSolutionsInteroperabilityTesting(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(8).find('a');
}
/**
* [Test Services > Test Solutions] Gets the QA Test Tools CTA
*/
getTestSolutionsQAtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(9).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Agile QA CTA
*/
getTestSolutionsAgileQA(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(10).find('a');
}
/**
* [Test Services > Test Solutions] Gets the Test & Technology Training CTA
*/
getTestSolutionsTestAndTechTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(11).find('a');
}
/**
* [Test Services] Gets the Industries dropdown
*/
getIndustries(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3);
}
/**
* [Test Services > Industries] Gets the Retail & eCommerce CTA
*/
getIndustriesRetail(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Test Services > Industries] Gets the Media & Entertainment CTA
*/
getIndustriesMedia(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Test Services > Industries] Gets the Smart Energy CTA
*/
getIndustriesSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Test Services > Industries] Gets the Social & Dating CTA
*/
getIndustriesSocial(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Test Services > Industries] Gets the Marketing & Design CTA
*/
getIndustriesMarketing(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(4).find('a');
}
/**
* [Test Services > Industries] Gets the Utilities CTA
*/
getIndustriesUtilities(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(5).find('a');
}
/**
* [Test Services > Industries] Gets the Imaging & 3D Printing CTA
*/
getIndustriesImaging(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(6).find('a');
}
/**
* [Test Services > Industries] Gets the Telecommunications CTA
*/
getIndustriesTelecommunications(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(7).find('a');
}
/**
* [Test Services > Industries] Gets the Education & Nonprofits CTA
*/
getIndustriesEducation(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0).find('ul.sub-menu').children().eq(3).find('ul.sub-menu').children().eq(8).find('a');
}
/**
* [NavBar] Gets the Test Tools dropdown
*/
getTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1); 
}
/**
* [Test Tools] Gets the Smart Energy Test Tools CTA
*/
getTestToolsSmartEnergyTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Test Tools] Gets the Printer and PDL CTA
*/
getTestToolsPrinterAndPDL(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Test Tools] Gets the Fax Test Tools CTA
*/
getTestToolsFaxTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Test Tools] Gets the Cost Effective Fax CTA
*/
getTestToolsCostEffectiveFax(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Test Tools] Gets the QualityLogic Store CTA
*/
getTestToolsQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1).find('ul.sub-menu').children().eq(4).find('a');
}
/**
* [NavBar] Gets the Smart Energy dropdown
*/
getSmartEnergy(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2); 
}
/**
* [Smart Energy] Gets the Tools dropdown
*/
getSmartEnergyTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0); 
}
/**
* [Smart Energy > Tools] Gets the IEEE 2030.5 Test Tools CTA
*/
getSmartEnergyToolsIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(0).find('a'); 
}
/**
* [Smart Energy > Tools] Gets the IEEE 1547.1 Test Tools CTA
*/
getSmartEnergyToolsIEEE1547(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(1).find('a'); 
}
/**
* [Smart Energy > Tools] Gets the OpenADR Test Tools CTA
*/
getSmartEnergyToolsOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(2).find('a'); 
}
/**
* [Smart Energy > Tools] Gets the Certification Testing Labs CTA
*/
getSmartEnergyToolsCertificationTestingLabs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(3).find('a'); 
}
/**
* [Smart Energy > Tools] Gets the Wi-SUN Test Tools CTA
*/
getSmartEnergyToolsWiSUNtestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(0).find('ul.sub-menu').children().eq(4).find('a'); 
}
/**
* [Smart Energy] Gets the Training dropdown
*/
getSmartEnergyTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1); 
}
/**
* [Smart Energy > Training] Gets the Smart Energy Technology Training CTA
*/
getSmartEnergyTrainingSmartEnergyTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Smart Energy > Training] Gets the IEEE 2030.5 DER Workshop CTA
*/
getSmartEnergyTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Smart Energy > Training] Gets the OpenADR Training CTA
*/
getSmartEnergyTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Smart Energy > Training] Gets the Tools & Maintenance CTA
*/
getSmartEnergyTrainingToolsAndMaintenance(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(1).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Smart Energy] Gets the Services dropdown
*/
getSmartEnergyServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2); 
}
/**
* [Smart Energy > Services] Gets the Vendor Service Solutions CTA
*/
getSmartEnergyServicesVendor(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Smart Energy > Services] Gets the Utility Service Solutions CTA
*/
getSmartEnergyServicesUtility(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(2).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Smart Energy] Gets the GridEdge Intelligence CTA
*/
getSmartEnergyGridEdge(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(3).find('a'); 
}
/**
* [Smart Energy] Gets the QualityLogic Store CTA
*/
getSmartEnergyQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(2).find('ul.sub-menu').children().eq(4).find('a'); 
}
/**
* [NavBar] Gets the Training dropdown
*/
getTraining(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3); 
}
/**
* [Training] Gets the IEEE 2030.5 Training CTA
*/
getTrainingIEEE2030(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [Training] Gets the OpenADR Training CTA
*/
getTrainingOpenADR(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [Training] Gets the Fax Technology Training CTA
*/
getTrainingFaxTech(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [Training] Gets the Free Webinars CTA
*/
getTrainingFreeWebinars(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [Training] Gets the QualityLogic Store CTA
*/
getTrainingQualityLogicStore(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(3).find('ul.sub-menu').children().eq(4).find('a');
}
/**
* [navBar] Gets the QA Resources dropdown
*/
getQAresources(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4); 
}
/**
* [QA Resources] Gets the Blog CTA
*/
getQAresourcesBlog(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(0).find('a');
}
/**
* [QA Resources] Gets the Case Studies CTA
*/
getQAresourcesCaseStudies(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(1).find('a');
}
/**
* [QA Resources] Gets the News & Events CTA
*/
getQAresourcesNews(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(2).find('a');
}
/**
* [QA Resources] Gets the Content Library CTA
*/
getQAresourcesContentLibrary(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(4).find('ul.sub-menu').children().eq(3).find('a');
}
/**
* [navBar] Gets the Contact Us CTA
*/
getContactUs(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(5).find('a'); 
}
/**
* [navBar] Gets the Search CTA
*/
getSearch(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(6).find('a'); 
}
/**
* [navBar] Gets the Cart CTA
*/
getCart(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(7).find('a'); 
}
/**
* [Footer] Gets the What we Test CTA
*/
getFooterWhatWeTest(){
	return cy.get('ul#menu-footer').children().eq(0).find('a');
}
/**
* [Footer] Gets the Test Solutions CTA
*/
getFooterTestSolutions(){
	return cy.get('ul#menu-footer').children().eq(1).find('a');
}
/**
* [Footer] Gets the Knowledge Center CTA
*/
getFooterKnowledgeCenter(){
	return cy.get('ul#menu-footer').children().eq(2).find('a');
}
/**
* [Footer] Gets the Why Us CTA
*/
getFooterWhyUs(){
	return cy.get('ul#menu-footer').children().eq(3).find('a');
}
/**
* [Footer] Gets the Who we Are CTA
*/
getFooterWhoWeAre(){
	return cy.get('ul#menu-footer').children().eq(4).find('a');
}
/**
* [Footer] Gets the Careers CTA
*/
getFooterCareers(){
	return cy.get('ul#menu-footer').children().eq(5).find('a');
}
/**
* [Footer] Gets the Contact Us CTA
*/
getFooterContactUs(){
	return cy.get('ul#menu-footer').children().eq(6).find('a');
}
/**
* [Footer] Gets the Facebook CTA
*/
getFacebook(){
	return cy.get('ul#menu-social-media').children().eq(0).find('a.social-link');
}
/**
* [Footer] Gets the Twitter CTA
*/
getTwitter(){
	return cy.get('ul#menu-social-media').children().eq(1).find('a.social-link');
}
/**
* [Footer] Gets the LinkedIn CTA
*/
getLinkedIn(){
	return cy.get('ul#menu-social-media').children().eq(2).find('a.social-link');
}
/**
* [Footer] Gets the YouTube CTA
*/
getYouTube(){
	return cy.get('ul#menu-social-media').children().eq(3).find('a.social-link');
}
/**
* [Footer] Gets the Address text
*/
getAddress(){
	return cy.get('div.row.column.text-center.footer-address');
}
}
export default navBarSelectors;