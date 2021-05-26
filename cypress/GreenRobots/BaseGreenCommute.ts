/// <reference types="Cypress" />
import '../support/index';

export abstract class BaseEyes {
  seesTextinUrl(text: string) {
    cy.url().should("contain", text)
  }

  seesValueWithClass(domClass: string, value: string) {
    cy.get(`.${domClass}`).should('have.value', value);
    return this;
  }

  hasLengthForDomWithClass(domElement: string,elementName:string,children : string, length: number) {
    cy.get(`[${domElement}="${elementName}"]>${children}`).should('have.length', length);
    return this;
  }

  hasTextwithDomClass(domElement: string,elementName:string,children : string, text:string){
    cy.get(`[${domElement}="${elementName}"]>${children}`).should('have.text', text);
    return this;
  }

  containsTextwithDomClass(domElement: string,elementName:string, text:string){
    cy.get(`[${domElement}="${elementName}"]`).should('contain', text);
    return this;
  }



}



export class BaseDependencies {

  accessUrl(url: string) {
    cy.visit(`${url}`);
    return this;
  }


}

export class BaseHands {

  wait(milliSecs: number) {
    cy.wait(milliSecs);
    return this;
  }

  clickOnDomElement(dom: string) {
    cy.get(dom).click({ force: true });
    return this;
  }

  clickOnDomClass(dom: string) {
    cy.get(`.${dom}`).click({ force: true });
    return this;
  }

  typeTextonClass(class1: string, text: string) {
    cy.get(`.${class1}`).type(text, { force: true });
    return this;
  }

  typeTextonDom(locatorName: string, locatorValue: string, text: string) {
    cy.get(`[${locatorName}="${locatorValue}"]`).type(text, { force: true });
    return this;
  }

  ClickOnTextWithClassAndIndex(locatorName: string, domClass: string, index: number) {
    cy.get(`[${locatorName}=${domClass}]`)
      .eq(index)
      .click();
    return this;
  }

  clickOnClasswithButtonandIndex(domClass: string, index: number) {
    cy.get(`.${domClass}`)
      .eq(index)
      .click();
    return this;
  }

  clickOnClasswithButtonTagandIndex(domClass: string, index: number)
  {
    cy.get(domClass)
      .eq(index)
      .click();
    return this;
  }

  clickonDomusingLocator(locatorName: string, locatorValue: string,) {
    cy.get(`[${locatorName}="${locatorValue}"]`).click({multiple:true})
    return this;
  }

  checkDomClass(class1:string){
    cy.get(class1).check()
  }

  clickDomclassChild(class1:string,child1:string){

    cy.get(`.${class1}>${child1}`).click()

  }
}


