module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'no-warning-comments': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_$',
        varsIgnorePattern: '^_$',
        caughtErrorsIgnorePattern: '^_$'
      }
    ]
  }
}
