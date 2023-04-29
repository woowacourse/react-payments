import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";
import CardAliasRegistrationPage from "./pages/CardAliasRegistrationPage/CardAliasRegistrationPage";
import ROUTE_PATH from "./constants/routePath";

import { Card } from "./types";

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
          <Route index path={ROUTE_PATH.root} element={<CardListPage cards={cards} />} />
          <Route path={ROUTE_PATH.addCard} element={<AddCardPage />} />
          <Route path={ROUTE_PATH.cardAlias} element={<CardAliasRegistrationPage onSubmit={addCard} />} />
        </Routes>
      </Layout>
    </>
  );
}

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #eeeeee;
`;

export default App;
