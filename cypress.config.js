const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://www.morele.net",
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,

  },
  retries: {
    runMode: 0,
    openMode: 0
  }
})