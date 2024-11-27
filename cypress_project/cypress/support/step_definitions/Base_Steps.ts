/// <reference types="cypress"/>
import {
  Given,
  Then,
  When,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  //Before Hook
  cy.log("Executes before each ScenarioTest.");
  cy.clearLocalStorage();
});

Before({ tags: "@smoke" }, () => {
  //Before Hook 2
  cy.log("Executong Smoke Pack");
});

After(() => {
  //After Hook
  cy.log("Executes after each ScenarioTest.");
});
