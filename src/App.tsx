import React from "react";
import { InputBox } from "./components";

import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="App">
        <InputBox></InputBox>
      </div>
    </>
  );
}

export default App;
