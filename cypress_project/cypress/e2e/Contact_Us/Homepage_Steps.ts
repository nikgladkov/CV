/// <reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.webdriveruniversity.com/";

Given(/^I navigate to the WebdriverUniversity homepage$/, () => {
  cy.visit(baseUrl);
});

When(/^I click on the Contact Us button$/, () => {
  return true;
});

When(/^I type a first name$/, () => {
  return true;
});

When(/^I type a last name$/, () => {
  return true;
});

When(/^I enter an email$/, () => {
  return true;
});

When(/^I add a Comment$/, () => {
  return true;
});

When(/^I cLick on the Submit button$/, () => {
  return true;
});

Then(
  /^I should be presented with successful contact us submission message$/,
  () => {
    return true;
  }
);
