module.exports = {
  // Mock CSS files and other static assets
  moduleNameMapper: {
    // Mock CSS, SCSS, SASS files
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    // Mock image files
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    // Mock other static assets
    "\\.(ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },

  // Indicates whether the coverage information should be collected
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, skipped tests are matched
  testPathIgnorePatterns: ["/node_modules/"],

  // This option sets the URL for the jsdom environment
  testURL: "http://localhost",

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};

