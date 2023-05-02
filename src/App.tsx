import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import { useEffect, useState } from "react";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { CreditCard, getDefaultCreditCard } from "./type/CreditCard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import useStateObject from "./hook/useStateObject";
import InputSuccessPage from "./component/InputSuccessPage/InputSuccessPage";

function App() {
  const [cardList, setCardList] = useState<CreditCard[]>([]);
  const { state: newCard, setPartialState: setNewCardInfo } = (
    useStateObject<CreditCard>(getDefaultCreditCard())
  );

  useEffect(() => {
    if (!newCard.nickname) return;
    setCardList([...cardList, newCard]);
  }, [newCard]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path="/register"
            element={<CardInputPage addNewCard={setNewCardInfo} />}
          />
          <Route
            path="/register/success"
            element={<InputSuccessPage card={newCard} setCardInfo={setNewCardInfo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
