import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCardPage from "./component/AddCardPage/AddCardPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { CreditCard } from "./types/card";
import { CardProvier } from "./contexts/CardContext";

function App() {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);

  const addCreditCard = (card: CreditCard) => {
    setCreditCardList([...creditCardList, card]);
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <CardListPage creditCardList={creditCardList} />,
      },
      {
        path: "addCardForm",
        element: <AddCardPage addCreditCard={addCreditCard} />,
      },
    ],
    { basename: process.env.PUBLIC_URL }
  );

  return (
    <CardProvier>
      <RouterProvider router={router} />
    </CardProvier>
  );
}

export default App;
