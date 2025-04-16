import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      parser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    // parser: "babel-parser",
    rules: {
      "max-depth": ["error", 2],
      "max-params": ["error", 3],
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
    },
  },
];
