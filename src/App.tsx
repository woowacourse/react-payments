import { ThemeProvider } from "styled-components";
import { theme } from "./style/global";
import { GlobalStyle } from "./style/resetStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
