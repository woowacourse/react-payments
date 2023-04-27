import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import CardRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { CardInfoProvider } from "./context/CardInfoContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        <CardInfoProvider>
          <CardRoutes />
        </CardInfoProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
