import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegisterPage from './pages/cardRegisterPage/CardRegisterPage';
import CardRegisterCompletedPage from './pages/cardRegisterCompletedPage/CardRegisterCompletedPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-payments/" element={<CardRegisterPage />} />
        <Route path="/react-payments/register" element={<CardRegisterCompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
