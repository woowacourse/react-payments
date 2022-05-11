import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import PATH, { BASE_URL } from './constants/path';
import GlobalStyle from './GlobalStyle';

import { CardInfoModifyPage } from './pages/CardInfoModifyPage';
import { CardListPage } from './pages/CardListPage';
import { CardRegisterPage } from './pages/CardRegisterPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Style.App>
        <BrowserRouter>
          <Routes>
            <Route path={`${BASE_URL}`} element={<CardListPage />} />
            <Route path={`${PATH.REGISTER}`} element={<CardRegisterPage />} />
            <Route
              path={`${PATH.MODIFY}/:cardId`}
              element={<CardInfoModifyPage />}
            />
          </Routes>
        </BrowserRouter>
      </Style.App>
    </>
  );
}

export default App;

const Style = {
  App: styled.div`
    width: 100%;
    max-width: 450px;
    height: 100%;
    padding: 0 24px;
    text-align: center;
    overflow: hidden;
  `,
};
