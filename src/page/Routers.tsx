import { Home } from "./Home";
import { AddCard } from "./AddCard";
import { SetAlias } from "./SetAlias";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CardsContext } from "../contexts/CardsContext";
import { useCards } from "../hook/useCards";

export const Routers = () => {
  const { cards, addNewCard, setAlias } = useCards();

  return (
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
  );
};
