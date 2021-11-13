/// <reference types="cypress" />

import navBarSelectors from '../support/pages/navBarSelectors';

describe ('Verify the Nav Bar is functioning', () =>{
	beforeEach(() => {
		cy.viewport(1440, 850); 
		cy.navigateToSite(); 
	}); 
	
	it('Home Page Button', () => {
		const navBar = new navBarSelectors();
		navBar.getHomePageButton().click(); 
	});

	it('Test Services', () => {
		const navBar = new navBarSelectors();
		navBar.getTestServices().click(); 
	
	});

	it('Test Tools', () =>{
		const navBar = new navBarSelectors();
		navBar.getTestTools().click(); 
	});
});
