const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports_github/cucumber-json",
  reportPath: "./cypress/reports_github/cucumber-html",
  metadata: {
    device: "GitHub",
  },
});
