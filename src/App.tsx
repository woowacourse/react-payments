import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "@/style/theme";
import GlobalStyles from "@/style/global";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
