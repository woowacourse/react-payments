import GlobalStyle from "../src/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
  options: {
    storySort: {
      order: [
        "App",
        "Pages",
        ["Default", "Complete", "Error"],
        "UI Components",
        ["Input", "InputField", "Button", "CardPreview"],
      ],
    },
  },
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
