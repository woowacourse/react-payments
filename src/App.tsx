import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardDetailPage from "./component/CardDetailPage/CardDetailPage";
import CardListPage from "./component/CardListPage/CardListPage";
import CardNamePage from "./component/CardNamePage/CardNamePage";
import CardLoadingPage from "./component/CardLoadingPage/CardLoadingPage";

import { Card, CreditCard } from "./types/card";
import { NAVIGATE } from "./abstract/constants";

function App() {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);
  const [lastCard, setLastCard] = useState<Card>({
    cardNumberOrigin: "",
    cardNumberHidden: "",
    cardDate: "",
    cardOwnerName: "",
    cardCVC: "",
    cardPassword: ["", ""],
    cardCompany: "없음",
  });
  const addCreditCard = (card: CreditCard) => {
    setCreditCardList([...creditCardList, card]);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path={NAVIGATE.HOME}
            element={<CardListPage creditCardList={creditCardList} />}
          />
          <Route
            path={NAVIGATE.ADD_CARD_FORM}
            element={<CardDetailPage setLastCard={setLastCard} />}
          />
          <Route
            path={NAVIGATE.ADD_CARD_NAME}
            element={
              <CardNamePage addCreditCard={addCreditCard} lastCard={lastCard} />
            }
          />
          <Route
            path={NAVIGATE.ADD_CARD_LOADING}
            element={<CardLoadingPage lastCard={lastCard} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
