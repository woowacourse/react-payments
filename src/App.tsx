import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "@/style/theme";
import GlobalStyles from "@/style/global";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
