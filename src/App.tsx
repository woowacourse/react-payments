import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import { useState } from "react";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import CreditCard from "./type/CreditCard";

import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  const [cardList, setCardList] = useState<CreditCard[]>([]);

  const addNewCard = (card: CreditCard) => {
    setCardList([...cardList, card]);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
