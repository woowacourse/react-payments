import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetailPage from "./component/CardDetailPage/CardDetailPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { Card, CreditCard } from "./types/card";
import CardNamePage from "./component/CardNamePage/CardNamePage";

function App() {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);
  const [lastCard, setLastCard] = useState<Card>({
    cardNumberOrigin: "",
    cardNumberHidden: "",
    cardDate: "",
    cardOwnerName: "",
    cardCVC: "",
    cardPassword: ["", ""],
    cardCompany: "BC카드",
  });
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
            element={<CardDetailPage setLastCard={setLastCard} />}
          />
          <Route
            path="/addCardName"
            element={
              <CardNamePage addCreditCard={addCreditCard} lastCard={lastCard} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
