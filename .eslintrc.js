module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
	'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
  	"brace-style": ["off"],
    "eol-last": ["off"],
    "eqeqeq": ["off"],
    "indent": ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    "max-len": ["off"],
	"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-tabs": ["off"],
    "no-underscore-dangle": ["off"],
    "object-curly-spacing": ["error", "never"],
    "quotes": ["off"],
    "react/destructuring-assignment": ["off"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": ["error", "tab"],
    "react/jsx-indent-props": ["error", "tab"],
    "react/prefer-stateless-function": ["off"],
    "react/prop-types": ["off"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
};