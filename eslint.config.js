// eslint.config.js
import { defineConfig } from 'eslint';

export default defineConfig({
  extends: [
    'eslint:recommended',  // Default ESLint recommended rules
    'plugin:prettier/recommended',  // Optional, for Prettier integration
  ],
  parserOptions: {
    ecmaVersion: 2020,  // Adjust based on your JavaScript version
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Your custom rules here
  },
});
