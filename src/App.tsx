import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/global";
import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";

const App = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isHome ? <Home /> : <AddCard />}
    </ThemeProvider>
  );
};

export default App;
