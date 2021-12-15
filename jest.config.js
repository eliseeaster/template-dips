module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!dips-smart-on-fhir-svelte|svelte/store|fhirclient)"
    ],
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    moduleDirectories: ["node_modules", "src"],
    // moduleDirectories: ["node_modules", "bower_components", "shared"],
    testEnvironment: 'jest-environment-jsdom',

    // testPathIgnorePatterns: ["node_modules"],
    // bail: false,
    // verbose: true,
    //transformIgnorePatterns: ["node_modules"],
    // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

    // moduleNameMapper: { '^.+\\.(css|less|scss)$': 'babel-jest',},

    
  }