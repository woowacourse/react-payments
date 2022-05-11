import { BrowserRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import CardListProvider from "context/CardListProvider";
import theme from "../src/theme";

addDecorator(withThemesProvider([theme]), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <CardListProvider>
        <Story />
      </CardListProvider>
    </BrowserRouter>
  ),
];
