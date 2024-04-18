module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    // "import/order": [
    //   "error",
    //   {
    //     "newlines-between": "always",
    //     groups: [
    //       ["builtin", "external"],
    //       "internal",
    //       "parent",
    //       "sibling",
    //       "index",
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: "next",
    //         group: "builtin",
    //       },
    //       {
    //         pattern: "react",
    //         group: "builtin",
    //       },
    //       {
    //         pattern: "@MyDesignSystem/**",
    //         group: "internal",
    //       },
    //       {
    //         pattern: "src/**",
    //         group: "internal",
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ["src/**", "@MyDesignSystem/**"],
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
  },
};
