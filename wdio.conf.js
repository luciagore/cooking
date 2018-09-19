exports.config = {
  
    specs: [
        './test/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
 
    sync: true,

    logLevel: 'silent',
   
    coloredLogs: true,

    deprecationWarnings: true,
   
    bail: 0,
    
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: '(./errorShots/)',
 
    baseUrl: 'http://localhost:3000',
    
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
   
    framework: 'mocha',
  
    mochaOpts: {
        ui: 'bdd'
    },

    framework: 'cucumber',

   cucumberOpts: {
       ui: 'bdd'
   },
   
}
