const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "../cypress_project/cypress/reports/cucumber-json/",
  reportPath: "../cypress_project/cypress/reports/cucumber-html/",
});
