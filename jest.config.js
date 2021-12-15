module.exports = {
    transformIgnorePatterns: [
        "node_modules/(?!dips-smart-on-fhir-svelte|svelte/store|fhirclient)"
      ],
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    testEnvironment: 'jest-environment-jsdom',
  }