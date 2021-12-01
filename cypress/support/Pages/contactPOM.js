
class contactPOM{
/**
* Get the Request Quote CTA
*/
getRequestQuoteCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.teal.large.expanded[href="/contact/request-a-quote/"]');
}
/**
* Get the General Inquiries CTA
*/
getGeneralInquiriesCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.purple.large.expanded[href="/contact/general-inquiries/"]');
}
/**
* Get the Support CTA
*/
getSupportCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.blue.large.expanded[href="/contact/support/"]');
}
/**
* Get the Careers CTA
*/
getCareersCTA(){
    return cy.get('div.medium-5.large-4.columns.contact-info').find('a.button.gray.large.expanded[href="/contact/careers/"]');
}
/**
* Get the First Name Field
*/
getFirstNameField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$0"]').find('div.hs_firstname').find('div.input').find('input'); 
}
/**
* Get the Last Name Field
*/
getLastNameField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$0"]').find('div.hs_lastname').find('div.input').find('input'); 
}
/**
* Get the Work Email Field
*/
getWorkEmailField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$1"]').find('div.hs_email').find('div.input').find('input');
}
/**
* Get the Company Field
*/
getCompanyField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$2"]').find('div.hs_company').find('div.input').find('input'); 
}
/**
* Get the Are You dropwdown
*/
getAreYouDropdown(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$3"]').find('div.hs_are_you_').find('div.input'); 
}
/**
* Get the Area of Interest Dropdown
*/
getAreaOfInterestDropdown(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$4"]').find('div.hs_area_of_interest').find('div.input'); 
}
/**
* Get the Tell us about your Project Field
*/
getTellUsAboutProjectField(){
    return cy.get('[data-reactid=".hbspt-forms-0.1:$5"]').find('div.hs_project_description').find('div.input').find('textarea'); 
}
/**
* Get the Logo Carousel
*/
getLogoCarousel(){
    return cy.get('section#clients-logos').find('div#clients-carousel').find('div.owl-carousel'); 
}
/**
* Get the Aimtex link
*/
getAimtexLink(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="https://www.aimtex.net/"]');
}
/**
* Get the Aimtex email
*/
getAimtexEmail(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="mailto:itcax@aimtex.net"]');
}
/**
* Get the GCOM link
*/
getGCOMlink(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="http://www.gcomtw.com/"]');
}
/**
* Get the GCOM email
*/
getGCOMemail(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="mailto:service@gcomtw.com"]');
}
/**
* Get the Yan Thai link
*/
getYanThaiLink(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="http://www.yanthai.com/"]');
}
/**
* Get the Yan Thai email
*/
getYanThaiEmail(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="mailto:ythai@yanthai.com"]');
}
/**
* Get the Daekyoung link
*/
getDaekyoungLink(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="http://www.dktechsys.com/"]');
}
/**
* Get the Daekyoung email
*/
getDaekyoungEmail(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="mailto:jinnyee7@dktechsys.com"]');
}
/**
* Get the GridWiz Inc. link
*/
getGridWizLink(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="http://www.gridwiz.com/"]');
}
/**
* Get the GridWiz Inc. email
*/
getGridWizEmail(){
    return cy.get('section.two-column-content.module-pad.bg-blue').find('a[href="mailto:david@gridwiz.com"]');
}
}
export default contactPOM;