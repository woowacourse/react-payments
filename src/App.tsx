import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CardListPage from "./components/pages/CardListPage";
import CardRegistrationPage from "./components/pages/CardRegistrationPage";
import { CardPublicInfo } from "./types/Card";
import CardItemProvider from "./components/provider/CardItemProvider";

function App() {
  const [cardList, setCardList] = useState<CardPublicInfo[]>([]);

  const addCardItem = (cardItem: CardPublicInfo) => {
    const updatedCardList = [...cardList, cardItem];
    setCardList(updatedCardList);
  };

  return (
    <AppContainer className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardListPage cardList={cardList} />} />
          <Route
            path="/register"
            element={
              <CardItemProvider>
                <CardRegistrationPage addCardItem={addCardItem} />
              </CardItemProvider>
            }
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
