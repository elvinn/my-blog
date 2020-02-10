module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@consts', './src/consts'],
          ['@controllers', './src/controllers'],
          ['@models', './src/models'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.ts', '.js', '.json']
      }
    }
  },
  rules: {
    indent: ["error", 2],
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
};
