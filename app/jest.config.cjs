module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(msw|@mswjs|rettime|@open-draft|until-async)/)",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "\\.(svg|png|jpg|jpeg|gif|webp)$": "<rootDir>/src/__mocks__/fileMock.cjs",
  },
};
