/// <reference types="cypress" />

import navBarSelectors from '../support/Pages/multiPagePOM.js';

const navBar = new navBarSelectors();

describe ('Verify the Nav Bar is functioning', () =>{
	beforeEach(() => {
        cy.viewport(1440, 850);
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	
	it('Home Page Button', () => {
		cy.navigateToSite();
		navBar.getHomePageButton().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/');
		});
	});

	it('Test Services > Software Test Services', () => {   
		navBar.getTestServices().click();
		navBar.getSoftwareTestServices().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/');
		});
	});

	it('Test Services > What we Test > Mobile Apps', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestMobileApps().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/what-we-test/mobile-apps/');
		});
	});

	it('Test Services > What we Test > Websites and Web Apps', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestWebsites().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/what-we-test/web/');
		});
	});

	it('Test Services > What we Test > OTT & Streaming Media', () => {

		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestOTT().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/what-we-test/ott-streaming-media/');
		});
	});

	it('Test Services > What we Test > Smart Energy Standards', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestSmartEnergy().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/');
		});
	});

	it('Test Services > What we Test > Big Data Analytics & Telemetry', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestBigData().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/analytics-telemetry/');
		});
	});

	it('Test Services > What we Test > API Testing', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestAPI().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/apis/');
		});
	});

	it('Test Services > What we Test > Virtual and Augmented Reality Testing', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestVR().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/virtual-augmented-reality/');
		});
	});

	it('Test Services > What we Test > eCommerce', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestEcommerce().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/ecommerce/');
		});
	});

	it('Test Services > What we Test > Internet of Things (IoT)', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestIoT().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/internet-of-things-iot/');
		});
	});

	it('Test Services > What we Test > Print Systems', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestPrintSystems().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/what-we-test/print-systems/');
		});
	});

	it('Test Services > What we Test > Fax & Fax over IP Testing', () => {
		navBar.getTestServices().click();
		navBar.getWhatWeTest().trigger('mouseover');
		navBar.getWhatWeTestFax().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/fax-fax-over-ip/');
		});
	});

	it('Test Services > Test Solutions > Functional Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsFunctionalTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/functionality-testing/');
		});
	});

	it('Test Services > Test Solutions > Test Automation Services', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsTestAutomation().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/test-automation/');
		});
	});

	it('Test Services > Test Solutions > Usability Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsUsabilityTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/usability-testing/');
		});
	});

	it('Test Services > Test Solutions > Accessibility Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsAccessibilityTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/accessibility-testing/');
		});
	});

	it('Test Services > Test Solutions > WCAG Compliance Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsWCAG().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/wcag-compliance-testing-certification/');
		});
	});

	it('Test Services > Test Solutions > Load & Performance Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsLoadAndPerformance().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/load-performance-testing/');
		});
	});

	it('Test Services > Test Solutions > Regression Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsRegressionTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/regression-testing/');
		});
	});

	it('Test Services > Test Solutions > Exploratory Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsExploratoryTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/exploratory-testing/');
		});
	});

	it('Test Services > Test Solutions > Interoperability Testing', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsInteroperabilityTesting().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/interoperability-testing/');
		});
	});

	it('Test Services > Test Solutions > QA Test Tools', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsQAtestTools().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/qa-test-tools/');
		});
	});

	it('Test Services > Test Solutions > Agile QA', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsAgileQA().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/agile-qa/');
		});
	});

	it('Test Services > Test Solutions > Test & Technology Training', () => {
		navBar.getTestServices().click();
		navBar.getTestSolutions().trigger('mouseover');
		navBar.getTestSolutionsTestAndTechTraining().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/testing-solutions/test-technology-training/');
		});
	});

	it('Test Services > Industries > Retail & eCommerce', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesRetail().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/retail-ecommerce/');
		});
	});

	it('Test Services > Industries > Media & Entertainment', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesMedia().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/media-entertainment/');
		});
	});

	it('Test Services > Industries > Smart Energy', () => {
		navBar.getTestServices().click();
	    navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesSmartEnergy().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/smart-energy/');
		});
	});

	it('Test Services > Industries > Social & Dating', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesSocial().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/social-dating/');
		});
	});

	it('Test Services > Industries > Marketing & Design', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesMarketing().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/marketing-design/');
		});
	});

	it('Test Services > Industries > Utilities', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesUtilities().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/utilities/');
		});
	});

	it('Test Services > Industries > Imaging & 3D Printing', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesImaging().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/imaging-3d-printing/');
		});
	});

	it('Test Services > Industries > Telecommunications', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesTelecommunications().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/telecom/');
		});
	});

	it('Test Services > Industries > Education & Nonprofits', () => {
		navBar.getTestServices().click();
		navBar.getIndustries().trigger('mouseover');
		navBar.getIndustriesEducation().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/education-nonprofits/');
		});
	});

	it('Test Tools > Smart Energy Test Tools', () =>{
		navBar.getTestTools().click();
		navBar.getTestToolsSmartEnergyTestTools().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/test-tools/smart-grid-test-tools/');
		});
	});

	it('Test Tools > Printer and PDL', () =>{
		navBar.getTestTools().click();
		navBar.getTestToolsPrinterAndPDL().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/test-tools/printer-test-tools/');
		});
	});

	it('Test Tools > Fax Test Tools', () =>{
		navBar.getTestTools().click();
		navBar.getTestToolsFaxTestTools().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/test-tools/fax-test-tools/');
		});
	});

	it('Test Tools > Cost Effective Fax', () =>{
		navBar.getTestTools().click();
		navBar.getTestToolsCostEffectiveFax().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/cost-effective-fax-testing/');
		});
	});

	it('Test Tools > Quality Logic Store', () =>{
		navBar.getTestTools().click();
		navBar.getTestToolsQualityLogicStore().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('/store');
		});
	});

	it('Smart Energy > Tools > IEEE 2030.5 Test Tools', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsIEEE2030().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-2030-5-test-tools-qa-services/'); 
		});
	});

	it('Smart Energy > Tools > IEEE 1547.1 Test Tools', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsIEEE1547().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/ieee-1547-1-test-tools/');
		});
	});

	it('Smart Energy > Tools > OpenADR Test Tools', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsOpenADR().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/openadr-2-test-tools-and-qa-services/');
		}); 
	});

	it('Smart Energy > Tools > Certification Testing Labs', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsCertificationTestingLabs().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/smart-energy/smart-energy-certification-testing/');
		});
	});

	it('Smart Energy > Tools > Wi-SUN Test Tools', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTools().trigger('mouseover');
		navBar.getSmartEnergyToolsWiSUNtestTools().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/wi-sun-test-tools/'); 
		});
	});

	it('Smart Energy > Training > Smart Energy Technology Training', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingSmartEnergyTech().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/what-we-test/smart-energy-standards/smart-energy-technology-training/');
		}); 
	});

	it('Smart Energy > Training > IEEE 2030.5 DER Workshop', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingIEEE2030().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/training/ieee-2030-5-der-workshop/');
		});
	});

	it('Smart Energy > Training > OpenADR Training', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingOpenADR().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/training/openadr-training-workshop/');
		});
	});

	it('Smart Energy > Training > Tools & Maintenance', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyTraining().trigger('mouseover');
		navBar.getSmartEnergyTrainingToolsAndMaintenance().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/shop/'); 
		});
	});
	
	it('Smart Energy > Services > Vendor Service Solutions', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyServices().trigger('mouseover');
		navBar.getSmartEnergyServicesVendor().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/smart-energy/guiding-vendors-through-der-chaos/'); 
		});
	});
	
	it('Smart Energy > Services > Utility Service Solutions', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyServices().trigger('mouseover');
		navBar.getSmartEnergyServicesUtility().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/smart-energy/guiding-utilities-through-der-chaos/'); 
		});
	});

	it('Smart Energy > GridEdge Intelligence', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyGridEdge().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/industries/smart-energy/gridedge-intelligence-launch/'); 
		});
	});

	it('Smart Energy > QualityLogic Store', () =>{
		navBar.getSmartEnergy().click();
		navBar.getSmartEnergyQualityLogicStore().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( '/store'); 
		});
	});

	it('Training > IEEE 2030.5 Training', () =>{
		navBar.getTraining().click();
		navBar.getTrainingIEEE2030().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/training/ieee-2030-5-der-workshop/'); 
		});
	});

	it('Training > OpenADR Training', () =>{
		navBar.getTraining().click();
		navBar.getTrainingOpenADR().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/training/openadr-training-workshop/'); 
		});
	});

	it('Training > Fax Technology Training', () =>{
		navBar.getTraining().click();
		navBar.getTrainingFaxTech().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/training/fax-technology-training/'); 
		});
	});

	it('Training > Free Webinars', () =>{
		navBar.getTraining().click();
		navBar.getTrainingFreeWebinars().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/knowledge-center/free-webinars/'); 
		});
	});

	it('Training > QualityLogic Store', () =>{
		navBar.getTraining().click();
		navBar.getTrainingQualityLogicStore().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( '/store'); 
		});
	});

	it('QA Resources > Blog', () =>{
		navBar.getQAresources().click();
		navBar.getQAresourcesBlog().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/knowledge-center/blog/'); 
		});
	});

	it('QA Resources > Case Studies', () =>{
		navBar.getQAresources().click();
		navBar.getQAresourcesCaseStudies().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/knowledge-center/case-studies/'); 
		});
	});

	it('QA Resources > News & Events', () =>{
		navBar.getQAresources().click();
		navBar.getQAresourcesNews().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/knowledge-center/news-events/'); 
		});
	});

	it('QA Resources > Content Library', () =>{
		navBar.getQAresources().click();
		navBar.getQAresourcesContentLibrary().should('have.attr', 'href').then((href) => {
			expect(href).to.contain( 'https://www.qualitylogic.com/knowledge-center/content-library/'); 
		});
	});

	it("Contact Us", () => {
		navBar.getContactUs().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/contact/');
		});
	});

	it("Search", () => {
		navBar.getSearch().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/search/');
		});
	});

	it("Cart", () => {
		navBar.getCart().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/cart/');
		});
	});

});
