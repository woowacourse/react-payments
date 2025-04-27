import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { CardRegisterSuccessPage } from './pages/CardRegisterSuccessPage/CardRegisterSuccessPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-payments" element={<HomePage />} />
        <Route
          path="/react-payments/complete"
          element={<CardRegisterSuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
