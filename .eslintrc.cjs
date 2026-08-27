/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Ignore props spreading while using react-hook-form
    "react/jsx-props-no-spreading": "off",
    // Automatic JSX transform — no need to import React in every file
    'react/react-in-jsx-scope': 'off',
    // Project style: named exports are allowed without a default export
    'import/prefer-default-export': 'off',
    // Enforce function declarations for components (per AGENTS.md)
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Prettier violations as warnings (not errors) to keep DX smooth
    'prettier/prettier': 'warn',
    // Vite uses bundler module resolution — file extensions are optional
    'import/extensions': 'off',
    // Axios interceptors must mutate the config object; allow `config.headers`
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['config'] }],
    "react/require-default-props": [
    "error",
    {
      "functions": "defaultArguments"
    }
  ]
  },
}