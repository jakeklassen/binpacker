/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.[tj]sx?$': [
      'esbuild-runner/jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '(.+)\\.js': '$1',
  },
};
