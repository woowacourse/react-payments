import GlobalStyle from "../src/globalStyles";
import "./storybook-style.css";
import { BrowserRouter } from "react-router-dom";
import { CardInfoProvider } from "../src/contexts/CardInfoContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <CardInfoProvider>
          <GlobalStyle />
          <div
            style={{
              width: "375px",
              minHeight: "700px",
              margin: "50px auto",
              padding: "20px 28px",
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          >
            <Story />
          </div>
        </CardInfoProvider>
      </BrowserRouter>
    </>
  ),
];
