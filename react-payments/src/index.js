import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import App from "App";

import FormDataProvider from "./provider/FormDataProvider";
import CardDataProvider from "provider/CardDataProvider";
import theme from "styles/theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <FormDataProvider>
        <CardDataProvider>
          <App />
        </CardDataProvider>
      </FormDataProvider>
    </ThemeProvider>
  </BrowserRouter>
);
