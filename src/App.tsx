import { ThemeProvider } from "styled-components";
import "./App.css";
import CardForm from "./components/CardForm/CardForm";
import GlobalStyles from "./style/common";
import { theme } from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>React Payments</h1>
        <CardForm />
      </ThemeProvider>
    </>
  );
}

export default App;
