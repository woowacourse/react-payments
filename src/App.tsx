import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardRegisterSuccessPage } from './pages/CardRegisterSuccessPage/CardRegisterSuccessPage';
import CardRegisterPage from './pages/HomePage/CardRegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-payments" element={<CardRegisterPage />} />
        <Route
          path="/react-payments/complete"
          element={<CardRegisterSuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
