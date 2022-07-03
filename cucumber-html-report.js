const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/test-artifacts/cucumber-json",  
    reportPath: "cypress/test-artifacts/cucumber-reports",
    displayDuration: true,
    //durationInMS: true,
    displayReportTime: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "98",
        },
        device: "MacBook Pro",
        platform: {
            name: "osx",
            version: "12.2.1",
        },
    },
});