module.exports = {
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'plugin:import/errors',
  ],
  plugins: ['import', 'react-native'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        paths: ['.'],
      },
    },
    'import/ignore': [
      'node_modules/react-native/index\\.js$',
      'node_modules/react-native-gesture-handler/index\\.js$',
      'node_modules/react-native-appsflyer/index\\.js$',
      'node_modules/react-native-swiper/index\\.js$',
      'node_modules/react-native-android-open-settings/index\\.js$',
      '@react-native-firebase/dynamic-links',
    ],
  },
  rules: {
    'sort-imports': 0,
    'import/order': [
      2,
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
        ],
      },
    ],
    // TOFIX
    '@typescript-eslint/no-unused-vars': ['error'],
    curly: 2,
    'react-hooks/exhaustive-deps': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'global-require': 0,
    'spaced-comment': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: ['block-like'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'any', prev: ['case', 'default'], next: 'block-like' },
      { blankLine: 'any', prev: 'block-like', next: ['case', 'default'] },
    ],
    'no-param-reassign': ['error', { props: false }],
    'eol-last': ['error', 'always'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0, // for now
    'react-native/no-color-literals': 0, // for now
    'react-native/no-raw-text': 0, // for now
    'react-native/no-single-element-style-arrays': 2,
    '@typescript-eslint/no-var-requires': 'off', // both node & react-native have require
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  globals: {
    jest: false,
    SyntheticEvent: false,
  },
  env: {
    'react-native/react-native': true,
  },
  ignorePatterns: ['node_modules/', 'ios/', 'android/', 'web-build/', 'apollo'],
};
