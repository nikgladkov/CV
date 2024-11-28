const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "/reports_github/cucumber-json",
  reportPath: "/reports_github/cucumber-html",
  metadata: {
    device: "GitHub",
  },
});
