import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreditCard } from "types/card";
import { CardProvier } from "contexts/CardContext";
import AddCardPage from "components/AddCardPage/AddCardPage";
import CardListPage from "components/CardListPage/CardListPage";
import AddCardResultPage from "components/AddCardResultPage/AddCardResultPage";
import LoadingPage from "components/LoadingPage/LoadingPage";

function App() {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);

  const addCreditCard = (card: CreditCard) => {
    setCreditCardList([...creditCardList, card]);
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        children: [
          {
            path: "",
            element: <CardListPage creditCardList={creditCardList} />,
          },
          {
            path: "addCard",
            children: [
              {
                path: "",
                element: <AddCardPage />,
              },
              {
                path: "result",
                element: <AddCardResultPage addCreditCard={addCreditCard} />,
              },
              {
                path: "loading",
                element: <LoadingPage />,
              },
            ],
          },
        ],
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
