module.exports = {
  root: true,
  env: { browser: true, es2024: true },
  plugins: ['react-refresh'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
        allowExportNames: ['meta', 'links', 'headers', 'loader', 'action'],
      },
    ],
  },
}
