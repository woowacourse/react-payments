import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Card } from "./types";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index path="/" element={<CardListPage cards={cards} />} />
          <Route path="/addCard" element={<AddCardPage />} />
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

  background-color: #eeeeee;
`;

export default App;
