// http://eslint.org/docs/user-guide/configuring
// Severity should be one of the following: 0 = off, 1 = warn, 2 = error

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    quotes: ['warn', 'single'],
    'no-console': ['error', {
      'allow': ['warn', 'error', 'debug']
    }],
    semi: ['error'],
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreMemberSort': true,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
