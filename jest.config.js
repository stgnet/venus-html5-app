module.exports = {
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["./cypress"],
  setupTestFrameworkScriptFile: "<rootDir>test/setupTests.js"
}