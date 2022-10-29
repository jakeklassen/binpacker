/**
 * @type {import('mocha').MochaOptions}
 */
module.exports = {
  extensions: ['ts'],
  spec: './src/**/mocha/*.spec.ts',
  loader: ['tsm'],
};
