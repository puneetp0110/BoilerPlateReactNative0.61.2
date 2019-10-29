module.exports = {
    "preset": "react-native",
    moduleDirectories: [
      'node_modules'
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(react-native|AwesomeProject|redux-persist|react-navigation|react-navigation-stack)/)"
    ],
    transform: {
        "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest"
    }
  }