import globals from 'globals';
import pluginJs from '@eslint/js';

export default {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: ['@eslint/js'],
  extends: [pluginJs.configs.recommended],
};
