const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/cucumber-json-github",
  reportPath: "./cypress/reports/html-report-github",
});
