import { ThemeProvider, createGlobalStyle } from "styled-components";
import CardAddPage from "./pages/CardAddPage";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardAddPage />
    </ThemeProvider>
  );
}

export default App;
