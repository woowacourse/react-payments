import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardRegisterPage from './pages/CardRegisterPage';
import CardRegisterCompletePage from './pages/CardRegisterCompletePage';
import ROUTE_PATH from './pages/constants/routePath';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.cardRegister} element={<CardRegisterPage />} />
        <Route path={ROUTE_PATH.cardRegisterComplete} element={<CardRegisterCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
