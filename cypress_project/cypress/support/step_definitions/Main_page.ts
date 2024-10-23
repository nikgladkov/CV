/// <reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//global common
import { MainPageInTest } from "../common_classes/PageInTest";

const mainPageInTest = new MainPageInTest();

Given("I navigate to the Webdriver University homepage", () => {
  cy.visit("/");
});
