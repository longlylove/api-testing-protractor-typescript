//import { browser } from "protractor";

// Require protractor-beautiful-reporter to generate reports.
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--disable-gpu --headless']
        }
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    specs: ['../temp/test-suites/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },

    onPrepare: () => {

        // Add reporter
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false, // Preserve base directory
            docTitle: 'Test Automation Execution Report', // Add title for the html report
            docName: 'TestResult.html', // Change html report file name
        }).getJasmine2Reporter());
    }
}