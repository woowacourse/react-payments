import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "@/style/theme";
import GlobalStyles from "@/style/global";
import CardRegister from "@/pages/CardRegister";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardRegister />
    </ThemeProvider>
  );
}

export default App;
