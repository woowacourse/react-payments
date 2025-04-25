import styled from '@emotion/styled';
import { VIEWPORT } from './constants/viewport';
import RegisterCardPage from './routes/RegisterCardPage';
import CompletePage from './routes/CompletePage';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './constants/setting';

function App() {
  return (
    <S.AppContainer>
      <Routes>
        <Route path={ROUTER_PATH.MAIN} element={<RegisterCardPage />} />
        <Route path={ROUTER_PATH.COMPLETE} element={<CompletePage />} />
      </Routes>
    </S.AppContainer>
  );
}

export default App;

const S = {
  AppContainer: styled.div`
    width: ${VIEWPORT.MOBILE}px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #acacac;
    padding: 20px;
  `,
};
