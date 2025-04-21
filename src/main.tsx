import React from "react";
import ReactDOM from "react-dom/client";
import Payments from "./components/Payments/Payments";
import { CardProvider } from "./contexts/CardContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CardProvider>
        <Payments />
      </CardProvider>
    </ThemeProvider>
  </React.StrictMode>
);
