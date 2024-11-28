const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports_github",
  reportPath: "reports_github",
  metadata: {
    device: "GitHub",
  },
});
