import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint, { plugin } from 'typescript-eslint';
import { rules } from '@angular-eslint/eslint-plugin';

export default [
  { files: ['**/*.ts}'] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
