
class contactPOM{
getRequestQuoteCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.teal.large.expanded');
}
getGeneralInquiriesCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.purple.large.expanded');
}
getSupportCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.blue.large.expanded');
}
getCareersCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.gray.large.expanded');
}
getFirstNameField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$0"]').find('div.hs_firstname').find('div.input').find('input'); 
}
getLastNameField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$0"]').find('div.hs_lastname').find('div.input').find('input'); 
}
getWorkEmailField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$1"]').find('div.hs_email').find('div.input').find('input');
}
getCompanyField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$2"]').find('div.hs_company').find('div.input').find('input'); 
}
getAreYouDropdown(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$3"]').find('div.hs_are_you_').find('div.input'); 
}
getAreaOfInterestDropdown(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$4"]').find('div.hs_area_of_interest').find('div.input'); 

}
getTellUsAboutProjectField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$5"]').find('div.hs_project_description').find('div.input').find('textarea'); 
}
getLogoCarousel(){
    return cy.get('section#clients-logos').find('div#clients-carousel').find('div.owl-carousel'); 
}
}
export default contactPOM;