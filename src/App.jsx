import CardAddPage from "./pages/CardAddPage";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardAddPage />
    </ThemeProvider>
  );
}

export default App;
