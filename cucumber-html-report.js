var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/reports/json/cucumber_report.json',
    output: 'cypress/reports/html/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    name: "Amphora-test-automation",
    brandTitle: "Test Report",
    storeScreenshots: true,
    screenshotsDirectory: "cypress/screenshots",
    metadata: {
        "App Version": "Amphora 1.0",
        "Test Environment": "STAGING",
        "Browser": "Electron 106 headless",
        "Platform": "Windows Server 2019 Standard",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
