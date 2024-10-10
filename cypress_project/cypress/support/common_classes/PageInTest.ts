/// <reference types="cypress"/>

export class PageInTest {
  url: string | undefined;
  title: string | undefined;
  
  opens(url: string) {
    cy.visit(url);
  }
}