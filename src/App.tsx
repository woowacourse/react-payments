import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import useCards from "./hook/useCards";
import { CardContext } from "./contexts/CardContext";

const App = () => {
  const { cards, addNewCard } = useCards();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <CardContext.Provider value={{ cards, addNewCard }}>
                <Home />
              </CardContext.Provider>
            }
          />
          <Route
            path="/addCard"
            element={
              <CardContext.Provider value={{ cards, addNewCard }}>
                {" "}
                <AddCard />
              </CardContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
