const config = {
    verbose: true,
    collectCoverage: true,
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    collectCoverageFrom: [
        '**/*.{js,jsx}',
      ],
    moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    },  
  };
  
  export default config;
  