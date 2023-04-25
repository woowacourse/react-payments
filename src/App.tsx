import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Card } from "./types";
import { PAGE } from "./constant";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: Card) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index path={PAGE.CARD_LIST} element={<CardListPage cards={cards} />} />
          <Route path={PAGE.ADD_CARD} element={<AddCardPage addCard={addCard} />} />
        </Routes>
      </Layout>
    </>
  );
}

export const Layout = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #eeeeee;

  @media screen and (max-width: 400px) {
    height: 700px;
  }
`;

export default App;
