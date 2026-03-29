// jest.e2e.config.js
export default {
    testEnvironment: 'node',  // ← Важно для Puppeteer!
    testTimeout: 30000,
    maxWorkers: 1,
    testMatch: ['**/e2e/**/*.test.js'],
    forceExit: true,
    detectOpenHandles: true,
    clearMocks: true,
    verbose: true,
};