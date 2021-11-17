/// <reference types="cypress" />

import navBarSelectors from '../support/pages/multiPagePOM';

describe ('Verify the Nav Bar is functioning', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850); 
		cy.navigateToSite(); 
	
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	
	it('Home Page Button', () => {
		const navBar = new navBarSelectors();
		navBar.getHomePageButton().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/');
	});

	it('Test Services > Software Test Services', () => {   
		const navBar = new navBarSelectors();
		navBar.getTestServices().click(); 
		navBar.getSoftwareTestServices().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/');
	});

	it('Test Services > What we Test > Mobile Apps', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestMobileApps().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/mobile-apps/');
	});

	it('Test Services > What we Test > Websites and Web Apps', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestWebsites().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/web/');
	});

	it('Test Services > What we Test > OTT & Streaming Media', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestOTT().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ott-streaming-media/');
	});

	it('Test Services > What we Test > Smart Energy Standards', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestSmartEnergy().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/');
	});

	it('Test Services > What we Test > Big Data Analytics & Telemetry', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestBigData().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/analytics-telemetry/');
	});

	it('Test Services > What we Test > API Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestAPI().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/apis/');
	});

	it('Test Services > What we Test > Virtual and Augmented Reality Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestVR().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/virtual-augmented-reality/');
	});

	it('Test Services > What we Test > eCommerce', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestEcommerce().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/ecommerce/');
	});

	it('Test Services > What we Test > Internet of Things (IoT)', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestIoT().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/internet-of-things-iot/');
	});

	it('Test Services > What we Test > Print Systems', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestPrintSystems().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/print-systems/');
	});

	it('Test Services > What we Test > Fax & Fax over IP Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestFax().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/');
	});

	it('Test Services > Test Solutions > Functional Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/functionality-testing/');
	});

	it('Test Services > Test Solutions > Test Automation Services', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsTestAutomation().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/test-automation/');
	});

	it('Test Services > Test Solutions > Usability Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsUsabilityTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/usability-testing/');
	});

	it('Test Services > Test Solutions > Accessibility Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsAccessibilityTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/accessibility-testing/');
	});

	it('Test Services > Test Solutions > WCAG Compliance Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsWCAG().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/wcag-compliance-testing-certification/');
	});

	it('Test Services > Test Solutions > Load & Performance Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsLoadAndPerformance().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/load-performance-testing/');
	});

	it('Test Services > Test Solutions > Regression Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsRegressionTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/regression-testing/');
	});

	it('Test Services > Test Solutions > Exploratory Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsExploratoryTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/exploratory-testing/');
	});

	it('Test Services > Test Solutions > Interoperability Testing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsInteroperabilityTesting().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/interoperability-testing/');
	});

	it('Test Services > Test Solutions > QA Test Tools', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsQAtestTools().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/qa-test-tools/');
	});

	it('Test Services > Test Solutions > Agile QA', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsAgileQA().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/agile-qa/');
	});

	it('Test Services > Test Solutions > Test & Technology Training', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsTestAndTechTraining().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/test-technology-training/');
	});

	it('Test Services > Industries > Retail & eCommerce', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesRetail().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/retail-ecommerce/');
	});

	it('Test Services > Industries > Media & Entertainment', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesMedia().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/media-entertainment/');
	});

	it('Test Services > Industries > Smart Energy', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
	    navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesSmartEnergy().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/');
	});

	it('Test Services > Industries > Social & Dating', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesSocial().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/social-dating/');
	});

	it('Test Services > Industries > Marketing & Design', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesMarketing().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/marketing-design/');
	});

	it('Test Services > Industries > Utilities', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesUtilities().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/utilities/');
	});

	it('Test Services > Industries > Imaging & 3D Printing', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesImaging().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/imaging-3d-printing/');
	});

	it('Test Services > Industries > Telecommunications', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesTelecommunications().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/telecom/');
	});

	it('Test Services > Industries > Education & Nonprofits', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesEducation().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/education-nonprofits/');
	});

	it('Test Tools > Smart Energy Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click();
		navBar.getTestToolsSmartEnergyTestTools().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/test-tools/smart-grid-test-tools/');
	});

	it('Test Tools > Printer and PDL', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click();
		navBar.getTestToolsPrinterAndPDL().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/test-tools/printer-test-tools/');
	});

	it('Test Tools > Fax Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click();
		navBar.getTestToolsFaxTestTools().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/test-tools/fax-test-tools/');
	});

	it('Test Tools > Cost Effective Fax', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click();
		navBar.getTestToolsCostEffectiveFax().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/cost-effective-fax-testing/');
	});

	it('Test Tools > Quality Logic Store', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click();
		navBar.getTestToolsQualityLogicStore().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/store/');
	});

	it('Smart Energy > Tools > IEEE 2030.5 Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsIEEE2030().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-2030-5-test-tools-qa-services/'); 
	});

	it('Smart Energy > Tools > IEEE 1547.1 Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsIEEE1547().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-1547-1-test-tools/');
	});

	it('Smart Energy > Tools > OpenADR Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsOpenADR().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/openadr-2-test-tools-and-qa-services/'); 
	});

	it('Smart Energy > Tools > Certification Testing Labs', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsCertificationTestingLabs().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/smart-energy-certification-testing/'); 
	});

	it('Smart Energy > Tools > Wi-SUN Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsWiSUNtestTools().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/wi-sun-test-tools/'); 
	});

	it('Smart Energy > Training > Smart Energy Technology Training', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingSmartEnergyTech().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/smart-energy-technology-training/'); 
	});

	it('Smart Energy > Training > IEEE 2030.5 DER Workshop', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingIEEE2030().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/training/ieee-2030-5-der-workshop/'); 
	});

	it('Smart Energy > Training > OpenADR Training', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingOpenADR().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/training/openadr-training-workshop/'); 
	});

	it('Smart Energy > Training > Tools & Maintenance', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingToolsAndMaintenance().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/shop/'); 
	});
	
	it('Smart Energy > Services > Vendor Service Solutions', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyServices().trigger('mouseover');
		navBar.getSmartEnergyServicesVendor().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/guiding-vendors-through-der-chaos/'); 
	});
	
	it('Smart Energy > Services > Utility Service Solutions', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyServices().trigger('mouseover');
		navBar.getSmartEnergyServicesUtility().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/guiding-utilities-through-der-chaos/'); 
	});

	it('Smart Energy > GridEdge Intelligence', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyGridEdge().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/industries/smart-energy/gridedge-intelligence-launch/'); 
	});

	it('Smart Energy > QualityLogic Store', () =>{
		const navBar = new navBarSelectors();
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyQualityLogicStore().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/store/'); 
	});

	it('Training > IEEE 2030.5 Training', () =>{
		const navBar = new navBarSelectors();
		navBar.getTraining().click();
		navBar.getTrainingIEEE2030().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/training/ieee-2030-5-der-workshop/'); 
	});

	it('Training > OpenADR Training', () =>{
		const navBar = new navBarSelectors();
		navBar.getTraining().click();
		navBar.getTrainingOpenADR().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/training/openadr-training-workshop/'); 
	});

	it('Training > Fax Technology Training', () =>{
		const navBar = new navBarSelectors();
		navBar.getTraining().click();
		navBar.getTrainingFaxTech().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/training/fax-technology-training/'); 
	});

	it('Training > Free Webinars', () =>{
		const navBar = new navBarSelectors();
		navBar.getTraining().click();
		navBar.getTrainingFreeWebinars().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/free-webinars/'); 
	});

	it('Training > QualityLogic Store', () =>{
		const navBar = new navBarSelectors();
		navBar.getTraining().click();
		navBar.getTrainingQualityLogicStore().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/store/'); 
	});

	it('QA Resources > Blog', () =>{
		const navBar = new navBarSelectors();
		navBar.getQAresources().click();
		navBar.getQAresourcesBlog().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/blog/'); 
	});

	it('QA Resources > Case Studies', () =>{
		const navBar = new navBarSelectors();
		navBar.getQAresources().click();
		navBar.getQAresourcesCaseStudies().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/case-studies/'); 
	});

	it('QA Resources > News & Events', () =>{
		const navBar = new navBarSelectors();
		navBar.getQAresources().click();
		navBar.getQAresourcesNews().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/news-events/'); 
	});

	it('QA Resources > Content Library', () =>{
		const navBar = new navBarSelectors();
		navBar.getQAresources().click();
		navBar.getQAresourcesContentLibrary().click(); 
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/content-library/'); 
	});

	it("Contact Us", () => {
		const navBar = new navBarSelectors();
		navBar.getContactUs().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/');
	});

	it("Search", () => {
		const navBar = new navBarSelectors();
		navBar.getSearch().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/search/');
	});

	it("Cart", () => {
		const navBar = new navBarSelectors();
		navBar.getCart().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/cart/');
	});

});
