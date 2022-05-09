import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage/ErrorPage.pages";

import App from "App";

import CardDataProvider from "provider/CardDataProvider";
import theme from "styles/theme";
import "./index.css";
import ErrorProvider from "provider/ErrorContext";
import ErrorBoundary from "component/common/Errorboundary/Errorboundary";
import FormDataProvider from "provider/FormDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="react-payments">
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <FormDataProvider>
          <CardDataProvider>
            <ErrorProvider>
              <App />
            </ErrorProvider>
          </CardDataProvider>
        </FormDataProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>
);
