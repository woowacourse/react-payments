import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";
import CardAliasRegistrationPage from "./pages/CardAliasRegistrationPage/CardAliasRegistrationPage";
import NotFound from "./components/NotFound/NotFound";
import store from "./utils/storage";
import ROUTE_PATH from "./constants/routePath";
import { CARDS_KEY } from "./constants/storageKey";
import type { Card } from "./types";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: Card) => {
    const updatedCards = [...cards, card];

    store.setStorage(CARDS_KEY, updatedCards);
    setCards(updatedCards);
  };

  useEffect(() => {
    const data = store.getStorage<Card[]>(CARDS_KEY) ?? [];

    setCards(data);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index path={ROUTE_PATH.root} element={<CardListPage cards={cards} />} />
          <Route path={ROUTE_PATH.addCard} element={<AddCardPage />} />
          <Route path={ROUTE_PATH.cardAlias} element={<CardAliasRegistrationPage onSubmit={addCard} />} />
          <Route path={ROUTE_PATH.other} element={<NotFound />} />
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
