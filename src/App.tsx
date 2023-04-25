import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailPage from "./component/CardDetailPage/CardDetailPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { CreditCard } from "./types/card";

function App() {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);

  const addCreditCard = (card: CreditCard) => {
    setCreditCardList([...creditCardList, card]);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={<CardListPage creditCardList={creditCardList} />}
          />
          <Route
            path="/addCardForm"
            element={<CardDetailPage addCreditCard={addCreditCard} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
