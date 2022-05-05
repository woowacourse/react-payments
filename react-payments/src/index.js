import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import FormDateProvider from "./provider/FormDateProvider";
import theme from "./styles/theme";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormDateProvider>
        <App />
      </FormDateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
