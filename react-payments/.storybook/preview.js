import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import FormDataProvider from "../src/provider/FormDataProvider";
import { BrowserRouter } from "react-router-dom";

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
      <ThemeProvider theme={theme}>
        <FormDataProvider>
          <Story />
        </FormDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  ),
];
