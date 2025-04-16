import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      parser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "max-depth": ["error", 2],
      "max-params": ["error", 3],
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      quotes: ["error", "double"],
    },
  },
];
