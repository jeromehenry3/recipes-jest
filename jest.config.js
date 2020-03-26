const {defaults} = require('jest-config');


module.exports = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/main.ts"
  ],
}
