import { ThemeProvider } from "styled-components";
import "./App.css";
import CardForm from "./components/CardForm/CardForm";
import { theme } from "./style/theme";
import InputField from "./components/InputField/InputField";
import Input from "./components/Input/Input";
import GlobalStyles from "./style/global";

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
