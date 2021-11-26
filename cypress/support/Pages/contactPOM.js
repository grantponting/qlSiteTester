
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
}
export default contactPOM;