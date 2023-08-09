const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    animationDistanceThreshold: 5,
    arch: 'arm64',
    baseUrl: 'https://www.gear4music.com',
    blockHosts: [],
    browsers: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '115.0.5790.102',
        path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        minSupportedVersion: 64,
        majorVersion: '115',
      },
      // {
      //   name: 'firefox',
      //   family: 'firefox',
      //   channel: 'stable',
      //   displayName: 'Firefox',
      //   version: '111.0.1',
      //   path: '/Applications/Firefox.app/Contents/MacOS/firefox',
      //   minSupportedVersion: 86,
      //   majorVersion: '111',
      // },
      // {
      //   name: 'electron',
      //   channel: 'stable',
      //   family: 'chromium',
      //   displayName: 'Electron',
      //   version: '106.0.5249.51',
      //   path: '',
      //   majorVersion: 106,
      // },
    ],
    chromeWebSecurity: true,
    clientCertificates: [],
    defaultCommandTimeout: 4000,
    downloadsFolder: 'cypress/downloads',
    env: {},
    excludeSpecPattern: '*.hot-update.js',
    execTimeout: 60000,
    fileServerFolder: '',
    fixturesFolder: 'cypress/fixtures',
    hosts: null,
    includeShadowDom: false,
    isInteractive: true,
    keystrokeDelay: 0,
    modifyObstructiveCode: true,
    // nodeVersion: "system",
    numTestsKeptInMemory: 50,
    pageLoadTimeout: 60000,
    platform: 'darwin',
    port: null,
    projectId: null,
    redirectionLimit: 20,
    reporter: 'spec',
    reporterOptions: null,
    requestTimeout: 5000,
    resolvedNodePath: null,
    resolvedNodeVersion: null,
    responseTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    scrollBehavior: 'top',
    slowTestThreshold: 10000,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    supportFolder: false,
    taskTimeout: 60000,
    testIsolation: false,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    videoUploadOnPasses: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    waitForAnimations: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});