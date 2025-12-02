import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import yooAngularPlugin from "@yoo-digital/eslint-plugin-angular";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
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