

class navBarSelectors {

getHomePageButton(){
	return cy.get('li.home');
}
getTestServices(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(0); 
}
getTestTools(){
	return cy.get('ul#menu-new-primary-navigation').children().eq(1); 
}

}
export default navBarSelectors;