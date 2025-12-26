import angularEslint from '@angular-eslint/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigAngular from '@yoo-digital/eslint-config-angular';
import eslintConfigBase from '@yoo-digital/eslint-config-base';
import yooAngularPlugin from '@yoo-digital/eslint-plugin-angular';
import rxjs from 'eslint-plugin-rxjs-angular-updated';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  ...eslintConfigBase,
  ...eslintConfigAngular,
  globalIgnores(['node_modules/*', '**/node_modules']),
  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
      'import/core-modules': [],
    },
  },
  {
    files: ['**/*.ts'],
    extends: compat.extends(
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
    ),
    plugins: {
      '@angular-eslint': angularEslint,
      rxjs,
    },
    rules: {
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      'no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'max-classes-per-file': 'warn',
      'rxjs/prefer-takeuntil': [
        'warn',
        {
          aliases: ['untilDestroyed', 'takeUntilDestroyed'],
        },
      ],
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/prefer-standalone-component': 'off',
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'no-param-reassign': [
        'warn',
        {
          props: false,
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: compat.extends(),
    plugins: {
      '@yoo-digital/angular': yooAngularPlugin,
    },
    rules: {
      '@angular-eslint/template/eqeqeq': 'off',
      '@angular-eslint/template/prefer-control-flow': 'warn',
      '@angular-eslint/template/use-track-by-function': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          order: [
            'STRUCTURAL_DIRECTIVE',
            'TEMPLATE_REFERENCE',
            'ATTRIBUTE_BINDING',
            'INPUT_BINDING',
            'TWO_WAY_BINDING',
            'OUTPUT_BINDING',
          ],
        },
      ],
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@yoo-digital/angular/prefer-boolean-attribute-shorthand': 'error',
    },
  },
]);
