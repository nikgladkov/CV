/// <reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//global common
import {
  MainPageInTest,
  ContactPageInTest,
  ContactUsThankYouPageInTest,
} from "../../support/common_classes/PageInTest";

const mainPageInTest = new MainPageInTest();
const contactPageInTest = new ContactPageInTest();
const contactUsThankYouPageInTest = new ContactUsThankYouPageInTest();

Given('I navigate to the Webdriver University homepage', () => {
  cy.visit("/");
});

When('I click on the Contact Us button', () => {
  cy.get(mainPageInTest.contactUsLink).invoke("removeAttr", "target").click();
});

When('I type a first name', () => {
  cy.get(contactPageInTest.firstNameInput).type("Michael");
});

When('I type a last name', () => {
  cy.get(contactPageInTest.lastNameInput).type("Scott");
});

When('I enter an email', () => {
  cy.get(contactPageInTest.emailInput).type(
    "michael_scott65@dundermifflin.com"
  );
});

When('I add a Comment', () => {
  cy.get(contactPageInTest.commentsInput).type(
    "You miss 100% of the shots you dont take. - Wayne Gretzky” - Michael Scott1"
  );
});

When('I click on the Submit button', () => {
  cy.get(contactPageInTest.submitButton).click();
});

Then(
  'I should be presented with successful contact us submission message',
  () => {
    cy.get(contactUsThankYouPageInTest.successTitle).should(
      "have.text",
      contactUsThankYouPageInTest.successTitleExpectedText
    );
  }
);

Then(
  'I should be presented with UNsuccessful contact us submission message',
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When('I type a specific first name {string}', (firstName: string) => {
  cy.get(contactPageInTest.firstNameInput).type(firstName);
});

When('I type a specific last name {string}', (lastName: string) => {
  cy.get(contactPageInTest.lastNameInput).type(lastName);
});

When('I type a specific email {string}', (email: string) => {
  cy.get(contactPageInTest.emailInput).type(email);
});

When(
  'I type a specific word {string} and number {int} within the Comment',
  (word: string, number: number) => {
    cy.get(contactPageInTest.commentsInput).type(word + number);
  }
);
