import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

import { CardRegisterPage } from './pages/CardRegisterPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Style.App>
        <BrowserRouter>
          <Routes>
            <Route path="/react-payments/" element={<div>카드 목록</div>} />
            <Route
              path="/react-payments/register"
              element={<CardRegisterPage />}
            />
            <Route
              path="/react-payments/modify/:cardId"
              element={<div>카드 수정</div>}
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
  `,
};
