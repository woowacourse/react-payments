import styled from '@emotion/styled';
import { VIEWPORT } from './constants/viewport';
import RegisterCardPage from './routes/RegisterCardPage';
import CompletePage from './routes/CompletePage';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './constants/setting';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path={ROUTER_PATH.MAIN} element={<RegisterCardPage />} />
        <Route path={ROUTER_PATH.COMPLETE} element={<CompletePage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: ${VIEWPORT.MOBILE}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
