/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-declaration-strict-value'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],

  rules: {
    'no-empty-source': null,
    'scale-unlimited/declaration-strict-value': [
      ['/color/', '/margin/', '/padding/', 'gap', 'font-size', 'font-weight', 'border-radius'],
      {
        ignoreValues: ['auto', '0', '100%', '1px', '-1px'],
        disableFix: true,
        message: '전역 CSS 변수로 정의된 디자인 토큰을 사용해주세요.',
      },
    ],
  },
};
