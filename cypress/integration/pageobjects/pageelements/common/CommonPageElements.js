/// <reference types="cypress" />

export default class CommonPageElements {

    pagetitle() {
        return cy.title();
    }

    iTag() {
        return cy.get('i');
    }

    elTag(el) {
        return cy.get(el);
    }

    rootTag() {
        return cy.root();
    }

    tblThTag() {
        return cy.get('th');
    }

    tblTdTag() {
        return cy.get('td');
    }

    hmePageContainer() {
        return cy.get('div[class="legacy-container"]');
    }

    tblTheadTrTag(){
        return cy.get('thead > tr');
    }

    tblTbodyTrTag() {
        return cy.get('tbody > tr');
    }

    tblTdSpanTag() {
        return cy.get('td > span');
    }

    tblTdSpanSpanInputText() {
        return cy.get('td > span > span > input[type="text"]');
    }

    tblTdInputCheckbox() {
        return cy.get('td > input[type="checkbox"]');
    }

    tagTbodyTr(){
        return 'tbody > tr';
    }
    menu(type){
        return cy.xpath('//span[.="'+type+'"]').eq(0).should('be.visible');

    }
    subMenu(type){
        return cy.xpath('//span[.="'+type+'"]').eq(0).should('be.visible');
    }
     txtBoxAccount(){
        return cy.xpath('//td/label[.="Account*"]/following::input[@type="text"][1]').should('be.visible')
     }
     slctAccount(ele) {
        return cy.xpath('//td[contains(text(),"' + ele + '")]').should('be.visible');
    }
    nextBtn(){
        return cy.xpath("//button[@id='Fsc:qouteWiz_next']").should('be.visible');
    }

  
}