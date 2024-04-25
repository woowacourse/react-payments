import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardRegisterPage from './pages/CardRegisterPage';
import CardRegisterCompletePage from './pages/CardRegisterCompletePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card-register" element={<CardRegisterPage />} />
        <Route path="/card-register-complete" element={<CardRegisterCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
