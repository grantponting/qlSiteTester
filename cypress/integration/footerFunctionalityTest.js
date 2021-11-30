/// <reference types="cypress" />

import navBarSelectors from '../support/Pages/multiPagePOM.js';

const navBar = new navBarSelectors();

describe ('Verify the Footer is functioning', () =>{
	beforeEach(() => {
        cy.viewport(1440, 850);
		cy.on('uncaught:exception', (err, runnable) => {		//this error is seen on several pages, ignoring so that tests do not fail due to this error
			expect(err.message, { log: false }).to.include('wp is not defined');
			return false;
		}); 
	}); 
	
	it('What we Test', () => {
        cy.navigateToSite(); 
		navBar.getFooterWhatWeTest().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/what-we-test/');
        });
    });

    it('Test Solutions', () => {
		navBar.getFooterTestSolutions().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/testing-solutions/');
        });
    });

    it('Knowledge Center', () => {
		navBar.getFooterKnowledgeCenter().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/knowledge-center/');
        });
    });

    it('Why Us', () => {
		navBar.getFooterWhyUs().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/company/');
        });
    });

    it('Who we Are', () => {
		navBar.getFooterWhoWeAre().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/who-we-are/');
        });
    });

    it('Careers', () => {
		navBar.getFooterCareers().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/company/careers/');
        });
    });

    it('Contact Us', () => {
		navBar.getFooterContactUs().should('have.attr', 'href').then((href) => {
			expect(href).to.contain('https://www.qualitylogic.com/contact/');
        });
    });

    it('Facebook', () => {
		navBar.getFacebook().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.facebook.com/QualityLogic');
        });
    });

    it('Twitter', () => {
		navBar.getTwitter().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://twitter.com/QualityLogic');
        });
    });

    it('Linked In', () => {
		navBar.getLinkedIn().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.linkedin.com/company/qualitylogic');
        });
    });

    it('YouTube', () => {
		navBar.getYouTube().should('have.attr', 'href').then((href) => {
            expect(href).to.contain('https://www.youtube.com/channel/UCx2YYjNRi_VyGnMNL1pFU8w');
        });
    });

    it('Address', () => {
        navBar.getAddress()
            .invoke('text')
            .invoke('replace', /\u00a0/g, ' ')
            .should('eq', 'QualityLogic HQ: 9576 West Emerald Street, Boise, ID 83704 USA Oklahoma: 4045 NW 64th Street, Suite 120 Oklahoma City, OK 73116 USA California: 2245 1st Street, Suite 103 Simi Valley, CA 93065 USA');
    });
});