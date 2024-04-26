import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegisterPage from './pages/CardRegisterPage';
import CardRegisterComplete from './pages/CardRegisterCompletePage/CardRegisterCompletePage';

import ENDPOINTS from './constants/endpoints';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ENDPOINTS.cardRegister} element={<CardRegisterPage />}></Route>
        <Route path={ENDPOINTS.cardRegisterComplete} element={<CardRegisterComplete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
