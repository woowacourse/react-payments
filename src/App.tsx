import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";

import { Route, Routes } from "react-router-dom";
import { PAGE } from "./constant";
import { AddCardStateContextProvider } from "./context/AddCardStateProvider";
import NameCardPage from "./pages/NameCardPage/NameCardPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index path={PAGE.CARD_LIST} element={<CardListPage />} />
          <Route
            path={PAGE.ADD_CARD}
            element={
              <AddCardStateContextProvider>
                <AddCardPage />
              </AddCardStateContextProvider>
            }
          />
          <Route path={PAGE.NAME_CARD} element={<NameCardPage />} />
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
