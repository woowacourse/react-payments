import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import { useState } from "react";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import CardNickInputPage from "./component/CardNickInputPage/CardNickInputPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CreditCard } from "./type";

function App() {
  const [cardList, setCardList] = useState<CreditCard[]>([]);

  const addNewCard = (card: CreditCard) => {
    setCardList([...cardList, card]);
  };

  const setNickNewCard = (card: CreditCard) => {
    setCardList([...cardList.slice(0, cardList.length - 1), card]);
  };

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path="/CardListPage"
            element={<CardListPage cardList={cardList} />}
          />
          <Route
            path="/CardInputPage"
            element={<CardInputPage addNewCard={addNewCard} />}
          />
          <Route
            path="/CardNickInputPage"
            element={
              <CardNickInputPage
                card={cardList[cardList.length - 1]}
                setNickNewCard={setNickNewCard}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
