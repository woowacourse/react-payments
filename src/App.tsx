import styled from '@emotion/styled';
import { Route, Routes } from 'react-router';
import { ROUTES } from './constants';
import CardRegistrationPage from './pages/CardRegistrationPage';
import CardListPage from './pages/CardListPage';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<CardRegistrationPage />} />
        <Route path={ROUTES.CARDS} element={<CardListPage />} />
      </Routes>
    </RootLayout>
  );
}

const RootLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export default App;
