import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Card } from "./types";
import CardListPage from "./pages/CardListPage";
import CardAddPage from "./pages/CardAddPage";
import { getLocalStorage, saveToLocalStorage } from "./utils/localStorage";

function App() {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CardListPage cardList={cardList} />} />
        <Route
          path="/add-card"
          element={<CardAddPage addCard={setCardList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
