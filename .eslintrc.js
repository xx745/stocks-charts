module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-eval': 'error',
    'no-multi-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-dupe-keys': 'error',
    'no-irregular-whitespace': 'error',
    'camelcase': 'warn',
    'max-len': ['error', { code: 140, tabWidth: 2 }],
    'no-tabs': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'prefer-const': 'error',
    'no-return-assign': 'off',
    'space-before-function-paren': ['error', { 'asyncArrow': 'always', 'named': 'never' }],
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': 'off'
  }
};
