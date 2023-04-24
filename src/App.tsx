import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetailPage from "./component/CardDetailPage/CardDetailPage";
import CardListPage from "./component/CardListPage/CardListPage";

type CreditCard = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [string, string];
};

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
        element: <CardDetailPage addCreditCard={addCreditCard} />,
      },
    ],
    { basename: process.env.PUBLIC_URL }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
