import { ThemeProvider } from "styled-components";
import EmptyCard from "./components/common/EmptyCard";
import { theme } from "./style/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EmptyCard />
    </ThemeProvider>
  );
}

export default App;
