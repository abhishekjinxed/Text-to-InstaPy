module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'next',
    'next/core-web-vitals'
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'no-var': 'error',
    semi: [
      'error',
      'never'
    ],
    'multiline-ternary': [
      'error',
      'always-multiline'
    ]
  }
}
