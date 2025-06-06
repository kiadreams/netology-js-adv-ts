import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['*.config.*', 'dist/', 'node_modules/', 'coverage/', '.pnp.*']
  },

  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn"
    }
  },
);
