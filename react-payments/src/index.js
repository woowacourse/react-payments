import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import FormDataProvider from "./provider/FormDataProvider";
import theme from "./styles/theme";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
