import React from "react";
import ReactDOM from "react-dom/client";
import Payments from "./pages/Payments/Payments";
import { CardProvider } from "./contexts/CardContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Success from "./pages/Success/Success";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CardProvider>
        <Payments />
        <Success />
      </CardProvider>
    </ThemeProvider>
  </React.StrictMode>
);
