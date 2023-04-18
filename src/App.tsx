import { ThemeProvider } from "styled-components";
import { theme } from "./style/global";
import { Home } from "./page/Home";
import AddCard from "./page/AddCard";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      {isHome ? <Home /> : <AddCard />}
    </ThemeProvider>
  );
}

export default App;
