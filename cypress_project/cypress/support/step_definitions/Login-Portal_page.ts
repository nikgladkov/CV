/// <reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//global common
import {
  MainPageInTest,
  LoginPortalPageInTest,
} from "../common_classes/PageInTest";

const mainPageInTest = new MainPageInTest();
const loginPortalPageInTest = new LoginPortalPageInTest();

When("I click on the Login Portal button", () => {
  cy.get(mainPageInTest.loginPortalLink).invoke("removeAttr", "target").click();
});

When("I type a specific user name {string}", (username: string) => {
  cy.get(loginPortalPageInTest.passwordInput).type(username);
});

When("I type a specific password {string}", (password: string) => {
  cy.get(loginPortalPageInTest.passwordInput).type(password);
});

When("I click on the Login button", () => {
  cy.get(loginPortalPageInTest.submitButton).click();
});

Then("I should be presented with alert {string}", (message: string) => {
  //to do
  cy.on("window:alert", (alertText) => {expect(alertText).to.contain('cccc')});
});
