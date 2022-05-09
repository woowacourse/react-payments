import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import FormDataProvider from "../src/provider/FormDataProvider";
import { BrowserRouter } from "react-router-dom";
import CardDataProvider from "../src/provider/CardDataProvider";
import ErrorProvider from "provider/ErrorContext.jsx";

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
          <CardDataProvider>
            <ErrorProvider>
              <Story />
              <div id="modal"></div>
            </ErrorProvider>
          </CardDataProvider>
        </FormDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  ),
];
