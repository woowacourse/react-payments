import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { SetAlias } from "./page/SetAlias";

import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useCards } from "./hook/useCards";
import { CardsContext } from "./contexts/CardsContext";

const App = () => {
  const { cards, addNewCard, setAlias } = useCards();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <CardsContext.Provider value={{ cards, addNewCard }}>
                <Home />
              </CardsContext.Provider>
            }
          />
          <Route
            path="/addCard"
            element={
              <CardsContext.Provider value={{ cards, addNewCard }}>
                {" "}
                <AddCard />
              </CardsContext.Provider>
            }
          />
          <Route path="/setAlias" element={<SetAlias setAlias={setAlias} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
