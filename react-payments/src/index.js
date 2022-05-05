import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import FormDataProvider from "./provider/FormDataProvider";
import theme from "./styles/theme";
import "./index.css";
import App from "./App";
import CardDataProvider from "./provider/CardDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FormDataProvider>
          <CardDataProvider>
            <App />
          </CardDataProvider>
        </FormDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
