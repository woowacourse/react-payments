import { CardRegisterCompletePage, CardRegisterPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardRegisterPage />} />
        <Route path="/card-register-complete" element={<CardRegisterCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
