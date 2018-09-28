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
    // 不使用"
    quotes: ['warn', 'single'],
    'no-console': ['error', {
      'allow': ['warn', 'error', 'debug']
    }],
    // 結尾;
    semi: ['error'],
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreMemberSort': true,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    // 必須使用 ===
    eqeqeq: 2,
    // switch必須有default
    'default-case': 2,
    // 使用駝峰命名
    camelcase: 2,
    // 禁止使用var
    'no-var': 2,
    // 空行最多不能超過2行
    'no-multiple-empty-lines': [1, {
      'max': 1
    }],
    // 不能用多餘的空格
    'no-multi-spaces': 1,
    // 不使用debugger
    'no-debugger': 1,
    // key不能重複 ex. {a:1,a:1}
    'no-dupe-keys': 2,
    // args不能重複
    'no-dupe-args': 2,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
