module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testRegex: '(/__tests__/.*|(\\.|/))test\\.[jt]sx?$',
    testEnvironment: 'jest-environment-jsdom',
};