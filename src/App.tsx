import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CardListPage from "./components/pages/CardListPage";
import CardRegistrationPage from "./components/pages/CardRegistrationPage";
import { CardPublicInfo } from "./types/Card";
import CardItemProvider from "./components/provider/CardItemProvider";
import ModalProvider from "./components/provider/ModalProvider";
import CardCompletePage from "./components/pages/CardCompletePage";

function App() {
  const [cardList, setCardList] = useState<CardPublicInfo[]>([]);

  const addCardItem = (cardItem: CardPublicInfo) => {
    const updatedCardList = [...cardList, cardItem];
    setCardList(updatedCardList);
  };

  const getCardItem = (id: number) => {
    return cardList.find((card) => card.id === id);
  };

  const setCardNickName = (id: number, nickName: string) => {
    setCardList((prevCardList) =>
      prevCardList.map((card) => {
        if (card.id === id) card.nickName = nickName;
        return card;
      })
    );
  };

  return (
    <AppContainer className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path="/register"
            element={
              <ModalProvider>
                <CardItemProvider>
                  <CardRegistrationPage addCardItem={addCardItem} />
                </CardItemProvider>
              </ModalProvider>
            }
          />
          <Route
            path="/complete/:id"
            element={<CardCompletePage getCardItem={getCardItem} setCardNickName={setCardNickName} />}
          />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

export default App;
