module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // ESLint 기본 룰 커스터마이징
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    // 코드 복잡도 제어
    "max-depth": ["error", 1], // 중첩 제한 (if/else 등)
    "max-params": ["error", 2], // 함수 매개변수 최대 2개
    "max-lines-per-function": ["error", { max: 15 }], // 함수당 최대 15줄
  },
};
