import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import yooAngularPlugin from "@yoo-digital/eslint-plugin-angular";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("@yoo-digital/eslint-config-base").map(config => ({
    ...config,
    files: ["**/*.ts"],
  })),
  ...compat.extends("@yoo-digital/eslint-config-angular").map(config => ({
    ...config,
    files: config.files || ["**/*.ts"],
  })),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    plugins: {
      "@angular-eslint": angularEslintPlugin,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@angular-eslint/component-class-suffix": "error",
      "@typescript-eslint/no-unused-vars": "warn"
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      "@angular-eslint/template": angularEslintTemplatePlugin,
      "@yoo-digital/angular": yooAngularPlugin,
    },
    rules: {
      "@angular-eslint/template/no-negated-async": "error",
      "@yoo-digital/angular/prefer-boolean-attribute-shorthand": "error"
    },
  },
];