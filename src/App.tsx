import { GlobalStyle } from "./style/resetStyle";
import { useCards } from "./hook/useCards";
import { Routers } from "./page/Routers";

const App = () => {
  const { cards, addNewCard, setAlias } = useCards();

  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
};

export default App;
