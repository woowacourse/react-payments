import { ThemeProvider } from "styled-components";
import "./App.css";

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
        {/* <CardForm /> */}
        {/* <div style={{ width: "600px" }}> */}
        <InputField label="카드번호" errorMessage="에러">
          <Input placeholder="1234" isError={false} />
          <Input placeholder="1234" isError={false} />
          <Input placeholder="1234" isError={false} />
          <Input placeholder="1234" isError={false} />
        </InputField>
        {/* </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
