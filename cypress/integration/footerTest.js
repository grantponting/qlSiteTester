/// <reference types="cypress" />

import navBarSelectors from '../support/Pages/multiPagePOM.js';

describe ('Verify the Footer is functioning', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850);
		cy.navigateToSite(); 
	
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	
	it('What we Test', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterWhatWeTest().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/what-we-test/');
    });

    it('Test Solutions', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterTestSolutions().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/testing-solutions/');
    });

    it('Knowledge Center', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterKnowledgeCenter().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/knowledge-center/');
    });

    it('Why Us', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterWhyUs().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/company/');
    });

    it('Who we Are', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterWhoWeAre().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/who-we-are/');
    });

    it('Careers', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterCareers().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/company/careers/');
    });

    it('Contact Us', () => {
        const navBar = new navBarSelectors();
		navBar.getFooterContactUs().click();
		cy.url().should('eq', 'https://www.qualitylogic.com/contact/');
    });

    it('Facebook', () => {
        const navBar = new navBarSelectors();
		navBar.getFacebook().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.facebook.com/QualityLogic');
        });
    });

    it('Twitter', () => {
        const navBar = new navBarSelectors();
		navBar.getTwitter().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://twitter.com/QualityLogic');
        });
    });

    it('Linked In', () => {
        const navBar = new navBarSelectors();
		navBar.getLinkedIn().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.linkedin.com/company/qualitylogic');
        });
    });

    it('YouTube', () => {
        const navBar = new navBarSelectors();
		navBar.getYouTube().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.youtube.com/channel/UCx2YYjNRi_VyGnMNL1pFU8w');
        });
    });

    it('Address', () => {
        const navBar = new navBarSelectors();
        navBar.getAddress()
            .invoke('text')
            .invoke('replace', /\u00a0/g, ' ')
            .should('eq', 'QualityLogic HQ: 9576 West Emerald Street, Boise, ID 83704 USA Oklahoma: 4045 NW 64th Street, Suite 120 Oklahoma City, OK 73116 USA California: 2245 1st Street, Suite 103 Simi Valley, CA 93065 USA');
    });
});