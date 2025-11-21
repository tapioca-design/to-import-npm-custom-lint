import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import angularPlugin from "@tapiocadesign/eslint-plugin-angular";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

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
      // Do NOT include @tapiocadesign/angular here
    },
    rules: {
      "@angular-eslint/component-class-suffix": "error",
      "@typescript-eslint/no-unused-vars": "warn"
      // Do NOT include @tapiocadesign/angular/prefer-boolean-attribute-shorthand here
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      "@angular-eslint/template": angularEslintTemplatePlugin,
      "@tapiocadesign/angular": angularPlugin,
    },
    rules: {
      "@angular-eslint/template/no-negated-async": "error",
      "@tapiocadesign/angular/prefer-boolean-attribute-shorthand": "warn"
    },
  },
];