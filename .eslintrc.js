module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {},
    'ignores': ["src/js/__test__/*"],
  }