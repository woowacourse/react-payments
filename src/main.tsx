import React from "react";
import ReactDOM from "react-dom/client";
import Payments from "./pages/Payments/Payments";
import { CardProvider } from "./contexts/CardContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success/Success";

const basename = import.meta.env.DEV ? "/" : "/react-payments";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={basename}>
        <CardProvider>
          <Routes>
            <Route path="/" element={<Payments />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
