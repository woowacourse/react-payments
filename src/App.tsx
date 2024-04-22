import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "@/style/theme";
import GlobalStyles from "@/style/global";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CardRegisterPage />
      </ThemeProvider>
    </>
  );
}

export default App;
